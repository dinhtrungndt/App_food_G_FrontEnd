import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  RootStackParamList,
  RootStackScreensEnum,
} from '../../../components/listFood/RootStackParamList';

type LoginNavigationProp = StackNavigationProp<
  RootStackParamList,
  RootStackScreensEnum.Boarding
>;

const LoginScreens = (): React.JSX.Element => {
  const navigation = useNavigation<LoginNavigationProp>();

  const [icon, setIcon] = useState(data[0].code);

  const [isShowPass, setIsShowPass] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={styles.backButton}
          source={require('../../../../image/back.png')}
        />
      </TouchableOpacity>
      <Text style={styles.signInText}>Sign In</Text>
      <Image
        style={styles.loginImage}
        source={require('../../../../image/phonelogin.png')}
      />

      <Text
        style={{
          fontSize: 18,
          fontWeight: '400',
          color: '#6D3805',
          width: 300,
          height: 42,
          margin: '4.27%',
        }}>
        Enter your phone number and password to access your account
      </Text>

      <View style={styles.inputContainer}>
        <Picker
          style={styles.picker}
          selectedValue={icon}
          onValueChange={(itemValue, itemIndex) => {
            setIcon(itemValue);
          }}>
          {data.map((item, index) => {
            return (
              <Picker.Item
                key={index}
                label={item.code}
                value={item.image}
                // icon={() => (
                //   <Image
                //     style={{width: 30, height: 20}}
                //     source={item.image}
                //   />
                // )}
              />
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

      <View style={styles.inputContainer2}>
        <TextInput
          style={styles.passInput}
          secureTextEntry={!isShowPass}
          placeholder="Password"
        />
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setIsShowPass(!isShowPass)}>
          <Image
            style={styles.eyaImage}
            source={
              isShowPass
                ? require('../../../../image/show.png')
                : require('../../../../image/hide.png')
            }
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.FogetPass}>Forgote Password</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(RootStackScreensEnum.TabScreens)}
        style={styles.btnSignIn}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: '#FFFFFF',
          }}>
          Sign In
        </Text>
      </TouchableOpacity>

      <View style={styles.container3}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            color: '#7F4E1D',
          }}>
          Don't have an account?
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(RootStackScreensEnum.SignUp)}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#FF5E00',
              marginLeft: 6,
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreens;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  backButton: {
    width: 9,
    height: 15,
    marginLeft: 24,
    marginTop: 24,
  },
  signInText: {
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 24,
    marginTop: 12,
    color: '#FF5E00',
    width: 78,
    height: 42,
    left: 135,
  },
  loginImage: {
    width: '82.3%',
    height: '43.3%',
    marginLeft: '8.7%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    width: '91.46%',
    height: 48,
    backgroundColor: '#F3F3F3',
    left: '2.87%',
  },

  picker: {
    width: 111,
    height: 48,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 16,
  },
  inputContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    width: '91.46%',
    height: 48,
    backgroundColor: '#F3F3F3',
    left: '2.87%',
    top: 16,
  },
  passInput: {
    width: 270,
    height: 36,
    fontSize: 16,
    paddingHorizontal: 27,
  },
  toggleButton: {
    position: 'absolute',
  },
  eyaImage: {
    width: 24,
    height: 24,
    left: 312,
  },
  FogetPass: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FF5E00',
    left: '62.93%',
    top: 18,
    lineHeight: 21,
  },
  btnSignIn: {
    width: '91.46%',
    height: 51,
    backgroundColor: '#FF5E00',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    left: '4.27%',
    top: 42,
  },
  container3: {
    width: 240,
    height: 21,
    flexDirection: 'row',
    top: 54,
    left: 80,
  },
});

var data = [
  {
    image: require('../../../../image/vn.png'),
    name: 'VietNam',
    code: '+84',
  },
  {
    image: require('../../../../image/SE.png'),
    name: 'United States',
    code: '+1',
  },
  {
    image: require('../../../../image/SE.png'),
    name: 'United Kingdom',
    code: '+44',
  },
  {
    image: require('../../../../image/SE.png'),
    name: 'Australia',
    code: '+61',
  },
  {
    image: require('../../../../image/SE.png'),
    name: 'India',
    code: '+91',
  },
  {
    image: require('../../../../image/SE.png'),
    name: 'Brazil',
    code: '+55',
  },
  {
    image: require('../../../../image/SE.png'),
    name: 'China',
    code: '+86',
  },
  {
    image: require('../../../../image/SE.png'),
    name: 'France',
    code: '+33',
  },
  {
    name: 'Germany',
    code: '+49',
  },
  {
    image: require('../../../../image/SE.png'),
    name: 'Japan',
    code: '+81',
  },
  {
    image: require('../../../../image/SE.png'),
    name: 'Mexico',
    code: '+52',
  },
];
