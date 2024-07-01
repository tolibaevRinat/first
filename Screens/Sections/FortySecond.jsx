import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function FortySecond({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Davlat fuqarolik xizmatchisining kasbiy kompetensiyasini uzluksiz ravishda oshirishdan maqsad uning samarali faoliyat yuritishi uchun zarur bo‘lgan bilimlar, ko‘nikmalar va malakalarni egallashi uchun shart-sharoitlar yaratishdan iboratdir.',
    'Davlat fuqarolik xizmatchisining kasbiy kompetensiyasi darajasi uning bilimlari, ko‘nikmalari va malakalari darajasini aniqlash imkonini beruvchi axborot tizimlari orqali davlat organi tomonidan muntazam ravishda baholab boriladi.',
    'Qayta tayyorlash, malaka oshirish va mustaqil ta’lim olish davlat fuqarolik xizmatchisining kasbiy kompetensiyasini uzluksiz ravishda oshirishning asosiy shakllaridir. Qayta tayyorlash davlat fuqarolik xizmatchisining samarali faoliyati uchun zarur bo‘lgan qo‘shimcha kasbiy bilimlar, ko‘nikmalar va malakalarni egallashi maqsadida tashkil etilgan ta’lim jarayonidir.',
    'Malaka oshirish davlat fuqarolik xizmatchisining kasbiy kompetensiyasini oshirishga va muntazam ravishda yangilab borishga qaratilgan ta’lim jarayonidir.',
    'Mustaqil ta’lim davlat fuqarolik xizmatchisining yangi bilimlar va tajribaga ega bo‘lish bo‘yicha ishdan bo‘sh vaqtida kasbiy kompetensiyasini oshirish jarayonidir. ',
    'Davlat fuqarolik xizmatchisining kasbiy kompetensiyasini uzluksiz ravishda oshirish tartibi O‘zbekiston Respublikasi Prezidenti tomonidan belgilanadi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            42-modda. Davlat fuqarolik xizmatchisining kasbiy kompetensiyasini uzluksiz ravishda
            oshirish
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
