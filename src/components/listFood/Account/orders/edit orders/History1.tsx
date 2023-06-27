import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const History1 = () => {
    return (
        <View>
            <Image style={{ top: 100, left: 20 }} source={require('../../../../../../image/Arrow.png')}></Image>
            <Text style={{ width: 72, height: 29, left: 150, top: 85, fontSize: 22, fontFamily: 'Klarna Tex', color: '#FF5E00', fontWeight: '700' }}>Orders</Text>
            <Text style={{ width: 77, height: 24, top: 131, left: 73, fontSize: 19, fontWeight: '400', color: '#6D3805' }}>Ongoing</Text>
            <Text style={{ width: 67, height: 24, top: 105, left: 250, color: '#FF5E00', fontWeight: '400', fontSize: 19 }}>History</Text>
            <View style={{left:-7}}>
                <View style={{width:50,height:50,backgroundColor:'#F37A20',top:150,left:40,borderRadius:30}}>
                    <Image style={{width:27,height:27,top:9,left:13}} source={require('../../../../../../image/mumu.png')}></Image>
                    <Text style={{ top:-30,width:105,height:22,left:70,fontSize:18,color:'#804F1E',fontWeight:'700'}}>Order #345</Text>
                    <Text style={{width:70,height:20,top:-25,left:67,fontSize:16,fontWeight:'400',color:'#5EC401'}}>Delivered</Text>
                    <Text style={{width:130,height:30,top:-20,left:67,fontSize:15,fontWeight:"400",color:'#804F1E'}}>October 26, 2014</Text>
                    <Text style={{width:70,height:30,top:-80,left:290,fontSize:22,fontWeight:'700',color:'#F37A20'}}>$700</Text>
                </View>
                
            </View>
            <View style={{left:-7,top:60}}>
                <View style={{width:50,height:50,backgroundColor:'#F37A20',top:150,left:40,borderRadius:30}}>
                    <Image style={{width:27,height:27,top:9,left:13}} source={require('../../../../../../image/mumu.png')}></Image>
                    <Text style={{ top:-30,width:105,height:22,left:70,fontSize:18,color:'#804F1E',fontWeight:'700'}}>Order #346</Text>
                    <Text style={{width:70,height:20,top:-25,left:67,fontSize:16,fontWeight:'400',color:'#F2110D'}}>Cancelled</Text>
                    <Text style={{width:130,height:30,top:-20,left:67,fontSize:15,fontWeight:"400",color:'#804F1E'}}>October 14, 2016</Text>
                    <Text style={{width:70,height:30,top:-80,left:290,fontSize:22,fontWeight:'700',color:'#F37A20'}}>$452</Text>
                </View>
                
            </View>
            <View style={{left:-7,top:130}}>
                <View style={{width:50,height:50,backgroundColor:'#F37A20',top:150,left:40,borderRadius:30}}>
                    <Image style={{width:27,height:27,top:9,left:13}} source={require('../../../../../../image/mumu.png')}></Image>
                    <Text style={{ top:-30,width:105,height:22,left:70,fontSize:18,color:'#804F1E',fontWeight:'700'}}>Order #347</Text>
                    <Text style={{width:70,height:20,top:-25,left:67,fontSize:16,fontWeight:'400',color:'#5EC401'}}>Delivered</Text>
                    <Text style={{width:130,height:30,top:-20,left:67,fontSize:15,fontWeight:"400",color:'#804F1E'}}>July 26, 2017</Text>
                    <Text style={{width:70,height:30,top:-80,left:290,fontSize:22,fontWeight:'700',color:'#F37A20'}}>$281</Text>
                </View>
                
            </View>
        </View>
    )
}

export default History1

const styles = StyleSheet.create({})