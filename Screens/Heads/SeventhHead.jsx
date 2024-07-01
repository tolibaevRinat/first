import * as React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function SixthHead({ navigation }) {
  const buttons = [
    {
      title: '33-modda. Davlat fuqarolik xizmatini o‘tash',
      to: 'ThirtyThird',
    },
    {
      title: '34-modda. Davlat fuqarolik xizmatchilarining ish vaqti',
      to: 'ThirtyFourth',
    },
    {
      title: '35-modda. Davlat fuqarolik xizmatchisining lavozim yo‘riqnomasi',
      to: 'ThirtyFifth',
    },
    {
      title: '36-modda. Davlat fuqarolik xizmatchisi faoliyatining samaradorligini baholash',
      to: 'ThirtySixth',
    },
    {
      title: '37-modda. Davlat fuqarolik xizmati bo‘yicha ko‘tarilish',
      to: 'ThirtySeventh',
    },
    {
      title: '38-modda. Boshqa davlat fuqarolik xizmati lavozimiga o‘tkazish',
      to: 'ThirtyEighth',
    },
    {
      title: '39-modda. Davlat fuqarolik xizmatchisining rotatsiyasi',
      to: 'ThirtyNinth',
    },
    {
      title: '40-modda. Davlat fuqarolik xizmatchisining xizmat safarlari',
      to: 'Fortieth',
    },
    {
      title:
        '41-modda. Davlat fuqarolik xizmatchisini boshqa davlat organiga vaqtincha xizmat safariga yuborish',
      to: 'FortyFirst',
    },
    {
      title:
        '42-modda. Davlat fuqarolik xizmatchisining kasbiy kompetensiyasini uzluksiz ravishda oshirish',
      to: 'FortySecond',
    },
    {
      title: '43-modda. Davlat fuqarolik xizmatchisining mehnatiga haq to‘lash',
      to: 'FortyThird',
    },
    {
      title: '44-modda. Davlat fuqarolik xizmatchisini rag‘batlantirish',
      to: 'FortyFourth',
    },
    {
      title:
        '45-modda. Davlat fuqarolik xizmatchisiga nisbatan rag‘batlantirish choralarining qo‘llanilishi',
      to: 'FortyFifth',
    },
    {
      title: '46-modda. Davlat fuqarolik xizmatchisining intizomiy javobgarligi',
      to: 'FortySixth',
    },
    {
      title:
        '47-modda. Davlat fuqarolik xizmatchisiga nisbatan intizomiy jazo choralarining qo‘llanilishi',
      to: 'FortySeventh',
    },
    {
      title: '48-modda. Intizomiy jazo choralarini qo‘llash muddatlari',
      to: 'FortyEighth',
    },
    {
      title: '49-modda. Xizmat tekshiruvi',
      to: 'FortyNinth',
    },
  ];
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {buttons.map((btn, index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate(btn.to)}>
            <Text style={styles.btn}>{btn.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  scrollContainer: {
    alignItems: 'stratch',
    gap: 20,
    padding: 15,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  btn: {
    fontSize: 20,
    backgroundColor: '#c8c5c2',
    padding: 14,
    borderRadius: 8,
    color: '#000',
    textAlign: 'center',
  },
});
