import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function TwentySixth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Davlat fuqarolik xizmati tizimida yagona tashkiliy-huquqiy mexanizmlarni qo‘llashning bir xil amaliyotini ta’minlash maqsadida maxsus vakolatli davlat organi tomonidan davlat organida monitoring o‘tkaziladi.',
    'Monitoring davlat fuqarolik xizmati to‘g‘risidagi qonunchilikning davlat organi tomonidan ijro etilishini o‘rganish yo‘li bilan o‘tkaziladi.',
    'Monitoring natijasida davlat fuqarolik xizmati to‘g‘risidagi qonunchilik buzilganligi aniqlangan taqdirda, maxsus vakolatli davlat organi tegishli davlat organi rahbariga davlat fuqarolik xizmati to‘g‘risidagi qonunchilikning aniqlangan buzilishlarini, ularga imkon beruvchi sabablar va shart-sharoitlarni bartaraf etish haqida ko‘rib chiqilishi majburiy bo‘lgan taqdimnomalar kiritadi.',
    'Monitoring o‘tkazish tartibi maxsus vakolatli davlat organi tomonidan belgilanadi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>26-modda. Davlat fuqarolik xizmati sohasidagi monitoring</Text>

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
