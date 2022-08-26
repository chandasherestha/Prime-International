import React, {useState} from 'react';
import {FONTS} from '../assets';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {isRequired} from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import {useNavigation} from '@react-navigation/native';
import styles from '../../style/Login';
import {TextInput} from 'react-native-paper';
const App = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);
  return (
    <View style={styles.wrapperContainer}>
      <View style={{alignSelf: 'center'}}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.companyLogo}></Image>
      </View>
      <View>
        <Text style={styles.firstTitle}>PhoneNumber / Email address</Text>
      </View>
      <View style={styles.firstInput}>
        <TextInput
          style={styles.firstText, {height: '100%'}}
          placeholder="Email address"
          onChangeText={email => setEmail(email)}
        />
      </View>
      <View>
        <Text style={styles.secondTitle}>Password</Text>
      </View>
      <View style={styles.secondInput}>
        <TextInput
          style={styles.secondText,{ height:'100%'}}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)} secureTextEntry={hidePass ? true : false}
          right={<TextInput.Icon name={hidePass ? 'eye-off' : 'eye'}color={'#AEAEB2'}  onPress={() => setHidePass(!hidePass)}/>}
        />
      </View>
      <View style={styles.forgetText}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.login}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SelectionPage')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('SalesPersonRegister')}>
          <Text style={styles.registerText}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default App;
