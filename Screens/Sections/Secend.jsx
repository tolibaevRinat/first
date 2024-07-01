import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';

export default function First({ navigation }) {
  const handleLinkPress = () => {
    Linking.openURL('https://lex.uz/docs/-142859');
  };
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            2-modda. Davlat fuqarolik xizmati to‘g‘risidagi qonunchilik
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}Davlat fuqarolik xizmati to‘g‘risidagi qonunchilik ushbu
            Qonun va boshqa qonunchilik hujjatlaridan iboratdir.
          </Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}Davlat fuqarolik xizmatchilarining ushbu Qonun bilan
            tartibga solinmagan mehnatga oid munosabatlari O‘zbekiston Respublikasining{' '}
            <Text onPress={handleLinkPress} style={styles.link}>
              Mehnat kodeksi
            </Text>{' '}
            bilan tartibga solinadi.
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
  scrollContainer: {
    width: '100%',
    height: '100%',
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
