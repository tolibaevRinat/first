import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function TwentyEighth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Davlat fuqarolik xizmatiga davlat tilini biladigan, davlat fuqarolik xizmati lavozimlarini egallash uchun tegishli malaka talablariga va boshqa talablarga javob beradigan O‘zbekiston Respublikasi fuqarolari qabul qilinadi.',
    'Chet el mutaxassislari va ekspertlari davlat fuqarolik xizmati lavozimlarini qonunchilikda belgilangan tartibda egallashi mumkin. Chet el mutaxassislari va ekspertlarining xizmatni o‘tash tartibi hamda shartlari tegishli shartnoma asosida belgilanadi.',
    'Quyidagilar davlat fuqarolik xizmatiga qabul qilinishi mumkin emas:',
    'o‘n sakkiz yoshga to‘lmagan shaxslar, agar davlat fuqarolik xizmati lavozimiga doir malaka talablarida boshqacha qoida belgilanmagan bo‘lsa;',
    'sud tomonidan muomalaga layoqatsiz yoki muomala layoqati cheklangan deb topilgan shaxslar;',
    'sudning qarori bilan muayyan muddatga davlat fuqarolik xizmati lavozimlarini egallash huquqidan mahrum qilingan shaxslar;',
    'korrupsiyaga oid jinoyatlarni sodir etishda sud tomonidan aybdor deb topilgan shaxslar;',
    'og‘ir va o‘ta og‘ir jinoyatlarni sodir etganlik uchun sudlanganlik holati tugallanmagan yoki olib tashlanmagan shaxslar;',
    'tibbiy xulosaga asosan sog‘lig‘ining holati davlat fuqarolik xizmati lavozimini egallash imkonini bermaydigan shaxslar;',
    'davlat fuqarolik xizmatini o‘tash bilan bog‘liq bo‘lgan, ushbu Qonun 13-moddasining birinchi qismida nazarda tutilgan cheklovlarga rioya etishni rad qilgan shaxslar.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            28-modda. Davlat fuqarolik xizmatiga qabul qilish shartlari
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
