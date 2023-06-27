import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ExploreScreens = () => {
  return (
    <View style={styles.T}>
      <Text
        style={{
          fontSize: 24,
          color: '#FF5E00',
          fontWeight: 'bold',
          textAlign: 'center',
          paddingTop: 40,
        }}>
        Categories
      </Text>

      {/* search */}
      <View
        style={{
          height: 48,
          flexDirection: 'row',
          backgroundColor: '#F2F2F2',
          borderRadius: 10,
          marginTop: 20,
          marginBottom: 20,
          alignItems: 'center',
        }}>
        <Image
          style={{marginLeft: 20}}
          source={require('../../../../image/search_23px.png')}
        />
        <TextInput
          style={{fontSize: 18, marginLeft: 10}}
          placeholder="Search"
          placeholderTextColor={'#7F4E1D'}
        />
      </View>

      {/* list */}
      <FlatList
        data={Data}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View
            style={{
              width: 112,
              height: 112,
              borderRadius: 10,
              marginRight: 16,
              marginBottom: 50,
              marginTop: 10,
            }}>
            <TouchableOpacity>
              <Image source={item.background} />
              <Image
                source={item.image}
                style={{
                  position: 'absolute',
                  left: 16,
                  top: 16,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                paddingTop: 10,
                color: '#6D3805',
                fontSize: 16,
                textAlign: 'center',
              }}>
              {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default ExploreScreens;

const styles = StyleSheet.create({
  T: {
    width: '100%',
    height: '100%',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
});

const Data = [
  {
    id: 1,
    name: 'Fruits',
    image: require('../../../../image/food1.png'),
    background: require('../../../../image/background_f1.png'),
  },
  {
    id: 2,
    name: 'Vegtables',
    image: require('../../../../image/food2.png'),
    background: require('../../../../image/background_f2.png'),
  },
  {
    id: 3,
    name: 'Meat',
    image: require('../../../../image/food3.png'),
    background: require('../../../../image/background_f3.png'),
  },
  {
    id: 4,
    name: 'Fish',
    image: require('../../../../image/food4.png'),
    background: require('../../../../image/background_f4.png'),
  },
  {
    id: 5,
    name: 'Sea food',
    image: require('../../../../image/food5.png'),
    background: require('../../../../image/background_f5.png'),
  },
  {
    id: 6,
    name: 'Juice',
    image: require('../../../../image/food6.png'),
    background: require('../../../../image/background_f6.png'),
  },
  {
    id: 8,
    name: 'Ice cream',
    image: require('../../../../image/food8.png'),
    background: require('../../../../image/background_f8.png'),
  },
  {
    id: 9,
    name: 'Fruits',
    image: require('../../../../image/food1.png'),
    background: require('../../../../image/background_f1.png'),
  },
  {
    id: 10,
    name: 'Vegtables',
    image: require('../../../../image/food2.png'),
    background: require('../../../../image/background_f2.png'),
  },
  {
    id: 11,
    name: 'Meat',
    image: require('../../../../image/food3.png'),
    background: require('../../../../image/background_f3.png'),
  },
  {
    id: 12,
    name: 'Fish',
    image: require('../../../../image/food4.png'),
    background: require('../../../../image/background_f4.png'),
  },
  {
    id: 13,
    name: 'Sea food',
    image: require('../../../../image/food5.png'),
    background: require('../../../../image/background_f5.png'),
  },
  {
    id: 14,
    name: 'Juice',
    image: require('../../../../image/food6.png'),
    background: require('../../../../image/background_f6.png'),
  },
  {
    id: 15,
    name: 'Ice cream',
    image: require('../../../../image/food8.png'),
    background: require('../../../../image/background_f8.png'),
  },
];
