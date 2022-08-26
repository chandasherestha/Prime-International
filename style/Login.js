import { StyleSheet } from 'react-native';
import { FONTS } from '../screen/assets';
export default StyleSheet.create({
  wrapperContainer: { backgroundColor: 'white', flex: 1, padding: 30 },
  companyLogo: { width: 226, height: 64, marginTop: 72 },
  firstTitle: {
    fontSize: 14.81,
    fontFamily: ['Open Sans']['600'],
    paddingTop: 61,
    paddingBottom:5,
    color: 'black',
  },
  firstInput: {
    width: "100%",
    height: 46,
    backgroundColor: '#E5E5E5',
    borderRadius: 4,
    marginTop: 7.63,
    // borderStartWidth: 1,
    
  },
  firstText: {
    // paddingLeft: 12,
    // paddingBottom: 13,
    // paddingTop: 13.38,
    color: 'black',
    opacity: 50,
  },
  secondTitle: {
    fontSize: 14.81,
    fontFamily: ['Open Sans']['600'],
    paddingTop: 21,
    color: 'black',
  },
  secondInput: {
    width: "100%",
    height: 46,
    backgroundColor: '#E5E5E5',
    borderRadius: 4,
    marginTop: 7,
  },
  secondText: {
    // paddingLeft: 12,
    // paddingBottom: 13.28,
    // paddingTop: 13.38,
    
    color: 'black',
    opacity: 50,
  },
  forgetText: {
    fontSize: 14.81,
    color: '#2150F6',
    paddingTop: 10,
    alignSelf: "flex-end"

  },
  login: {
    width: "100%",
    height: 46.56,
    marginTop: 17.09,
    backgroundColor: '#4A96C6',
    borderRadius: 4.23,
  },
  loginText: {
    color: 'white',
    fontSize: 16.93,
    paddingTop: 10.58,
    textAlign:"center"
  },
  registerText: {
    fontSize: 16.93,
    color: '#2150F6',
    textAlign:"center",
    paddingTop: 17.44,
  },
});
