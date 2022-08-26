import { View, Text, Image, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import {useNavigation} from '@react-navigation/native';
import styles from '../../style/ForgetPassword'
const ForgetPassword =()=> {
    const navigation = useNavigation();
  return (
    <View style={styles.wrapperContainer}>
        <View style={styles.companyLogo}>
      <Image 
      source={require('../assets/logo.png')}
      style={styles.companyImage}></Image>
      </View>
      <View>
          <Text style={styles.title}>Forgot Password</Text>
      </View>
      <View>
          <Text style={styles.subTitle}>Don’t worry, We have provision to reset your password.</Text>
      </View>
      <View>
          <Text style={styles.firstText}>Phone Number</Text>
      </View>
      <View style={styles.inputField}>
          <TextInput 
          keyboardType='numeric'
          style={styles.numberInput}>+977 |</TextInput>
      </View>
      <View style={styles.sendBtn}>
         <TouchableOpacity onPress={() => navigation.navigate('AccountVerification')}>
             <Text style={styles.sendBtnText}>Send recovery code</Text>
         </TouchableOpacity>
      </View>
    </View>
  )
}

export default ForgetPassword;