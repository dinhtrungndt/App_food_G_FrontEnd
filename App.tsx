import React from 'react';
import {Text, View} from 'react-native';
import AccountScreens from './src/components/listFood/Account';
import CartScreens from './src/components/listFood/Cart';
import FavoriteScreens from './src/components/listFood/Favorite';
import ItemFavoriteScreens from './src/components/listFood/Favorite/Item';

const App = () => {
  return (
    <View>
      <AccountScreens />
    </View>
  );
};

export default App;
