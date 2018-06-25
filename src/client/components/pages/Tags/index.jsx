import React from 'react'
import { Grid, Container, Sidebar, Segment, Menu, Card } from 'semantic-ui-react'
import { ConnectedGroups } from '../Groups'
import { ConnectedTagsList } from './TagsList'

const cards = Array(7).fill(0).map(i => ({ name: `Tag #${Math.random().toString().slice(0, 6)}` }))

const Groups = () =>
  <Grid divided>
    <Grid.Row>
      <Grid.Column width={5}>
        <ConnectedGroups />
      </Grid.Column>
      <Grid.Column width={11}>
        <ConnectedTagsList />
      </Grid.Column>
    </Grid.Row>
  </Grid>

export default Groups
