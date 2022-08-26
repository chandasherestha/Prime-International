import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {isRequired} from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import {useNavigation} from '@react-navigation/native';
import {FONTS} from '../assets';
import styles from '../../style/SelectionPage'

export default function SelectionPage() {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={styles.Comapnyimage}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.TopImage}></Image>
      </View>
      <View style={styles.MainContainer}>
        <View style={styles.SubContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate('CreateNewShop')}>
            <Image
              style={styles.SubImage}
              source={require('../assets/store-1.png')}></Image>
          </TouchableOpacity >
          <TouchableOpacity onPress={()=>navigation.navigate('CreateNewShop')}>
          <Text style={styles.txt}>Create New Shop</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.SubContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate('Scan')}>
            <Image
              style={styles.SubImage}
              source={require('../assets/qr-code-1.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Scan')}>
          <Text style={styles.txt}>Scan QR Code</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.MainContainer}>
        <View style={styles.SubContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate('FloorList')}>
            <Image
              style={styles.SubImageSec}
              source={require('../assets/inventory-1.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('FloorList')}>
          <Text style={styles.text}>Floor Listing</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.SubContainer}>
          <TouchableOpacity onPress={()=>navigation.navigate('OrderListing')}>
            <Image
              style={styles.SubImageSec}
              source={require('../assets/cargo-1.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('OrderListing')}>
          <Text style={styles.text}>Order Listing</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
