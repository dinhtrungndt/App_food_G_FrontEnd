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

const SignUpScreens = (): React.JSX.Element => {
  const [icon, setIcon] = useState(data[0].code);

  return (
    <View style={styles.T}>
      {/* header */}
      <TouchableOpacity
        style={{
          marginTop: 10,
        }}>
        <Image source={require('../../../../../image/back.png')} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '700',
          color: '#FF5E00',
          textAlign: 'center',
          top: -10,
        }}>
        Sign Up
      </Text>
      {/* img phone */}
      <Image
        style={{top: -80}}
        source={require('../../../../../image/signup_phone1.png')}
      />
      {/* Name Surname */}
      <TextInput
        style={{
          width: '91.46%',
          height: 48,
          backgroundColor: '#F3F3F3',
          borderRadius: 5,
          left: '2.87%',
          top: -80,
          paddingHorizontal: 26,
          fontSize: 14,
        }}
        placeholder="Name Surname"
        placeholderTextColor={'#AC8E71'}
      />

      {/* Picker phone */}
      <View style={styles.inputContainer}>
        <Picker
          style={styles.picker}
          selectedValue={icon}
          onValueChange={(itemValue, itemIndex) => {
            setIcon(itemValue);
          }}>
          {data.map((item, index) => {
            return (
              <Picker.Item key={index} label={item.code} value={item.image} />
            );
          })}
        </Picker>
        <TextInput
          style={styles.textInput}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          placeholderTextColor={'#AC8E71'}
        />
      </View>

      {/* Text */}
      <Text
        style={{
          width: 300,
          fontSize: 16,
          fontWeight: '400',
          color: '#7F4E1D',
          left: 10,
          top: -30,
        }}>
        We need to verify you. We will send you a one time verification code.
      </Text>

      {/* btnNext */}
      <TouchableOpacity
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

      {/* Already have an account? Login */}
      <Text
        style={{
          fontSize: 14,
          fontWeight: '400',
          color: '#7F4E1D',
          top: 10,
          textAlign: 'center',
        }}>
        Already have an account?{' '}
        <TouchableOpacity>
          <Text style={{color: '#FF5E00', fontWeight: '700'}}>Login</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default SignUpScreens;

const styles = StyleSheet.create({
  // picker
  textInput: {
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    width: '91.46%',
    top: -55,
    height: 48,
    backgroundColor: '#F3F3F3',
    left: 10,
  },

  picker: {
    width: 111,
    height: 48,
  },

  // header
  T: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
});

var data = [
  {
    image: require('../../../../../image/vn.png'),
    name: 'VietNam',
    code: '+84',
  },
  {
    image: require('../../../../../image/SE.png'),
    name: 'United States',
    code: '+1',
  },
  {
    image: require('../../../../../image/SE.png'),
    name: 'United Kingdom',
    code: '+44',
  },
  {
    image: require('../../../../../image/SE.png'),
    name: 'Australia',
    code: '+61',
  },
  {
    image: require('../../../../../image/SE.png'),
    name: 'India',
    code: '+91',
  },
  {
    image: require('../../../../../image/SE.png'),
    name: 'Brazil',
    code: '+55',
  },
  {
    image: require('../../../../../image/SE.png'),
    name: 'China',
    code: '+86',
  },
  {
    image: require('../../../../../image/SE.png'),
    name: 'France',
    code: '+33',
  },
  {
    name: 'Germany',
    code: '+49',
  },
  {
    image: require('../../../../../image/SE.png'),
    name: 'Japan',
    code: '+81',
  },
  {
    image: require('../../../../../image/SE.png'),
    name: 'Mexico',
    code: '+52',
  },
];
