import React from 'react'
import { Icon, Dialog, Button, Modal } from 'semantic-ui-react'

const AllowEdit = ({ tag, isEditing, enterEditMode, exitEditMode }) => {
  return (
    <React.Fragment>
      <Button
        basic
        circular
        compact
        className="edit-button"
        floated="right"
        icon="pencil"
        onClick={enterEditMode}
      />

      <Modal size="small" open={isEditing} onClose={exitEditMode}>
        <Modal.Header>Edit Tag > { tag.name }</Modal.Header>
        <Modal.Content>
          <p>Some edit content forms would go here.</p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic onClick={exitEditMode}>Cancel</Button>
          <Button positive icon='checkmark' labelPosition='right' content='Save' />
        </Modal.Actions>
      </Modal>
    </React.Fragment>
  )
}

export default AllowEdit
