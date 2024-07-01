import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function Fourteenth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };
  const items = [
    'Davlat fuqarolik xizmatchisining qonunga xilof harakatlari (harakatsizligi), shuningdek xizmat majburiyatlarini lozim darajada bajarmaganligi qonunga muvofiq javobgarlikka sabab bo‘ladi.',
    'Davlat fuqarolik xizmatchisining harakatlari (harakatsizligi) o‘zining huquqlari, erkinliklari va qonuniy manfaatlari buzilishiga sabab bo‘ldi deb hisoblovchi jismoniy yoki yuridik shaxs bunday harakatlar (harakatsizlik) ustidan yuqori turuvchi organga yoki sudga shikoyat qilishga haqli.',
    'Davlat fuqarolik xizmatchisining qonunga xilof harakatlari (harakatsizligi) tufayli jismoniy yoki yuridik shaxslarga yetkazilgan zararning o‘rni qonunchilikda belgilangan tartibda davlat organi tomonidan qoplanib, ushbu zarar keyinchalik aybdor bo‘lgan davlat fuqarolik xizmatchisidan undirib olinadi.',
    'Davlat organi rahbarining yoki mansabdor shaxslarning qonunga xilof topshirig‘ini bajarish natijasida davlat fuqarolik xizmatchisi tomonidan yetkazilgan zararning o‘rni qonunchilikda belgilangan tartibda davlat organi tomonidan qoplanadi. Zarar miqdori qonunga xilof topshiriqni bergan davlat organi rahbaridan yoki mansabdor shaxsidan regress tartibida undiriladi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>14-modda. Davlat fuqarolik xizmatchisining javobgarligi</Text>

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
