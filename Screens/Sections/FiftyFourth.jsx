import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function FiftyFourth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Davlat fuqarolik xizmatchisiga davomiyligi yigirma yetti kalendar kunidan kam bo‘lmagan yillik asosiy ta’til beriladi.',
    'Davlat fuqarolik xizmatchisiga ko‘p yillik xizmati va alohida mehnat sharoitlari uchun yillik qo‘shimcha mehnat ta’tillari beriladi.',
    'Ko‘p yillik xizmati va alohida mehnat sharoitlari uchun yillik qo‘shimcha mehnat ta’tillarini berish tartibi hamda ularning davomiyligi O‘zbekiston Respublikasi Vazirlar Mahkamasi tomonidan belgilanadi.',
    'Davlat fuqarolik xizmati lavozimining toifasiga qarab qonunchilikda yillik asosiy va qo‘shimcha mehnat ta’tillarining boshqacha davomiyligi belgilanishi mumkin.',
    'Davlat fuqarolik xizmatchisiga ijtimoiy ta’tillar berish mehnat to‘g‘risidagi qonunchilikda belgilangan tartibda amalga oshiriladi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            54-modda. Davlat fuqarolik xizmatchisining mehnat va ijtimoiy ta’tillari
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
