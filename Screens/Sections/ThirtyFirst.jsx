import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function ThirtyFirst({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Davlat fuqarolik xizmatchisining shaxsiy hujjatlari to‘plami uning shaxsga doir ma’lumotlardan va u tomonidan davlat fuqarolik xizmatini o‘tash to‘g‘risidagi axborotdan iboratdir.',
    'Davlat fuqarolik xizmatchisining shaxsiy hujjatlari to‘plami davlat organining kadrlar bo‘linmasi tomonidan yuritiladi.',
    'Davlat fuqarolik xizmatchisining shaxsiy hujjatlari to‘plami elektron shaklda yuritiladi.',
    'Davlat fuqarolik xizmatchisining shaxsiy hujjatlari to‘plamiga davlat fuqarolik xizmatini o‘tash bilan bog‘liq bo‘lmagan axborotni kiritish, shuningdek shaxsiy hujjatlar to‘plamidagi axborotni uchinchi shaxslarga davlat fuqarolik xizmatchisining roziligisiz berish taqiqlanadi, bundan qonunchilikda belgilangan hollar mustasno.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            31-modda. Davlat fuqarolik xizmatchisining shaxsiy hujjatlari to‘plami{' '}
          </Text>

          {items.map((item, index) => (
            <Text key={index} style={styles.text}>
              {'\u00A0\u00A0\u00A0\u00A0'}
              {item}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Times-New-Roman-Bold',
    marginBottom: 20,
    color: '#fff',
  },
  wrapper: { padding: 15 },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.6,
  },
  text: {
    fontFamily: 'Times-New-Roman',
    fontSize: 26,
    color: '#fff',
    lineHeight: 40,
  },
  bold: {
    fontFamily: 'Times-New-Roman-Bold',
    fontSize: 26,
    color: '#fff',
    lineHeight: 40,
  },
  link: {
    color: 'blue',
    fontFamily: 'Times-New-Roman',
    fontSize: 26,
    // lineHeight: 40,
  },
});
