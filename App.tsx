import 'react-native-gesture-handler';
import React from 'react';
import AccountScreens from './src/components/listFood/Account';
import CartScreens from './src/components/listFood/Cart';
import FavoriteScreens from './src/components/listFood/Favorite';
import ItemFavoriteScreens from './src/components/listFood/Favorite/Item';
import {Text, View, SafeAreaView} from 'react-native';
import LoginScreens from './src/components/user/login';
import HomeScreens from './src/components/listFood/Home';
import BoardingScreens from './src/screens/Boarding/Boarding';
import SignUpScreens from './src/components/user/signup/name';
import SignUpPassScreens from './src/components/user/signup/pass';
import CodePhoneScreens from './src/components/user/signup/codePhone';
import ExploreScreens from './src/components/listFood/Explore';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  RootStackParamList,
  RootStackScreensEnum,
} from './src/components/listFood/RootStackParamList';

const Stack = createStackNavigator<RootStackParamList>();

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name={RootStackScreensEnum.Home}
          component={HomeScreens}
          options={{}}
        />
        <Stack.Screen
          name={RootStackScreensEnum.Explore}
          component={ExploreScreens}
          options={{}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
