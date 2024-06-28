import * as React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.root}>
      <Image source={require('../assets/logo.png')} style={styles.image} />
      <Text style={styles.title}>O‘ZBEKISTON RESPUBLIKASINING QONUNI</Text>
      <View style={styles.wrapper}>
        <Text style={styles.subtitle}>DAVLAT FUQAROLIK XIZMATI TO‘G‘RISIDA</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    fontFamily: 'Times-New-Roman',
    marginBottom: 20,
    color: '#000080',
  },
  subtitle: {
    fontFamily: 'Times-New-Roman-Bold',
    fontSize: 32,
    textAlign: 'center',
    color: '#000080',
  },
  image: {
    marginBottom: 30,
  },
});
