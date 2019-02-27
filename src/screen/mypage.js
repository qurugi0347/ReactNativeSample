import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

type Props = {};
export default class Mypage extends Component<Props> {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={{ backgroundColor: '#FFF', flex: 1 }}>
        <View style={styles.top}>
          <Text style={styles.top_text}>로그인</Text>
          <Text style={styles.top_text}>회원가입</Text>
        </View>
        <View style={styles.grade_view}>
          <Text style={styles.grade_text}>회원등급</Text>
          <Text style={styles.grade_num}>-</Text>
          <Button
            onPress={() => {
              navigate('Login');
            }}
            buttonStyle={{
              backgroundColor: '#AAA',
              width: 140,
              height: 40,
              position: 'absolute',
              borderRadius: 20,
              top: -45,
              right: 10,
              zIndex: 10
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
            styles.borderR,
            { flex: 1, height: 85 }
          ]}
          >
            <Text style={styles.grade_text}>사용가능 쿠폰</Text>
            <Text style={styles.grade_num}>-</Text>
          </View>
          <View
          style={[
            styles.grade_view,
            { flex: 1, height: 85 }
          ]}
          >
            <Text style={styles.grade_text}>마일리지</Text>
            <Text style={styles.grade_num}>-</Text>
          </View>
        </View>
        <View style={[{ padding: 20 }]}>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>나의 쇼핑정보</Text>
          <View style={{ backgroundColor: '#000', height: 4, marginTop: 10 }} />
        </View>
      </SafeAreaView>
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
