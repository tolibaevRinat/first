import * as React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function SixthHead({ navigation }) {
  const buttons = [
    {
      title: '52-modda. Davlat fuqarolik xizmatchisini huquqiy jihatdan himoya qilish',
      to: 'FiftySecond',
    },
    {
      title: '53-modda. Davlat fuqarolik xizmatchisini ijtimoiy jihatdan himoya qilish ',
      to: 'FiftyThird',
    },
    {
      title: '54-modda. Davlat fuqarolik xizmatchisining mehnat va ijtimoiy ta’tillari',
      to: 'FiftyFourth',
    },
    {
      title:
        '55-modda. Davlat fuqarolik xizmatchisining hayoti va sog‘lig‘ini majburiy sug‘urta qilish',
      to: 'FiftyFifth',
    },
    {
      title:
        '56-modda. Davlat fuqarolik xizmatchisining hayotiga, sog‘lig‘iga va mol-mulkiga yetkazilgan zararning o‘rnini qoplash',
      to: 'FiftySixth',
    },
    {
      title: '57-modda. Davlat pensiya ta’minoti',
      to: 'FiftySeventh',
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
