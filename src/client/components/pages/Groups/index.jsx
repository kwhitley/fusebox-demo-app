import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromImmutable } from 'react-wrappers'
import { Container, Button } from 'semantic-ui-react'
import groups from '../../../state/groups'
import { ConnectedGroupsNavigation } from './GroupsNavigation'
import { ConnectedEditGroups } from './EditGroups'

const Groups = ({ isEditing, toggleIsEditing }) =>
  <Container className="groups-panel">
    <Button
      basic
      circular
      compact
      className="edit-button selectable abs-top-right"
      icon="pencil"
      onClick={toggleIsEditing}
    />

    { isEditing ? <ConnectedEditGroups /> : <ConnectedGroupsNavigation /> }
  </Container>


Groups.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  toggleIsEditing: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isEditing: groups.getIsEditing(state),
})

export const ConnectedGroups = connect(mapStateToProps, groups.actions)(fromImmutable(Groups))

export default Groups
