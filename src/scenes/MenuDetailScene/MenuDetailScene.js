// @flow
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {Button, Card, FormInput} from 'react-native-elements';

import defaultImage from '../../assets/images/burger.jpg';

import type {MenuItemType} from '../../types/types';

import styles from './styles';

type Props = {
  menuItem: MenuItemType,
};
type State = {};

export default class MenuDetailScene extends Component<Props, State> {
  render() {
    let {navigation} = this.props;
    let {menuItem} = navigation.state.params;

    return (
      <View style={styles.flex_1}>
        <View style={{flex: 9, backgroundColor: '#f2f4f8'}}>
          <Card
            title={menuItem ? menuItem.name : 'NO_ITEM'}
            containerStyle={{
              flex: 1,
              marginVertical: 20,
              backgroundColor: 'white',
              borderRadius: 10,
              marginHorizontal: 15,
              marginTop: 50,
              marginBottom: 150,
            }}
          >
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                style={{width: 150, height: 150}}
                source={
                  menuItem && menuItem.imageResource
                    ? menuItem.imageResource
                    : defaultImage
                }
              />
            </View>
            <FormInput placeholder="Name" value={menuItem && menuItem.name} />
            <FormInput
              placeholder="Price"
              value={menuItem && String(menuItem.price)}
            />
            <FormInput placeholder="Type" value={menuItem && menuItem.type} />
          </Card>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <Button
            containerViewStyle={{
              flex: 1,
              marginLeft: 0,
              marginRight: 0,
            }}
            buttonStyle={{flex: 1, backgroundColor: '#ff5723'}}
            icon={{name: 'cancel'}}
            title="BACK"
            onPress={() => navigation.goBack()}
          />
          <Button
            containerViewStyle={{
              flex: 1,
              marginLeft: 0,
              marginRight: 0,
            }}
            icon={{name: 'save'}}
            buttonStyle={{flex: 1, backgroundColor: '#89c24a'}}
            title="SAVE"
          />
        </View>
      </View>
    );
  }
}
