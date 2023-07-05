import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Address = () => {
  return (
    <View>
      <View>
      <Image style={{ top:50, left: 20 }} source={require('../../../../../image/Arrow.png')}></Image>
            <Text style={{ width: 119, height: 35, left: 150, top:30, fontSize: 22, fontFamily: 'Klarna Tex', color: '#FF5E00', fontWeight: '700' }}>Addresses</Text>
            <Image style={{top:5,left:350}} source={require('../../../../../image/Add1.png')}></Image>
      </View>
      <View>
        <Image style={{top:90,left:20,width:25,height:25}} source={require('../../../../../image/Home.png')}></Image>
        <Text style={{width:50,height:22,top:60,left:60,fontSize:17,color:'#6D3805',fontWeight:'700'}}>Home</Text>
        <Text style={{width:145,height:20,top:65,left:55,fontSize:16,color:'#6D3805CC',fontWeight:'500'}}>Lungangen 6,41722</Text>
        <Image style={{top:40,left:350,width:8,height:13}} source={require('../../../../../image/backarrow.png')}></Image>
      </View>
      <View>
        <Image style={{top:90,left:20,width:25,height:25}} source={require('../../../../../image/Save.png')}></Image>
        <Text style={{width:52,height:22,top:60,left:60,fontSize:17,color:'#6D3805',fontWeight:'700'}}>Office</Text>
        <Text style={{width:145,height:20,top:65,left:55,fontSize:16,color:'#6D3805CC',fontWeight:'500'}}>Lungangen 6,41722</Text>
        <Image style={{top:40,left:350,width:8,height:13}} source={require('../../../../../image/backarrow.png')}></Image>
      </View>
    </View>
  )
}

export default Address

const styles = StyleSheet.create({})