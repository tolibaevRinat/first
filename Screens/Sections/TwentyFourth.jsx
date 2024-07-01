import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function TwentyFourth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            24-modda. Davlat fuqarolik xizmati lavozimlarining malaka darajalari
          </Text>
          <Text style={styles.bold}>
            {'\u00A0\u00A0\u00A0\u00A0'}Davlat fuqarolik xizmati lavozimlarining guruhlari:
          </Text>
          <Text style={styles.text}>∙ Siyosiy</Text>
          <Text style={styles.text}>∙ Boshqaruv</Text>
          <Text style={styles.text}>∙ Yordamchi</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.bold}>
            {'\u00A0\u00A0\u00A0\u00A0'}Davlat fuqarolik xizmati lavozimlarining toifalari:
          </Text>
          <Text style={styles.text}>∙ Rahbar kadrlar</Text>
          <Text style={styles.text}>∙ Boshqaruv kadrlari</Text>
          <Text style={styles.text}>∙ Mutaxassislar</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.bold}>
            {'\u00A0\u00A0\u00A0\u00A0'}
            Davlat fuqarolik xizmati lavozimlarining malaka darajalari:
          </Text>
          <Text style={styles.text}>∙ Oliy darajali maslahatchi</Text>
          <Text style={styles.text}>∙ 1-darajali maslahatchi</Text>
          <Text style={styles.text}>∙ 2-darajali maslahatchi</Text>
          <Text style={styles.text}>∙ 3-darajali maslahatchi</Text>
          <Text style={styles.text}> </Text>
          <Text style={styles.text}>∙ 1-darajali xizmatchi</Text>
          <Text style={styles.text}>∙ 2-darajali xizmatchi</Text>
          <Text style={styles.text}>∙ 3-darajali xizmatchi</Text>
          <Text style={styles.text}>∙ 4-darajali xizmatchi</Text>
          <Text style={styles.text}>∙ 5-darajali xizmatchi</Text>
          <Text style={styles.text}>∙ 6-darajali xizmatchi</Text>

          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}Davlat fuqarolik xizmatchilariga davlat fuqarolik xizmati
            lavozimlari malaka darajalari (bundan buyon matnda malaka darajalari deb yuritiladi),
            qoida tariqasida, izchil tartibda, oliy ma’lumotga va muayyan ish stajiga, malaka
            oshirish kurslarini tugatganligi to‘g‘risidagi sertifikatga, malaka komissiyasining
            ijobiy xulosasiga ega bo‘lgan taqdirda beriladi.
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}Davlat fuqarolik xizmatchilariga malaka darajalarini berish
            tartibi O‘zbekiston Respublikasi Prezidenti tomonidan belgilanadi.
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
