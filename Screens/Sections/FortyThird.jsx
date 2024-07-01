import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function FortyThird({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Davlat fuqarolik xizmatchisining mehnatiga haq to‘lash quyidagilarni o‘z ichiga oladi:',
    'bazaviy lavozim maoshi;',
    'ko‘p yillik xizmat uchun qo‘shimcha to‘lov;',
    'malaka darajasi uchun qo‘shimcha to‘lov;',
    'davlat fuqarolik xizmatchisi faoliyatining eng muhim samaradorlik ko‘rsatkichlariga erishganlik uchun qo‘shimcha ustama;',
    'hisobot davri yakunlari bo‘yicha rag‘batlantirish to‘lovlari.',
    'Davlat fuqarolik xizmatchisining mehnat sharoitlari, u alohida muhim topshiriqlar va murakkab vazifalarni bajarganligi, boshqa shartlar munosabati bilan uning bazaviy lavozim maoshiga qonunchilikda belgilangan rag‘batlantiruvchi qo‘shimcha to‘lovlar va ustamalar to‘lanishi mumkin.',
    'Ushbu moddaning birinchi qismida nazarda tutilgan to‘lovlarni hisoblash tartibi va ularning miqdorlari O‘zbekiston Respublikasi Prezidenti tomonidan belgilanadi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            43-modda. Davlat fuqarolik xizmatchisining mehnatiga haq to‘lash
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
