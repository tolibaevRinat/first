import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function Sixteenth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };
  const items = [
    'Davlat fuqarolik xizmatchisi korrupsiyaga nisbatan murosasiz munosabatda bo‘lishi va korrupsiyaga olib kelishi mumkin bo‘lgan harakatlarning (harakatsizlikning) oldini olishi shart.',
    'Agar davlat fuqarolik xizmatchisi korrupsiya faktlari to‘g‘risidagi axborotga ega bo‘lsa, u korrupsiyaning oldini olish uchun zarur choralar ko‘rishi, shu jumladan yuqori turuvchi davlat organini (mansabdor shaxsini) yoki korrupsiyaga qarshi kurashish bo‘yicha maxsus vakolatli davlat organini darhol xabar qilishi yoxud huquqni muhofaza qiluvchi organga murojaat etishi kerak.',
    'Korrupsiya faktlari to‘g‘risida xabar bergan davlat fuqarolik xizmatchisiga qonunchilikda belgilangan tartibda davlat himoyasi ta’minlanadi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            16-modda. Davlat fuqarolik xizmatchisining korrupsiyaga nisbatan murosasiz munosabati
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
