// @flow
import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';

import SearchBar from '../../coreUI/SearchBar';
import ImageButton from '../../coreUI/ImageButton';
import MenuItem from '../../coreUI/MenuItem';

import graph from '../../assets/images/graph.jpeg';
import label from '../../assets/images/label.jpeg';
import store from '../../assets/images/store.jpeg';

import styles from './styles';

import type {MenuItemType} from '../../types/types';

type Props = {};
type State = {
  menuItems: Array<MenuItemType>,
  searchTextValue: string,
};

export default class MenuScene extends Component<Props, State> {
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
    searchTextValue: '',
  };

  _onChangeText = (text: string) => {
    this.setState({searchTextValue: text});
  };

  _onMenuItemClicked = (menuItem: MenuItemType) => {
    let {navigation} = this.props;

    navigation.navigate('MenuDetailScene', {menuItem});
  };

  render() {
    return (
      <View style={styles.flex1}>
        <View style={[styles.flex1, styles.topBar]}>
          <Text style={styles.title}>Menu List</Text>
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
            <SearchBar
              placeholder="Find Menu Here"
              textValue={this.state.searchTextValue}
              onChangeText={this._onChangeText}
            />
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
              <View style={[styles.menuWrapper, styles.active, styles.flex1]}>
                <Text style={[styles.menuText, {fontWeight: 'bold'}]}>
                  All Menus
                </Text>
              </View>
              <View style={[styles.menuWrapper, styles.flex1]}>
                <Text style={styles.menuText}>Main Course</Text>
              </View>
            </View>
            <View style={{flex: 8.5, backgroundColor: '#FFFFFF'}}>
              <ScrollView>
                {this.state.menuItems.map(item => {
                  if (item.name.includes(this.state.searchTextValue))
                    return (
                      <MenuItem
                        menuItem={item}
                        key={item.id}
                        onMenuItemClicked={this._onMenuItemClicked}
                      />
                    );
                })}
              </ScrollView>
            </View>
          </View>
        </View>

        <View style={[styles.footer, styles.flex1]}>
          <ImageButton style={styles.icon} imageSource={graph} />
          <ImageButton style={styles.icon} imageSource={label} />
          <ImageButton style={styles.icon} imageSource={store} />
        </View>
      </View>
    );
  }
}
