import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function Twelefth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };
  const items = [
    '    o‘z xizmat majburiyatlarini vijdonan bajarishi, davlat organi tomonidan belgilangan odob-axloq qoidalariga, xizmatga oid axborot bilan ishlash tartibiga, shuningdek davlat fuqarolik xizmatini o‘tash bilan bog‘liq boshqa qoidalarga rioya etishi;',
    'ushbu Qonunda belgilangan, davlat fuqarolik xizmatini o‘tash bilan bog‘liq bo‘lgan cheklovlarga rioya etishi;',
    'manfaatlar to‘qnashuviga yo‘l qo‘ymasligi, beg‘araz va xolis bo‘lishi;',
    'davlat organining nufuzini tushirishga olib kelishi yoki uning o‘z xizmat majburiyatlarini vijdonan bajarishiga shubha tug‘dirishi mumkin bo‘lgan harakatlardan (harakatsizlikdan), shu jumladan o‘z xizmat majburiyatlarini bajarayotganda har qanday shakldagi kamsitishdan, noxolislikdan yoki kimgadir nisbatan alohida munosabatda bo‘lishdan tiyilishi;',
    'o‘z xizmat mavqeyidan shaxsiy va boshqa g‘ayriqonuniy maqsadlarda foydalanmasligi, shuningdek o‘z xizmat faoliyatiga, davlat organlari, ularning mansabdor shaxslari va fuqarolarning faoliyatiga qonunga xilof ta’sir ko‘rsatilishiga yo‘l qo‘ymasligi;',
    'davlat sirlarini yoki qonun bilan qo‘riqlanadigan boshqa sirni tashkil etuvchi ma’lumotlarni muhofaza qilish to‘g‘risidagi talablarga rioya etishi, shuningdek o‘z xizmat majburiyatlarini bajarishi chog‘ida olingan mazkur ma’lumotlarni oshkor qilmasligi, shu jumladan davlat fuqarolik xizmatchisining faoliyati tugaganidan keyin oshkor etmasligi;',
    'qonunda belgilangan muddatlarda va tartibda daromadlari va mol-mulki to‘g‘risidagi deklaratsiyani taqdim etishi;',
    'davlat mulkining but saqlanishini ta’minlashi, o‘ziga ishonib topshirilgan davlat mulkidan faqat xizmat maqsadlarida foydalanishi;',
    'o‘zining kasbiy kompetensiyasini muntazam ravishda oshirib borishi shart.',
    'Davlat fuqarolik xizmatchilarining zimmasida qonunchilikka muvofiq boshqa majburiyatlar ham bo‘lishi mumkin.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            12-modda. Davlat fuqarolik xizmatchisining majburiyatlari
          </Text>
          <Text style={styles.text}>{'\u00A0\u00A0\u00A0\u00A0'}Davlat fuqarolik xizmatchisi:</Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}O‘zbekiston Respublikasining
            <Text onPress={handleLinkPress} style={styles.link}>
              {' '}
              Konstitutsiyasi,{' '}
            </Text>{' '}
            qonunlari va boshqa qonunchilik hujjatlariga rioya etishi;
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
