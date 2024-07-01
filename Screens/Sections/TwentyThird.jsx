import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function TwentyThird({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };
  const items = [
    'Davlat fuqarolik xizmati lavozimlari siyosiy, boshqaruv va yordamchi lavozim guruhlaridan iboratdir. Bunda mazkur guruhlarga tegishli lavozimlarning toifalari Davlat fuqarolik xizmati lavozimlarining davlat reyestrida belgilanadi.',
    'Davlat fuqarolik xizmati lavozimlarining siyosiy guruhiga taalluqli davlat fuqarolik xizmatchilarini lavozimga tayinlash va lavozimidan ozod qilish tartibi alohida qonunlar hamda O‘zbekiston Respublikasi Prezidentining qarorlari bilan belgilanadi.',
    'Davlat fuqarolik xizmatchilari davlat fuqarolik xizmatining boshqaruv va yordamchi guruhlariga taalluqli davlat fuqarolik xizmati lavozimlariga tanlov asosida tayinlanadi hamda davlat organi rahbari tomonidan lavozimidan ozod qilinadi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            23-modda. Davlat fuqarolik xizmati lavozimlarining guruhlari va toifalari
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
