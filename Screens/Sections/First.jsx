import * as React from 'react';

import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function First({ navigation }) {
  return (
    <View style={styles.root}>
      <Image source={require('../../assets/bg.jpg')} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>1-modda. Ushbu Qonunning maqsadi</Text>
          <Text style={styles.text}>
            {'\u00A0\u00A0\u00A0\u00A0'}Ushbu Qonunning maqsadi davlat fuqarolik xizmati sohasidagi
            munosabatlarni tartibga solishdan iborat.
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
});
