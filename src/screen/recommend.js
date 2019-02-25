import React, { Component } from 'react';
import { StyleSheet, Text, View, SectionList, Image } from 'react-native';
import { datas } from '../sampleData/postDatas';
import { popPost, overrideRenderItem } from '../components/mainListItem';

type Props = {};
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

  convertDataArrToSection(dataArr) {
    const categoryMap = {};
    const result = [];
    dataArr.forEach((data) => {
      if (!categoryMap[data.category]) {
        categoryMap[data.category] = [];
      }
      categoryMap[data.category].push(data);
    });
    const funcMapping = {
      pop: popPost,
      lastest: overrideRenderItem
    };

    Object.keys(categoryMap).forEach((key) => {
      result.push({ title: key, data: categoryMap[key], renderItem: funcMapping[key] });
    });
    return result;
  }

  renderHeader = () => {
    return (
      <View>
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
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SectionList
          sections={this.state.dataSource}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{ fontWeight: 'bold' }}> { title } </Text>
          )}
          ListHeaderComponent={this.renderHeader}
          keyExtractor={(item, index) => item + index}
        />
      </View>
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
