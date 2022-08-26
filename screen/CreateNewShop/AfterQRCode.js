import { View,Text,Image,TouchableOpacity, ScrollView,} from 'react-native';
import React from 'react';
import {FONTS} from '../assets';
import {useNavigation} from '@react-navigation/native';
import styles from '../../style/AfterQRCode'

export default function AfterQRCode() {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapperContainer}>
      <ScrollView>
      <View style={styles.companyLogo}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.companyImage}></Image>
      </View>
      <View
        style={styles.firstContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('AfterQRCode2')}>
          <Image
            source={require('../assets/inventory-1.png')}
            style={styles.firstImage}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AfterQRCode2')}>
          <Text
            style={styles.firstText}>
            Floor Stock
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={styles.secondContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('AfterQRCode2')}>
          <Image
            source={require('../assets/cargo-1.png')}
            style={styles.secondImage}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AfterQRCode2')}>
          <Text
            style={styles.secondText}>
            Take Order 
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.thirdContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('TakeOrder')}>
        <Image source={require('../assets/delivery-truck.png')}
      style={styles.thirdImage}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TakeOrder')}>
        <Text
            style={styles.secondText}>
         Dispatch
          </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}
