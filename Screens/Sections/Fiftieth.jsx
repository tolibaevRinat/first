import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function Fiftieth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };
  const items = [
    'Davlat fuqarolik xizmati sohasida korrupsiyaning oldini olishga doir chora-tadbirlar quyidagilardan iborat:',
    'davlat fuqarolik xizmatchilari tomonidan korrupsiyaga oid huquqbuzarliklarga yo‘l qo‘yilmasligi;',
    'Davlat fuqarolik xizmatchilarining odob-axloq qoidalariga rioya etilishini ta’minlash;',
    'davlat fuqarolik xizmatchisining manfaatlar to‘qnashuvini oldini olish va hal qilishning tashkiliy-huquqiy asoslarini yaratish, ularga rioya etilishi ustidan monitoring va nazorat o‘tkazilishini ta’minlash;',
    'davlat fuqarolik xizmatchisining daromadlari va mol-mulkini deklaratsiyalash tizimini joriy etish;',
    'davlat fuqarolik xizmatchisi tomonidan sovg‘alar olish va berish tartibini belgilash;',
    'davlat fuqarolik xizmatchisining ijtimoiy jihatdan himoya qilinishini, moddiy ta’minot olishini va rag‘batlantirilishini ta’minlash.',
    'Qonunchilikda davlat fuqarolik xizmati sohasida korrupsiyaning oldini olishga doir boshqa chora-tadbirlar ham nazarda tutilishi mumkin.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            15-modda. Davlat fuqarolik xizmati sohasida korrupsiyaning oldini olishga doir
            chora-tadbirlar
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
