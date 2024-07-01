import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function TwentySecond({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };
  const items = [
    'Davlat fuqarolik xizmati lavozimlarining davlat reyestri davlat organi darajasidan (milliy, respublika, hududiy va tuman) kelib chiqqan holda, malaka talablariga muvofiq birxillashtirilgan va tasniflangan davlat fuqarolik xizmati lavozimlarining guruhlari hamda toifalaridan, shuningdek davlat fuqarolik xizmati lavozimlarining malaka darajalaridan iborat bo‘ladi.',
    'Davlat fuqarolik xizmati lavozimlarining davlat reyestri O‘zbekiston Respublikasi Prezidenti tomonidan tasdiqlanadi hamda maxsus vakolatli davlat organi tomonidan yuritiladi.',
    'Davlat fuqarolik xizmati lavozimlarining davlat reyestri, shuningdek unga kiritilgan o‘zgartish va qo‘shimchalar maxsus vakolatli davlat organining rasmiy veb-saytida e’lon qilinadi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            22-modda. Davlat fuqarolik xizmati lavozimlarining davlat reyestri
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
