import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const orders1 = () => {
  return (
    <View>
      <Image style={{ top: 100, left: 20 }} source={require('../../../../../image/Arrow.png')}></Image>
            <Text style={{ width: 72, height: 29, left: 150, top:85, fontSize: 22, fontFamily: 'Klarna Tex', color: '#FF5E00', fontWeight: '700' }}>Orders</Text>
            <Text style={{width:77,height:24,top:131,left:73,fontSize:19,fontWeight:'400',color:'#FF5E00'}}>Ongoing</Text>
            <Text style={{width:67,height:24,top:105,left:250,color:'#804F1E',fontWeight:'400',fontSize:19}}>History</Text>
            <Image style={{top:130,width:230,height:250,left:60}} source={require('../../../../../image/Player.png')}></Image>
            <Text style={{width:250,height:40,top:150,left:70,fontSize:15,fontWeight:'400',color:'#804F1E'}}>There is n ongoing order right now. You can order from home</Text>
    </View>
  )
}

export default orders1

const styles = StyleSheet.create({})