import React from 'react';
import AccountScreens from './src/components/listFood/Account';
import CartScreens from './src/components/listFood/Cart';
import FavoriteScreens from './src/components/listFood/Favorite';
import ItemFavoriteScreens from './src/components/listFood/Favorite/Item';
import {Text, View, SafeAreaView} from 'react-native';
import LoginScreens from './src/components/user/login';
import HomeScreens from './src/components/listFood/Home';
import ExploreScreens from './src/components/listFood/Explore';
import SignUpScreens from './src/components/user/signup/name';
import SignUpPassScreens from './src/components/user/signup/pass';
import CodePhoneScreens from './src/components/user/signup/codePhone';
import FuitsScreens from './src/components/listFood/Explore/Fruits';
import DetailScreens from './src/components/listFood/Home/Detail';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView>
      <HomeScreens />
    </SafeAreaView>
  );
};

export default App;
