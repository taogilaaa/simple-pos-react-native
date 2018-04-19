// @flow

import {StackNavigator} from 'react-navigation';

import MenuScene from '../../scenes/MenuScene/MenuScene';
import MenuDetailScene from '../../scenes/MenuDetailScene/MenuDetailScene';

export default StackNavigator(
  {
    MenuScene: {
      screen: MenuScene,
      navigationOptions: () => {
        return {
          header: null,
        };
      },
    },
    MenuDetailScene: {
      screen: MenuDetailScene,
      navigationOptions: () => {
        return {
          header: null,
        };
      },
    },
  },
  {
    initialRouteName: 'MenuScene',
  },
);
