import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function SixtyFourth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>64-modda. Ushbu Qonunning kuchga kirishi</Text>

          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}
            Ushbu Qonun rasmiy e’lon qilingan kundan e’tiboran uch oy o‘tgach kuchga kiradi.
          </Text>
          <Text style={styles.bold}>
            {'\u00A0\u00A0\u00A0\u00A0'}
            O‘zbekiston Respublikasining Prezidenti Sh. MIRZIYOYEV
          </Text>
          <Text style={styles.small}>
            {'\u00A0\u00A0\u00A0\u00A0'}
            Toshkent sh.,
          </Text>
          <Text style={styles.small}>
            {'\u00A0\u00A0\u00A0\u00A0'}
            2022-yil 8-avgust,
          </Text>
          <Text style={styles.small}>
            {'\u00A0\u00A0\u00A0\u00A0'}
            O‘RQ-788-son
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}
            (Qonunchilik ma’lumotlari milliy bazasi, 09.08.2022-y., 03/22/788/0723-son;
            29.11.2023-y., 03/23/880/0905-son)
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
  small: {
    fontFamily: 'Times-New-Roman',
    fontSize: 20,
    color: '#fff',
    lineHeight: 40,
    textAlign: 'center',
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
