import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromImmutable } from 'react-wrappers'
import { Card, Header } from 'semantic-ui-react'
import tags from '../../../state/tags'
import groups from '../../../state/groups'
import Chart from './HighChart'
import AllowEdit from './AllowEdit'
import Breadcrumbs from './Breadcrumbs'

const TagsList = ({ tags, setEditingTag, editingTagID, unsetEditingTag, editTag, activeGroup, breadcrumbs, setVisibleGroup }) => {
  // console.log('trail', breadcrumbs)
  return (
    <React.Fragment>
      <Breadcrumbs className="group-breadcrumbs" breadcrumbs={breadcrumbs} clickHandler={setVisibleGroup} />
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
                  saveTagAction={editTag}
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
    </React.Fragment>
  )
}


TagsList.propTypes = {
  tags: PropTypes.array.isRequired,
  // addItem: PropTypes.func.isRequired,
  // removeItem: PropTypes.func.isRequired,
  // toggleIsActive: PropTypes.func.isRequired,
}

TagsList.defaultProps = {
  tags: []
}

const mapStateToProps = state => ({
  tags: tags.getActiveTags(state),
  activeGroup: groups.getVisibleGroup(state),
  breadcrumbs: groups.getBreadcrumbs(state),
  editingTagID: tags.getEditingTagID(state),
})

export const ConnectedTagsList = connect(mapStateToProps,
  Object.assign({}, tags.actions, groups.actions)
)(fromImmutable(TagsList))

export default TagsList
