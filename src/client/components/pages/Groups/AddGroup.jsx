import React from 'react'
import PropTypes from 'prop-types'
import { Input, Form } from 'semantic-ui-react'

class AddGroup extends React.Component {
  constructor(props) {
    super(props)

    this.state = { value: 'foo' }
    this.update = this.update.bind(this)
    this.addGroup = this.addGroup.bind(this)
  }

  update(e) {
    this.setState({
      value: e.target.value
    })
  }

  addGroup() {
    let groupName = this.state.value || 'new item'
    this.props.addGroup(groupName)
    this.setState({ value: '' })
  }

  render() {
    return (
      <Form onSubmit={this.addGroup}>
        <Input
          fluid
          placeholder="New Group"
          action={{ labelPosition: 'right', icon: 'plus', content: 'Add Group' }}
          actionPosition='left'
          onChange={this.update}
          value={this.state.value}
          />
      </Form>
    )
  }
}

AddGroup.propTypes = {
  addGroup: PropTypes.func.isRequired
}

export default AddGroup
