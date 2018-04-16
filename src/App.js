// @flow
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

import SearchBar from './coreUI/SearchBar';
import ImageButton from './coreUI/ImageButton';
import MenuItem from './coreUI/MenuItem';

import graph from './assets/images/graph.jpeg';
import label from './assets/images/label.jpeg';
import store from './assets/images/store.jpeg';

import type {MenuItemType} from './types/types';

type Props = {};
type State = {
  menuItems: Array<MenuItemType>,
};

export default class App extends Component<Props, State> {
  state = {
    menuItems: [
      {
        id: '1',
        name: 'Queen Burger with Special French Fries',
        price: 120,
        type: 'Main Course',
      },
      {
        id: '2',
        name: 'Mushroom Burger',
        price: 30,
        type: 'Main Course',
      },
      {
        id: '3',
        name: 'Pepsi',
        price: 15,
        type: 'Beverages',
        imageResource: {
          uri: 'https://www.pepsi.com/en-us/uploads/images/can-pepsi.png',
        },
      },
    ],
  };

  render() {
    return (
      <View style={style.flex1}>
        <View style={[style.flex1, style.topBar]}>
          <Text style={style.title}>Menu List</Text>
        </View>

        <View style={{flex: 8}}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              flex: 1.5,
              borderBottomWidth: 8,
              borderColor: '#F8F8F8',
            }}
          >
            <SearchBar placeholder="Find Menu Here" textValue="Coba Value" />
          </View>
          <View style={{flex: 8.5}}>
            <View
              style={{
                flex: 1.5,
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'center',
              }}
            >
              <View style={[style.menuWrapper, style.active, style.flex1]}>
                <Text style={[style.menuText, {fontWeight: 'bold'}]}>
                  All Menus
                </Text>
              </View>
              <View style={[style.menuWrapper, style.flex1]}>
                <Text style={style.menuText}>Main Course</Text>
              </View>
            </View>
            <View style={{flex: 8.5, backgroundColor: '#FFFFFF'}}>
              <ScrollView>
                {this.state.menuItems.map(item => (
                  <MenuItem menuItem={item} key={item.id} />
                ))}
              </ScrollView>
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
  menuWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderColor: '#F8F8F8',
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
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  topBar: {
    backgroundColor: '#7ED8D0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
