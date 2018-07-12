import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import Container from '@arundo/ads-react/Container'
import Segment from '@arundo/ads-react/Segment'
import Navigation, { routes } from './Nav'

const App = () =>
  <Segment basic>
    <Navigation />
    <Segment basic className="page-content">
      <Switch>
        {
          routes.map(route => <Route
                                key={route.path}
                                path={route.path}
                                component={route.component}
                              />
          )
        }
        <Redirect from="/" exact to={routes.length && routes[0].path} />
      </Switch>
    </Segment>
  </Segment>

export default hot(module)(App)
