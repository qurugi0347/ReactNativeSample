import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Animated } from 'react-native';
import { SegmentedControls } from 'react-native-radio-buttons';
import { datas } from '../sampleData/postDatas';
import { catPost } from '../components/recommendItem';

type Props = {};
const tabs = ['pop', 'all', 'lastest'];
//const datas = [];

export default class Recommend extends Component<Props> {
  constructor(props) {
    super(props);
    const dataMap = this.convertDataArrToSection(datas);
    this.offset = 0;
    this.state = {
      //Making data set for list
      dataSource: dataMap,
      selectedTab: 'all',
      hideHeader: false,
      headerHeight: Animated.Value(-100)
    };
    //this.getData();
  }

  getData() {
    fetch('http://http://10.167.107.1:5000/goods/')
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson);
      responseJson.forEach((data) => {
        datas.push(data);
      });
      this.setState({ dataSource: this.convertDataArrToSection(datas) });
      this.forceUpdate();
    })
    .catch((error) => {
      console.error(error);
    });
  }

  setSelectedOption(selectedTab) {
    this.setState({ selectedTab });
    this.state.dataSource = this.convertDataArrToSection(datas, selectedTab);
  }

  openItem(data, index) {
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
        /*categoryMap.push({
          title: data.name,
          imgUrl: 'http://kstatic.inven.co.kr/upload/2017/12/26/bbs/i15952842969.png',
          category: data.seller,
          desc: data.price
        });*/
      }
    });
    console.log(categoryMap);
    return categoryMap;
  }
  animHeader(direction) {
    Animated.timing(
      this.state.headerHeight,
      {
        toValue: direction ? 0 : -100
      }
    ).start();
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{
            flex: 1
          }}
          scrollEventThrottle={1}
          onScroll={(event) => {
            const currentOffset = event.nativeEvent.contentOffset.y;
            const dif = currentOffset - (this.offset || 0);

            console.log(this.state.headerHeight);
            if (Math.abs(dif) < 3) {
              console.log('unclear');
            } else {
              let direction = false;
              if (dif > 0) {
                direction = true;
                console.log('사라져라');
              } else {
                console.log('생겨라');
              }
              this.animHeader(direction);
            }
          }}
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
              (itemData, i) => {
                this.state.dataSource[i].imgUrl = 'https://ncache.ilbe.com/files/attach/new/20161210/4255758/8328086177/9139989173/a17acbdceba2947d883c47d251761bb0.JPG';
                this.state.dataSource[i].title = '커엽...';
                this.forceUpdate();
              },
              (itemData, i) => {
                this.state.dataSource[i].imgUrl = 'https://scontent-atl3-1.cdninstagram.com/vp/4aa45a67951e27a4285bc6460c4a39c7/5CE21DBC/t51.2885-15/e35/47692655_621571138257263_1188373617322883806_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com';
                this.state.dataSource[i].title = '냥죽택!!';
                this.forceUpdate();
              }
            );
          })}

        </ScrollView>
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            transform: [{ translateY: this.state.headerHeight }] }}
        >
          <SegmentedControls
            options={tabs}
            onSelection={this.setSelectedOption.bind(this)}
            selectedOption={this.state.selectedTab}
          />
        </Animated.View>
      </SafeAreaView>


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
