import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function FiftyThird({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Davlat fuqarolik xizmatchisini ijtimoiy jihatdan himoya qilish davlat tomonidan quyidagilar orqali ta’minlanadi:',
    'mehnat ta’tili va ijtimoiy ta’tillar berish;',
    'hayoti va sog‘lig‘ini majburiy sug‘urta qilish;',
    'hayotiga, sog‘lig‘iga va mol-mulkiga yetkazilgan zararning o‘rnini qoplash;',
    'davlat pensiya ta’minoti.',
    'Davlat fuqarolik xizmatchisiga quyidagi ijtimoiy himoya choralari kafolatlanadi:',
    'tibbiy xizmat ko‘rsatish;',
    'rotatsiya tartibida boshqa davlat fuqarolik xizmati lavozimiga o‘tkazilishi bilan bog‘liq xarajatlarning, shu jumladan yashash va transport xarajatlarining o‘rnini qoplash;',
    'xizmat uy-joylari, xizmat transporti bilan yoki uy-joy va transport xarajatlari uchun pulli kompensatsiya bilan qonunchilikda belgilangan hollarda hamda tartibda ta’minlash.',
    'Davlat fuqarolik xizmatchisiga qonunchilikka muvofiq boshqa ijtimoiy himoya choralari ham qo‘llanilishi mumkin.',
    'Davlat fuqarolik xizmatchisiga nisbatan O‘zbekiston Respublikasi fuqarolariga qonunchilikda belgilangan asoslarda va miqdorlarda to‘lanadigan barcha turdagi ijtimoiy nafaqalar tatbiq etiladi.',
    'Ijtimoiy nafaqalarni to‘lash O‘zbekiston Respublikasi Davlat budjetining mablag‘lari hisobidan amalga oshiriladi, bundan O‘zbekiston Respublikasi Moliya vazirligi huzuridagi budjetdan tashqari Pensiya jamg‘armasi mablag‘lari hisobidan amalga oshiriladigan to‘lovlar mustasno.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            53-modda. Davlat fuqarolik xizmatchisini ijtimoiy jihatdan himoya qilish
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
