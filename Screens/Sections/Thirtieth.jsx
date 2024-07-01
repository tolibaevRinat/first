import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function Thirtieth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Davlat fuqarolik xizmatiga kirayotgan shaxs bilan mehnat shartnomasi mehnat qonunchiligi asosida muayyan yoki nomuayyan muddatga yozma shaklda tuziladi. Davlat fuqarolik xizmati lavozimlarining siyosiy guruhiga kiruvchi davlat fuqarolik xizmatchilari bilan mehnat shartnomasi tuzilmaydi.',
    'Mehnat shartnomasida davlat fuqarolik xizmatini o‘tashning asoslari va shartlari, davlat fuqarolik xizmatchisining huquqlari, majburiyatlari hamda javobgarligi, davlat fuqarolik xizmatini o‘tash bilan bog‘liq cheklovlar, shuningdek uni huquqiy va ijtimoiy jihatdan himoya qilishga taalluqli qoidalar ko‘rsatiladi.',
    'Davlat fuqarolik xizmatchisi bilan tuziladigan mehnat shartnomasiga doir namunaviy talablar maxsus vakolatli davlat organi tomonidan belgilanadi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>30-modda. Mehnat shartnomasi</Text>

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
