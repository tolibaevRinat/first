import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function Eleventh({ navigation }) {
  const items = [
    'Davlat fuqarolik xizmatchisi quyidagi huquqlarga ega:',
    'o‘z zimmasiga yuklatilgan majburiyatlarning o‘ziga xos xususiyati va murakkabligiga, bajarilgan ishlarning miqdori hamda sifatiga muvofiq o‘z vaqtida va to‘liq hajmda ish haqi olish;kasbiy kompetensiyalari va alohida xizmatlari uchun rag‘batlantirilish;',
    'davlat organining mablag‘lari hamda qonunchilikda taqiqlanmagan boshqa mablag‘lar hisobidan muntazam ravishda malakasini oshirib borish;',
    'mehnat to‘g‘risidagi qonunchilikda belgilangan tartibda hamda shartlarda mehnat shartnomasiga o‘zgartishlar kiritish va shartnomani bekor qilish;',
    'o‘z mansab vakolatlarini, xizmat majburiyatlarini va javobgarligini belgilovchi lavozim yo‘riqnomasi va boshqa hujjatlar bilan tanishish; ',
    'mehnatni muhofaza qilish talablariga muvofiq bo‘lgan ish o‘rniga ega bo‘lish;',
    'ish vaqti davomiyligining chegarasini, ayrim davlat fuqarolik xizmatchilari uchun qisqartirilgan ish vaqtini belgilash, har haftalik dam olish kunlari, ishlanmaydigan bayram kunlari, shuningdek yillik mehnat ta’tillari berish orqali ta’minlanadigan tarzda dam olish;',
    'qonunchilikka muvofiq huquqiy va ijtimoiy jihatdan himoya qilinish, shuningdek davlat pensiya ta’minotini olish;',
    'davlat organining qonunga xilof qarorlari va uning mansabdor shaxslarining qonunga xilof harakatlari (harakatsizligi) ustidan shikoyat qilish;davlat organi rahbariyatining noqonuniy topshiriq va talablarini bajarishdan bosh tortish;',
    'davlat fuqarolik xizmatidagi korrupsiyaga oid huquqbuzarliklar faktlari to‘g‘risida xabar bergan taqdirda, davlat himoyasi bilan ta’minlanish;',
    'xizmatga oid masalalar yuzasidan davlat organining rahbariyatiga o‘z fikrini bildirish, o‘zi davlat fuqarolik xizmatini o‘tayotgan davlat organining faoliyatini takomillashtirish bo‘yicha takliflar kiritish;',
    'o‘zining sha’ni, qadr-qimmati va ishchanlik obro‘si davlat organining rahbariyati hamda boshqa mansabdor shaxslar tomonidan hurmat qilinishi;',
    'davlat organi tomonidan qayta tayyorlash va malaka oshirishga yuborilgan taqdirda, shuningdek qonunchilikda nazarda tutilgan boshqa hollarda davlat fuqarolik xizmati lavozimining va ish haqining saqlanib qolishi;',
    'qonunchilikda belgilangan tartibda davlat fuqarolik xizmatini o‘tash vaqtida yetkazilgan moddiy zararning o‘rni qoplanishi va ma’naviy ziyonning kompensatsiya qilinishi;',
    'o‘zining mehnat huquqlari, erkinliklari va qonuniy manfaatlarini qonunda taqiqlanmagan barcha usullar bilan himoya qilish;',
    'davlat fuqarolik xizmati masalalari yuzasidan maxsus vakolatli davlat organiga murojaat qilish;',
    'o‘zining shaxsiy hujjatlari to‘plami bilan tanishish.',
    'Davlat fuqarolik xizmatchisi qonunchilikka muvofiq boshqa huquqlarga ham ega bo‘lishi mumkin.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>11-modda. Davlat fuqarolik xizmatchisining huquqlari</Text>
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
