/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { StackNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './components/home';
import Mypage from './components/mypage';
import Login from './components/login';

const mainTabNav = createBottomTabNavigator({
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: `홈`,
      })
    },
    Mypage: {
      screen: Mypage,
      navigationOptions: ({ navigation }) => ({
        title: `마이페이지`,
      }),
    }
});

const rootNav = createStackNavigator(
  {
    Main: {screen: mainTabNav},
    Login: { screen: Login }
  },
  {
    initialRouteName: 'Main',
  }
  );


export default createAppContainer(rootNav);
