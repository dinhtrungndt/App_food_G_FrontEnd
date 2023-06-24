import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  RootStackParamList,
  RootStackScreensEnum,
} from '../../../../components/listFood/RootStackParamList';

type SignUpPassNavigationProp = StackNavigationProp<
  RootStackParamList,
  RootStackScreensEnum.Boarding
>;

const SignUpPassScreens = () => {
  const navigation = useNavigation<SignUpPassNavigationProp>();

  return (
    <View style={styles.T}>
      {/* header */}
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
        Sign Up
      </Text>
      {/* img phone */}
      <Image
        style={{top: -60}}
        source={require('../../../../../image/signup_phone2.png')}
      />

      {/* Enter the password */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          color: '#7F4E1D',
          left: 10,
          top: -80,
        }}>
        Enter the password
      </Text>

      {/* For the security & safety please choose a password */}
      <Text
        style={{
          width: 300,
          fontSize: 14,
          fontWeight: '400',
          color: '#7F4E1D',
          left: 10,
          top: -70,
        }}>
        For the security & safety please choose a password
      </Text>

      {/* Password */}
      <TextInput
        style={{
          width: '91.46%',
          height: 48,
          backgroundColor: '#F3F3F3',
          borderRadius: 5,
          left: '2.87%',
          top: -50,
          paddingHorizontal: 45,
          fontSize: 14,
        }}
        placeholder="Password"
        placeholderTextColor={'#AC8E71'}
      />
      <Image
        style={{position: 'absolute', bottom: 245, left: 35}}
        source={require('../../../../../image/lock_23px.png')}
      />
      <Image
        style={{position: 'absolute', bottom: 245, right: 50}}
        source={require('../../../../../image/signup_pass_eye_23px.png')}
      />

      {/* Confirm Password */}
      <TextInput
        style={{
          width: '91.46%',
          height: 48,
          backgroundColor: '#F3F3F3',
          borderRadius: 5,
          left: '2.87%',
          top: -30,
          paddingHorizontal: 45,
          fontSize: 14,
        }}
        placeholder="Confirm Password"
        placeholderTextColor={'#AC8E71'}
      />
      <Image
        style={{position: 'absolute', bottom: 178, left: 35}}
        source={require('../../../../../image/lock_23px.png')}
      />
      <Image
        style={{position: 'absolute', bottom: 178, right: 50}}
        source={require('../../../../../image/signup_pass_eye_23px.png')}
      />

      {/* btnNext */}
      <TouchableOpacity
        onPress={() => navigation.navigate(RootStackScreensEnum.SignUpCode)}
        style={{
          width: '91.46%',
          height: 48,
          backgroundColor: '#FF5E00',
          borderRadius: 30,
          left: '2.87%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: '700', color: '#FFFFFF'}}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpPassScreens;

const styles = StyleSheet.create({
  // header
  T: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
});
