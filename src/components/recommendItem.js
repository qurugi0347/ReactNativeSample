import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import renderIf from 'render-if';

export const catPost = (parent, { item, index }, onItemPress, onBtn1Press, onBtn2Press) => (
  <TouchableOpacity
    key={index}
    style={{ flex: 1 }}
    onPress={onItemPress.bind(parent, item, index)}
  >
    <View
      style={styleListRow.holder}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={styleListRow.title}
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
        <View style={{ backgroundColor: '#FFE' }}>
          <Button
            title='고먐미는 커여워'
            onPress={onBtn1Press.bind(parent, item, index)}
          />
          <Button
            title='사실 안커여워'
            onPress={onBtn2Press.bind(parent, item, index)}
          />
        </View>
    )}

  </TouchableOpacity>
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
