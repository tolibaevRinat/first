import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function FortyEighth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Intizomiy jazo chorasi darhol, biroq intizomiy qilmish aniqlangan kundan e’tiboran bir oydan kechiktirmay qo‘llaniladi.',
    'Intizomiy jazo choralari: ',
    'davlat fuqarolik xizmatchisi vaqtincha mehnatga qobiliyatsiz bo‘lgan davrda;',
    'davlat fuqarolik xizmatchisi ta’tilda yoki xizmat safarida bo‘lgan davrda;',
    'davlat fuqarolik xizmatchisi favqulodda vaziyat yoki harbiy xizmatni o‘tashi bilan bog‘liq bo‘lgan majburiyatlarni amalga oshirayotgan vaqtga o‘z xizmat majburiyatlarini bajarishdan ozod etilgan davrda;',
    'davlat fuqarolik xizmatchisi qayta tayyorlashda, malaka oshirishda bo‘lgan va ta’lim olayotgan davrda qo‘llanilishi mumkin emas.',
    'Intizomiy jazo chorasini qo‘llash muddati ushbu moddaning ikkinchi qismida nazarda tutilgan muddatlar o‘tguniga qadar to‘xtatib turiladi.',
    'Intizomiy jazo chorasi intizomiy qilmish sodir etilgan kundan e’tiboran olti oydan kechiktirmay, taftish yoki moliya-xo‘jalik faoliyatini tekshirish yoxud auditorlik tekshiruvi natijalariga ko‘ra esa — qilmish sodir etilgan kundan e’tiboran ikki yildan kechiktirmay qo‘llanilishi mumkin. Ko‘rsatilgan muddatlarga jinoyat ishi bo‘yicha ish yuritish vaqti kiritilmaydi.',
    'Intizomiy jazo chorasi jazo qo‘llanilgan kundan boshlab bir yil davomida amal qiladi. Agar mazkur muddat ichida davlat fuqarolik xizmatchisiga yangi intizomiy jazo chorasi qo‘llanilmagan bo‘lsa, u intizomiy jazoga tortilmagan deb hisoblanadi. Bunda intizomiy jazo chorasining muddati davlat organi rahbarining tegishli qarori chiqarilmagan holda, avtomatik tarzda tugaydi.',
    'Davlat organi rahbari intizomiy jazo chorasini o‘z tashabbusiga ko‘ra, davlat fuqarolik xizmatchisining bevosita rahbarining, kasaba uyushmasining (mavjud bo‘lgan taqdirda) iltimosnomasiga binoan, shuningdek davlat fuqarolik xizmatchisining iltimosiga ko‘ra muddatidan ilgari olib tashlash huquqiga ega.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>48-modda. Intizomiy jazo choralarini qo‘llash muddatlari</Text>

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
