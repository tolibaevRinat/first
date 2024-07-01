import * as React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function SixthHead({ navigation }) {
  const buttons = [
    {
      title: '50-modda. Davlat fuqarolik xizmatchisi faoliyatini tugatish asoslari',
      to: 'Fifteenth',
    },
    {
      title:
        '51-modda. Davlat fuqarolik xizmatchisi faoliyatining qonunga xilof ravishda tugatilishi oqibatlari',
      to: 'FiftyFirst',
    },
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {buttons.map((btn, index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate(btn.to)}>
            <Text style={styles.btn}>{btn.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  scrollContainer: {
    alignItems: 'stratch',
    gap: 20,
    padding: 15,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  btn: {
    fontSize: 20,
    backgroundColor: '#c8c5c2',
    padding: 14,
    borderRadius: 8,
    color: '#000',
    textAlign: 'center',
  },
});
