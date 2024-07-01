import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function FiftySecond({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-3527353');
  };

  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            52-modda. Davlat fuqarolik xizmatchisini huquqiy jihatdan himoya qilish
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}Davlat fuqarolik xizmatchisi davlat organining qonunga xilof
            qarorlari, shuningdek ular mansabdor shaxslarining qonunga xilof harakatlari
            (harakatsizligi) ustidan yuqori turuvchi davlat organiga yoki maxsus vakolatli davlat
            organiga yoxud sudga shikoyat qilishga haqli.
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}Davlat organining qonunga xilof qarorlari, shuningdek ular
            mansabdor shaxslarining qonunga xilof harakatlari (harakatsizligi) natijasida davlat
            fuqarolik xizmatchisining buzilgan, nizolashilayotgan huquqlarini, erkinliklarini va
            qonuniy manfaatlarini himoya qilish O‘zbekiston Respublikasining
            <Text onPress={handleLinkPress} style={styles.link}>
              {' '}
              Ma’muriy sud ishlarini yuritish to‘g‘risidagi kodeksida{' '}
            </Text>
            belgilangan tartibda amalga oshiriladi.
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}Davlat fuqarolik xizmatchisiga yetkazilgan moddiy zararning
            o‘rnini qoplash va ma’naviy ziyonni kompensatsiya qilish bilan bog‘liq nizolar fuqarolik
            protsessual qonunchilik bilan belgilangan tartibda hal etiladi.
          </Text>
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
