import { fromJS, List, Record } from 'immutable'
import { automap } from 'redux-automap'
import { createSelector } from 'reselect'
import { getTreeFromFlatData } from 'react-sortable-tree'

export const namespace = 'groups'

const getGroups = state => state.get('all')
const getNumGroups = state => state.get('all').size
const getHalfGroups = (groups, number) => groups.slice(0, Math.floor(number / 2))
const asTreeData = groups => getTreeFromFlatData({ flatData: groups.toJS(), rootKey: null })
const getTreeData = createSelector(getGroups, asTreeData)

const getGroupsSorted = createSelector(
  [ getGroups ],
  groups => groups.sort((A, B) => {
    const a = B.get('title')
    const b = A.get('title')

    return a < b ? -1 : (a > b ? 1 : 0)
  }).reverse()
)

const getHalfGroupsUnsorted = createSelector(
  [ getGroups, getNumGroups ], getHalfGroups
)

const getHalfGroupsSorted = createSelector(
  [ getGroupsSorted, getNumGroups ], getHalfGroups
)

export const selectors = {
  getGroups, getNumGroups, getGroupsSorted, getHalfGroupsUnsorted, getHalfGroupsSorted, getTreeData
}

const Group = new Record({
  id: undefined,
  parentId: null,
  title: 'new group',
  date: new Date(),
  isActive: false,
  expanded: false
})

// initial state for reducer
export const initialState = fromJS({
  modeEditingOrder: false,
  modeAddingGroup: false,
  all: [
    new Group({ id: 1, title: 'Asset 1' }),
    new Group({ id: 2, title: 'Asset 2' }),
    new Group({ id: 3, parentId: 2, title: 'Pump 1' }),
    new Group({ id: 4, parentId: 2, title: 'Pump 2' }),
    new Group({ id: 5, parentId: 4, title: 'Specific Tag Group' }),
    new Group({ id: 6, title: 'Asset 3' }),
    new Group({ id: 7, title: 'Asset 4' }),
  ],
})

// define all action/reducer pairs here... add "type" attributes for
export const actionReducers = [
  {
    addGroup: (title = 'new group') => ({ type: 'groups/ADD_GROUP', title }),
    reducer: (state, action) => {
      let nextID = state.get('all').maxBy(i => i.get('id')).get('id') + 1

      return state.update('all', groups => groups.push(new Group({
        id: nextID,
        title: action.title,
        date: new Date(),
      })))
    }
  },
  {
    setEditingOrder: (value) => ({ type: 'groups/SET_MODE_EDITING_ORDER', value }),
    reducer: (state, action) => state.set('modeEditingOrder', action.value)
  },
  {
    setAddingGroup: (value) => ({ type: 'groups/SET_MODE_ADDING_GROUP', value }),
    reducer: (state, action) => state.set('modeAddingGroup', action.value)
  },
  {
    toggleIsActive: id => ({ type: 'groups/TOGGLE_GROUP_IS_ACTIVE', id }),
    reducer: (state, action) => state.update('all', groups => groups.map(group => group.get('id') === action.id ? group.update('isActive', active => !active) : group))
  },
  {
    editGroup: (id, values) => ({ type: 'groups/EDIT_GROUP', id, values }),
    reducer: (state, action) => state.update('all', groups => groups.map(group => group.get('id') === action.id ? group.merge(action.values) : group))
  },
  {
    // type: constants.REMOVE_GROUP,
    removeGroup: id => ({ type: 'groups/REMOVE_GROUP', id }),
    reducer: (state, action) => state.update('all', groups => groups.filter(i => i.get('id') !== action.id))
  },
  {
    // type: constants.REMOVE_GROUP,
    toggleGroupExpanded: id => ({ type: 'groups/TOGGLE_GROUP_EXPANDED', id }),
    reducer: (state, action) => state.update('all', groups => groups.map(group => group.get('id') === action.id ? group.update('expanded', active => !active) : group))
  },
  {
    // type: constants.REMOVE_GROUP,
    reorderGroups: parentsMap => ({ type: 'groups/REORDER_GROUPS', parentsMap }),
    reducer: (state, action) => state
                                  .update('all',
                                    groups => List(action.parentsMap.map(
                                      g => groups
                                            .find(group => group.get('id') === g.id)
                                            .set('parentId', g.parentId)
                                            .set('expanded', g.expanded)
                                    ))
                                  )
  }
]

export default automap({ namespace, actionReducers, initialState, selectors })
