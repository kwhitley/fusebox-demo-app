import React from 'react'
import PropTypes from 'prop-types'
import SortableTree, { getFlatDataFromTree } from 'react-sortable-tree'
import 'react-sortable-tree/style.css'

import EditableGroup from './EditableGroup'

class GroupOrder extends React.Component {
  constructor(props) {
    super(props)

    this.orderChanged = this.orderChanged.bind(this)
  }

  orderChanged(treeData) {
    const { reorderGroups } = this.props
    const flat = getFlatDataFromTree({
      treeData,
      getNodeKey: ({ node }) => node.id,
      ignoreCollapsed: false
    })

    const remapped = flat.map(group => ({
      id: group.node.id,
      expanded: group.node.expanded,
      parentId: group.parentNode && group.parentNode.id,
    }))

    // console.log('tree changed', treeData)
    // console.log('flat', flat)
    // console.log('remapped', remapped)
    // console.log('reorderGroups', reorderGroups)

    reorderGroups(remapped)
  }

  render() {
    const { treeData, editGroup } = this.props

    return (
      <SortableTree
        className="edit-groups-tree"
        treeData={treeData}
        onChange={this.orderChanged}
        rowHeight={45}
        generateNodeProps={(node, path) => ({
          title: <EditableGroup title={node.node.title} id={node.node.id} editGroup={editGroup} />
        })}
        />
    )
  }
}

export default GroupOrder
