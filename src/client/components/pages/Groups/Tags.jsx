import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fromImmutable } from 'react-wrappers'
import { Card } from 'semantic-ui-react'
import tags from '../../../state/tags'

const Tags = ({ tags }) => {
  return (
    <Card.Group className="tags" itemsPerRow={3}>
      {
        tags.map(tag =>
          <Card key={tag.name} header={tag.name} description={tag.values.join(' ')}></Card>
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
  tags: tags.getActiveTags(state)
})

export const ConnectedTags = connect(mapStateToProps, tags.actions)(fromImmutable(Tags))

export default Tags
