import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function FiftyFirst({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Davlat fuqarolik xizmatchisi faoliyatining qonunga xilof ravishda tugatilganligi aniqlangan taqdirda davlat fuqarolik xizmatchisi avvalgi davlat fuqarolik xizmati lavozimiga tiklanadi, buning imkoni bo‘lmaganda esa (davlat organining tugatilganligi, shtatlar qisqartirishga sabab bo‘ladigan tarzda o‘zgartirilganligi yoki ushbu xizmatchini avvalgi davlat fuqarolik xizmati lavozimiga tiklashga monelik qiladigan, qonunda nazarda tutilgan boshqa asoslar mavjud bo‘lganda) avvalgi lavozimiga teng bo‘lgan boshqa davlat fuqarolik xizmati lavozimiga tayinlanadi.',
    'Davlat fuqarolik xizmati lavozimiga tiklangan davlat fuqarolik xizmatchisiga uning faoliyati qonunga xilof ravishda tugatilganligi tufayli yetkazilgan zararning o‘rni O‘zbekiston Respublikasi Davlat budjeti mablag‘lari hisobidan qoplanadi.',
    'Davlat fuqarolik xizmatchisi faoliyatining qonunga xilof ravishda tugatilishida aybdor bo‘lgan shaxs qonunda belgilangan tartibda javobgar bo‘ladi. Davlat fuqarolik xizmatchisi faoliyatining qonunga xilof ravishda tugatilishi bilan bog‘liq zararning miqdori aybdor shaxsdan regress tartibida undiriladi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            51-modda. Davlat fuqarolik xizmatchisi faoliyatining qonunga xilof ravishda tugatilishi
            oqibatlari
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
