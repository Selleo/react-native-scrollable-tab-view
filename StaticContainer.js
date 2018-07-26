import React from 'react'
import PropTypes from 'prop-types'

export default class StaticContainer extends React.Component {
  static propTypes = {
    shouldUpdate: PropTypes.bool,
    children: PropTypes.any,
  }

  shouldComponentUpdate(nextProps) {
    return !!nextProps.shouldUpdate
  }

  render() {
    var child = this.props.children
    if (child === null || child === false) {
      return null
    }
    return React.Children.only(child)
  }
}
