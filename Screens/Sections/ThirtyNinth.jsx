import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function ThirtyNinth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Davlat fuqarolik xizmatchisining rotatsiyasi uning shaxsiy va kasbga oid sifatlarini rivojlantirish, faoliyatining samaradorligini oshirish, rahbar kadrlar zaxirasini shakllantirish hamda korrupsiyaviy xavf-xatarlarning oldini olish maqsadida amalga oshiriladi.',
    'Davlat fuqarolik xizmatchisining rotatsiyasi uni egallab turgan davlat fuqarolik xizmati lavozimiga teng bo‘lgan boshqa lavozimga o‘z roziligi bilan o‘tkazish orqali amalga oshiriladi.',
    'Davlat fuqarolik xizmatida korrupsiyaga oid huquqbuzarliklarning oldini olish maqsadida majburiy ravishda rotatsiya qilinishi lozim bo‘lgan davlat fuqarolik xizmati lavozimlarining ro‘yxati belgilanadi. Ushbu lavozimlarni egallab turgan davlat fuqarolik xizmatchilarining rotatsiyasi ularning roziligisiz amalga oshiriladi.',
    'Quyidagi davlat fuqarolik xizmatchilari rotatsiya qilinmaydi:',
    'tayyorlash, qayta tayyorlashdan va malaka oshirishdan o‘tayotgan; ',
    'homilador ayollar, shuningdek uch yoshga to‘lmagan bolalari bor ayollar;',
    'tibbiy xulosaga asosan o‘zlarining yoki ular bilan birga yashovchi oila a’zolari sog‘lig‘ining holati rotatsiya o‘tkazilayotgan davlat fuqarolik xizmati lavozimi bo‘yicha xizmat majburiyatlarini amalga oshirish imkoniyatini bermaydiganlar.',
    'Davlat fuqarolik xizmatchisining rotatsiyasi shartlari mehnat shartnomasida nazarda tutiladi.',
    'Davlat fuqarolik xizmatchisi rotatsiya to‘g‘risidagi qarordan norozi bo‘lgan taqdirda yuqori turuvchi davlat organiga yoki maxsus vakolatli davlat organiga yoxud sudga shikoyat qilishga haqli.',
    'Davlat fuqarolik xizmatida rotatsiya qilish tartibi, majburiy ravishda rotatsiya qilinishi lozim bo‘lgan davlat fuqarolik xizmati lavozimlarining ro‘yxati, shuningdek rotatsiya qilinadigan lavozimlarda bo‘lish muddati O‘zbekiston Respublikasi Prezidenti tomonidan belgilanadi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>39-modda. Davlat fuqarolik xizmatchisining rotatsiyasi</Text>

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
