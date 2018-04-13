// @flow
import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import SearchBar from './coreUI/SearchBar';
import ImageButton from './coreUI/ImageButton';

import graph from './assets/images/graph.jpeg';
import label from './assets/images/label.jpeg';
import store from './assets/images/store.jpeg';

type Props = {};
type State = {};

export default class App extends Component<Props, State> {
  render() {
    return (
      <View style={style.flex1}>
        <View style={style.topBar}>
          <Text style={style.title}>Menu List</Text>
        </View>

        <View style={{backgroundColor: 'blue', flex: 7.5}}>
          <View style={{backgroundColor: '#FFFFFF', flex: 1.5}}>
            <SearchBar placeholder="Find Menu Here" textValue="Coba Value" />
          </View>
          <View style={{flex: 8.5}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'center',
                backgroundColor: 'red',
              }}
            >
              <Text>All Menus</Text>
              <Text>Main Course</Text>
            </View>
            <View style={{flex: 9, backgroundColor: '#FFFFFF'}}>
              <Text>Content</Text>
            </View>
          </View>
        </View>

        <View style={[style.footer, style.flex1]}>
          <ImageButton style={style.icon} imageSource={graph} />
          <ImageButton style={style.icon} imageSource={label} />
          <ImageButton style={style.icon} imageSource={store} />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  menuText: {
    fontSize: 18,
    color: '#616161',
  },
  icon: {
    width: 30,
    height: 30,
  },
  footer: {
    borderTopWidth: 2,
    borderColor: '#F5F5F5',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  active: {
    borderColor: '#81D7D0',
  },
  menuWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderColor: '#F8F8F8',
  },
  contentMenu: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 30,
  },
  topBar: {
    backgroundColor: '#7ED8D0',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1.5,
  },
  grayPad: {
    backgroundColor: '#F5F5F5',
    flex: 0.5,
  },
  content: {
    backgroundColor: '#FFFFFF',
    flex: 20,
  },
});
