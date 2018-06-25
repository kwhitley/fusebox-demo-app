import { fromJS } from 'immutable'
import { automap } from 'redux-automap'
import { createSelector } from 'reselect'
import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { Tag, ApiResource, Stream } from './tags.models'
import streamingSaga from './tags.streaming'

export const namespace = 'tags'

const getTags = state => state.get('all')
const getTagById = (items, id) => items.find(item => item.get('id') === id)
const onlyActive = items => items.filter(item => item.get('isActive'))
const getActiveTags = createSelector(getTags, onlyActive)
const getEditingTagID = state => state.get('editingTag')
const asTreeData = items => getTreeFromFlatData({ flatData: items })
const getEditingTag = state => createSelector(getTags, getEditingTagID, getTagById)

const selectors = {
  getTags, getActiveTags, getEditingTag, getEditingTagID
}

// initial state for reducer
export const initialState = fromJS({
  tagsLoader: new ApiResource(),
  streamStatus: new Stream(),
  editingTag: false,
  all: [
    { id: 1, order: 1, name: 'foo', created: new Date(), updated: new Date(), isActive: true, values: [] },
    { id: 2, order: 2, name: 'bar', created: new Date(), updated: new Date(), isActive: true, values: [] },
    { id: 3, order: 3, name: 'baz', created: new Date(), updated: new Date(), isActive: true, values: [] },
    { id: 4, order: 4, name: 'cat', created: new Date(), updated: new Date(), isActive: false, values: [] },
    { id: 5, order: 5, name: 'miffles', created: new Date(), updated: new Date(), isActive: false, values: [] },
    { id: 6, order: 6, name: 'vlad', created: new Date(), updated: new Date(), isActive: true, values: [] },
    { id: 7, order: 7, name: 'baxter', created: new Date(), updated: new Date(), isActive: true, values: [] },
  ],
})

function* fetchTags() {
  try {
    const data = yield call(() => axios.get('/api/tags').then(r => fromJS(r.data)))
    yield put({ type: 'tags/LOAD_TAGS_SUCCESS', data })
  } catch (error) {
    console.log('fetchTags', error)
    yield put({ type: 'tags/LOAD_TAGS_ERROR', error: error.message })
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
function* watcherSaga() {
  yield takeLatest('tags/LOAD_TAGS', fetchTags)
}

const sagas = {
  watcherSaga,
  fetchTags,
  streamingSaga
}

// define all action/reducer pairs here... add "type" attributes for
export const actionReducers = [
  {
    connectStream: () => ({ type: 'tags/stream/CONNECT' }),
    reducer: state => state.setIn(['streamStatus', 'isConnected'], false)
  },
  {
    connectStreamSuccess: () => ({ type: 'tags/stream/CONNECT_SUCCESS' }),
    reducer: state => state.setIn(['streamStatus', 'isConnected'], true)
  },
  {
    disconnectStream: () => ({ type: 'tags/stream/DISCONNECT' }),
    reducer: (state, action) => state.setIn(['streamStatus', 'isConnected'], false)
  },
  {
    updateTagFromStream: (id, values) => ({ type: 'tags/stream/UPDATE', id, values }),
    reducer: (state, action) => state.update('all', all => all.map(tag => tag.get('id') === action.id ? tag.set('values', action.values) : tag))
  },
  {
    loadTags: () => ({ type: 'tags/LOAD_TAGS' }),
    reducer: state => state.set('tagsLoader', new ApiResource({ isLoading: true }))
  },
  {
    loadTagsSuccess: data => ({ type: 'tags/LOAD_TAGS_SUCCESS', data }),
    reducer: (state, action) => state
                                  .set('tagsLoader', new ApiResource({ success: true }))
                                  .set('all', action.data.map(item => new Tag(item)))
  },
  {
    loadTagsError: error => ({ type: 'tags/LOAD_TAGS_ERROR', error }),
    reducer: (state, action) => state.set('tagsLoader', new ApiResource({ error: action.error }))
  },
  {
    setEditingTag: id => ({ type: 'tags/SET_EDITING_TAG', id }),
    reducer: (state, action) => state.set('editingTag', action.id)
  },
  {
    unsetEditingTag: id => ({ type: 'tags/UNSET_EDITING_TAG' }),
    reducer: (state, action) => state.set('editingTag', false)
  },
  {
    editTag: (id, values) => ({ type: 'tags/EDIT_TAG', id, values }),
    reducer: (state, action) => state
                                  .set('editingTag', false)
                                  .update('all',
                                    tags => tags.map(tag =>
                                      tag.get('id') === action.id ? tag.merge(action.values) : tag
                                    )
                                  )
  }
]

export default automap({ namespace, actionReducers, initialState, selectors, sagas })