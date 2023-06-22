import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const AccountScreens = () => {
  return (
    <View style={styles.body}>
    <Image style={{top:30, left:20}} source={require('../../../../image/Arrow.png')}></Image>
    <Text style={{width:95,height:22,left:150,top:25, fontSize:20,fontFamily:'Klarna Tex',color:'#FF5E00'}}>Account</Text>
    <View style={styles.profile}>
    <Image style={{top:30}} source={require('../../../../image/user.png')}></Image>
    <Text style={{left:60,color:'#6D3805',width:57,height:27,fontSize:18,fontFamily:'Klarna Tex',fontWeight:'bold'}}>Profile</Text>
    </View>
    <View style={styles.profile}>
    <Image style={{top:30,backgroundColor:'#FF5E00',width:30,height:30,borderRadius:30}} source={require('../../../../image/mumu.png')}></Image>
    <Text style={{left:60,color:'#6D3805',width:57,height:27,fontSize:18,fontFamily:'Klarna Tex',fontWeight:'bold'}}>Orders</Text>
    </View>
    <View style={styles.profile}>
    <Image style={{top:30,left:7}} source={require('../../../../image/Address.png')}></Image>
    <Text style={{left:61,color:'#6D3805',width:71 ,height:27,fontSize:18,fontFamily:'Klarna Tex',fontWeight:'bold'}}>Address</Text>
    </View>
    <View style={styles.profile}>
    <Image style={{top:30}} source={require('../../../../image/thanhtoan.png')}></Image>
    <Text style={{left:60, top:-10,color:'#6D3805',width:79,height:27,fontSize:18,fontFamily:'Klarna Tex',fontWeight:'bold'}}>Payment</Text>
    </View>
     </View>
    
  )
}

export default AccountScreens

const styles = StyleSheet.create({
  profile:{
   top:70,
   left:20
   
  },
  body:{
    width:375,
    height:812,
  }

})