import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function Seventeenth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };
  const items = [
    'Davlat fuqarolik xizmatchilarining odob-axloq qoidalarida quyidagilar belgilanadi:',
    'rahbarlar, bo‘ysunuvdagilar va boshqa davlat fuqarolik xizmatchilari o‘rtasidagi o‘zaro axloqiy munosabatlar;',
    'davlat fuqarolik xizmatchisining ishchanlik obro‘siga va davlat fuqarolik xizmatining nufuziga putur yetkazishi mumkin bo‘lgan harakatlar (harakatsizlik);',
    'davlat fuqarolik xizmatchisining xizmat faoliyatidagi va xizmatdan tashqaridagi xulq-atvorining asosiy qoidalari.',
    'Davlat fuqarolik xizmatchilarining odob-axloq qoidalarini buzish ularni qonunga muvofiq intizomiy va boshqa javobgarlikka tortish uchun asos bo‘ladi.',
    'Davlat fuqarolik xizmatchilarining odob-axloq qoidalariga rioya etilishi ustidan nazorat davlat organlarining kadrlar bo‘linmalari yoki odob-axloq komissiyalari, shuningdek maxsus vakolatli davlat organi tomonidan amalga oshiriladi.',
    'Davlat fuqarolik xizmatchilarining odob-axloq qoidalari qonunchilikda belgilanadi. Har bir davlat organi Davlat fuqarolik xizmatchilarining odob-axloq qoidalari asosida faoliyatining o‘ziga xos xususiyatlarini hisobga olgan holda o‘zining ichki odob-axloq qoidalarini tasdiqlaydi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            17-modda. Davlat fuqarolik xizmatchilarining odob-axloq qoidalari
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
  bold: { fontFamily: 'Times-New-Roman-Bold' },
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
  italic: {
    fontFamily: 'Times-New-Roman-Italic',
    fontSize: 26,
    color: '#fff',
    lineHeight: 40,
    fontStyle: 'italic',
  },
  link: {
    color: 'blue',
    fontFamily: 'Times-New-Roman',
    fontSize: 26,
    // lineHeight: 40,
  },
});
