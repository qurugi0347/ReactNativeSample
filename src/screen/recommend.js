import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { datas } from '../sampleData/postDatas';
import { popPost } from '../components/mainListItem';

type Props = {};

const tabs = [{
  title: 'pop',
  id: 1
},
{
  title: 'all',
  id: 3
},
{
  title: 'lastest',
  id: 2
}];
export default class Recommend extends Component<Props> {
  constructor(props) {
    super(props);
    const dataMap = this.convertDataArrToSection(datas);
    this.state = {
      //Making data set for list
      dataSource: dataMap,
    };
    console.log(popPost);
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

        <View
          stlye={{
            flex: 1,
            flexDirection: 'row'
          }}
        >
          {tabs.map((data) => (
           <Button
             key={data.id}
             style={{
               width: 120,
               color: '#000',
             }}
            title={data.title}
           />
         )) }
        </View>

        {this.state.dataSource.map((item, index) => {
          console.log(index);
          console.log(item);
          return popPost({ item, index });
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
