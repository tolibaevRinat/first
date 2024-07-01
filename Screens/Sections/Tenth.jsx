import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function Tenth({ navigation }) {
  const items = [
    'Davlat fuqarolik xizmati lavozimida o‘z faoliyatini amalga oshirayotgan O‘zbekiston Respublikasi fuqarosi davlat fuqarolik xizmatchisidir.',
    'O‘zbekiston Respublikasi fuqarosi davlat fuqarolik xizmati lavozimiga tayinlangan paytdan e’tiboran davlat fuqarolik xizmatchisining huquqiy maqomiga ega bo‘ladi va davlat fuqarolik xizmatchisining faoliyati tugatilishi munosabati bilan uni yo‘qotadi.',
    'Davlat fuqarolik xizmati lavozimlarining siyosiy guruhiga taalluqli davlat fuqarolik xizmatchilarining huquqiy maqomi bilan bog‘liq bo‘lgan qo‘shimcha huquqlar, majburiyatlar va cheklovlar alohida qonunchilik bilan belgilanadi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>10-modda. Davlat fuqarolik xizmatchisi</Text>
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
