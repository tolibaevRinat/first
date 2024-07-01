import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function FortyNinth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Xizmat tekshiruvi mehnat to‘g‘risidagi qonunchilikda belgilangan tartibda davlat organi rahbarining qaroriga ko‘ra o‘tkaziladi. Davlat fuqarolik xizmatchisi o‘ziga nisbatan asossiz ayblovlar qo‘yilgan yoki xulosalar chiqarilgan deb hisoblaganda ham uning yozma arizasi asosida xizmat tekshiruvidan o‘tkazilishi mumkin.',
    'Xizmat tekshiruvi davomida quyidagilar aniqlanishi zarur:',
    'intizomiy qilmishga sabab bo‘lgan holatlar va shart-sharoitlar;',
    'davlat fuqarolik xizmatchisini intizomiy qilmishda ayblashning asosliligi yoki asossizligi;',
    'intizomiy qilmish natijasida yetkazilgan zararning o‘ziga xos xususiyati va miqdori;',
    'davlat fuqarolik xizmatchisining tushuntirishlari va yozma ravishda bergan talablarida ko‘rsatilgan vajlar.',
    'Davlat organidagi xizmat tekshiruvi davlat organining kadrlar bo‘linmasi, yuridik xizmati va boshqa bo‘linmalari, shuningdek kasaba uyushmasi (mavjud bo‘lgan taqdirda) vakillaridan iborat bo‘lgan xizmat tekshiruvini o‘tkazish bo‘yicha komissiya tomonidan o‘tkaziladi. Xizmat tekshiruvini o‘tkazish bo‘yicha komissiya tarkibiga davlat organining rahbari hamda xizmat tekshiruvi natijasidan manfaatdor bo‘lgan shaxslar kirishi mumkin emas.',
    'Xizmat tekshiruvini o‘tkazish zarur bo‘lgan hollarda, davlat organining rahbari davlat fuqarolik xizmatchisini xizmat tekshiruvi o‘tkazish mobaynida xizmat majburiyatlarini bajarishdan uning o‘rtacha ish haqini saqlab qolgan holda vaqtincha chetlatish to‘g‘risida qaror qabul qilishi mumkin.',
    'Xizmat tekshiruvini o‘tkazish muddati o‘n besh ish kunidan oshmasligi kerak. Davlat organining rahbari xizmat tekshiruvini o‘tkazish bo‘yicha komissiyaning asoslantirilgan vajlari asosida xizmat tekshiruvini o‘tkazish muddatini yana o‘n besh ish kunigacha uzaytirishga haqli.',
    'Xizmat tekshiruvi natijasiga ko‘ra xizmat tekshiruvini o‘tkazish bo‘yicha komissiyaning dalolatnomasi tuziladi va davlat fuqarolik xizmatchisiga nisbatan intizomiy jazo chorasini qo‘llash yoki qo‘llamaslik to‘g‘risidagi xulosa tayyorlanadi. Xizmat tekshiruvini o‘tkazish bo‘yicha komissiyaning xulosasi davlat organi rahbari tomonidan rad etilishi yoki davlat fuqarolik xizmatchisiga nisbatan intizomiy jazo chorasini qo‘llash uchun asos bo‘lishi mumkin.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>49-modda. Xizmat tekshiruvi</Text>

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
