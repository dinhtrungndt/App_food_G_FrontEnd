import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import LoginScreens from './src/components/user/login';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView>
      <LoginScreens/>
    </SafeAreaView>
  );

};

export default App;
