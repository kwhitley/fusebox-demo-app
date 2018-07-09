import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

// pages
import { ConnectedList } from './pages/List'
import { ConnectedPackage } from './pages/Package'

export const routes = [
  { path: '/list', name: 'List', component: ConnectedList },
  { path: '/package', name: 'Package', component: ConnectedPackage },
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
