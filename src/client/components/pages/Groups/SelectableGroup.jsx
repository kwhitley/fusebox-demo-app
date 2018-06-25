import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

const SelectableGroup = ({ title, id, active, selectGroupAction }) =>
  <div
    to={`/groups/${id}`}
    className={classNames('group', 'selectable', active && 'active')}
    onClick={selectGroupAction}
  >{title}</div>

SelectableGroup.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  selectGroupAction: PropTypes.func.isRequired,
}

export default SelectableGroup
