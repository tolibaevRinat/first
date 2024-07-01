import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function ThirtySixth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Davlat fuqarolik xizmatchisini rag‘batlantirish hamda xolisona va adolatli mezonlar asosida xizmatda lavozim bo‘yicha ko‘tarilishini ta’minlash uchun uning faoliyati samaradorligini eng muhim ko‘rsatkichlar asosida baholash tizimi joriy etiladi.',
    'Davlat fuqarolik xizmatchilari faoliyatining samaradorligini eng muhim ko‘rsatkichlar asosida baholash uslubiyati maxsus vakolatli davlat organi tomonidan belgilanadi.',
    'Davlat organi davlat fuqarolik xizmatchilari faoliyatining samaradorligini baholash uslubiyatiga muvofiq faoliyatining o‘ziga xos xususiyatlarini hisobga olgan holda o‘z ichki tartibini belgilaydi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            36-modda. Davlat fuqarolik xizmatchisi faoliyatining samaradorligini baholash
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
