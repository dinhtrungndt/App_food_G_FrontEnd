import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, SafeAreaView, Image, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {RouteProp} from '@react-navigation/native';

import {
  RootStackParamList,
  RootStackScreensEnum,
} from '../listFood/RootStackParamList';
import HomeScreens from '../listFood/Home';
import ExploreScreens from '../listFood/Explore';
import CartScreens from '../listFood/Cart';
import FavoriteScreens from '../listFood/Favorite';
import AccountScreens from '../listFood/Account';
import BoardingScreens from '../../screens/Boarding/Boarding';
import SignUpScreens from '../user/signup/name';
import SignUpPassScreens from '../user/signup/pass';
import CodePhoneScreens from '../user/signup/codePhone';
import LoginScreens from '../user/login';
import ItemFavoriteScreens from '../listFood/Favorite/Item';

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
            <Image source={require('../../../image/icon_home_click.png')} />
          ) : (
            <Image source={require('../../../image/icon_home.png')} />
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
            <Image source={require('../../../image/icon_explore_click.png')} />
          ) : (
            <Image source={require('../../../image/icon_explore.png')} />
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
            <Image source={require('../../../image/icon_cart_click.png')} />
          ) : (
            <Image source={require('../../../image/icon_cart.png')} />
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
            <Image source={require('../../../image/icon_favorite_click.png')} />
          ) : (
            <Image source={require('../../../image/icon_favorite.png')} />
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
            <Image source={require('../../../image/icon_account_click.png')} />
          ) : (
            <Image source={require('../../../image/icon_account.png')} />
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

const AppNavigations = (): React.JSX.Element => {
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

export default AppNavigations;
