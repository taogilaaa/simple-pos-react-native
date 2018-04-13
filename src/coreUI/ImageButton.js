// @flow
import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

type State = {};
type Props = {
  imageSource?: number,
  style?: StyleSheetTypes,
};

class ImageButton extends Component<Props, State> {
  render() {
    let {style, imageSource} = this.props;
    return (
      <TouchableOpacity style={localStyle.flex}>
        <View style={[localStyle.flex, localStyle.viewStyle]}>
          <Image style={style} source={imageSource} />
        </View>
      </TouchableOpacity>
    );
  }
}

const localStyle = StyleSheet.create({
  flex: {
    flex: 1,
  },
  viewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ImageButton;
