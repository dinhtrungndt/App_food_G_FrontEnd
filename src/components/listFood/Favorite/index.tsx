import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const FavoriteScreens = () => {
  return (
    <View style={styles.T}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={{marginTop: 10}}
            source={require('../../../../image/back.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            color: '#FF5E00',
            textAlign: 'center',
          }}>
          Favorite
        </Text>
      </View>

      {/* body */}
      <View>
        <Image
          style={{top: 30}}
          source={require('../../../../image/favorite_logo_start.png')}
        />
        <View style={{top: 40, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#6D3805', fontSize: 20, fontWeight: '700'}}>
            Your heart is empty
          </Text>
          <Text
            style={{
              color: '#6D3805',
              fontSize: 16,
              fontWeight: '400',
              width: 253,
              textAlign: 'center',
              top: 10,
            }}>
            Start fall in love with some good goods
          </Text>
        </View>
      </View>

      {/* footer */}
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#FF5E00',
            width: 343,
            height: 50,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            top: 100,
          }}>
          <Text style={{fontSize: 18, fontWeight: '700', color: '#fff'}}>
            Start shoping
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FavoriteScreens;

const styles = StyleSheet.create({
  header: {
    width: '100%',
  },
  T: {
    width: '100%',
    height: '100%',
    padding: 20,
  },
});