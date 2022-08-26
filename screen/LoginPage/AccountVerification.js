import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONTS} from '../../screen/assets';
import styles from '../../style/AccountVerification';
import {isRequired} from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import {useNavigation} from '@react-navigation/native';
const AccountVerification = () => {
  const navigation = useNavigation();
  return (
    <View
      style={styles.wrapperContainer}>
      <View style={styles.companyLogo}>
        <Image
          source={require('../../screen/assets/logo.png')}
          style={styles.companyImage}></Image>
      </View>
      <View>
        <Text
          style={styles.title}>
          Account Verification
        </Text>
      </View>
      <View>
        <Text
          style={styles.subTitle}>
          Please enter the SMS Code
        </Text>
      </View>
      <View>
        <Text
          style={styles.subText}>
          A text message with verification code was just sent to (+977)
          9801015325
        </Text>
      </View>
    
      <View
        style={styles.mainBox}>
        <View
          style={styles.firstBox}>
          <Text
            style={styles.firstDigit}>
            7
          </Text>
        </View>
        <View
          style={styles.firstBox}>
          <Text  style={styles.firstDigit}>5</Text>
        </View>
        <View
          style={styles.firstBox}>
          <Text  style={styles.firstDigit}>7</Text>
        </View>
        <View
          style={styles.firstBox}>
          <Text  style={styles.firstDigit}>0</Text>
        </View>
      </View>
      <View style={styles.container}>
          <View>
              <Text style={styles.getCodeText}>Didn’t get a code?</Text>
          </View>
          <View>
              <Text style={styles.resendText}>Resend </Text>
          </View>
      </View>
     <View style={styles.sendBtn}>
         <TouchableOpacity onPress={() => navigation.navigate('SelectionPage')}> 
             <Text style={styles.sendBtnText}>Send Activation Code</Text>
         </TouchableOpacity>
     </View>
    </View>
  );
};
export default AccountVerification;
