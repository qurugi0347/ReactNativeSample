import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';


const routes = [
  { title: 'First Scene', index: 0 },
  { title: 'Second Scene', index: 1 }
];

type Props = {};
export default class Home extends Component<Props> {
  render() {
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>
          <TouchableHighlight
            onPress={() => {
              if (route.index === 0) {
                navigator.push(routes[1]);
              } else {
                navigator.pop();
              }
            }}
          >
          <Text>Hello {route.title}!</Text>
          </TouchableHighlight>
        }
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
