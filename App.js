import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Main from './app/screens/Main';
import Todo from './app/screens/Todo';

export default class ProjectMeel extends Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Main: Main,
  Todo: Todo
});