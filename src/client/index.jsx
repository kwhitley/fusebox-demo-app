// global imports
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'       // load base styles

// local imports
import App from './components/App'
import store from './store'

// local styles
import './styles/base.scss'                     // example SASS parsing
import './styles/base.less'                     // example LESS parsing

ReactDom.render(                                // bootstrap the app
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)
