import React from 'react'
import PropTypes from 'prop-types'
import { Callout } from '@blueprintjs/core'

const ErrorMessage = ({ message, children }) =>
  <Callout intent="danger" title="We&lsquo;ve encountered an error.">
    { message || children }
  </Callout>

ErrorMessage.propTypes = {
  message: PropTypes.string,
  children: PropTypes.element
}

ErrorMessage.defaultProps = {
  message: undefined,
  children: undefined
}

export default ErrorMessage
