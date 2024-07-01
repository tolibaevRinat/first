import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function ThirtyFourth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Davlat organida davlat fuqarolik xizmatchisi uchun besh kunlik ish haftasi belgilanadi. Bunda ish vaqtining davomiyligi haftasiga qirq soatdan oshmasligi kerak. Uch yoshga to‘lmagan bolalari bor davlat fuqarolik xizmatchilari bo‘lgan ota-onasidan biriga (ota-onaning o‘rnini bosuvchi shaxsga) haftasiga o‘ttiz besh soatdan oshmaydigan ish vaqti davomiyligi belgilanadi.',
    'Davlat fuqarolik xizmatchisi xizmat faoliyatining o‘ziga xos xususiyatlariga qarab, ushbu moddaning birinchi qismida ko‘rsatilgan ish vaqtining davomiyligi hisobga olingan, ichki mehnat tartibi qoidalariga rioya etilgan holda olti kunlik ish haftasi belgilanishi mumkin.',
    'Davlat organi tomonidan davlat fuqarolik xizmatchisi uchun o‘rnatilgan ish vaqtining davomiyligidan tashqari ish ish vaqtidan tashqari ish deb hisoblanadi.',
    'Tabiiy hamda texnogen xususiyatli favqulodda vaziyatlar yuz bergan taqdirda, davlat organi davlat fuqarolik xizmatchisini uning roziligisiz ish vaqtidan tashqari ishga jalb etishi mumkin.',
    'Davlat fuqarolik xizmatchilarini ish vaqtidan tashqari hamda dam olish kunlari va ishlanmaydigan bayram kunlari ishlarga jalb etish mehnat to‘g‘risidagi qonunchilik talablariga rioya etilgan holda, davlat organi rahbarining qarori asosida amalga oshiriladi.',
    'Davlat fuqarolik xizmatchisining ish vaqtidan tashqari ishi uchun kompensatsiya ish vaqtidan tashqari haqiqatda ishlab berilgan soatlariga kamida ikki hissa miqdorida haq to‘lash yoki ortiqcha ishlagan vaqtining davomiyligiga mos bo‘lgan qo‘shimcha dam olish vaqti berish orqali amalga oshiriladi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>34-modda. Davlat fuqarolik xizmatchilarining ish vaqti</Text>

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
