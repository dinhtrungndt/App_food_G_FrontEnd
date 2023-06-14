import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const ItemScreens = () => {
  return (
    <View style={styles.T}>
      {/* header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={{top: 20}}
            source={require('../../../../image/back.png')}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            color: '#FF5E00',
            textAlign: 'center',
          }}>
          Favorite
        </Text>
      </View>

        {/* body */}
    </View>
  );
};

export default ItemScreens;

const styles = StyleSheet.create({
  header: {
    width: '100%',
  },
  T: {
    width: '100%',
    height: '100%',
    padding: 20,
  },
});
