import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function ThirtyEighth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Davlat fuqarolik xizmatchisini boshqa davlat fuqarolik xizmati lavozimiga o‘tkazish uning yozma roziligi bilan amalga oshiriladi.',
    'Tibbiy xulosaga asosan sog‘lig‘ining holatiga ko‘ra, o‘z egallab turgan lavozimi bo‘yicha xizmat majburiyatlarini bajara olmaydigan davlat fuqarolik xizmatchisiga uning yozma roziligi bilan kasbiy kompetensiyalariga mos bo‘lgan va sog‘lig‘ining holati bo‘yicha qarshi ko‘rsatma mavjud bo‘lmagan boshqa davlat fuqarolik xizmati lavozimi beriladi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            38-modda. Boshqa davlat fuqarolik xizmati lavozimiga o‘tkazish
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