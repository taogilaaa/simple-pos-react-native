import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
