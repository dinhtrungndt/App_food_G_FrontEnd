import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Data} from '../../Cart/Data';

const Payment = () => {
  return (
    <View>
      <TouchableOpacity>
        <Image
          style={{top: 20, left: 20}}
          source={require('../../../../../image/Arrow.png')}></Image>
      </TouchableOpacity>

      <Text
        style={{
          width: 90,
          height: 29,
          left: 150,
          top: 0,
          fontSize: 22,
          fontFamily: 'Klarna Tex',
          color: '#FF5E00',
          fontWeight: '700',
        }}>
        Payment
      </Text>
      <View>
        <Text
          style={{
            width: 170,
            height: 26,
            top: 20,
            left: 30,
            fontSize: 19,
            color: '#6D3805',
            fontWeight: '700',
          }}>
          In-Store Pick Up
        </Text>
        <Text
          style={{
            width: 50,
            height: 25,
            fontSize: 18,
            fontWeight: '700',
            color: '#6D3805',
            top: 0,
            left: 300,
          }}>
          FREE
        </Text>
        <Text
          style={{
            width: 280,
            height: 50,
            fontSize: 17,
            color: '#6D3805',
            fontWeight: '400',
            top: 10,
            left: 30,
          }}>
          Some Stores May Be Temporarily Unavalable.{' '}
        </Text>
        <Image
          style={{width: 15, height: 10, top: -20, left: 330}}
          source={require('../../../../../image/Arrow2.png')}></Image>
      </View>
      <View style={{marginBottom: 15}}>
        <Image
          style={{top: 12, left: 30, width: 15, height: 15}}
          source={require('../../../../../image/Search.png')}></Image>
        <Text
          style={{
            width: 270,
            height: 20,
            fontSize: 15,
            color: '#6D3805B0',
            fontWeight: '400',
            top: -5,
            left: 60,
          }}>
          Search For Town, Street, Zip Code...
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{left: 10}}>
          {/* list */}
          {DATA.map(item => (
            <View
              style={{
                width: 330,
                height: 120,
                backgroundColor: '#FFF4E9',
                borderRadius: 10,
                left: 20,
                padding: 5,
                borderWidth: 1,
                borderColor: '#F3DDBF',
              }}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text
                    style={{
                      width: 100,
                      height: 50,
                      fontSize: 18,
                      color: '#6D3805',
                      fontWeight: '700',
                      top: 10,
                      left: 10,
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      width: 200,
                      height: 20,
                      fontSize: 18,
                      color: '#6D3805',
                      fontWeight: '400',
                      top: 15,
                      left: 10,
                    }}>
                    {item.ml}
                  </Text>
                </View>
                <TouchableOpacity>
                  <Image
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      top: 45,
                      left: 90,
                    }}
                    source={require('../../../../../image/payment_next.png')}></Image>
                </TouchableOpacity>
              </View>
            </View>
          ))}

          {/* Cart */}
          <TouchableOpacity
            style={{
              width: 330,
              height: 100,
              borderRadius: 10,
              top: 20,
              left: 20,
              padding: 5,
              borderWidth: 1,
              borderColor: '#F3DDBF',
              backgroundColor: '#FFF4E9',
            }}>
            <Image
              style={{top: 30, left: 20}}
              source={require('../../../../../image/payment_cart.png')}></Image>
            <Text
              style={{
                width: 100,
                height: 20,
                fontSize: 18,
                color: '#6D3805',
                backgroundColor: '#FFF4E9',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: '700',
                top: 5,
                left: 70,
              }}>
              See Itemes
            </Text>
            <Image
              style={{top: -10, left: 288}}
              source={require('../../../../../image/payment_next.png')}></Image>
          </TouchableOpacity>

          {/* Payment Method */}
          <View
            style={{
              width: 330,
              height: 200,
              borderRadius: 10,
              marginTop: 45,
              left: 20,
              padding: 15,
              borderWidth: 1,
              borderColor: '#F3DDBF',
              backgroundColor: '#FFF4E9',
            }}>
            <Text
              style={{
                fontSize: 18,
                color: '#6D3805',
                fontWeight: '700',
              }}>
              Payment Method
            </Text>
            <View
              style={{
                marginTop: 10,
              }}>
              <TouchableOpacity>
                <Image
                  style={{top: 10, left: 0}}
                  source={require('../../../../../image/payment_apple_pay.png')}></Image>
              </TouchableOpacity>
              <Text style={{top: -15, left: 50, color: '#6D3805'}}>
                Apple Pay
              </Text>
              <Image
                style={{top: -35, left: 250}}
                source={require('../../../../../image/payment_tich.png')}></Image>
              <Text
                style={{
                  width: 330,
                  borderBottomColor: '#F3DDBF',
                  borderBottomWidth: 1,
                  left: -15,
                  top: -20,
                }}></Text>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  style={{top: 10, left: 0}}
                  source={require('../../../../../image/payment_cash_on_delivery.png')}></Image>
              </TouchableOpacity>
              <Text style={{top: -20, left: 50, color: '#6D3805'}}>
                Cash On Delivery
              </Text>
            </View>
          </View>

          {/* Order Sammery */}
          <View
            style={{
              width: 330,
              height: 200,
              borderRadius: 10,
              marginTop: 30,
              marginBottom: 530,
              left: 20,
              padding: 15,
              borderWidth: 1,
              borderColor: '#F3DDBF',
              backgroundColor: '#FFF4E9',
            }}>
            <Text
              style={{
                fontSize: 18,
                color: '#6D3805',
                fontWeight: '700',
              }}>
              Order Sammery
            </Text>
            <View
              style={{
                marginTop: 10,
              }}>
              <Text style={{top: 10, left: 0, color: '#6D3805'}}>Subtotal</Text>
              <Text
                style={{
                  top: -10,
                  color: '#6D3805',
                  textAlign: 'right',
                }}>
                $137.00
              </Text>
              <Text style={{left: 0, color: '#6D3805'}}>Tax</Text>
              <Text style={{top: -20, color: '#6D3805', textAlign: 'right'}}>
                $4.50
              </Text>
              <Text style={{top: -10, left: 0, color: '#6D3805'}}>
                In-Store Pick Up
              </Text>
              <Text style={{top: -30, color: '#6D3805', textAlign: 'right'}}>
                $4.50
              </Text>
              <Text
                style={{
                  width: 330,
                  borderBottomColor: '#F3DDBF',
                  borderBottomWidth: 1,
                  left: -15,
                  top: -35,
                }}></Text>
              <Text
                style={{
                  top: -25,
                  left: 0,
                  color: '#6D3805',
                  fontSize: 21,
                  fontWeight: '600',
                }}>
                Total:
              </Text>
              <Text
                style={{
                  top: -55,
                  color: '#6D3805',
                  fontSize: 21,
                  fontWeight: '600',
                  textAlign: 'right',
                }}>
                $141.50
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Check Out */}
      <TouchableOpacity
        style={{
          width: 330,
          height: 50,
          borderRadius: 50,
          marginTop: 30,
          left: 30,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          bottom: 430,
          position: 'absolute',
          borderColor: '#F3DDBF',
          backgroundColor: '#FF5E00',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#fff',
            fontWeight: '700',
            textAlign: 'center',
          }}>
          CheckOut $141.50
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({});

const DATA = [
  {
    title: 'Goteborg Arkaden',
    ml: '1.4 Ml',
  },
  {
    title: 'Kungsbacka Kungsmassan',
    ml: '17 Ml',
  },
];
