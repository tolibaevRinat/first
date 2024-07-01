import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function FortySixth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Davlat fuqarolik xizmatchisi tomonidan lavozim yo‘riqnomasiga va Davlat fuqarolik xizmatchilarining odob-axloq qoidalariga, shuningdek ushbu Qonunning 13-moddasida belgilangan cheklovlarga rioya etmaganlik unga nisbatan intizomiy jazo choralarini qo‘llash uchun asos bo‘ladi.',
    'Davlat fuqarolik xizmatchisiga nisbatan quyidagi intizomiy jazo choralari qo‘llaniladi:',
    'hayfsan;',
    'o‘rtacha oylik ish haqining o‘ttiz foizidan ko‘p bo‘lmagan miqdorda jarima;',
    'malaka darajasini pasaytirish;',
    'davlat fuqarolik xizmati lavozimini pasaytirish;',
    'egallab turgan davlat fuqarolik xizmati lavozimidan ozod qilish.',
    'Davlat fuqarolik xizmatchisiga nisbatan ushbu moddaning ikkinchi qismida nazarda tutilmagan boshqa intizomiy jazo choralarini qo‘llash taqiqlanadi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            46-modda. Davlat fuqarolik xizmatchisining intizomiy javobgarligi
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
