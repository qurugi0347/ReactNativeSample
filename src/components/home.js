import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, Alert } from 'react-native';

type Props = {};
export default class Home extends Component<Props> {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      //Making data set for list
      dataSource: ds.cloneWithRows([
        'Button', 'Card', 'Input', 'Avatar', 'CheckBox',
        'Header', 'Icon', 'Lists', 'Rating ', 'Pricing',
      ]),
    };
  }

  showItem(rowData) {
    //Alert on the click of list Item
    Alert.alert(rowData);
  }

  renderHeader = () => {
    return (
      <View>
        <Text>This is Header</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          dataSource={this.state.dataSource}
          //dataSource to add data in the list
          renderHeader={this.renderHeader}
          //Header to show above listview
          //renderFooter={this.renderFooter}
          //Footer to show below listview
          renderSeparator={this.ListViewItemSeparator}
          //List Item separator
          renderRow={rowData => (
            //Rendering Single Row
            <Text
              style={styles.rowViewContainer}
              onPress={this.showItem.bind(this, rowData)}
            >
              {rowData}
            </Text>
          )}
        />
      </View>
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
