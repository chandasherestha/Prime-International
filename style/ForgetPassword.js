import { StyleSheet } from "react-native"
import { FONTS } from "../screen/assets"
export default StyleSheet.create({
    wrapperContainer:{backgroundColor:"#fff",flex:1},
    companyLogo:{alignSelf:"center"},
    companyImage:{width:226,height:64,marginTop:72},
    title:{color:"black",fontSize:28,fontFamily:["Open Sans"]["700"], paddingLeft:46, paddingTop:63},
    subTitle:{fontSize:16,color: '#787878',fontFamily:["Open Sans"]["500"],paddingLeft:46,paddingTop:8},
    firstText:{color:'#212121',fontFamily:["Open Sans"]["600"],fontSize:14,paddingLeft:46,paddingTop:30},
    inputField:{width:"80%",height:44,backgroundColor: "#E5E5E5",borderRadius:4,marginTop:8,alignSelf:"center"},
    numberInput:{color:"#000000",opacity:50, paddingLeft:12,paddingTop:12},
    sendBtn:{width:"80%",height:44,backgroundColor: "#4A96C6",borderRadius:4,marginTop:8,borderRadius:4,marginTop:104,alignSelf:"center"},
    sendBtnText:{color:"white",fontFamily:["Roboto"]['400'],fontSize:16,textAlign:'center',textAlign:"center",paddingTop:10,paddingBottom:10},
    
})