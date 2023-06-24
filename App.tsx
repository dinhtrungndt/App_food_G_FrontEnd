import 'react-native-gesture-handler';
import React from 'react';
import AccountScreens from './src/components/listFood/Account';
import CartScreens from './src/components/listFood/Cart';
import FavoriteScreens from './src/components/listFood/Favorite';
import ItemFavoriteScreens from './src/components/listFood/Favorite/Item';
import {Text, View, SafeAreaView, Image, StyleSheet} from 'react-native';
import LoginScreens from './src/components/user/login';
import HomeScreens from './src/components/listFood/Home';
import BoardingScreens from './src/screens/Boarding/Boarding';
import SignUpScreens from './src/components/user/signup/name';
import SignUpPassScreens from './src/components/user/signup/pass';
import CodePhoneScreens from './src/components/user/signup/codePhone';
import ExploreScreens from './src/components/listFood/Explore';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {
  RootStackParamList,
  RootStackScreensEnum,
} from './src/components/listFood/RootStackParamList';

import {RouteProp} from '@react-navigation/native';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createMaterialBottomTabNavigator<RootStackParamList>();

const options = ({
  route,
}: {
  route: RouteProp<RootStackParamList, keyof RootStackParamList>;
}) => {
  const focused = true;
  switch (route.name) {
    case RootStackScreensEnum.Home:
      return {
        tabBarIcon: ({
          focused,
          color,
          size,
        }: {
          focused: boolean;
          color: string;
          size?: number;
        }): React.ReactNode =>
          focused ? (
            <Image
              source={require('../XuongGroup/image/icon_home_click.png')}
            />
          ) : (
            <Image source={require('../XuongGroup/image/icon_home.png')} />
          ),
        tabBarLabel: 'Home',
        tabBarLabelStyle: {
          color: focused ? 'red' : 'blue',
        },
      };
    case RootStackScreensEnum.Explore:
      return {
        tabBarIcon: ({
          focused,
          color,
          size,
        }: {
          focused: boolean;
          color: string;
          size?: number;
        }): React.ReactNode =>
          focused ? (
            <Image
              source={require('../XuongGroup/image/icon_explore_click.png')}
            />
          ) : (
            <Image source={require('../XuongGroup/image/icon_explore.png')} />
          ),
        tabBarLabel: 'Explore',
        tabBarLabelStyle: {
          color: 'red',
        },
      };
    case RootStackScreensEnum.Cart:
      return {
        tabBarIcon: ({
          focused,
          color,
          size,
        }: {
          focused: boolean;
          color: string;
          size?: number;
        }): React.ReactNode =>
          focused ? (
            <Image
              source={require('../XuongGroup/image/icon_cart_click.png')}
            />
          ) : (
            <Image source={require('../XuongGroup/image/icon_cart.png')} />
          ),
        tabBarLabel: 'Cart',
        tabBarLabelStyle: {
          color: focused ? 'red' : 'blue',
        },
      };
    case RootStackScreensEnum.Favorites:
      return {
        tabBarIcon: ({
          focused,
          color,
          size,
        }: {
          focused: boolean;
          color: string;
          size?: number;
        }): React.ReactNode =>
          focused ? (
            <Image
              source={require('../XuongGroup/image/icon_favorite_click.png')}
            />
          ) : (
            <Image source={require('../XuongGroup/image/icon_favorite.png')} />
          ),
        tabBarLabel: 'Favorite',
        tabBarLabelStyle: {
          color: focused ? 'red' : 'blue',
        },
      };
    case RootStackScreensEnum.Accounts:
      return {
        tabBarIcon: ({
          focused,
          color,
          size,
        }: {
          focused: boolean;
          color: string;
          size?: number;
        }): React.ReactNode =>
          focused ? (
            <Image
              source={require('../XuongGroup/image/icon_account_click.png')}
            />
          ) : (
            <Image source={require('../XuongGroup/image/icon_account.png')} />
          ),
        tabBarLabel: 'Account',
        tabBarLabelStyle: {
          color: focused ? 'red' : 'blue',
        },
      };

    default:
      return {};
  }
};

const TabScreens = () => {
  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen name={RootStackScreensEnum.Home} component={HomeScreens} />
      <Tab.Screen
        name={RootStackScreensEnum.Explore}
        component={ExploreScreens}
      />
      <Tab.Screen name={RootStackScreensEnum.Cart} component={CartScreens} />
      <Tab.Screen
        name={RootStackScreensEnum.Favorites}
        component={FavoriteScreens}
      />
      <Tab.Screen
        name={RootStackScreensEnum.Accounts}
        component={AccountScreens}
      />
    </Tab.Navigator>
  );
};

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Boarding"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={RootStackScreensEnum.Boarding}
          component={BoardingScreens}
        />
        <Stack.Screen
          name={RootStackScreensEnum.SignUp}
          component={SignUpScreens}
        />
        <Stack.Screen
          name={RootStackScreensEnum.SignUpPass}
          component={SignUpPassScreens}
        />
        <Stack.Screen
          name={RootStackScreensEnum.SignUpCode}
          component={CodePhoneScreens}
        />

        <Stack.Screen
          name={RootStackScreensEnum.Login}
          component={LoginScreens}
        />

        <Stack.Screen
          name={RootStackScreensEnum.TabScreens}
          component={TabScreens}
        />
        <Stack.Screen
          name={RootStackScreensEnum.ItemFavorite}
          component={ItemFavoriteScreens}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
