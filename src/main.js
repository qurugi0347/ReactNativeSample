const React = require('react-native');

const {
  Navigator,
  StyleSheet
} = React;
const Login = require('./components/login');

const ROUTES = {
  login: Login
};

module.exports = React.createClass({
  renderScene: function(route, navigator) {
    const Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  },
  render: function() {
    return (
      <Navigator
      style={ styles.container }
      initialRoute={ {name: 'login'} }
      renderScene={this.renderScene}
      configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight; } }
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
