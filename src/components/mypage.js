import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';


export default class Mypage extends Component {
  render() {
    return (
      <View style={{ backgroundColor: '#FFF', flex: 1 }}>
        <View style={styles.top}>
          <Text style={styles.top_text}>로그인</Text>
          <Text style={styles.top_text}>회원가입</Text>
        </View>
        <View style={styles.grade_view}>
          <Text style={styles.grade_text}>회원등급</Text>
          <Text style={styles.grade_num}>-</Text>
          <Button
            onPress={() => { }}
            buttonStyle={{
              backgroundColor: '#AAA',
              width: 140,
              height: 40,
              borderRadius: 20,
              position: 'absolute',
              top: -45,
              right: 10
            }}
            type="solid"
            title="할인혜택 보기"
            color="#AAA"
          />
        </View>
        <View style={[{ flexDirection: 'row', alignSelf: 'baseline' }]}>
          <View
          style={[
            styles.grade_view,
            styles.borderR, { width: '50%', height: 85 }
          ]}
          >
            <Text style={styles.grade_text}>사용가능 쿠폰</Text>
            <Text style={styles.grade_num}>-</Text>
          </View>
          <View style={[styles.grade_view, { width: '50%', height: 85 }]}>
            <Text style={styles.grade_text}>마일리지</Text>
            <Text style={styles.grade_num}>-</Text>
          </View>
        </View>
        <View style={[{ padding: 20 }]}>
          <Text
          style={{
              fontSize: 24,
              fontWeight: 'bold'
            }}
          >나의 쇼핑정보</Text>
          <View style={{ backgroundColor: '#000', height: 4, marginTop: 10 }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    padding: 20,
    paddingTop: 80,
    backgroundColor: '#000',
    height: 280,
  },
  top_text: {
    color: '#FFF',
    fontSize: 32,
    textDecorationLine: 'underline',
    padding: 5,
    lineHeight: 32,
  },
  grade_view: {
    padding: 15,
    borderColor: '#999',
    borderBottomWidth: 1
  },
  borderR: {
    borderColor: '#999',
    borderRightWidth: 1
  },
  grade_num: {
    marginTop: 5,
    fontSize: 26,
    fontWeight: 'bold',
  },
  grade_text: {
    fontSize: 16,
    color: '#AAA'
  },
  defaultPaddingX: {
    padding: 20
  }
});
