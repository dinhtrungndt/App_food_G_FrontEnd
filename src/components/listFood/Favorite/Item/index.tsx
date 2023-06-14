import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { Data } from './Data';

const ItemFavoriteScreens = () => {
  return (
    <View style={styles.T}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={{marginTop: 10}}
            source={require('../../../../../image/back.png')}
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
        {Data.map(item => (
              <View
                key={item.id}
                style={{flexDirection: 'row', paddingTop: 26}}>
                <Image style={{width: 90}} source={item.image} />
                <View>
                  <Text
                    style={{
                      color: '#6D3805',
                      fontSize: 18,
                      fontWeight: '700',
                      paddingLeft: 20,
                      paddingTop: 10,
                    }}>
                    {item.name}
                  </Text>
                  <Text style={{color:'#FF5E00',fontSize:14,fontWeight:'400',paddingTop:15,paddingLeft:55}}>{item.add}</Text>
                </View>

                <View>
                  <Text
                    style={{
                      width: 100,
                      height: 23,
                      color: '#6D3805',
                      fontSize: 18,
                      fontWeight: '400',
                      marginLeft: 10,
                      marginTop: 45,
                      textAlign: 'right',
                    }}>
                    {item.price}
                    <Text style={{fontSize: 14}}> {item.gram}</Text>
                  </Text>
                </View>
                <Text
                  style={{
                    width: 500,
                    left: -110,
                    top: 100,
                    position: 'absolute',
                    borderBottomWidth: 1,
                    borderColor: '#CACFD2',
                  }}></Text>
              </View>
        ))}
      </View>
    </View>
  );
};

export default ItemFavoriteScreens;

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
