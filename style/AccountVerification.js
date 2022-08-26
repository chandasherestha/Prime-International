import { StyleSheet } from "react-native";
import { FONTS } from "../screen/assets";
export default StyleSheet.create({
        wrapperContainer:{ backgroundColor:'white',flex: 1,},
        companyLogo:{alignSelf:"center"},
        companyImage:{width: 226,height: 64,marginTop: 72,},
        title:{color: 'black',...FONTS.largeTitle,fontSize: 28,paddingLeft: 51,paddingTop: 64,fontWeight: '700'},
        subTitle:{...FONTS.largeTitle,fontWeight: '500',fontSize: 16,color: '#787878',marginTop: 8,marginLeft: 51,},
        subText:{...FONTS.largeTitle,fontWeight: '600',color: 'black',fontSize: 14,textAlign:"center",marginTop: 32,marginRight: 42,marginLeft:20},
        mainBox:{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',justifyContent:'space-around',padding:22},
        firstBox:{width: 48,height: 48,backgroundColor: 'rgba(151, 151, 151, 0.13)',borderWidth: 1,borderColor: 'rgba(147, 147, 170, 0.25)',borderRadius: 4,justifyContent: 'space-between',},
        firstDigit:{fontSize: 17,color: '#007AFF',textAlign:"center",paddingTop: 13,paddingTop: 13},
        container:{flexDirection:"row",justifyContent:"space-around"},
        getCodeText:{...FONTS.h1,fontSize:13,fontWeight:"500",color:"#1E1F20",paddingTop:24},
        resendText:{...FONTS.h1,fontSize:13,fontWeight:"500",color:"#2150F6",paddingTop:24},  
        sendBtn:{width:"80%",height:44,borderRadius:4,marginTop:34,backgroundColor:"#4A96C6",alignSelf:"center"},
        sendBtnText:{...FONTS.h2,fontWeight:"400",fontSize:16,color:"white",paddingLeft:87,paddingRight:87,paddingTop:10,paddingBottom:10}
})