import React from 'react'
import { TouchableNativeFeedback } from 'react-native'

const Button = props => (
  <TouchableNativeFeedback
    background={TouchableNativeFeedback.SelectableBackground()}
    delayPressIn={0}
    {...props}
  >
    {props.children}
  </TouchableNativeFeedback>
)

export default Button
