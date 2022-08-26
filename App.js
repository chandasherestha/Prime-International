// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screen/LoginPage/Login';
import ForgetPassword from './screen/LoginPage/ForgetPassword';
import AccountVerification from './screen/LoginPage/AccountVerification';
import SelectionPage from './screen/LoginPage/SelectionPage';
import CreateNewShop from './screen/CreateNewShop/CreateNewShop';
import AfterQRCode from './screen/CreateNewShop/AfterQRCode';
import AfterQRCode2 from './screen/CreateNewShop/AfterQRCode2';
import FloorList from './screen/FloorListing/FloorList';
import Scan from './screen/Scan/Scan';
import OrderListing from './screen/OrderListing/OrderListing';
import SalesPersonRegister from './screen/LoginPage/SalesPersonRegister';
import TakeOrder from './screen/Dispatch/TakeOrder';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AccountVerification"
          component={AccountVerification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SelectionPage"
          component={SelectionPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateNewShop"
          component={CreateNewShop}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AfterQRCode"
          component={AfterQRCode}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AfterQRCode2"
          component={AfterQRCode2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FloorList"
          component={FloorList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Scan"
          component={Scan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderListing"
          component={OrderListing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SalesPersonRegister"
          component={SalesPersonRegister}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="TakeOrder"
          component={TakeOrder}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
