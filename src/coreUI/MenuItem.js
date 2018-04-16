// @flow
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import defaultImage from '../assets/images/burger.jpg';

import type {MenuItemType} from '../types/types';

type State = {};
type Props = {
  menuItem: MenuItemType,
  style?: StyleSheetTypes,
};

class MenuItem extends Component<Props, State> {
  render() {
    let {menuItem, style} = this.props;
    return (
      <View style={localStyle.container}>
        <View style={localStyle.flex_1}>
          <Image
            style={localStyle.menuIcon}
            source={
              menuItem.imageResource ? menuItem.imageResource : defaultImage
            }
          />
        </View>
        <View style={localStyle.menuDetail}>
          <Text style={localStyle.textPadding}>{menuItem.name}</Text>
          <Text style={[localStyle.textPadding, {color: '#afafaf'}]}>
            {menuItem.type}
          </Text>
          <Text>{`$${menuItem.price}`}</Text>
        </View>
      </View>
    );
  }
}

const localStyle = StyleSheet.create({
  flex_1: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#F8F8F8',
  },
  menuIcon: {
    width: 100,
    height: 100,
    marginRight: 15,
  },
  menuDetail: {
    flex: 2,
    alignItems: 'flex-start',
  },
  textPadding: {
    paddingBottom: 7,
  },
});

export default MenuItem;
