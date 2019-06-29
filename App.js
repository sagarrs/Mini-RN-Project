import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native'
import {createStackNavigator, createAppContainer} from 'react-navigation'

import Home from './src/components/Login'
import ListStory from './src/components/ListStory'

const AppNavigator = createStackNavigator(
  {
      home: Home,
      list: ListStory
  },
  {
      initialRouteName: "home"
  }
)

const AppContainer = createAppContainer(AppNavigator)

class App extends React.Component{
  render(){
      return <AppContainer/>
  }
}

export default App