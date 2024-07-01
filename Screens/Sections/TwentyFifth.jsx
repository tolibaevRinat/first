import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function TwentyFifth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Milliy kadrlar zaxirasi davlat fuqarolik xizmatchilarining rahbarlik lavozimlarini malakali kadrlar bilan to‘ldirish maqsadida davlat fuqarolik xizmatchilarini markazlashtirilgan holda saralab olish, tayyorlash, qayta tayyorlash va uzluksiz malakasini oshirish tizimidir.',
    'Milliy kadrlar zaxirasi davlat fuqarolik xizmatining rahbar kadrlar tarkibini barqaror ta’minlash va uning sifatini yaxshilash, davlat fuqarolik xizmatchisining kasbiy kompetensiyasini oshirish hamda xizmatda lavozim bo‘yicha ko‘tarish maqsadida shakllantiriladi.',
    'Milliy kadrlar zaxirasini shakllantirish va yuritish O‘zbekiston Respublikasi Prezidenti tomonidan belgilanadigan tartibda maxsus vakolatli davlat organi tomonidan amalga oshiriladi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>25-modda. Milliy kadrlar zaxirasi</Text>

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
