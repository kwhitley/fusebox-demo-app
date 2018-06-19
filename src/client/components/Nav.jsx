import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

// pages
import { ConnectedGroupsList } from './pages/Groups'
import { ConnectedPackage } from './pages/Package'
import Tags from './pages/Tags'

export const routes = [
  { path: '/list', name: 'Groups', component: ConnectedGroupsList },
  { path: '/package', name: 'Package', component: ConnectedPackage },
  { path: '/groups', name: 'Streaming Tags', component: Tags },
]

export const Nav = () =>
  <Menu pointing secondary className="navigation">
    {
      routes.map(route => <Menu.Item
                            key={route.path}
                            to={route.path}
                            name={route.name}
                            as={NavLink}
                          />)
    }
  </Menu>

export default Nav
