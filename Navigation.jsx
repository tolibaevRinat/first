import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Screens/HomeScreen';
import FirstHead from './Screens/Heads/FirstHead';
import SecendHead from './Screens/Heads/SecendHead';
import ThirdHead from './Screens/Heads/ThirdHead';
import FourthHead from './Screens/Heads/FourthHead';
import FifthHead from './Screens/Heads/FifthHead';
import SixthHead from './Screens/Heads/SixthHead';
import SeventhHead from './Screens/Heads/SeventhHead';
import EigthHead from './Screens/Heads/EigthHead';
import NinthHead from './Screens/Heads/NinthHead';
import TenthHead from './Screens/Heads/TenthHead';

const Stack = createNativeStackNavigator();

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ title: "Tiykarg'i bet" }} />
      <Stack.Screen name="FirstHead" component={FirstHead} options={{ title: '1-Bob.' }} />
      <Stack.Screen name="SecendHead" component={SecendHead} options={{ title: '2-Bob.' }} />
      <Stack.Screen name="ThirdHead" component={ThirdHead} options={{ title: '3-Bob.' }} />
      <Stack.Screen name="FourthHead" component={FourthHead} options={{ title: '4-Bob.' }} />
      <Stack.Screen name="FifthHead" component={FifthHead} options={{ title: '5-Bob.' }} />
      <Stack.Screen name="SixthHead" component={SixthHead} options={{ title: '6-Bob.' }} />
      <Stack.Screen name="SeventhHead" component={SeventhHead} options={{ title: '7-Bob.' }} />
      <Stack.Screen name="EigthHead" component={EigthHead} options={{ title: '8-Bob.' }} />
      <Stack.Screen name="NinthHead" component={NinthHead} options={{ title: '9-Bob.' }} />
      <Stack.Screen name="TenthHead" component={TenthHead} options={{ title: '10-Bob.' }} />
    </Stack.Navigator>
  </NavigationContainer>
);
