import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';


type Props = {};
export default class Mypage extends Component<Props> {
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
            onPress={() => {
              this.props.navigation.navigate('Main');
              console.log(this.props.navigation);
              this.props.navigation.getChildNavigation('Main').navigate('Home');
            }}
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
