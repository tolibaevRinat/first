import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function Fifteenth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Davlat fuqarolik xizmatchisi faoliyatini tugatish uchun quyidagilar asos bo‘ladi:',
    'mehnat to‘g‘risidagi qonunchilikka muvofiq mehnat shartnomasining bekor qilinganligi;',
    'O‘zbekiston Respublikasi fuqaroligining davlat fuqarolik xizmatchisi tomonidan yo‘qotilganligi;',
    'davlat fuqarolik xizmatchisi faoliyatini davom ettirish imkoniyatini istisno etuvchi jazoga tortilganligiga doir sud hukmining qonuniy kuchga kirganligi, shuningdek unga nisbatan tibbiy yo‘sindagi majburlov choralarini qo‘llash to‘g‘risidagi sudning ajrimi;',
    'davlat fuqarolik xizmatchisining davlat fuqarolik xizmati lavozimini egallashi uchun ahamiyatga ega bo‘lgan yolg‘on axborot taqdim etilganligi;',
    'davlat fuqarolik xizmatchisi tomonidan korrupsiyaga oid huquqbuzarlik sodir etilganligi;',
    'davlat fuqarolik xizmatini o‘tash bilan bog‘liq cheklovlarga davlat fuqarolik xizmatchisi tomonidan rioya etilmaganligi.',
    'Davlat fuqarolik xizmatchisi faoliyatining tugatilganligi davlat fuqarolik xizmatchisi huquqiy maqomining yo‘qotilishiga sabab bo‘ladi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            50-modda. Davlat fuqarolik xizmatchisi faoliyatini tugatish asoslari
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
