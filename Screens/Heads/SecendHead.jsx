import * as React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function Home({ navigation }) {
  const buttons = [
    {
      title:
        '6-modda. O‘zbekiston Respublikasi Prezidentining davlat fuqarolik xizmati sohasidagi vakolatlari',
      to: 'Sixth',
    },
    {
      title:
        '7-modda. O‘zbekiston Respublikasi Vazirlar Mahkamasining davlat fuqarolik xizmati sohasidagi vakolatlari',
      to: 'Seventh',
    },
    {
      title:
        '8-modda. Maxsus vakolatli davlat organining davlat fuqarolik xizmati sohasidagi vakolatlari',
      to: 'Eight',
    },
    {
      title: '9-modda. Davlat organlarining davlat fuqarolik xizmati sohasidagi vakolatlari',
      to: 'Ninth',
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
