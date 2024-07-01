import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function Eight({ navigation }) {
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            8-modda. Maxsus vakolatli davlat organining davlat fuqarolik xizmati sohasidagi
            vakolatlari
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}O‘zbekiston Respublikasi Prezidenti huzuridagi Davlat
            xizmatini rivojlantirish agentligi davlat fuqarolik xizmati sohasidagi maxsus vakolatli
            davlat organidir (bundan buyon matnda maxsus vakolatli davlat organi deb yuritiladi).
            Maxsus vakolatli davlat organi:
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}davlat fuqarolik xizmati sohasidagi yagona davlat siyosatini
            amalga oshiradi;
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}davlat fuqarolik xizmati sohasidagi davlat dasturlari va
            loyihalarini ishlab chiqadi va amalga oshiradi;
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}davlat organlarining kadrlar siyosati sohasidagi faoliyatini
            o‘z vakolatlari doirasida muvofiqlashtiradi;
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}davlat fuqarolik xizmatini rivojlantirish jarayonlari va
            istiqbollarining monitoringi hamda tahlilini amalga oshiradi, shuningdek mazkur sohani
            takomillashtirish bo‘yicha takliflar ishlab chiqadi;
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}davlat organlari rahbarlariga davlat fuqarolik xizmati
            to‘g‘risidagi qonunchilikning aniqlangan buzilishlarini, ularga imkon beruvchi sabablar
            va shart-sharoitlarni bartaraf etish to‘g‘risida ko‘rib chiqilishi majburiy bo‘lgan
            taqdimnomalar kiritadi;
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}davlat fuqarolik xizmati sohasida kadrlarni boshqarish va
            inson resurslarini rivojlantirishning innovatsion usullarini joriy etadi;
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}davlat fuqarolik xizmatchilari faoliyati samaradorligini
            baholashning (eng muhim ko‘rsatkichlariga oid) o‘lchanadigan indikatorlar tizimini joriy
            etadi va ularning natijalarini tahlil qiladi, jamoatchilik fikrini o‘rganadi hamda
            davlat organlari rahbarlarining ochiq reytingini shakllantirishda ishtirok etadi;
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}kadrlarni davlat fuqarolik xizmatiga tanlov asosida qabul
            qilishni tashkillashtiradi;
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}davlat fuqarolik xizmati sohasiga axborot-kommunikatsiya
            texnologiyalarini joriy etadi va ularni izchil takomillashtirib boradi, davlat fuqarolik
            xizmatchilarining shaxsiga doir ma’lumotlarning xavfsizligini ta’minlagan holda ular
            to‘g‘risidagi ma’lumotlar bazasini shakllantiradi;
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}davlat fuqarolik xizmatchilarining huquqlari va qonuniy
            manfaatlarini himoya qilishga, shuningdek ularning mehnat faoliyati va ijtimoiy jihatdan
            himoya qilinishi uchun tegishli shart-sharoitlar yaratishga ko‘maklashadi;
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}davlat fuqarolik xizmati sohasida chet davlatlarning davlat
            organlari va xalqaro tashkilotlar bilan hamkorlikni amalga oshiradi, mazkur sohada
            O‘zbekiston Respublikasining xalqaro shartnomalarini tuzishda ishtirok etadi.
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}Maxsus vakolatli davlat organi qonunchilikka muvofiq boshqa
            vakolatlarni ham amalga oshirishi mumkin.
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
