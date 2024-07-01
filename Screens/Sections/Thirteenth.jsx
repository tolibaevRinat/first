import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function Thirteenth({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-20596');
  };
  const items = [
    'Davlat fuqarolik xizmatchisi quyidagilarga haqli emas:',
    'o‘zaro yaqin qarindoshlikda yoki quda tomondan qarindosh bo‘lgan shaxslar bilan (ota-onalar, aka-ukalar, opa-singillar, o‘g‘illar, qizlar, er-xotinlar, shuningdek er-xotinlarning ota-onalari, aka-ukalari, opa-singillari va farzandlari) aynan bitta davlat organida birga xizmat qilishi, agar ularning birga xizmat qilishi ulardan birining ikkinchisiga bevosita bo‘ysunishiga yoki uning nazorati ostida bo‘ladigan davlat fuqarolik xizmati lavozimini egallashga, bundan qonunchilikda nazarda tutilgan hollar mustasno;',
    'pedagogik, ilmiy va ijodiy faoliyatdan tashqari haq to‘lanadigan boshqa faoliyat bilan shug‘ullanishga, O‘zbekiston Respublikasi qonunlarida hamda O‘zbekiston Respublikasi Prezidenti qarorlarida nazarda tutilgan holatlar bundan mustasno;',
    'tadbirkorlik faoliyati bilan shug‘ullanishga;',
    'tadbirkorlik faoliyati subyektlarini tashkil etishga, ularning muassisi (ishtirokchisi) bo‘lishga, tadbirkorlik faoliyati subyektida tashkiliy-boshqaruv, ma’muriy-xo‘jalik vazifalarini bajarishga, bundan aksiyadorlik jamiyatlarining erkin muomalada bo‘lgan aksiyalariga qonunchilikda belgilangan talablar doirasida egalik qilish hollari mustasno;',
    'o‘zi xizmat qilayotgan davlat organi nazorati ostidagi yoki u bilan aloqalar va manfaatlarga ega bo‘lgan tashkilotlardagi ulushlarni, paylarni va aksiyalarni bevosita yoki vakillar orqali olishga;',
    'o‘z xizmat vakolatlarini jismoniy va yuridik shaxslarning manfaatlarini ko‘zlab bajarish yoki bajarmaslik evaziga ulardan biron-bir mukofot, foyda yoki sovg‘alar olishga;',
    'chet davlat fuqaroligini olishga;',
    'qonunchilikda nazarda tutilmagan imtiyozlar, preferensiyalar yoki afzalliklardan o‘z xizmat mavqeyi bilan bog‘liq holda foydalanishga;',
    'O‘zbekiston Respublikasi hududidan tashqarida hisobvaraqlar ochishga va ularga ega bo‘lishga, ko‘chmas mulkka va boshqa mol-mulkka egalik qilishga, bundan chet davlatda ta’lim olish, stajirovka o‘tash va tibbiy xizmatlardan foydalanish maqsadida ochilgan hisobvaraqlar, shuningdek davlat fuqarolik xizmatiga kirishdan oldin olingan va oshkor qilingan mol-mulk mustasno;',
    'o‘zining vakolatlarini siyosiy partiyalarning, boshqa jamoat birlashmalarining va ular organlarining manfaatlarini ko‘zlab amalga oshirishga.',
    'Tadbirkorlik faoliyati bilan shug‘ullanib kelayotgan shaxs davlat fuqarolik xizmatiga qabul qilingandan so‘ng tadbirkorlik faoliyatini to‘xtatib turish tartibi qonunchilik hujjatlari bilan belgilanadi.',
    'Davlat fuqarolik xizmatchisi shug‘ullanishi mumkin bo‘lmagan haq to‘lanadigan faoliyat turlari ro‘yxati korrupsiyaga qarshi kurashish va davlat fuqarolik xizmati bo‘yicha maxsus vakolatli davlat organlari tomonidan belgilanadi.',
    'Ushbu moddaning birinchi qismida nazarda tutilgan cheklovlarga rioya etmaganlik davlat fuqarolik xizmatchisini qonunga muvofiq intizomiy va boshqa javobgarlikka tortish uchun asos bo‘ladi.',
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            13-modda. Davlat fuqarolik xizmatini o‘tash bilan bog‘liq cheklovlar
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
