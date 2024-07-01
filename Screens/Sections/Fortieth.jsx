import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function Fortieth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Davlat fuqarolik xizmatchisi xizmat vazifasini bajarish uchun davlat organining qaroriga muvofiq muayyan muddatga xizmat safariga yuboriladi. Xizmat safari O‘zbekiston Respublikasi hududida yoki uning hududidan tashqarida amalga oshirilishi mumkin.',
    'Davlat fuqarolik xizmatchisining xizmat safari davomiyligi davlat organi rahbari tomonidan xizmat vazifasining hajmi, murakkabligi va boshqa jihatlari hisobga olingan holda belgilanadi.',
    'Davlat fuqarolik xizmatchisini xizmat safariga yuborish chog‘ida uning lavozimi va o‘rtacha ish haqi saqlanadi, yashash bilan bog‘liq xarajatlar, transport xarajatlari, shuningdek xizmat safari bilan bog‘liq boshqa xarajatlarning o‘rni davlat organi tomonidan qoplanadi.',
    'Davlat fuqarolik xizmatchisining xorijiy mamlakatlarga xizmat safarini tashkil etish tartibi O‘zbekiston Respublikasi Prezidenti tomonidan belgilanadi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            40-modda. Davlat fuqarolik xizmatchisining xizmat safarlari
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
