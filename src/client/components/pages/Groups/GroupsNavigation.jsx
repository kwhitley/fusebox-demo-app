import React from 'react'
import SortableTree from 'react-sortable-tree'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromImmutable } from 'react-wrappers'
import groups from '../../../state/groups'
import SelectableGroup from './SelectableGroup'

const GroupsNavigation = ({ treeData, toggleGroupExpanded, setVisibleGroup }) =>
  <SortableTree
    className="tag-groups-tree"
    treeData={treeData}
    onChange={() => {}}
    rowHeight={52}
    onVisibilityToggle={({ node, expanded }) => toggleGroupExpanded(node.id)}
    generateNodeProps={({ node }, path) => ({
      title: <SelectableGroup
                selectGroupAction={() => setVisibleGroup(node.id)}
                id={node.id}
                active={node.isVisible}
                title={node.title}
              />
    })}
    onClick={() => alert('clicked')}
    canDrag={false}
    />

const mapStateToProps = state => ({
  treeData: groups.getTreeData(state)
})

export const ConnectedGroupsNavigation = connect(mapStateToProps, groups.actions)(fromImmutable(GroupsNavigation))

export default GroupsNavigation
