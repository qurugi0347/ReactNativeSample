import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, Alert, Image } from 'react-native';
import { datas } from '../sampleData/postDatas';

type Props = {};
export default class Home extends Component<Props> {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });
    const dataMap = this.convertDataArrToSection(datas);
    this.state = {
      //Making data set for list
      dataSource: ds.cloneWithRowsAndSections(dataMap),
    };
  }

  convertDataArrToSection(dataArr) {
    const categoryMap = {};
    dataArr.forEach((data) => {
      if (!categoryMap[data.category]) {
        categoryMap[data.category] = [];
      }
      categoryMap[data.category].push(data);
    });
    return categoryMap;
  }

  showItem(rowData) {
    //Alert on the click of list Item
    Alert.alert(rowData.title);
  }

  renderHeader = () => {
    return (
      <View>
        <Image
          style={{
            width: '100%',
            height: 300,
          }}
          source={{ uri: 'http://pet.chosun.com/images/news/healthchosun_pet_201802/20180205193238_1635_4749_2414.jpg' }}
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
          <Text >고양이 넘모 이쁘자너</Text>
          <Text
            style={styles.hashTag}
          >
            #고먐미
          </Text>
        </View>

      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          dataSource={this.state.dataSource}
          //dataSource to add data in the list
          renderHeader={this.renderHeader}
          //Header to show above listview
          //renderFooter={this.renderFooter}
          //Footer to show below listview
          renderSeparator={this.ListViewItemSeparator}
          //List Item separator
          renderRow={rowData => (
            //Rendering Single Row
            <View style={styleListRow.holder}>
              <View style={{ flex: 1 }}>
                <Text
                  style={styleListRow.title}
                  onPress={this.showItem.bind(this, rowData)}
                >
                  {rowData.title}
                </Text>
                <Text
                  style={styleListRow.desc}
                >
                  {rowData.desc}
                </Text>
              </View>

              <Image
                style={styleListRow.sideImg}
                source={{ uri: rowData.imgUrl }}
              />
            </View>
          )}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styleListRow.separator} />}
          renderSectionHeader={(sectionData, category) => {
            return (
              <Text style={{ fontWeight: '700', backgroundColor: '#CFC' }}>{category}</Text>
            );
          }}
        />
      </View>
    );
  }
}

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
