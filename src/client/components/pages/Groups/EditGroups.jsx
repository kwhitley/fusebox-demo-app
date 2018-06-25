import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromImmutable } from 'react-wrappers'
import { Divider, Table } from 'semantic-ui-react'
import GroupRow from './GroupRow'
import AddGroup from './AddGroup'
import GroupOrder from './GroupOrder'
import groups from '../../../state/groups'

const EditGroups = ({ groups = [], groupsTreeData, addGroup, removeGroup, toggleIsActive, reorderGroups, editGroup }) => {
  return (
    <React.Fragment>
      <AddGroup addGroup={addGroup} />
      <Divider horizontal>{ groups.length } Items</Divider>

      {
        /*
          <Table compact celled definition>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Created</Table.HeaderCell>
                <Table.HeaderCell>Active</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {
                groups.map(group => <GroupRow
                                    key={group.id}
                                    group={group}
                                    removeGroup={() => removeGroup(group.id)}
                                    toggleIsActive={() => toggleIsActive(group.id)}
                                  />
                          )
              }
            </Table.Body>
          </Table>
        */
      }


      <GroupOrder
        groups={groups}
        treeData={groupsTreeData}
        reorderGroups={reorderGroups}
        editGroup={editGroup}
      />
    </React.Fragment>
  )
}

EditGroups.propTypes = {
  groups: PropTypes.array.isRequired,
  addGroup: PropTypes.func.isRequired,
  removeGroup: PropTypes.func.isRequired,
  toggleIsActive: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  groups: groups.getGroups(state),
  groupsTreeData: groups.getTreeData(state)
})

export const ConnectedEditGroups = connect(mapStateToProps, groups.actions)(fromImmutable(EditGroups))

export default EditGroups
