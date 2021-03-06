import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import store from './store'
import Home from './screens/Home'
import Detail from './screens/Detail'

const AppNavigator = StackNavigator({
  home: { screen: Home },
  detail: { screen: Detail },
},
{
  initialRouteName: 'home',
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}
