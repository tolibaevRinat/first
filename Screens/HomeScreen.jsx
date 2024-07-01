import * as React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function Home({ navigation }) {
  const buttons = [
    { title: '1-bob. Umumiy qoidalar', to: 'FirstHead' },
    { title: '2-bob. Davlat fuqarolik xizmati sohasida davlat boshqaruvi', to: 'SecendHead' },
    { title: '3-bob. Davlat fuqarolik xizmatchisining huquqiy maqomi', to: 'ThirdHead' },
    {
      title: '4-bob. Davlat fuqarolik xizmati sohasida korrupsiyaga qarshi kurashish',
      to: 'FourthHead',
    },
    { title: '5-bob. Davlat fuqarolik xizmatini tashkil etish', to: 'FifthHead' },
    { title: '6-bob. Davlat fuqarolik xizmatiga kirish tartibi va shartlari', to: 'SixthHead' },
    { title: '7-bob. Davlat fuqarolik xizmatini o‘tash tartibi', to: 'SeventhHead' },
    { title: '8-bob. Davlat fuqarolik xizmatchisi faoliyatining tugatilishi', to: 'EigthHead' },
    {
      title: '9-bob. Davlat fuqarolik xizmatchisini huquqiy va ijtimoiy jihatdan himoya qilish',
      to: 'NinthHead',
    },
    { title: '10-bob. Yakunlovchi qoidalar', to: 'TenthHead' },
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../assets/bg.jpg')} style={styles.image} />
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
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    alignItems: 'stratch',
    gap: 20,
    padding: 15,
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
