## react-native-scrollable-tab-view

This is fork of (original package)[https://github.com/skv-headless/react-native-scrollable-tab-view] which is not under maintenance anymore.

## Add it to your project

1.  Run `yarn add react-native-scrollable-tab-view --save`
2.  `import ScrollableTabView from 'react-native-scrollable-tab-view'`

## Demo

## Basic usage

```jsx
import React from 'react'
import ScrollableTabView from 'react-native-scrollable-tab-view'

class App extends React.Component {
  render() {
    return (
      <ScrollableTabView>
        <ReactPage tabLabel="React" />
        <FlowPage tabLabel="Flow" />
        <JestPage tabLabel="Jest" />
      </ScrollableTabView>
    )
  }
}
```

## Injecting a custom tab bar

Suppose we had a custom tab bar called `CustomTabBar`, we would inject
it into our `ScrollableTabView` like this:

```jsx
import React from 'react'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import CustomTabBar from  './CustomTabBar'

class App extends React.Component {
  render() {
    return (
      <ScrollableTabView renderTabBar={() => <CustomTabBar someProp={'here'} />}>
        <ReactPage tabLabel="React" />
        <FlowPage tabLabel="Flow" />
        <JestPage tabLabel="Jest" />
      </ScrollableTabView>
    )
  },
}
```

To start you can just copy [DefaultTabBar](https://github.com/skv-headless/react-native-scrollable-tab-view/blob/master/DefaultTabBar.js).

## Examples

[SimpleExample](https://github.com/skv-headless/react-native-scrollable-tab-view/blob/master/Example/SimpleExample.js).

[ScrollableTabsExample](https://github.com/skv-headless/react-native-scrollable-tab-view/blob/master/Example/ScrollableTabsExample.js).

[OverlayExample](https://github.com/skv-headless/react-native-scrollable-tab-view/blob/master/Example/OverlayExample.js).

[FacebookExample](https://github.com/skv-headless/react-native-scrollable-tab-view/blob/master/Example/FacebookExample.js).

## API

| Prop                       | Type           | Options                                                  |
| -------------------------- | -------------- | -------------------------------------------------------- |
| renderTabBar               | ReactComponent |                                                          |
| tabBarPosition             | string         | `top`- default, `bottom`, `overlayTop`, `overlayBottom`. |
| onChangeTab                | function       |                                                          |
| onScroll                   | function       |                                                          |
| locked                     | boolean        |                                                          |
| initialPage                | integer        |                                                          |
| page                       | integer        |                                                          |
| children                   | ReactComponent |                                                          |
| tabBarUnderlineStyle       | style (object) |                                                          |
| tabBarBackgroundColor      | string         |                                                          |
| tabBarActiveColor          | string         |                                                          |
| tabBarInactiveColor        | string         |                                                          |
| tabBarTextStyle            | style (object) |                                                          |
| style                      | style (object) |                                                          |
| contentProps               | object         |                                                          |
| scrollWithoutAnimation     | boolean        |                                                          |
| prerenderingSiblingsNumber | integer        |                                                          |

## Contribution

**Issues** are welcome. Please add a screenshot of bug and code snippet. Quickest way to solve issue is to reproduce it on one of the examples.

**Pull requests** are welcome. If you want to change API or making something big better to create issue and discuss it first. Before submiting PR please run `yarn lint && yarn test`.

Please attach video or gif to PR's and issues it is super helpful.

<a href="http://www.abeautifulsite.net/recording-a-screencast-with-quicktime/" target="_blank">How to make video</a>

<a href="https://github.com/jclem/gifify" target="_blank">How to make gif from video</a>

---

**MIT Licensed**
