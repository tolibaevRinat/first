import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function Seventh({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-6145972?ONDATE=10.11.2022%2000#-6146516');
  };
  const handleLinkPress_another = () => {
    Linking.openURL('https://lex.uz/docs/-6678807?ONDATE=29.11.2023%2001#-6680078');
  };
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            7-modda. O‘zbekiston Respublikasi Vazirlar Mahkamasining davlat fuqarolik xizmati
            sohasidagi vakolatlari
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}O‘zbekiston Respublikasi Vazirlar Mahkamasi:
          </Text>
          <Text onPress={handleLinkPress} style={styles.link}>
            {'\u00A0\u00A0\u00A0\u00A0'}Oldingi{' '}
            <Text onPress={handleLinkPress} style={styles.text}>
              tahrirga qarang.
            </Text>
          </Text>

          <Text style={styles.italic}>
            {'\u00A0\u00A0\u00A0\u00A0'}(7-modda birinchi qismining ikkinchi xatboshisi O‘zbekiston
            Respublikasining 2023-yil 28-noyabrdagi O‘RQ-880-sonli
            <Text onPress={handleLinkPress_another} style={styles.link}>
              {' '}
              Qonuni{' '}
            </Text>
            tahririda — Qonunchilik ma’lumotlari milliy bazasi, 29.11.2023-y., 03/23/880/0905-son)
          </Text>

          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}O‘zbekiston Respublikasi Vazirlar Mahkamasining
            vakolatlariga taalluqli davlat fuqarolik xizmati lavozimiga shaxslarni tayinlaydi va
            lavozimidan ozod qiladi;
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}davlat fuqarolik xizmati sohasidagi davlat dasturlari va
            loyihalarining moliyaviy-iqtisodiy mexanizmlari ishlab chiqilishini o‘z vakolatlari
            doirasida ta’minlaydi hamda ularni tasdiqlaydi.
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}O‘zbekiston Respublikasi Vazirlar Mahkamasi qonunchilikka
            muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.
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
