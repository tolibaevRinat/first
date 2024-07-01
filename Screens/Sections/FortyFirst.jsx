import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function FortyFirst({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    ' Davlat fuqarolik xizmatchisi boshqa davlat organining davlat fuqarolik xizmati lavozimiga yuklatilgan majburiyatlarni bajarish uchun bir yildan ko‘p bo‘lmagan muddatga vaqtincha xizmat safariga yuborilishi mumkin. Bunda davlat fuqarolik xizmatchisining mehnatiga haq to‘lash u vaqtincha xizmat safariga yuborilgan davlat organi bilan alohida tuziladigan muddatli mehnat shartnomasi asosida amalga oshiriladi. Avvalgi xizmat joyi bo‘yicha tuzilgan mehnat shartnomasining amal qilishi davlat fuqarolik xizmatchisi vaqtincha xizmat safariga yuborilgan muddat tugaguniga qadar to‘xtatib turiladi.',
    ' Davlat fuqarolik xizmatchisiga haqiqatda bajarilgan ishiga qarab, o‘zining asosiy lavozimidagidan kam bo‘lmagan miqdorda ish haqi to‘lanadi. Davlat organining davlat fuqarolik xizmatchisini boshqa davlat organiga vaqtincha xizmat safariga yuborish bilan bog‘liq xarajatlarining o‘rni vaqtincha xizmat safariga yuborilgan davlat fuqarolik xizmatchisini qabul qilgan davlat organi tomonidan qoplanadi.',
    'Davlat fuqarolik xizmatchisini boshqa davlat organining davlat fuqarolik xizmati lavozimiga yuklatilgan majburiyatlarni bajarish uchun vaqtincha xizmat safariga yuborish faqat uning yozma roziligi bilan amalga oshirilishi mumkin.',
    'Davlat fuqarolik xizmatchisini boshqa davlat organiga vaqtincha xizmat safariga yuborishga quyidagi hollarda yo‘l qo‘yilmaydi:',
    'kasbiy kompetensiyalariga to‘g‘ri kelmaydigan davlat fuqarolik xizmati lavozimlariga;',
    'tibbiy xulosaga asosan o‘zining yoki u bilan birga istiqomat qiladigan oila a’zosining sog‘lig‘i davlat fuqarolik xizmatchisi vaqtincha xizmat safariga yuboriladigan davlat fuqarolik xizmati lavozimi bo‘yicha xizmat majburiyatlarini amalga oshirish imkonini bermasa.',
    'Agar boshqa davlat organidagi mehnatga haq to‘lash yoki dam olish shartlari, qo‘shimcha kafolatlar va imtiyozlar davlat fuqarolik xizmatchisini vaqtincha xizmat safariga yuborgan davlat organidagidan farq qilsa, xizmatchiga nisbatan qulayroq shartlar qo‘llaniladi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            41-modda. Davlat fuqarolik xizmatchisini boshqa davlat organiga vaqtincha xizmat
            safariga yuborish
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
