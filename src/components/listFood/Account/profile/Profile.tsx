import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Profile = () => {
    return (
        <View>
            <Image style={{ top: 30, left: 20 }} source={require('../../../../../image/Arrow.png')}></Image>
            <Text style={{ width: 72, height: 29, left: 150, top: 25, fontSize: 22, fontFamily: 'Klarna Tex', color: '#FF5E00', fontWeight: 'bold' }}>Profile</Text>
            <View>
                <Image style={{ top: 75, left: 20 }} source={require('../../../../../image/user2.png')}></Image>
                <Text style={{ top: 50, left: 60, color: '#6D3805', width: 91, height: 22, fontSize: 17, fontFamily: 'Klarna Tex', fontWeight: 'bold' }}> Edit Profile</Text>
                <Image style={{ top: 40, left: 350, width: 6.7, height: 12 }} source={require('../../../../../image/backarrow.png')}></Image>
                <Image style={{ top: 75, left: 20 }} source={require('../../../../../image/key.png')}></Image>
                <Text style={{ top: 50, left: 60, color: '#6D3805', width: 147, height: 22, fontSize: 17, fontFamily: 'Klarna Tex', fontWeight: 'bold' }}> Change Password</Text>
                <Image style={{ top: 40, left: 350, width: 6.7, height: 12 }} source={require('../../../../../image/backarrow.png')}></Image>
                <Image style={{ top: 75, left: 20 }} source={require('../../../../../image/cart.png')}></Image>
                <Text style={{ top: 50, left: 60, color: '#6D3805', width: 91, height: 22, fontSize: 17, fontFamily: 'Klarna Tex', fontWeight: 'bold' }}> My Cards</Text>
                <Image style={{ top: 40, left: 350, width: 6.7, height: 12 }} source={require('../../../../../image/backarrow.png')}></Image>
            </View>
            <View>
                <Text style={{ width: 150, height: 30, top: 100, left: 20, fontSize: 22, color: '#FF5E00', fontWeight: '700' }}>App setting</Text>
                <Image style={{ top: 130, left: 20 }} source={require('../../../../../image/bell.png')}></Image>
                <Text style={{ top: 105, left: 55, color: '#6D3805', width: 110, height: 22, fontSize: 18, fontFamily: 'Klarna Tex', fontWeight: 'bold' }}> Notifications </Text>
                <Image style={{ top: 85, left: 320 }} source={require('../../../../../image/Container.png')}></Image>
                <Image style={{ top: 130, left: 20 }} source={require('../../../../../image/Vector.png')}></Image>
                <Text style={{ top: 105, left: 60, color: '#6D3805', width:100, height:23, fontSize:18, fontFamily: 'Klarna Tex', fontWeight: 'bold' }}> Language</Text>
                <Text style={{top:87,left:270,color:'#804F1E',fontWeight:'400',fontSize:17}}>English</Text>
                <Image style={{ top:73, left: 350, width: 6.7, height: 12 }} source={require('../../../../../image/backarrow.png')}></Image>
                <Image style={{ top:115, left: 20 }} source={require('../../../../../image/logout.png')}></Image>
                <Text style={{ top:90, left: 60, color: '#6D3805', width:100, height:23, fontSize:18, fontFamily: 'Klarna Tex', fontWeight: 'bold' }}>Logout</Text>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})