// @flow
import React, {Component} from 'react';
import {View, TextInput, Text, Image, StyleSheet} from 'react-native';
import searchIcon from '../assets/images/search.jpeg';

type State = {};
type Props = {
  placeholder: string,
  textValue: string,
  style?: StyleSheetTypes,
  icon?: number,
  onChangeText?: (text: string) => void,
};

class SearchBar extends Component<Props, State> {
  render() {
    let {placeholder, style, icon, textValue, onChangeText} = this.props;
    return (
      <View style={[localStyle.flex, localStyle.textInput]}>
        <Image style={localStyle.icon} source={icon ? icon : searchIcon} />
        <TextInput
          placeholder={placeholder}
          value={textValue}
          style={[
            localStyle.flex,
            localStyle.paddingTextInput,
            textValue ? localStyle.colorBlack : localStyle.colorGray,
            style,
          ]}
          underlineColorAndroid="transparent"
          onChangeText={onChangeText}
        />
      </View>
    );
  }
}

const localStyle = StyleSheet.create({
  flex: {
    flex: 1,
  },
  paddingTextInput: {
    paddingLeft: 5,
  },
  colorGray: {
    color: '#DEDEDE',
  },
  colorBlack: {
    color: '#393939',
  },
  textInput: {
    borderWidth: 2,
    flexDirection: 'row',
    borderColor: '#F5F5F5',
    marginHorizontal: 20,
    marginVertical: 15,
    justifyContent: 'flex-start',
    padding: 5,
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default SearchBar;
