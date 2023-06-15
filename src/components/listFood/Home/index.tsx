import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreens = () => {
  return (
    <View >
      <View style={styles.container}>
        <Image style={styles.imageLocation} source={require('../../../../image/location.png')} />
        <Text
          style={{
            position: 'absolute',
            fontSize: 48,
            color: '#FF5E00',
            left: 91.2,
            top: -36,
          }}>.</Text>
        <Text style={styles.textLocation}>Lungangen</Text>
      </View>

      <View style={{
        flexDirection: 'row',
        left: 16,
        alignItems: 'center',
      }}>
        <TextInput
          style={styles.searchInput}
          placeholder='Search'
          keyboardType='email-address'
          placeholderTextColor={"#6D3805"}>
        </TextInput>
        <Image style={{
          position: 'absolute',
          width: 18,
          height: 18,
          left: 12,
          tintColor: '#6D3805',

        }} source={require('../../../../image/icon_search.png')} />
      </View>

      <View style={styles.container2}>
        <Text style={{
          width: 112,
          height: 30,
          fontSize: 22,
          fontWeight: '700',
          color: '#6D3805'
        }}>Categories</Text>
        <Text style={{
          width: 60,
          height: 24,
          fontSize: 18,
          fontWeight: '400',
          color: '#FF5E00',
          left: 180,
          top: 3
        }}>See All</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <ScrollView style={{ marginTop: 20 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {
            data.map((item, index) => {
              return (
                <TouchableOpacity style={{
                  width: 102,
                  height: 135,
                  margin: 10,
                  left: 6
                }} key={item.id}>
                  <View style={styles.btnFood1}>
                    <Image style={styles.foodImage} source={item.image} />
                  </View>
                  <Text style={styles.textFood}>{item.name}</Text>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>

      <View style={styles.container2}>
        <Text style={{
          width: 112,
          height: 30,
          fontSize: 22,
          fontWeight: '700',
          color: '#6D3805'
        }}>Popular deals</Text>
        <Text style={{
          width: 60,
          height: 24,
          fontSize: 18,
          fontWeight: '400',
          color: '#FF5E00',
          left: 180,
          top: 3
        }}>See All</Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <ScrollView style={{ marginTop: 20 }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {
            data2.map((item, index) => {
              return (
                <View style={{
                  width: 150,
                  height: 189,
                  margin: 10,
                  left: 6,
                  backgroundColor: '#FFFFFF',
                  borderRadius: 20,
                  elevation: 5,
                }} key={item.id}>
                  <View style={styles.btnFood2}>
                    <Image style={styles.foodImage2} source={item.image} />
                  </View>

                  <View style={{
                    width: 130.5,
                    height: 90,
                    position: 'absolute',
                    top: 82.5,
                    left: 12,
                  }}>
                    <Text style={styles.nameFood}>{item.name}</Text>
                    <Text style={styles.massFood}>{item.mass}</Text>
                    <Text style={styles.priceFood}>{item.price}</Text>

                    <TouchableOpacity style={{
                      width: 30,
                      height: 30,
                      backgroundColor: '#3AA14C',
                      borderRadius: 500,
                      position: 'absolute',
                      justifyContent: 'center',
                      alignItems: 'center',
                      left: 99,
                      top: 60
                    }}>
                      <Text style={{
                        fontSize: 24,
                        color: '#FFFFFF',
                        borderRadius: 20,
                        top: -2.1
                      }}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    </View>
  )
}

export default HomeScreens

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 30,
  },
  imageLocation: {
    left: 87,
    top: 3,
  },
  textLocation: {
    width: 135,
    height: 42,
    fontSize: 24,
    fontWeight: '700',
    color: '#FF5E00',
    left: 93,
  },
  searchInput: {
    width: '92%',
    height: 48,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    paddingLeft: 36,
    fontWeight: '400',
  },
  container2: {
    flexDirection: 'row',
    marginTop: 30,
    left: 16
  },
  btnFood1: {
    width: 102,
    height: 102,
    backgroundColor: '#EDD0FF',
    borderRadius: 600,
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodImage: {
    resizeMode: 'cover',
  },
  textFood: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    color: '#6D3805',
    top: 15
  },
  btnFood2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  foodImage2: {
    top: 15,
  },
  nameFood: {
    fontSize: 15,
    fontWeight: '700',
    color: '#6D3805',
    top: 22.5,
  },
  massFood: {
    fontSize: 12,
    fontWeight: '400',
    color: '#6D3805',
    top: 24,
  },
  priceFood: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FF5E00',
    top: 25.5,
  },
})

const data = [
  {
    id: 1,
    name: 'Fruits',
    image: require('../../../../image/food1.png')
  },
  {
    id: 2,
    name: 'Vegetables',
    image: require('../../../../image/food2.png')
  },
  {
    id: 3,
    name: 'Meat',
    image: require('../../../../image/food3.png')
  },
  {
    id: 4,
    name: 'Fish',
    image: require('../../../../image/food4.png')
  },
  {
    id: 5,
    name: 'Sea food',
    image: require('../../../../image/food5.png')
  },
  {
    id: 6,
    name: 'Juice',
    image: require('../../../../image/food6.png')
  },
];

const data2 = [
  {
    id: 1,
    name: 'Red Apple',
    mass: '1kg',
    price: '$4.99',
    image: require('../../../../image/apple.png')
  },
  {
    id: 2,
    name: 'Orginal Banana',
    mass: '1kg',
    price: '$5.99',
    image: require('../../../../image/banana.png')
  },
  {
    id: 3,
    name: 'Strawberry',
    mass: '1kg',
    price: '$24.0',
    image: require('../../../../image/Strawberry.png')
  },
  {
    id: 4,
    name: 'Avocado Bowl',
    mass: '1kg',
    price: '$3.99',
    image: require('../../../../image/avocado.png')
  },
  {
    id: 5,
    name: 'Orginal Mango',
    mass: '1kg',
    price: '$3.99',
    image: require('../../../../image/peach.png')
  },
];