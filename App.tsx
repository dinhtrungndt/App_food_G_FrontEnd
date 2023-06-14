import React from 'react';
import {Text, View} from 'react-native';
import CartScreens from './src/components/listFood/Cart';
import FavoriteScreens from './src/components/listFood/Favorite';
import ItemScreens from './src/components/listFood/Favorite/Item';

const App = () => {
  return (
    <View>
      <ItemScreens/>
    </View>
  );
};

export default App;
