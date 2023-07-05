import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Payment = () => {
    return (
        <View>
            <Image style={{ top: 20, left: 20 }} source={require('../../../../../image/Arrow.png')}></Image>
            <Text style={{ width: 90, height: 29, left: 150, top: 0, fontSize: 22, fontFamily: 'Klarna Tex', color: '#FF5E00', fontWeight: '700' }}>Payment</Text>
            <View>
                <Text style={{ width: 170, height: 26, top: 20, left: 30, fontSize: 19, color: '#6D3805', fontWeight: '700' }}>In-Store Pick Up</Text>
                <Text style={{ width: 50, height: 25, fontSize: 18, fontWeight: '700', color: '#6D3805', top: 0, left: 300 }}>FREE</Text>
                <Text style={{ width: 280, height: 50, fontSize: 17, color: '#6D3805', fontWeight: '400', top: 10, left: 30 }}>Some Stores May Be Temporarily Unavalable. </Text>
                <Image style={{ width: 15, height: 10, top: -20, left: 330 }} source={require('../../../../../image/Arrow2.png')}></Image>
            </View>
            <View>
                <Image style={{ top: 10, left: 30, width: 15, height: 15 }} source={require('../../../../../image/Search.png')}></Image>
                <Text style={{ width: 270, height: 20, fontSize: 15, color: '#6D3805B0', fontWeight: '400', top: -10, left: 60 }}>Search For Town, Street, Zip Code...</Text>
            </View>
            <View style={{width:360,height:150,top:10,backgroundColor:'#FFE6CC'}}>
                <Text>goteborg arkaden</Text>
                <Image style={{top:40,left:350,width:8,height:13}} source={require('../../../../../image/backarrow.png')}></Image>
            </View>
        </View>
    )
}

export default Payment

const styles = StyleSheet.create({})