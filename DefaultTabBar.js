import React from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'
import PropTypes from 'prop-types'
import Button from './Button'

const borderColor = '#cccccc'
export default class DefaultTabBar extends React.Component {
  propTypes = {
    activeTab: PropTypes.number,
    activeTextColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    containerWidth: PropTypes.number.isRequired,
    goToPage: PropTypes.func,
    inactiveTextColor: PropTypes.string,
    renderTab: PropTypes.func,
    scrollValue: PropTypes.object.isRequired,
    style: PropTypes.any,
    tabStyle: PropTypes.any,
    tabs: PropTypes.array,
    textStyle: PropTypes.any,
    underlineStyle: PropTypes.any,
  }

  static defaultProps = {
    activeTextColor: 'navy',
    inactiveTextColor: 'black',
    backgroundColor: null,
  }

  renderTab(name, page, isTabActive, onPressHandler) {
    const { activeTextColor, inactiveTextColor, textStyle } = this.props
    const textColor = isTabActive ? activeTextColor : inactiveTextColor
    const fontWeight = isTabActive ? 'bold' : 'normal'

    return (
      <Button
        accessibilityLabel={name}
        accessibilityTraits="button"
        accessible={true}
        key={name}
        onPress={() => onPressHandler(page)}
        style={styles.button}
      >
        <View style={[styles.tab, this.props.tabStyle]}>
          <Text style={[{ color: textColor, fontWeight }, textStyle]}>{name}</Text>
        </View>
      </Button>
    )
  }

  render() {
    const containerWidth = this.props.containerWidth
    const numberOfTabs = this.props.tabs.length
    const tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: 4,
      backgroundColor: 'navy',
      bottom: 0,
    }

    const translateX = this.props.scrollValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, containerWidth / numberOfTabs],
    })
    return (
      <View
        style={[styles.tabs, { backgroundColor: this.props.backgroundColor }, this.props.style]}
      >
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page
          const renderTab = this.props.renderTab || this.renderTab
          return renderTab(name, page, isTabActive, this.props.goToPage)
        })}
        <Animated.View
          style={[
            tabUnderlineStyle,
            {
              transform: [{ translateX }],
            },
            this.props.underlineStyle,
          ]}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor,
  },
  button: {
    flex: 1,
  },
})
