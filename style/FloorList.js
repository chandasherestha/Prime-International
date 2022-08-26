import {StyleSheet} from 'react-native';
import {FONTS} from '../screen/assets';
export default StyleSheet.create({
  container: {backgroundColor: '#fff', flex: 1},
  floorlisting: {
    width: '60%',
    height: 47,
    marginTop: 81,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
  },
  inventoryimg: {width: 37, height: 37, marginTop: 5},
  floorlisitingtxt: {
    fontSize: 30,
    fontWeight: '700',
    color: '#000',
    marginTop: 0,
  },
  storename: {
    width: "80%",
    height: 36,
    backgroundColor: '#0082B9',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 40,
   alignSelf:"center"
  },
  storeNameDesc:{fontSize:18,fontWeight:"700",color:"#fff",textAlign:"center",marginTop:5},
  address: {width: "80%", height: 36, flexDirection: 'row',alignSelf:"center"},
  addressdesc: {
    width: "50%",
    height: 36,
    borderWidth: 1,
    
    borderColor: '#C6C6C6',
  },
  contactdesc: {width: "50%", height: 36, borderWidth: 1, borderColor: '#C6C6C6'},
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
    backgroundColor: '#0082B9',
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
  tableStyle:{width:"80%",alignSelf:"center"},
  lastTableStyle:{width:"80%",alignSelf:"center",marginBottom:84}
});
