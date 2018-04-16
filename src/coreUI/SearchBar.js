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
};

class SearchBar extends Component<Props, State> {
  render() {
    let {placeholder, style, icon} = this.props;
    return (
      <View style={[localStyle.flex, localStyle.textInput]}>
        <Image style={localStyle.icon} source={icon ? icon : searchIcon} />
        <TextInput
          placeholder={placeholder}
          style={[localStyle.flex, localStyle.textInputPlaceholder, style]}
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

const localStyle = StyleSheet.create({
  flex: {
    flex: 1,
  },
  textInputPlaceholder: {
    paddingLeft: 5,
    color: '#DEDEDE',
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
