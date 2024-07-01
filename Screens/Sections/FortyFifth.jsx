import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function FortyFifth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Davlat fuqarolik xizmatchisiga nisbatan rag‘batlantirish choralarini qo‘llash davlat organining rahbari tomonidan yoki uning tavsiyasiga ko‘ra amalga oshiriladi.',
    'Davlat fuqarolik xizmatchisiga nisbatan rag‘batlantirish choralarini qo‘llash to‘g‘risidagi masalani hal etish chog‘ida quyidagilar e’tiborga olinadi:',
    'oy, chorak, yarim yil, yil yakunlari bo‘yicha faoliyatning eng muhim samaradorlik ko‘rsatkichlarini bajarganlik va oshirib bajarganlik;',
    'o‘ta muhim vazifalarni bajarganlik;',
    'zimmasiga yuklatilgan vazifaning murakkabligi va muhimligi, shuningdek uning faoliyatida erishilgan yuqori natijalar;',
    'bayram kunlari, yubileylar, nishonlanadigan sanalar va pensiyaga chiqish.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            45-modda. Davlat fuqarolik xizmatchisiga nisbatan rag‘batlantirish choralarining
            qo‘llanilishi
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
