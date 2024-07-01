import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function TwentyFirst({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };
  const items = [
    'Davlat fuqarolik xizmati tizimi davlat fuqarolik xizmatchilarini markazlashtirilgan tarzda tanlab olish, hisobga olish, joy-joyiga qo‘yish, ularning mehnatiga haq to‘lash, kasbiy kompetensiyasini oshirish va xizmatda lavozim bo‘yicha ko‘tarish mexanizmlarining yagona tashkiliy-huquqiy majmuidir.',
    'Belgilangan malaka talablariga muvofiq bo‘lgan O‘zbekiston Respublikasining barcha fuqarolariga davlat fuqarolik xizmatiga kirish uchun teng imkoniyatlar kafolatlanadi.',
    'Zimmasiga yuklatilgan vazifalarni samarali amalga oshirish uchun kasbiy kompetensiyasini shakllantirish davlat fuqarolik xizmatchisini qayta tayyorlashni, uning malakasini oshirishni, ta’lim olishini tashkil etish hisobidan ta’minlanadi.',
    'Davlat fuqarolik xizmatchisini tegishli ravishda rag‘batlantirish va xizmatda lavozim bo‘yicha ko‘tarish uning kasbiy kompetensiyalarini hamda alohida xizmatlarini xolisona va adolatli baholash asosida ta’minlanadi.',
  ];
  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={require('../../assets/bg.jpg')} style={styles.image} />
        <View style={styles.wrapper}>
          <Text style={styles.title}>21-modda. Davlat fuqarolik xizmati tizimi</Text>

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
