import React from 'react';
import {Text, View} from 'react-native';
import AccountScreens from './src/components/listFood/Account';
import CartScreens from './src/components/listFood/Cart';
import FavoriteScreens from './src/components/listFood/Favorite';
import ItemFavoriteScreens from './src/components/listFood/Favorite/Item';
import Profile from './src/components/listFood/Account/profile/Profile';
import Orders1 from './src/components/listFood/Account/orders/Orders1';
import History1 from './src/components/listFood/Account/orders/edit orders/History1';


const App = () => {
  return (
    <View>
      <History1/>
    </View>
  );
};

export default App;
