import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
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

  openItem(data, index) {
    console.log(this);
    if (this.state.dataSource[index].show) {
      this.state.dataSource[index].show = false;
    } else {
      this.state.dataSource[index].show = true;
    }
    this.forceUpdate();
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
          return catPost(
            this,
            { item, index },
            this.openItem,
            (_item, _index) => {
              this.state.dataSource[_index].imgUrl = 'https://ncache.ilbe.com/files/attach/new/20161210/4255758/8328086177/9139989173/a17acbdceba2947d883c47d251761bb0.JPG';
              console.log('커여워!!!');
              this.forceUpdate();
            },
            (_item, _index) => {
              this.state.dataSource[_index].imgUrl = 'https://scontent-atl3-1.cdninstagram.com/vp/4aa45a67951e27a4285bc6460c4a39c7/5CE21DBC/t51.2885-15/e35/47692655_621571138257263_1188373617322883806_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com';
              console.log('냥죽택...');
              this.forceUpdate();
            }
          );
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
