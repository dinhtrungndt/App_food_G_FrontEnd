import React from 'react';
import AccountScreens from './src/components/listFood/Account';
import CartScreens from './src/components/listFood/Cart';
import FavoriteScreens from './src/components/listFood/Favorite';
import ItemFavoriteScreens from './src/components/listFood/Favorite/Item';
import {Text, View, SafeAreaView} from 'react-native';
import LoginScreens from './src/components/user/login';
import HomeScreens from './src/components/listFood/Home';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView>
      {/* <LoginScreens/> */}
      <LoginScreens />
    </SafeAreaView>
  );
};

export default App;
