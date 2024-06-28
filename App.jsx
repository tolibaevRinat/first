import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import { Navigation } from './Navigation';

import SplashScreen from './Screens/SplashScreen';

const loadFonts = async () => {
  await Font.loadAsync({
    'Times-New-Roman': require('./assets/fonts/TMR.ttf'),
    'Times-New-Roman-Bold': require('./assets/fonts/TMR-Bold.ttf'),
  });
};

function App() {
  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  const [isSplashVisible, setIsSplashVisible] = React.useState(true);

  React.useEffect(() => {
    const load = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };
    load();
  }, []);

  React.useEffect(() => {
    if (fontsLoaded) {
      const timer = setTimeout(() => {
        setIsSplashVisible(false);
      }, 1500); // Показываем SplashScreen в течение 2 секунд

      return () => clearTimeout(timer);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  if (isSplashVisible) {
    return <SplashScreen />;
  }

  return <Navigation />;
}

export default App;
