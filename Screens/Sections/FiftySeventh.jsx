import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function FiftySeventh({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'O‘zbekiston Respublikasi fuqarolariga tayinlanadigan barcha turdagi davlat pensiyalari davlat fuqarolik xizmatchisiga nisbatan qonunda belgilangan asoslarga ko‘ra qo‘llaniladi.',
    'Vafot etgan davlat fuqarolik xizmatchisining qaramog‘ida bo‘lgan mehnatga qobiliyatsiz oila a’zolari boquvchisini yo‘qotganlik pensiyasini olish huquqiga ega.',
    'Davlat fuqarolik xizmatchisining davlat pensiya ta’minoti O‘zbekiston Respublikasi Moliya vazirligi huzuridagi budjetdan tashqari Pensiya jamg‘armasi mablag‘lari hisobidan amalga oshiriladi.',
    'Davlat fuqarolik xizmatchilariga pensiyalarni tayinlash, hisoblab chiqarish tartibi, ularning miqdorlari hamda davlat pensiya ta’minoti bo‘yicha qo‘shimcha ijtimoiy kafolatlar fuqarolarning davlat pensiya ta’minoti to‘g‘risidagi qonunchilikda belgilanadi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>57-modda. Davlat pensiya ta’minoti</Text>

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
