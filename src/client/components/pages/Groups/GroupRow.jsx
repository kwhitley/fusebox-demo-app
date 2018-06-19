import React from 'react'
import PropTypes from 'prop-types'
import { Button, Table, Checkbox } from 'semantic-ui-react'
import humanize from 'humanize-duration'

const GroupRow = ({ group, removeGroup, toggleIsActive }) =>
  <Table.Row>
    <Table.Cell width={1}>
      <Button
        circular
        fluid
        icon="trash"
        size="mini"
        onClick={removeGroup}
        disabled={group.isActive}
        />
    </Table.Cell>
    <Table.Cell width={1}>{ group.id }</Table.Cell>
    <Table.Cell>{ group.title }</Table.Cell>
    <Table.Cell>created { humanize(new Date() - group.date, { round: true }) } ago</Table.Cell>
    <Table.Cell width={1}>
      <Checkbox
        toggle
        checked={group.isActive}
        onClick={toggleIsActive}
        />
    </Table.Cell>
  </Table.Row>

GroupRow.propTypes = {
  group: PropTypes.object.isRequired,
  removeGroup: PropTypes.func.isRequired,
  toggleIsActive: PropTypes.func.isRequired,
}

export default GroupRow
