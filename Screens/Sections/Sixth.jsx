import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function Sixth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-142859');
  };
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            6-modda. O‘zbekiston Respublikasi Prezidentining davlat fuqarolik xizmati sohasidagi
            vakolatlari
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}O‘zbekiston Respublikasi Prezidenti:
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}davlat fuqarolik xizmatini rivojlantirish va
            takomillashtirishning ustuvor yo‘nalishlarini belgilaydi;
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}davlat fuqarolik xizmatini rivojlantirish va
            takomillashtirishning ustuvor yo‘nalishlarini belgilaydi;
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}davlat fuqarolik xizmatini tashkil etish bilan bog‘liq
            tashkiliy-huquqiy mexanizmlarni belgilaydi;
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}O‘zbekiston Respublikasi Prezidentining vakolatlariga
            taalluqli davlat fuqarolik xizmati lavozimiga shaxslarni tayinlaydi va lavozimidan ozod
            qiladi.
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}
            O‘zbekiston Respublikasi Prezidenti qonunga muvofiq boshqa vakolatlarni ham amalga
            oshirishi mumkin.
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
