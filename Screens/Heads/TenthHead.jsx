import * as React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function SixthHead({ navigation }) {
  const buttons = [
    {
      title: '58-modda. Davlat fuqarolik xizmati sohasidagi tadbirlarni moliyalashtirish',
      to: 'FiftyEighth',
    },
    {
      title: '59-modda. Xalqaro hamkorlik ',
      to: 'FiftyNinth',
    },
    {
      title: '60-modda. Nizolarni hal etish',
      to: 'Sixtieth',
    },
    {
      title:
        '61-modda. Davlat fuqarolik xizmati to‘g‘risidagi qonunchilikni buzganlik uchun javobgarlik',
      to: 'SixtyFirst ',
    },
    {
      title:
        '62-modda. Ushbu Qonunning ijrosini, yetkazilishini, mohiyati va ahamiyati tushuntirilishini ta’minlash',
      to: 'SixtySecond',
    },
    {
      title: '63-modda. Qonunchilikni ushbu Qonunga muvofiqlashtirish',
      to: 'SixtyThird',
    },
    {
      title: '64-modda. Ushbu Qonunning kuchga kirishi',
      to: 'SixtyFourth',
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
