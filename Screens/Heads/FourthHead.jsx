import * as React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function Home({ navigation }) {
  const buttons = [
    {
      title:
        '15-modda. Davlat fuqarolik xizmati sohasida korrupsiyaning oldini olishga doir chora-tadbirlar',
      to: 'Fiftieth',
    },
    {
      title:
        '16-modda. Davlat fuqarolik xizmatchisining korrupsiyaga nisbatan murosasiz munosabati',
      to: 'Sixteenth',
    },
    {
      title: '17-modda. Davlat fuqarolik xizmatchilarining odob-axloq qoidalari',
      to: 'Seventeenth',
    },
    {
      title:
        '18-modda. Davlat fuqarolik xizmatida sovg‘alarga nisbatan munosabatda bo‘lish shartlari',
      to: 'Eighteenth',
    },
    {
      title: '19-modda. Manfaatlar to‘qnashuvi',
      to: 'Nineteenth',
    },
    {
      title:
        '20-modda. Davlat fuqarolik xizmatchisi tomonidan daromadlari va mol-mulkini deklaratsiyalash',
      to: 'Twentieth',
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
