import {StyleSheet} from 'react-native';
import { FONTS } from '../screen/assets';
export default StyleSheet.create({
    Container:{backgroundColor:"#fff",flex:1},
    companyImage:{alignSelf:"center"},
    TopImage:{width:226,height:64,marginTop:72},
    title:{fontSize:28,fontWeight:"700",color:"#000",marginLeft:46,marginTop:38},
    subtitle:{fontSize:16,fontWeight:"300",marginLeft:46,marginTop:8},
    inputtext:{color:"#212121",fontSize:14,fontWeight:"600",...FONTS.largeTitle,marginTop:20,marginLeft:46},
    input:{width:"80%",height:44,backgroundColor:"rgba(239, 241, 246, 0.5)",borderRadius:4,marginTop:8,alignSelf:"center"},
    registerbtn:{width:"80%",height:44,backgroundColor:"#4A96C6",borderRadius:4,marginTop:30,alignSelf:"center"},
    btntext:{paddingLeft:138,paddingTop:10,...FONTS.h2,fontSize:16,fontWeight:"400",color:"#fff"},
    loginwrapper:{flexDirection:"row",justifyContent:"space-around",marginBottom:173},
    membertext:{fontSize:16,fontWeight:"400",marginTop:20,color:"#000"},
    logintext:{fontSize:16,fontWeight:"400",marginTop:20,color:"#2150F6"}
})