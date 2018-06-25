import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const SelectableGroup = ({ title, active, selectGroupAction }) =>
  <div
    className={classNames('group', 'selectable', active && 'active')}
    onClick={selectGroupAction}
  >{title}</div>

// SelectableGroup.propTypes = {
//   title: PropTypes.string.isRequired,
//   active: PropTypes.boolean.isRequired,
//   selectGroupAction: PropTypes.func.isRequired,
// }

export default SelectableGroup
