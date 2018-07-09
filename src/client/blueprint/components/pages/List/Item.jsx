import React from 'react'
import PropTypes from 'prop-types'
import { Button, Table, Checkbox } from 'semantic-ui-react'
import { Switch, Alignment } from '@blueprintjs/core'
import humanize from 'humanize-duration'

const ListItem = ({ item, removeItem, toggleIsActive }) =>
  <Table.Row>
    <Table.Cell width={1}>
      <Button
        circular
        fluid
        icon="trash"
        size="mini"
        onClick={removeItem}
        disabled={item.isActive}
        />
    </Table.Cell>
    <Table.Cell width={1}>{ item.id }</Table.Cell>
    <Table.Cell>{ item.name }</Table.Cell>
    <Table.Cell>created { humanize(new Date() - item.date, { round: true }) } ago</Table.Cell>
    <Table.Cell width={1}>
      <Switch
        alignIndicator={"center"}
        checked={item.isActive}
        onChange={toggleIsActive}
        large
        />
    </Table.Cell>
  </Table.Row>

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired,
  toggleIsActive: PropTypes.func.isRequired,
}

export default ListItem
