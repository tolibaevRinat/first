import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function ThirtyThird({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Davlat fuqarolik xizmatini o‘tash muddati davlat fuqarolik xizmati lavozimiga tayinlangan paytdan e’tiboran to davlat fuqarolik xizmatchisining faoliyati ushbu Qonunning 50-moddasida nazarda tutilgan asoslarga ko‘ra tugatilgan sanaga qadar bo‘lgan davrni qamrab oladi.',
    'Davlat fuqarolik xizmatini o‘tash mehnat shartnomasi asosida amalga oshiriladi va quyidagilarni o‘z ichiga oladi:',
    'davlat fuqarolik xizmatchisining ish vaqtini;',
    'davlat fuqarolik xizmatchisining lavozim yo‘riqnomasini;',
    'davlat fuqarolik xizmatchisining faoliyat samaradorligini baholashni;',
    'davlat fuqarolik xizmatida lavozim bo‘yicha ko‘tarilishni;',
    'boshqa davlat fuqarolik xizmati lavozimiga o‘tkazishni, shu jumladan rotatsiya tartibida o‘tkazishni va xizmat safarlarini;',
    'davlat fuqarolik xizmatchisining kasbiy kompetensiyasini uzluksiz ravishda oshirishni;',
    'davlat fuqarolik xizmatchilarining mehnatiga haq to‘lashning yagona tartibini;',
    'davlat fuqarolik xizmatchilariga nisbatan rag‘batlantirish yoki intizomiy jazo choralarini qo‘llashni.',
    'Davlat fuqarolik xizmati lavozimlarining siyosiy guruhiga kiruvchi davlat fuqarolik xizmatchilari tomonidan davlat fuqarolik xizmatini o‘tash tartibi O‘zbekiston Respublikasining alohida qonunlarida va O‘zbekiston Respublikasi Prezidentining qarorlarida belgilanadi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>33-modda. Davlat fuqarolik xizmatini o‘tash</Text>

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
