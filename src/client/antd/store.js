import { combineReducers } from 'redux-immutable'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'

import { merge } from 'redux-automap'
import api from './state/api'
import list from './state/list'
import route from './state/route'

const mergedReducers = merge([ api, list, route ])
const history = createHistory()
const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers(mergedReducers)
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)

// history binding... messy, abstract elsewhere or turn into module
history.listen((location) => {
  let path = `${location.pathname}${location.search}${location.hash}`
  store.dispatch(route.actions.change(path))
})

let path = `${location.pathname}${location.search}${location.hash}`
store.dispatch(route.actions.change(path))

// register sagas
sagaMiddleware.run(api.sagas.watcherSaga)

export default store
