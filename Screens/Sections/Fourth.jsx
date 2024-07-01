import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function Fourth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-142859');
  };
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>4-modda. Asosiy tushunchalar</Text>

          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}Ushbu Qonunda quyidagi asosiy tushunchalar qo‘llaniladi:
          </Text>

          <Text style={styles.text}>
            <Text style={styles.bold}>{'\u00A0\u00A0\u00A0\u00A0'}davlat organi</Text> — Davlat
            fuqarolik xizmati tatbiq qilinadigan davlat organlari va tashkilotlari ro‘yxatiga
            kiritilgan davlat hokimiyat vakolatlariga ega bo‘lgan tashkiliy jihatdan alohida
            tuzilma;
          </Text>

          <Text style={styles.text}>
            <Text style={styles.bold}>{'\u00A0\u00A0\u00A0\u00A0'}davlat fuqarolik xizmati</Text> —
            davlat xizmatining bir turi bo‘lib, O‘zbekiston Respublikasi fuqarolarining davlat
            fuqarolik xizmati lavozimlaridagi davlat organlari vakolatlari amalga oshirilishini
            ta’minlashga doir haq to‘lanadigan kasbiy faoliyatini ifodalaydi;
          </Text>

          <Text style={styles.text}>
            <Text style={styles.bold}>
              {'\u00A0\u00A0\u00A0\u00A0'}davlat fuqarolik xizmatchisining kasbiy kompetensiyasi{' '}
            </Text>
            — davlat organining vakolatlarini lozim darajada amalga oshirish uchun zarur bo‘lgan
            bilimlar, malakalar va ko‘nikmalar majmui;
          </Text>

          <Text style={styles.text}>
            <Text style={styles.bold}>
              {'\u00A0\u00A0\u00A0\u00A0'}davlat fuqarolik xizmati lavozimi{' '}
            </Text>
            — davlat organining vakolatlarini amalga oshirish uchun Davlat fuqarolik xizmati
            lavozimlarining davlat reyestriga kiritilgan lavozim;
          </Text>

          <Text style={styles.text}>
            <Text style={styles.bold}>
              {'\u00A0\u00A0\u00A0\u00A0'}davlat fuqarolik xizmatchilarining odob-axloq qoidalari{' '}
            </Text>
            — davlat fuqarolik xizmatchilari tomonidan rioya etilishi shart bo‘lgan odob-axloq
            normalari majmui;
          </Text>

          <Text style={styles.text}>
            <Text style={styles.bold}>{'\u00A0\u00A0\u00A0\u00A0'}malaka talablari </Text>— davlat
            fuqarolik xizmatining muayyan malaka darajasi berilishi va (yoki) davlat fuqarolik
            xizmatining muayyan lavozimini egallash uchun talabgor bo‘layotgan nomzodlarga nisbatan
            davlat organi tomonidan belgilanadigan, ish tajribasiga va kasbiy kompetensiyasiga doir
            talablar.
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
