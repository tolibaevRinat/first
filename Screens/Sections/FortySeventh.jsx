import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function FortySeventh({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };

  const items = [
    'Intizomiy jazo choralari davlat organining rahbari tomonidan qo‘llaniladi. Har bir intizomiy qilmish uchun faqat bitta intizomiy jazo chorasi qo‘llanilishi mumkin. Intizomiy jazo chorasini tanlash huquqi davlat organining rahbariga tegishlidir. Intizomiy jazo chorasini qo‘llash chog‘ida qilmishning og‘ir-yengilligi, uning holatlari va davlat fuqarolik xizmatchisining xulq-atvori hisobga olinadi.',
    'Davlat fuqarolik xizmatchisiga nisbatan intizomiy jazo chorasini qo‘llash davlat organi rahbarining tegishli qarori bilan rasmiylashtiriladi.',
    'Davlat organi rahbarining davlat fuqarolik xizmatchisiga nisbatan intizomiy jazo chorasini qo‘llash to‘g‘risidagi qarori ushbu qaror qabul qilingan kundan e’tiboran uch ish kuni ichida, davlat fuqarolik xizmatchisi ishda yo‘q bo‘lgan vaqt hisobga olinmasdan, unga jazoni qo‘llash sabablari ko‘rsatilgan holda imzo qo‘ydirib e’lon qilinadi.',
    'O‘ziga nisbatan intizomiy jazo chorasini qo‘llash to‘g‘risidagi qaror bilan tanishtirilmagan davlat fuqarolik xizmatchisi intizomiy jazoga tortilmagan deb hisoblanadi.',
    'Davlat fuqarolik xizmatchisining o‘ziga nisbatan intizomiy jazo chorasini qo‘llash to‘g‘risidagi qaror bilan tanishishni rad etganligi bunda hozir bo‘lgan guvohlar ko‘rsatilgan holda dalolatnoma bilan rasmiylashtiriladi. Bunday holda davlat fuqarolik xizmatchisi qaror bilan tanishtirilgan deb hisoblanadi.',
    'Davlat fuqarolik xizmatchisining intizomiy javobgarlikka tortilishi unga nisbatan rag‘batlantirish choralari qo‘llanilishini bekor qilmaydi.',
    'Ushbu Qonun 46-moddasi ikkinchi qismining uchinchi, to‘rtinchi va beshinchi xatboshilarida nazarda tutilgan intizomiy jazo choralari davlat fuqarolik xizmatchisiga nisbatan o‘tkazilgan xizmat tekshiruvining xulosasiga asosan, shuningdek amalda intizomiy jazo chorasi mavjud bo‘lganda qo‘llaniladi.',
    'Davlat fuqarolik xizmatchisi o‘ziga nisbatan qo‘llanilgan intizomiy jazo chorasi ustidan yuqori turuvchi davlat organiga yoki maxsus vakolatli davlat organiga yoxud sudga shikoyat qilishga haqli.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            47-modda. Davlat fuqarolik xizmatchisiga nisbatan intizomiy jazo choralarining
            qo‘llanilishi
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
