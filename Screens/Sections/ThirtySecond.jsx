import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function ThirtySecond({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Davlat fuqarolik xizmatchisiga maxsus vakolatli davlat organi tomonidan belgilangan shakldagi xizmat guvohnomasi beriladi.',
    'Xizmat guvohnomasida davlat fuqarolik xizmatchisi egallagan lavozimi, uning malaka darajasi, davlat organining to‘liq nomi, guvohnoma berilgan sana va uning amal qilish muddati ko‘rsatiladi.',
    'Xizmat guvohnomasi davlat fuqarolik xizmatchisi to‘g‘risidagi ma’lumotlarni tasdiqlaydigan identifikatsiyalovchi karta ko‘rinishida ham berilishi mumkin.',
    'Xizmat guvohnomasini boshqa shaxslarga berish mumkin emas.',
    'Xizmat guvohnomasining amal qilish muddati o‘tgan yoki davlat fuqarolik xizmatchisi lavozimdan ozod etilgan taqdirda, shuningdek qonunchilikda nazarda tutilgan boshqa hollarda xizmat guvohnomasi uni bergan davlat organiga qaytariladi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            32-modda. Davlat fuqarolik xizmatchisining xizmat guvohnomasi
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
