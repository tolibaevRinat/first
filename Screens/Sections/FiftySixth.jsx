import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function FiftySixth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Davlat fuqarolik xizmatchisining hayoti yoki sog‘lig‘iga mehnatda mayib bo‘lishi, kasb kasalligiga chalinganligi yoki sog‘lig‘i o‘z xizmat majburiyatlarini bajarishi chog‘ida boshqacha tarzda shikastlanganligi tufayli yetkazilgan zararning o‘rni qonunda belgilangan tartibda davlat organi tomonidan qoplanadi.',
    'Davlat fuqarolik xizmatchisi xizmat majburiyatlarini bajarayotganda vafot etgan taqdirda, uning qaramog‘ida bo‘lgan oila a’zolariga davlat organi tomonidan vafot etgan shaxsning o‘rtacha yillik ish haqining olti baravaridan kam bo‘lmagan miqdorda bir yo‘la to‘lanadigan nafaqa ularning soniga teng taqsimlangan holda beriladi.',
    'Xizmat majburiyatlarini bajarish bilan bog‘liq holda davlat fuqarolik xizmatchisining mol-mulkiga yetkazilgan zararning o‘rni O‘zbekiston Respublikasi Davlat budjetining mablag‘lari hisobidan to‘liq hajmda qoplanadi, ushbu summa miqdori keyinchalik aybdor shaxslardan regress tartibida undiriladi.',
    'Ushbu moddaning birinchi va ikkinchi qismlarida nazarda tutilgan ziyonning, zararning o‘rnini qoplash bo‘yicha to‘lovlar O‘zbekiston Respublikasi Davlat budjetining mablag‘lari hisobidan amalga oshiriladi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            56-modda. Davlat fuqarolik xizmatchisining hayotiga, sog‘lig‘iga va mol-mulkiga
            yetkazilgan zararning o‘rnini qoplash
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
