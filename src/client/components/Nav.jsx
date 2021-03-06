import React from 'react'
import Menu from '@arundo/ads-react/Menu'
import Segment from '@arundo/ads-react/Segment'
import Grid from '@arundo/ads-react/Grid'
import Header from '@arundo/ads-react/Header'
import Image from '@arundo/ads-react/Image'
import { NavLink } from 'react-router-dom'

import * as logo from '../images/enlist.jpg'
import * as svg from '../images/marker.svg'

// pages
import { ConnectedList } from './pages/List'
import { ConnectedPackage } from './pages/Package'

export const routes = [
  { path: '/list', name: 'List', component: ConnectedList },
  { path: '/package', name: 'Package', component: ConnectedPackage },
]

export const Nav = () =>
  <div className="navbar">
    <Header size='huge'>
      <img src={svg} height="20" width="20" />ARUNDO
    </Header>

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
  </div>

export default Nav
