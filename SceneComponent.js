import React from 'react'
import { View } from 'react-native'
import StaticContainer from './StaticContainer'

const SceneComponent = ({ shouldUpdated, ...props }) => (
  <View {...props}>
    <StaticContainer shouldUpdate={shouldUpdated}>{props.children}</StaticContainer>
  </View>
)

export default SceneComponent
