import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Main from './app/screens/Main';
import Todo from './app/screens/Todo';

import store from './app/components/store';
import { Provider } from 'react-redux';

export default class ProjectMeel extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppStackNavigator />
      </Provider>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Main: Main,
  Todo: Todo
});