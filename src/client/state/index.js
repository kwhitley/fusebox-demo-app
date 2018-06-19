import { merge } from 'redux-automap'
import groups from './groups'
import api from './api'
import route from './route'
import dashboards from './dashboards'
import tags from './tags'

export default merge([ groups, api, route, dashboards, tags ])
