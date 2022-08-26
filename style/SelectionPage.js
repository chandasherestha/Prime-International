import { StyleSheet } from "react-native";
import { FONTS } from "../screen/assets";
export default StyleSheet.create({
    main: {backgroundColor: '#fff', flex: 1},
    Comapnyimage:{alignSelf:"center"},
  TopImage: {width: 226, height: 64, marginTop: 72},
  MainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 60,
  },
  SubContainer: {
    width: 147,
    height: 147,
    borderWidth: 1,
    borderColor: '#4A96C6',
    borderRadius: 16,
    shadowColor: '#000',
    elevation: 8,
    backgroundColor: '#fff',
  },
  SubImage: {
    width: 115,
    height: 115,
    marginLeft: 17,
    marginTop: 15,
    marginRight: 15,
  },
  SubImageSec: {
    width: 84,
    height: 84,
    marginLeft: 34,
    marginTop: 32,
    marginRight: 29,
  },
  txt: {
    fontSize: 13,
    fontWeight: '400',
    color: '#000',
    marginLeft: 20,
    marginTop: 26,
    ...FONTS.h2,
  },
  text: {
    fontSize: 13,
    fontWeight: '400',
    color: '#000',
    marginLeft: 30,
    marginTop: 36,
    ...FONTS.h2,
  },
})