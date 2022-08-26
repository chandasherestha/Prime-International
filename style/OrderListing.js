import {StyleSheet} from 'react-native';
import {FONTS} from '../screen/assets';

export default StyleSheet.create({
  container: {backgroundColor: '#fff', width: '100%'},
  floorlisting: {
    alignSelf: 'center',
    width: '60%',
    height: 47,
   
    marginTop: 81,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inventoryimg: {width: 37, height: 37, marginTop: 5},
  floorlisitingtxt: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
    marginTop: 0,
  },
  storename: {
    width: '80%',
    height: 36,
    backgroundColor: '#77D85E',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 43,
    alignSelf: 'center',
  },
  address: {
    width: '80%',
    height: 36,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  addressdesc: {
    width: '50%',
    height: 36,
    borderWidth: 1,
    borderColor: '#C6C6C6',
  },
  contactdesc: {
    width: '50%',
    height: 36,
    borderWidth: 1,
    borderColor: '#C6C6C6',
  },
  addresstxt: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
    textAlign: 'center',
    marginTop: 8,
  },
  tablehead: {
    height: 30,
    borderWidth: 1,
    borderColor: '#B9B9B9',
    backgroundColor: '#77D85E',
  },
  headingtext: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  productdesc: {
    textAlign: 'center',
    color: '#000',
    fontSize: 12,
    fontWeight: '600',
  },
  lastTableStyle: {borderWidth: 1, borderColor: '#B9B9B9'},
  tableStyle: {width: '80%', alignSelf: 'center'},
});
