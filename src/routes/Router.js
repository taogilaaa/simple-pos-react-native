// @flow

import React from 'react';
import {View} from 'react-native';

import MainRouter from './main/MainRouter';

export default function Router() {
  return (
    <View style={{flex: 1}}>
      <MainRouter />
    </View>
  );
}
