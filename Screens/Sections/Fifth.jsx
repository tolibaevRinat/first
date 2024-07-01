import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function Fifth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-142859');
  };
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>5-modda. Davlat fuqarolik xizmatining asosiy prinsiplari</Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}Davlat fuqarolik xizmatining asosiy prinsiplari
            quyidagilardan iborat:
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}davlat fuqarolik xizmati tizimining yagonaligi va
            barqarorligi;
          </Text>
          <Text style={styles.text}>{'\u00A0\u00A0\u00A0\u00A0'}qonuniylik;</Text>
          <Text style={styles.text}>{'\u00A0\u00A0\u00A0\u00A0'}adolatlilik;</Text>
          <Text style={styles.text}>{'\u00A0\u00A0\u00A0\u00A0'}xalqqa xizmat qilish;</Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}davlat organlarining va mansabdor shaxslarning jamiyat hamda
            fuqarolar oldida mas’ulligi;
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}inson huquqlari, erkinliklari va qonuniy manfaatlarining
            ustuvorligi;
          </Text>
          <Text style={styles.text}>{'\u00A0\u00A0\u00A0\u00A0'}ochiqlik va shaffoflik;</Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}xolislik, professionallik va kompetentlik;
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}davlat fuqarolik xizmatiga kirishda O‘zbekiston Respublikasi
            fuqarolarning teng huquqliligi;
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'} davlat fuqarolik xizmatchilarining huquqiy va ijtimoiy
            jihatdan himoya qilinishi.
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
  link_wrapper: {
    // display: 'block',
  },
  link: {
    color: 'blue',
    fontFamily: 'Times-New-Roman',
    fontSize: 26,
    // lineHeight: 40,
  },
});
