import { View, Text,StyleSheet,Image,TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import styles from '../../style/SalesPersonRegister';
export default function SalesPersonRegister() {
    const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <ScrollView>
     <View style={styles.companyImage}>
     <Image 
      source={require('../assets/logo.png')}
      style={styles.TopImage}></Image>
     </View>
     <View>
       <Text style={styles.title}>Just a step to go!</Text>
     </View>
     <View>
       <Text style={styles.subtitle}>Please fill up the form and we will have a wonderful journey together</Text>
     </View>
     <View>
       <Text style={styles.inputtext}>Full Name</Text>
     </View>
     <View style={styles.input}>
     <TextInput placeholder='Full Name'></TextInput>
     </View>
     <View>
       <Text style={styles.inputtext}>Email address</Text>
     </View>
     <View style={styles.input}>
     <TextInput placeholder='Email address'></TextInput>
     </View>
     <View>
       <Text style={styles.inputtext}>Password</Text>
     </View>
     <View style={styles.input}>
     <TextInput secureTextEntry={true} placeholder='Password'></TextInput>
     </View>
     <View>
       <Text style={styles.inputtext}>Confirm Password</Text>
     </View>
     <View style={styles.input}>
     <TextInput secureTextEntry={true} placeholder='Confirm Password'></TextInput>
     </View>
     <View style={styles.registerbtn}>
       <TouchableOpacity onPress={() => navigation.navigate('AccountVerification')}>
     <Text style={styles.btntext}>Register</Text>
     </TouchableOpacity>
     </View>
    <View style={styles.loginwrapper}>
     <TouchableOpacity onPress={() => navigation.navigate('')}><Text style={styles.membertext}>Already member</Text></TouchableOpacity>
     <Text style={styles.membertext}>|</Text>
     <TouchableOpacity onPress={() => navigation.navigate('SelectionPage')}><Text style={styles.logintext}>Login Now</Text></TouchableOpacity>

    </View>
    </ScrollView>
    </View>
  )
}
