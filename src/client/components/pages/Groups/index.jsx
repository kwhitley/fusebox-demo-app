import React from 'react'
import { Grid, Container, Sidebar, Segment, Menu, Card } from 'semantic-ui-react'
import GroupsNavigation from './GroupsNavigation'
import { ConnectedTags } from './Tags'

const cards = Array(7).fill(0).map(i => ({ name: `Tag #${Math.random().toString().slice(0, 6)}` }))

const Groups = () =>
  <Grid divided>
    <Grid.Row>
      <Grid.Column width={4}>
        <GroupsNavigation />
      </Grid.Column>
      <Grid.Column width={12}>
        <ConnectedTags />
      </Grid.Column>
    </Grid.Row>
  </Grid>

export default Groups
