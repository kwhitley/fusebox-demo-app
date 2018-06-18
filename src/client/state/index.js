import { merge } from 'redux-automap'
import list from './list'
import api from './api'
import route from './route'
import dashboards from './dashboards'
import tags from './tags'

export default merge([ list, api, route, dashboards, tags ])
