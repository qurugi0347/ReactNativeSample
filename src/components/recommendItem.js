import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import renderIf from 'render-if';

export const catPost = ({ item, index }, onPressItem) => (
  <View
    key={index}
    style={{ flex: 1 }}
  >
    <View
      style={styleListRow.holder}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={styleListRow.title}
          onPress={onPressItem.bind(this, item, index)}
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
    {renderIf(item.show)(
        <View>
          <Text>text</Text>
        </View>
    )}
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
