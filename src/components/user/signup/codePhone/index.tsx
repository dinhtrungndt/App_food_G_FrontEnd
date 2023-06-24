import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  RootStackParamList,
  RootStackScreensEnum,
} from '../../../../components/listFood/RootStackParamList';

type SignUpCodeNavigationProp = StackNavigationProp<
  RootStackParamList,
  RootStackScreensEnum.Boarding
>;

const CodePhoneScreens = () => {
  const navigation = useNavigation<SignUpCodeNavigationProp>();

  const [codeInputs, setCodeInputs] = useState(['', '', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');

  const validateInputs = () => {
    for (let i = 0; i < codeInputs.length; i++) {
      if (codeInputs[i] === '') {
        return false;
      }
    }
    return true;
  };

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
        source={require('../../../../../image/signup_phone3.png')}
      />

      {/* Enter Verification Code */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          color: '#7F4E1D',
          left: 10,
          top: -60,
        }}>
        Enter Verification Code
      </Text>

      {/* We have sent SMS to: */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: '400',
          color: '#7F4E1D',
          left: 10,
          top: -50,
        }}>
        We have sent SMS to:
      </Text>
      {/*  046 XXX XX XX */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: '400',
          color: '#7F4E1D',
          left: 10,
          top: -50,
        }}>
        088 XXXX XXX
      </Text>
      {/* Code */}
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          bottom: 195,
          left: 30,
          position: 'absolute',
        }}>
        <TextInput
          style={{
            width: 50,
            fontSize: 36,
            fontWeight: '700',
            color: '#7F4E1D',
            lineHeight: 42,
            paddingLeft: 15,
            borderBottomWidth: 3,
            borderBottomColor: '#7F4E1D',
          }}
          value={codeInputs[0]}
          onChangeText={text => {
            const newInputs = [...codeInputs];
            newInputs[0] = text;
            setCodeInputs(newInputs);
          }}
        />
        <TextInput
          style={{
            width: 50,
            fontSize: 36,
            fontWeight: '700',
            lineHeight: 42,
            color: '#7F4E1D',
            paddingLeft: 15,
            marginLeft: 20,
            borderBottomWidth: 3,
            borderBottomColor: '#7F4E1D',
          }}
          value={codeInputs[1]}
          onChangeText={text => {
            const newInputs = [...codeInputs];
            newInputs[1] = text;
            setCodeInputs(newInputs);
          }}
        />
        <TextInput
          style={{
            width: 50,
            fontSize: 36,
            fontWeight: '700',
            color: '#7F4E1D',
            lineHeight: 42,
            paddingLeft: 15,
            marginLeft: 20,
            borderBottomWidth: 3,
            borderBottomColor: '#7F4E1D',
          }}
          value={codeInputs[2]}
          onChangeText={text => {
            const newInputs = [...codeInputs];
            newInputs[2] = text;
            setCodeInputs(newInputs);
          }}
        />
        <TextInput
          style={{
            width: 50,
            fontSize: 36,
            fontWeight: '700',
            color: '#7F4E1D',
            lineHeight: 42,
            paddingLeft: 15,
            marginLeft: 20,
            borderBottomWidth: 3,
            borderBottomColor: '#7F4E1D',
          }}
          value={codeInputs[3]}
          onChangeText={text => {
            const newInputs = [...codeInputs];
            newInputs[3] = text;
            setCodeInputs(newInputs);
          }}
        />
        <TextInput
          style={{
            width: 50,
            fontSize: 36,
            fontWeight: '700',
            color: '#7F4E1D',
            lineHeight: 42,
            paddingLeft: 15,
            marginLeft: 20,
            borderBottomWidth: 3,
            borderBottomColor: '#7F4E1D',
          }}
          value={codeInputs[4]}
          onChangeText={text => {
            const newInputs = [...codeInputs];
            newInputs[4] = text;
            setCodeInputs(newInputs);
          }}
        />
      </View>

      {/* btnNext */}
      <TouchableOpacity
        style={{
          width: '91.46%',
          height: 48,
          position: 'absolute',
          backgroundColor: '#FF5E00',
          borderRadius: 30,
          left: 30,
          justifyContent: 'center',
          alignItems: 'center',
          bottom: 110,
          opacity: validateInputs() ? 1 : 0.5,
        }}
        disabled={!validateInputs()}
        onPress={() => {
          navigation.navigate(RootStackScreensEnum.TabScreens);
        }}>
        <Text style={{fontSize: 18, fontWeight: '700', color: '#FFFFFF'}}>
          Sign Up
        </Text>
      </TouchableOpacity>
      {errorMessage !== '' && (
        <Text style={{color: 'red', marginTop: 10}}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default CodePhoneScreens;

const styles = StyleSheet.create({
  // header
  T: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
});
