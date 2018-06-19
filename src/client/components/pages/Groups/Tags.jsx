import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromImmutable } from 'react-wrappers'
import { Card, Header } from 'semantic-ui-react'
import tags from '../../../state/tags'
import Chart from './HighChart'
import AllowEdit from './AllowEdit'

const Tags = ({ tags, setEditingTag, editingTagID, unsetEditingTag }) => {
  return (
    <Card.Group className="tags" itemsPerRow={3}>
      {
        tags.map(tag =>
          <Card raised className="tag" key={tag.name}>
            <Card.Header>
              <Header floated="left" textAlign="center">{tag.name}</Header>
              <AllowEdit
                tag={tag}
                isEditing={tag.id === editingTagID}
                enterEditMode={() => setEditingTag(tag.id)}
                exitEditMode={unsetEditingTag}
              />
            </Card.Header>
            <Card.Content>
              <Chart
                tag={tag}
                values={tag.values}
                min={-20}
                max={20}
                setEditingTag={() => setEditingTag(tag.id)}
              />
            </Card.Content>
          </Card>
        )
      }
    </Card.Group>
  )
}


Tags.propTypes = {
  tags: PropTypes.array.isRequired,
  // addItem: PropTypes.func.isRequired,
  // removeItem: PropTypes.func.isRequired,
  // toggleIsActive: PropTypes.func.isRequired,
}

Tags.defaultProps = {
  tags: []
}

const mapStateToProps = state => ({
  tags: tags.getActiveTags(state),
  editingTagID: tags.getEditingTagID(state),
})

export const ConnectedTags = connect(mapStateToProps, tags.actions)(fromImmutable(Tags))

export default Tags
