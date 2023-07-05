import React from 'react';
import {Text, View} from 'react-native';
import AccountScreens from './src/components/listFood/Account';
import CartScreens from './src/components/listFood/Cart';
import FavoriteScreens from './src/components/listFood/Favorite';
import ItemFavoriteScreens from './src/components/listFood/Favorite/Item';
import Profile from './src/components/listFood/Account/profile/Profile';
import Orders1 from './src/components/listFood/Account/orders/Orders1';
import History1 from './src/components/listFood/Account/orders/edit orders/History1';
import Address from './src/components/listFood/Account/address/Address';
import Payment from './src/components/listFood/Account/payment/Payment';


const App = () => {
  return (
    <View>
      <Payment/>
    </View>
  );
};

export default App;
