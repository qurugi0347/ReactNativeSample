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
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={20} color="#666" />;
import Home from './screen/home';
import Recommend from './screen/recommend';
import Mypage from './screen/mypage';
import Login from './screen/login';

const mainTabNav = createMaterialBottomTabNavigator({
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        title: `홈`,
        tabBarIcon: myIcon
      })
    },
    Recommend: {
      screen: Recommend,
      navigationOptions: ({ navigation }) => ({
        title: `추천`,
        tabBarIcon:<Icon name="star" size={20} color="#666" />
      }),
    },
    Mypage: {
      screen: Mypage,
      navigationOptions: ({ navigation }) => ({
        title: `마이페이지`,
        tabBarIcon:myIcon
      }),
    }
},{
  initialRouteName: 'Home',
  activeColor: '#666',
  inactiveColor: '#CCC',
  barStyle: {
    backgroundColor: '#FFF',
    height: 70
    },
});

const rootNav = createStackNavigator(
  {
    Main: {screen: mainTabNav},
    Login: { screen: Login }
  },
  {
    initialRouteName: 'Main',
    headerMode: 'null',
  }
);


export default createAppContainer(rootNav);
