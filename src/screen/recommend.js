import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Alert } from 'react-native';
import { SegmentedControls } from 'react-native-radio-buttons';
import { datas } from '../sampleData/postDatas';
import { catPost } from '../components/recommendItem';

type Props = {};

const tabs = ['pop', 'all', 'lastest'];
export default class Recommend extends Component<Props> {
  constructor(props) {
    super(props);
    const dataMap = this.convertDataArrToSection(datas);
    this.state = {
      //Making data set for list
      dataSource: dataMap,
      selectedTab: 'all',
    };
  }

  setSelectedOption(selectedTab) {
    this.setState({ selectedTab });
    this.state.dataSource = this.convertDataArrToSection(datas, selectedTab);
  }

  convertDataArrToSection(dataArr, tab) {
    const categoryMap = [];

    dataArr.forEach((data) => {
      if (tab === undefined || tab === data.category || tab === 'all') {
        categoryMap.push(data);
      }
    });

    return categoryMap;
  }

  openItem(data, index) {
    Alert.alert(data + index);
  }

  render() {
    return (
      <ScrollView
        style={{
          flex: 1
        }}
        stickyHeaderIndices={[1]}
      >
        <View
          stlye={{
            flex: 1,
            backgroundColor: '#ccc'
          }}
        >
          <Image
            style={{
              width: '100%',
              height: 300,
            }}
            source={{ uri: 'http://optimal.inven.co.kr/upload/2018/03/26/bbs/i16608864751.jpg' }}
          />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
          >
            <Text >매서운 냥냥펀치를 받아랏</Text>
            <Text
              style={styles.hashTag}
            >
              #냥냥펀치
            </Text>
          </View>

        </View>

        <SegmentedControls
          options={tabs}
          onSelection={this.setSelectedOption.bind(this)}
          selectedOption={this.state.selectedTab}
        />

        {this.state.dataSource.map((item, index) => {
          const openItemFunc = this.openItem;
          return catPost({ item, index }, openItemFunc);
        })}

      </ScrollView>


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
  hashTag: {
    fontSize: 12,
    textAlign: 'center',
    padding: 5,
    backgroundColor: '#000',
    color: '#fff',
  }
});
