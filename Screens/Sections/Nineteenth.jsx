import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function Nineteenth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };
  const items = [
    'Davlat fuqarolik xizmatida davlat fuqarolik xizmatchisiga (uning oila a’zolariga) bepul berilgan, moddiy qimmatga ega bo‘lgan mol-mulk yoki davlat fuqarolik xizmatchisiga (uning oila a’zolariga) beg‘araz ko‘rsatilgan xizmat sovg‘a hisoblanadi.',
    'Davlat fuqarolik xizmatchisining xizmat vakolatlarini jismoniy va yuridik shaxslar manfaatlarini ko‘zlab bajarish yoki bajarmaslik evaziga ulardan har qanday sovg‘alar olish taqiqlanadi. Bundan davlat fuqarolik xizmatchisi tomonidan alohida xizmatlari uchun davlat organining tegishli qarori asosida olingan sovg‘alar, shuningdek musobaqalar va tanlovlarda erishgan yutuqlari, davlat bayramlari, nishonlanadigan sanalar hamda boshqa rasmiy tadbirlar munosabati bilan mukofotlash natijasida olingan sovg‘alar mustasno.',
    'Davlat fuqarolik xizmatchilari xizmat safarlari vaqtida, shuningdek xalqaro va boshqa rasmiy tadbirlar munosabati bilan sovg‘alar olishi mumkin.',
    'Davlat fuqarolik xizmatchisi tomonidan xizmat safarlari, xalqaro va boshqa rasmiy tadbirlar munosabati bilan olinishi mumkin bo‘lgan sovg‘a qiymati, shuningdek uni tasarruf etish tartibi korrupsiyaga qarshi kurashish bo‘yicha maxsus vakolatli davlat organi tomonidan belgilanadi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>19-modda. Manfaatlar to‘qnashuvi</Text>

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
