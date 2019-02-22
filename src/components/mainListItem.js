import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';

const showItem = (rowData) => {
  //Alert on the click of list Item
  Alert.alert(rowData.title);
};


export const overrideRenderItem = ({ item, index, section }) => (
  <View key={index} style={styleListRow.holder}>
    <View style={{ flex: 1 }}>
      <Text
        style={styleListRow.title}
        onPress={showItem.bind(this, item)}
      >
        {item.title}
      </Text>
    </View>

    <Image
      style={styleListRow.sideImg}
      source={{ uri: item.imgUrl }}
    />
  </View>
);
export const popPost = ({ item, index, section }) => (
  <View key={index} style={styleListRow.holder}>
    <View style={{ flex: 1 }}>
      <Text
        style={styleListRow.title}
        onPress={showItem.bind(this, item)}
      >
        {item.title}
      </Text>
      <Text
        style={styleListRow.desc}
      >
        {item.desc}
      </Text>
    </View>

    <Image
      style={styleListRow.sideImg}
      source={{ uri: item.imgUrl }}
    />
  </View>
);


const styleListRow = StyleSheet.create({
  holder: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
  },
  description: {
    fontSize: 14,
  },
  date: {
    fontSize: 18,
  },
  hashTag: {
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  sideImg: {
    alignSelf: 'stretch',
    right: 0,
    width: 100,
    height: 100
  },
  separator: {
    margin: 10,
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
});
