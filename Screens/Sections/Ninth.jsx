import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function Ninth({ navigation }) {
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            9-modda. Davlat organlarining davlat fuqarolik xizmati sohasidagi vakolatlari
          </Text>
          <Text style={styles.text}>{'\u00A0\u00A0\u00A0\u00A0'}Davlat organlari:</Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}davlat organlarida davlat fuqarolik xizmati to‘g‘risidagi
            qonunchilikning ijrosini ta’minlaydi;
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}kadrlarni saralash va tanlash, davlat fuqarolik
            xizmatchilariga davlat fuqarolik xizmati lavozimlari malaka darajalari berish hamda
            xizmat tekshiruvlari o‘tkazish bo‘yicha komissiyalarning faoliyatini tashkil etadi;
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}davlat fuqarolik xizmatchilari tomonidan xizmat
            majburiyatlarining bajarilishini va davlat fuqarolik xizmatini o‘tash bilan bog‘liq
            bo‘lgan cheklovlarga rioya etilishini nazorat qiladi;
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}davlat fuqarolik xizmatchilarini qayta tayyorlashni,
            ularning malakasi oshirilishini va ta’lim olishini muntazam ravishda tashkil etadi.
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}Davlat organlari qonunchilikka muvofiq boshqa vakolatlarni
            ham amalga oshirishi mumkin.
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}Ushbu moddaning birinchi qismida ko‘rsatilgan vakolatlarni
            amalga oshirish maqsadida davlat organlarida kadrlar bo‘linmalari faoliyat yuritadi.
          </Text>
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
