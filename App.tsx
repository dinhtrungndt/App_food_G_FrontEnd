import React from 'react';
import {Text, View} from 'react-native';
import CartScreens from './src/components/listFood/Cart';
import FavoriteScreens from './src/components/listFood/Favorite';
import ItemFavoriteScreens from './src/components/listFood/Favorite/Item';

const App = () => {
  return (
    <View>
      <CartScreens/>
    </View>
  );
};

export default App;
