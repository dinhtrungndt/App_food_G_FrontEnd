import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

import {Data} from './Data';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

const CartScreens: React.FC = () => {
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
            paddingBottom: 20,
          }}>
          Cart
        </Text>
      </View>

      {/* body */}
      <View>
        <FlatList
          style={{height: 480}}
          data={Data}
          renderItem={({item}) => (
            <Swipeable
              renderRightActions={() => (
                <View
                  style={{
                    width: 71,
                    height: 95,
                    backgroundColor: '#A42B32',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      position: 'relative',
                      width: 30,
                      height: 30,
                    }}
                    source={require('../../../../image/Delete_25px.png')}
                  />
                </View>
              )}>
              <View
                key={item.id}
                style={{flexDirection: 'row', paddingTop: 26, top: -26}}>
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
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      marginLeft: 50,
                      borderRadius: 10,
                      width: 98,
                      height: 29.65,
                      backgroundColor: '#F4F4F4',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderWidth: 1,
                      borderColor: '#F4F4F4',
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 4,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 4,
                      elevation: 5,
                    }}>
                    <TouchableOpacity style={styles.btnTru}>
                      <Text
                        style={{
                          color: '#6D3805',
                          fontSize: 18,
                          fontWeight: '400',
                        }}>
                        -
                      </Text>
                    </TouchableOpacity>

                    <Text
                      style={{
                        color: '#6D3805',
                        fontSize: 18,
                        fontWeight: '400',
                        paddingLeft: 20,
                      }}>
                      {item.quantity}
                    </Text>
                    <TouchableOpacity style={[styles.btnTru, {marginLeft: 20}]}>
                      <Text
                        style={{
                          color: '#6D3805',
                          fontSize: 18,
                          fontWeight: '400',
                        }}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
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
            </Swipeable>
          )}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
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
            top: 50,
          }}>
          <Text style={{fontSize: 18, fontWeight: '700', color: '#fff'}}>
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreens;

const styles = StyleSheet.create({
  btnTru: {
    width: 24.71,
    height: 24.71,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    width: '100%',
  },
  T: {
    width: '100%',
    height: '100%',
    padding: 20,
  },
});
