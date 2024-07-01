import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function TwentyNinth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Davlat fuqarolik xizmati lavozimini egallash tanlov asosida amalga oshiriladi, bundan qonunchilik bilan belgilangan kafolatlarga muvofiq oldingi lavozimni yoki unga teng bo‘lgan lavozimni taqdim etish hollari, shuningdek ushbu Qonunning 39 va 41-moddalarida nazarda tutilgan holatlar mustasno.',
    'Davlat fuqarolik xizmati lavozimini egallash uchun nomzodlarga jinsi, irqi, millati, tili, dini, ijtimoiy kelib chiqishi, e’tiqodi, shaxsiy va ijtimoiy mavqeyidan qat’i nazar, huquqlarining tengligi kafolatlanadi.',
    'Davlat fuqarolik xizmatining bo‘sh turgan (vakant) lavozimini egallash maxsus vakolatli davlat organining axborot tizimi orqali o‘tkaziladigan ichki va tashqi tanlovlar asosida amalga oshiriladi.',
    'Ichki tanlovlarda faqat davlat fuqarolik xizmatchilari, tashqi tanlovlarda esa tegishli malaka talablariga javob beradigan barcha O‘zbekiston Respublikasi fuqarolari ishtirok etish huquqiga ega.Tanlov o‘tkaziladigan davlat fuqarolik xizmati lavozimlari va tanlov o‘tkazish tartibi O‘zbekiston Respublikasi Prezidenti tomonidan belgilanadi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>29-modda. Davlat fuqarolik xizmati lavozimini egallash</Text>

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
