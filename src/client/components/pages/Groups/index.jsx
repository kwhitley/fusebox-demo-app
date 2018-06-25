import React from 'react'
import SortableTree from 'react-sortable-tree'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromImmutable } from 'react-wrappers'
import groups from '../../../state/groups'

const Groups = ({ treeData, toggleGroupExpanded }) =>
  <SortableTree
    className="tag-groups-tree"
    treeData={treeData}
    onChange={() => {}}
    rowHeight={52}
    onVisibilityToggle={({ node, expanded }) => {
      toggleGroupExpanded(node.id)
      console.log('toggling group expansion', node, expanded)
    }}
    canDrag={false}
    />

const mapStateToProps = state => ({
  treeData: groups.getTreeData(state)
})

export const ConnectedGroups = connect(mapStateToProps, groups.actions)(fromImmutable(Groups))

export default Groups
