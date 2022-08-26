import { View, Text, Image, TouchableOpacity ,StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import {FONTS} from '../assets';
import {useNavigation} from '@react-navigation/native';
import styles from '../../style/TakeOrder';

export default function AfterQRCode2() {
    const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
       <View style={styles.companyImage}>
         <Image style={styles.companylogo} source={require('../assets/logo.png')}></Image>
         </View> 
         <View style={styles.floorStockTitle}>
      <View style={{paddingEnd:20,paddingTop:5}}>
           <Image source={require('../assets/inventory-2.png')} style={styles.inventoryStyle}></Image>
           </View>
           <Text style={{fontSize:30,...FONTS.h2,color:"#000",fontWeight:"700"}}>Take Order</Text>
           </View>

         <View style={styles.first}>
           <View style={styles.heading}>
             <Text style={styles.headingtitle}>BANDIPUR</Text>
           </View>
           <View style={{position:"absolute"}}>
             <Image style={styles.brandImageFirst} source={require('../assets/image-2.png')}></Image>
           </View>
           <View style={styles.colbox}>
            <View style={{flexDirection:'column'}}>
              <View style={styles.colfirst}>
                <Text style={styles.colfirsttext}>FULL</Text>
              </View>
              <View style={styles.colsecond}>
                <Text style={styles.colsecondtext}>100</Text>
              </View>
            </View>
            <View style={{flexDirection:'column',marginLeft:10}}>
              <View style={styles.colfirst}>  
               <Text style={styles.colfirsttext}>HALF</Text>
               </View>
              <View style={styles.colsecond}>
              <Text style={styles.colsecondtext}>1000</Text>
              </View>
            </View>
            <View style={{flexDirection:'column',marginLeft:10}}>
              <View style={styles.colfirst}>
              <Text style={styles.colfirsttext}>QTR</Text>
              </View>
              <View style={styles.colsecond}>
              <Text style={styles.colsecondtext}>3600</Text>
              </View>
            </View>
           </View>
         </View>
         <View style={styles.first}>
           <View style={styles.heading}>
             <Text style={styles.headingtitle}>VIRJIN</Text>
           </View>
           <View style={{position:"absolute",width:"20%"}}>
             <Image style={styles.brandImageSecond} source={require('../assets/image-3.png')}></Image>
           </View>
           <View style={styles.colbox}>
            <View style={{flexDirection:'column'}}>
              <View style={styles.colfirst}>
                <Text style={styles.colfirsttext}>FULL</Text>
              </View>
              <View style={styles.colsecond}>
                <Text style={styles.colsecondtext}>100</Text>
              </View>
            </View>
            <View style={{flexDirection:'column',marginLeft:10}}>
              <View style={styles.colfirst}>  
               <Text style={styles.colfirsttext}>HALF</Text>
               </View>
              <View style={styles.colsecond}>
              <Text style={styles.colsecondtext}>1000</Text>
              </View>
            </View>
            <View style={{flexDirection:'column',marginLeft:10}}>
              <View style={styles.colfirst}>
              <Text style={styles.colfirsttext}>QTR</Text>
              </View>
              <View style={styles.colsecond}>
              <Text style={styles.colsecondtext}>3600</Text>
              </View>
            </View>
           </View>
         </View>
         <View style={styles.first}>
           <View style={styles.heading}>
             <Text style={styles.headingtitle}>HIGHLANDER</Text>
           </View>
           <View style={{position:"absolute"}}>
             <Image style={styles.brandImageThird} source={require('../assets/image-4.png')}></Image>
           </View>
           <View style={styles.colbox}>
            <View style={{flexDirection:'column'}}>
              <View style={styles.colfirst}>
                <Text style={styles.colfirsttext}>FULL</Text>
              </View>
              <View style={styles.colsecond}>
                <Text style={styles.colsecondtext}>100</Text>
              </View>
            </View>
            <View style={{flexDirection:'column',marginLeft:10}}>
              <View style={styles.colfirst}>  
               <Text style={styles.colfirsttext}>HALF</Text>
               </View>
              <View style={styles.colsecond}>
              <Text style={styles.colsecondtext}>1000</Text>
              </View>
            </View>
            <View style={{flexDirection:'column',marginLeft:10}}>
              <View style={styles.colfirst}>
              <Text style={styles.colfirsttext}>QTR</Text>
              </View>
              <View style={styles.colsecond}>
              <Text style={styles.colsecondtext}>3600</Text>
              </View>
            </View>
           </View>
         </View>
         <View style={styles.last}>
           <View style={styles.remark}>
             <Text style={{fontSize:18,fontWeight:"700",color:"#fff",textAlign:"center"}}>Remarks</Text>
           </View>
         </View>
         <View style={styles.submitbtn}>
           <TouchableOpacity onPress={() => navigation.navigate('')} >
             <Text style={{fontSize:14,fontWeight:"700",color:"#fff",textAlign:"center",marginTop:5}}>SUBMIT</Text>
           </TouchableOpacity>
         </View>
         </ScrollView>
    </View>
  )
}
