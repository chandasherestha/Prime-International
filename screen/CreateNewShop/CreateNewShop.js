import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {TextInput, Provider} from 'react-native-paper';
import React, {useState} from 'react';
import {FONTS} from '../assets';
import {isRequired} from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import {useNavigation} from '@react-navigation/native';
import styles from '../../style/CreateNewShop';
import DropDown from 'react-native-paper-dropdown';

export default function CreateNewShop() {
  const [name, setName] = React.useState('');
  const [owner, setOwner] = React.useState('');
  const [contact, setContact] = React.useState('');
  const [gps, setGPS] = React.useState('');

  const navigation = useNavigation();

  const [showDropDown, setShowDropDown] = useState(false);
  const [outlet, setOutlet] = useState('');
  const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
  const [address, setAddress] = useState('');
  const [MultiSelectDropDown, setMultiSelectDropDown] = useState(false);
  const [provience, setProvience] = useState('');

  const outletList = [
    {
      label: 'Bandipur',
      value: 'Bandipur',
    },
    {
      label: 'Bandipur',
      value: 'Bandipur',
    },
    {
      label: 'Bandipur',
      value: 'Bandipur',
    },
  ];
  const addressList = [
    {
      label: 'ktm',
      value: 'ktm',
    },
    {
      label: 'ktm',
      value: 'ktm',
    },
    {
      label: 'ktm',
      value: 'ktm',
    },
    {
      label: 'ktm',
      value: 'ktm',
    },
  ];
  const provienceList = [
    {
      label: '1',
      value: '1',
    },
    {
      label: '2',
      value: '2',
    },
    {
      label: '3',
      value: '3',
    },
  ];
  return (
    
    <Provider>
    
      <View style={styles.MainContainer}>
        <ScrollView>
        <View style={styles.companyImage}>
          <Image
            style={styles.CompanyLogo}
            source={require('../assets/logo.png')}></Image>
        </View>
        <Text style={styles.MainHeader}>Create New Shop</Text>
        <View style={styles.FirstSubContainer}>
          <TextInput
            label="Shop Name"
            value={name}
            onChangeText={name => setName(name)}
            mode="outlined"
            placeholder="Shop Name"
            style={styles.Box}
          />
          <TextInput
            label="Owner"
            value={owner}
            onChangeText={owner => setOwner(owner)}
            mode="outlined"
            placeholder="Owner"
            style={styles.Box}
          />
          <DropDown
            label={'Type of Outlet'}
            mode={'outlined'}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={outlet}
            setValue={setOutlet}
            list={outletList}
            placeholder="Type of Outlet"
            
          />
        </View>
        <View style={styles.SecondSubContainer}>
          <DropDown
            label={'Address'}
            mode={'outlined'}
            visible={MultiSelectDropDown}
            showDropDown={() => setMultiSelectDropDown(true)}
            onDismiss={() => setMultiSelectDropDown(false)}
            value={address}
            setValue={setAddress}
            list={addressList}
            placeholder="Address"
          />
          <DropDown
            label={'Provience'}
            mode={'outlined'}
            visible={showMultiSelectDropDown}
            showDropDown={() => setShowMultiSelectDropDown(true)}
            onDismiss={() => setShowMultiSelectDropDown(false)}
            value={provience}
            setValue={setProvience}
            list={provienceList}
            placeholder="Provience"
          />
          <TextInput  keyboardType='numeric'
            label="Contact No."
            value={contact}
            onChangeText={contact => setContact(contact)}
            mode="outlined"
            placeholder="Contact No."
            style={styles.Box}
          />
          <TextInput
            label="GPS Location"
            value={gps}
            onChangeText={gps => setGPS(gps)}
            mode="outlined"
            placeholder="GPS Location"
            style={styles.Box}
          />
        </View>
        <View style={styles.CreateNewShopBtn}>
          <TouchableOpacity onPress={() => navigation.navigate('AfterQRCode')}>
            <Text style={styles.BtnText}>Create New Shop</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    </Provider>
  );
}
