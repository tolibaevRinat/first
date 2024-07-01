import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function Third({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-142859');
  };

  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>3-modda. Ushbu Qonunning qo‘llanilish sohasi</Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}Ushbu Qonunning amal qilishi Davlat fuqarolik xizmati
            lavozimlarining davlat reyestriga kiritilgan lavozimlardagi davlat fuqarolik
            xizmatchilarining faoliyatiga nisbatan tatbiq etiladi.
          </Text>
          <Text style={styles.text}>{'\u00A0\u00A0\u00A0\u00A0'}Ushbu Qonunning amal qilishi:</Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}O‘zbekiston Respublikasi Prezidentining, O‘zbekiston
            Respublikasi Oliy Majlisi Qonunchilik palatasi deputatlarining va Senati a’zolarining,
            Qoraqalpog‘iston Respublikasi Jo‘qorg‘i Kengesi hamda boshqa mahalliy davlat hokimiyati
            vakillik organlari deputatlarining, O‘zbekiston Respublikasi Oliy Majlisi Qonunchilik
            palatasi va Senati devonlari xodimlarining, O‘zbekiston Respublikasi Markaziy saylov
            komissiyasi a’zolarining, sudyalarning va sud tizimi xodimlarining, O‘zbekiston
            Respublikasi Markaziy banki boshqaruvi a’zolarining, prokuratura, ichki ishlar, mudofaa
            ishlari, favqulodda vaziyatlar, O‘zbekiston Respublikasi Milliy gvardiyasi, Davlat
            bojxona xizmati, Davlat xavfsizlik xizmati va O‘zbekiston Respublikasi Prezidenti Davlat
            xavfsizlik xizmati organlarida xizmatni o‘tayotgan davlat xizmatchilarining, shu
            jumladan harbiy xizmatchilarning;
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}davlat organlarining texnik, ishlab chiqarish va xizmat
            ko‘rsatish xodimlarining faoliyatiga nisbatan tatbiq etilmaydi.
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}Ushbu Qonunning{' '}
            <Text onPress={handleLinkPress} style={styles.link}>
              24
            </Text>{' '}
            va{' '}
            <Text onPress={handleLinkPress} style={styles.link}>
              43-moddalari
            </Text>{' '}
            diplomatiya xizmati xodimlariga nisbatan tatbiq etilmaydi.
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}Ushbu Qonunning Ushbu Qonunning{' '}
            <Text onPress={handleLinkPress} style={styles.link}>
              43-moddalari
            </Text>{' '}
            O‘zbekiston Respublikasi Markaziy banki xodimlariga nisbatan tatbiq etilmaydi.
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}Davlat fuqarolik xizmatchilarining ushbu Qonun bilan
            tartibga solinmagan mehnatga oid munosabatlari O‘zbekiston Respublikasining bilan
            tartibga solinadi.
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
