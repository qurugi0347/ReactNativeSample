/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { name as appName } from './app.json';

const React = require('react-native');

const {

  AppRegistry

} = React;
const Main = require('./src/main');

AppRegistry.registerComponent(appName, () => Main);
