import 'semantic-ui-css/semantic.min.css'
// import 'antd/dist/antd.min.css'

import React from 'react'
import ReactDom from 'react-dom'

import { combineReducers } from 'redux-immutable'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'

import { merge } from 'redux-automap'
import App from './components/App'
import api from './state/api'
import list from './state/list'
import route from './state/route'
import './styles/base.scss'
import './styles/base.less'

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

ReactDom.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)
