import * as React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function SixthHead({ navigation }) {
  const buttons = [
    {
      title: '27-modda. Davlat fuqarolik xizmatiga kirish',
      to: 'TwentySeventh',
    },
    {
      title: '28-modda. Davlat fuqarolik xizmatiga qabul qilish shartlari',
      to: 'TwentyEighth',
    },
    {
      title: '29-modda. Davlat fuqarolik xizmati lavozimini egallash',
      to: 'TwentyNinth',
    },
    {
      title: '30-modda. Mehnat shartnomasi',
      to: 'Thirtieth',
    },
    {
      title: '31-modda. Davlat fuqarolik xizmatchisining shaxsiy hujjatlari to‘plami ',
      to: 'ThirtyFirst',
    },
    {
      title: '32-modda. Davlat fuqarolik xizmatchisining xizmat guvohnomasi',
      to: 'ThirtySecond',
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
