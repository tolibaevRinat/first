import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Text, StyleSheet } from 'react-native';

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

// Sections

import First from './Screens/Sections/First';
import Secend from './Screens/Sections/Secend';
import Third from './Screens/Sections/Third';
import Fourth from './Screens/Sections/Fourth';
import Fifth from './Screens/Sections/Fifth';
import Sixth from './Screens/Sections/Sixth';
import Seventh from './Screens/Sections/Seventh';
import Eight from './Screens/Sections/Eight';
import Ninth from './Screens/Sections/Ninth';
import Tenth from './Screens/Sections/Tenth';
import Eleventh from './Screens/Sections/Eleventh';
import Twelefth from './Screens/Sections/Twelefth';
import Thirteenth from './Screens/Sections/Thirteenth';
import Fourteenth from './Screens/Sections/Fourteenth';
import Fiftieth from './Screens/Sections/Fiftieth';
import Sixteenth from './Screens/Sections/Sixteenth';
import Seventeenth from './Screens/Sections/Seventeenth';
import Eighteenth from './Screens/Sections/Eighteenth';
import Nineteenth from './Screens/Sections/Nineteenth';
import Twentieth from './Screens/Sections/Twentieth';
import TwentyFirst from './Screens/Sections/TwentyFirst';
import TwentySecond from './Screens/Sections/TwentySecond';
import TwentyThird from './Screens/Sections/TwentyThird';
import TwentyFourth from './Screens/Sections/TwentyFourth';
import TwentyFifth from './Screens/Sections/TwentyFifth';
import TwentySixth from './Screens/Sections/TwentySixth';
import TwentySeventh from './Screens/Sections/TwentySeventh';
import TwentyEighth from './Screens/Sections/TwentyEighth';
import TwentyNinth from './Screens/Sections/TwentyNinth';
import Thirtieth from './Screens/Sections/Thirtieth';
import ThirtyFirst from './Screens/Sections/ThirtyFirst';
import ThirtySecond from './Screens/Sections/ThirtySecond';
import ThirtyThird from './Screens/Sections/ThirtyThird';
import ThirtyFourth from './Screens/Sections/ThirtyFourth';
import ThirtyFifth from './Screens/Sections/ThirtyFifth';
import ThirtySixth from './Screens/Sections/ThirtySixth';
import ThirtySeventh from './Screens/Sections/ThirtySeventh';
import ThirtyEighth from './Screens/Sections/ThirtyEighth';
import ThirtyNinth from './Screens/Sections/ThirtyNinth';
import Fortieth from './Screens/Sections/Fortieth';
import FortyFirst from './Screens/Sections/FortyFirst';
import FortySecond from './Screens/Sections/FortySecond';
import FortyThird from './Screens/Sections/FortyThird';
import FortyFourth from './Screens/Sections/FortyFourth';
import FortyFifth from './Screens/Sections/FortyFifth';
import FortySixth from './Screens/Sections/FortySixth';
import FortySeventh from './Screens/Sections/FortySeventh';
import FortyEighth from './Screens/Sections/FortyEighth';
import FortyNinth from './Screens/Sections/FortyNinth';
import Fifteenth from './Screens/Sections/Fifteenth';
import FiftyFirst from './Screens/Sections/FiftyFirst';
import FiftySecond from './Screens/Sections/FiftySecond';
import FiftyThird from './Screens/Sections/FiftyThird';
import FiftyFourth from './Screens/Sections/FiftyFourth';
import FiftyFifth from './Screens/Sections/FiftyFifth';
import FiftySixth from './Screens/Sections/FiftySixth';
import FiftySeventh from './Screens/Sections/FiftySeventh';
import FiftyEighth from './Screens/Sections/FiftyEighth';
import FiftyNinth from './Screens/Sections/FiftyNinth';
import Sixtieth from './Screens/Sections/Sixtieth';
import SixtyFirst from './Screens/Sections/SixtyFirst';
import SixtySecond from './Screens/Sections/SixtySecond';
import SixtyThird from './Screens/Sections/SixtyThird';
import SixtyFourth from './Screens/Sections/SixtyFourth';

const Stack = createNativeStackNavigator();

const CustomHeaderTitle = ({ title }) => {
  return <Text style={styles.headerTitle}>{title}</Text>;
};

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <CustomHeaderTitle title={'DAVLAT FUQAROLIK XIZMATI TO‘G‘RISIDA'} />,
        }}
      />
      <Stack.Screen
        name="FirstHead"
        component={FirstHead}
        options={{
          headerTitle: () => <CustomHeaderTitle title={'1-Bob. Umumiy qoidalar'} />,
        }}
      />
      <Stack.Screen
        name="SecendHead"
        component={SecendHead}
        options={{ title: '2-Bob. Davlat fuqarolik xizmati sohasida davlat boshqaruvi' }}
      />
      <Stack.Screen
        name="ThirdHead"
        component={ThirdHead}
        options={{ title: '3-Bob. Davlat fuqarolik xizmatchisining huquqiy maqomi' }}
      />
      <Stack.Screen
        name="FourthHead"
        component={FourthHead}
        options={{
          title: '4-Bob. Davlat fuqarolik xizmati sohasida korrupsiyaga qarshi kurashish',
          to: 'FourthHead',
        }}
      />
      <Stack.Screen
        name="FifthHead"
        component={FifthHead}
        options={{ title: '5-Bob. Davlat fuqarolik xizmatini tashkil etish' }}
      />
      <Stack.Screen
        name="SixthHead"
        component={SixthHead}
        options={{ title: '6-Bob. Davlat fuqarolik xizmatiga kirish tartibi va shartlari' }}
      />
      <Stack.Screen
        name="SeventhHead"
        component={SeventhHead}
        options={{ title: '7-Bob. Davlat fuqarolik xizmatini o‘tash tartibi' }}
      />
      <Stack.Screen
        name="EigthHead"
        component={EigthHead}
        options={{ title: '8-Bob. Davlat fuqarolik xizmatchisi faoliyatining tugatilishi' }}
      />
      <Stack.Screen
        name="NinthHead"
        component={NinthHead}
        options={{
          title: '9-Bob. Davlat fuqarolik xizmatchisini huquqiy va ijtimoiy jihatdan himoya qilish',
          to: 'NinthHead',
        }}
      />
      <Stack.Screen
        name="TenthHead"
        component={TenthHead}
        options={{ title: '10-Bob. Yakunlovchi qoidalar' }}
      />

      {/* Sections */}
      <Stack.Screen
        name="First"
        component={First}
        options={{ title: '1-modda. Ushbu Qonunning maqsadi' }}
      />
      <Stack.Screen
        name="Secend"
        component={Secend}
        options={{
          headerTitle: () => (
            <CustomHeaderTitle
              title={`2-modda. Davlat fuqarolik xizmati
to‘g‘risidagi qonunchilik`}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Third"
        component={Third}
        options={{ title: '3-modda. Ushbu Qonunning qo‘llanilish sohasi' }}
      />
      <Stack.Screen
        name="Fourth"
        component={Fourth}
        options={{ title: '4-modda. Asosiy tushunchalar' }}
      />
      <Stack.Screen
        name="Fifth"
        component={Fifth}
        options={{ title: '5-modda. Davlat fuqarolik xizmatining asosiy prinsiplari' }}
      />
      <Stack.Screen
        name="Sixth"
        component={Sixth}
        options={{
          title:
            '6-modda. O‘zbekiston Respublikasi Prezidentining davlat fuqarolik xizmati sohasidagi vakolatlari',
        }}
      />
      <Stack.Screen
        name="Seventh"
        component={Seventh}
        options={{
          title:
            '7-modda. O‘zbekiston Respublikasi Vazirlar Mahkamasining davlat fuqarolik xizmati sohasidagi vakolatlari',
        }}
      />
      <Stack.Screen
        name="Eight"
        component={Eight}
        options={{
          title:
            '8-modda. Maxsus vakolatli davlat organining davlat fuqarolik xizmati sohasidagi vakolatlari',
        }}
      />
      <Stack.Screen
        name="Ninth"
        component={Ninth}
        options={{
          title: '9-modda. Davlat organlarining davlat fuqarolik xizmati sohasidagi vakolatlari',
        }}
      />
      <Stack.Screen
        name="Tenth"
        component={Tenth}
        options={{
          title: '10-modda. Davlat fuqarolik xizmatchisi',
        }}
      />
      <Stack.Screen
        name="Eleventh"
        component={Eleventh}
        options={{
          title: '11-modda. Davlat fuqarolik xizmatchisining huquqlari',
        }}
      />
      <Stack.Screen
        name="Twelefth"
        component={Twelefth}
        options={{
          title: '12-modda. Davlat fuqarolik xizmatchisining majburiyatlari',
        }}
      />
      <Stack.Screen
        name="Thirteenth"
        component={Thirteenth}
        options={{
          title: '13-modda. Davlat fuqarolik xizmatini o‘tash bilan bog‘liq cheklovlar',
        }}
      />
      <Stack.Screen
        name="Fourteenth"
        component={Fourteenth}
        options={{
          title: '14-modda. Davlat fuqarolik xizmatchisining javobgarligi',
        }}
      />
      <Stack.Screen
        name="Fiftieth"
        component={Fiftieth}
        options={{
          title:
            '15-modda. Davlat fuqarolik xizmati sohasida korrupsiyaning oldini olishga doir chora-tadbirlar',
        }}
      />
      <Stack.Screen
        name="Sixteenth"
        component={Sixteenth}
        options={{
          title:
            '16-modda. Davlat fuqarolik xizmatchisining korrupsiyaga nisbatan murosasiz munosabati',
        }}
      />
      <Stack.Screen
        name="Seventeenth"
        component={Seventeenth}
        options={{
          title: '17-modda. Davlat fuqarolik xizmatchilarining odob-axloq qoidalari',
        }}
      />
      <Stack.Screen
        name="Eighteenth"
        component={Eighteenth}
        options={{
          title:
            '18-modda. Davlat fuqarolik xizmatida sovg‘alarga nisbatan munosabatda bo‘lish shartlari',
        }}
      />
      <Stack.Screen
        name="Nineteenth"
        component={Nineteenth}
        options={{
          title: '19-modda. Manfaatlar to‘qnashuvi',
        }}
      />
      <Stack.Screen
        name="Twentieth"
        component={Twentieth}
        options={{
          title:
            '20-modda. Davlat fuqarolik xizmatchisi tomonidan daromadlari va mol-mulkini deklaratsiyalash',
        }}
      />
      <Stack.Screen
        name="TwentyFirst"
        component={TwentyFirst}
        options={{
          title: '21-modda. Davlat fuqarolik xizmati tizimi',
        }}
      />
      <Stack.Screen
        name="TwentySecond"
        component={TwentySecond}
        options={{
          title: '22-modda. Davlat fuqarolik xizmati lavozimlarining davlat reyestri',
        }}
      />
      <Stack.Screen
        name="TwentyThird"
        component={TwentyThird}
        options={{
          title: '23-modda. Davlat fuqarolik xizmati lavozimlarining guruhlari va toifalari',
        }}
      />
      <Stack.Screen
        name="TwentyFourth"
        component={TwentyFourth}
        options={{
          title: '24-modda. Davlat fuqarolik xizmati lavozimlarining malaka darajalari',
        }}
      />
      <Stack.Screen
        name="TwentyFifth"
        component={TwentyFifth}
        options={{
          title: '25-modda. Milliy kadrlar zaxirasi',
        }}
      />
      <Stack.Screen
        name="TwentySixth"
        component={TwentySixth}
        options={{
          title: '26-modda. Davlat fuqarolik xizmati sohasidagi monitoring',
        }}
      />
      <Stack.Screen
        name="TwentySeventh"
        component={TwentySeventh}
        options={{
          title: '27-modda. Davlat fuqarolik xizmatiga kirish',
        }}
      />
      <Stack.Screen
        name="TwentyEighth"
        component={TwentyEighth}
        options={{
          title: '28-modda. Davlat fuqarolik xizmatiga qabul qilish shartlari',
        }}
      />
      <Stack.Screen
        name="TwentyNinth"
        component={TwentyNinth}
        options={{
          title: '29-modda. Davlat fuqarolik xizmati lavozimini egallash',
        }}
      />
      <Stack.Screen
        name="Thirtieth"
        component={Thirtieth}
        options={{
          title: '30-modda. Mehnat shartnomasi',
        }}
      />
      <Stack.Screen
        name="ThirtyFirst"
        component={ThirtyFirst}
        options={{
          title: '31-modda. Davlat fuqarolik xizmatchisining shaxsiy hujjatlari to‘plami',
        }}
      />
      <Stack.Screen
        name="ThirtySecond"
        component={ThirtySecond}
        options={{
          title: '32-modda. Davlat fuqarolik xizmatchisining xizmat guvohnomasi',
        }}
      />
      <Stack.Screen
        name="ThirtyThird"
        component={ThirtyThird}
        options={{
          title: '33-modda. Davlat fuqarolik xizmatini o‘tash',
        }}
      />
      <Stack.Screen
        name="ThirtyFourth"
        component={ThirtyFourth}
        options={{
          title: '34-modda. Davlat fuqarolik xizmatchilarining ish vaqti',
        }}
      />
      <Stack.Screen
        name="ThirtyFifth"
        component={ThirtyFifth}
        options={{
          title: '35-modda. Davlat fuqarolik xizmatchisining lavozim yo‘riqnomasi',
        }}
      />
      <Stack.Screen
        name="ThirtySixth"
        component={ThirtySixth}
        options={{
          title: '36-modda. Davlat fuqarolik xizmatchisi faoliyatining samaradorligini baholash',
        }}
      />
      <Stack.Screen
        name="ThirtySeventh"
        component={ThirtySeventh}
        options={{
          title: '37-modda. Davlat fuqarolik xizmati bo‘yicha ko‘tarilish',
        }}
      />
      <Stack.Screen
        name="ThirtyEighth"
        component={ThirtyEighth}
        options={{
          title: '38-modda. Boshqa davlat fuqarolik xizmati lavozimiga o‘tkazish',
        }}
      />
      <Stack.Screen
        name="ThirtyNinth"
        component={ThirtyNinth}
        options={{
          title: '39-modda. Davlat fuqarolik xizmatchisining rotatsiyasi',
        }}
      />
      <Stack.Screen
        name="Fortieth"
        component={Fortieth}
        options={{
          title: '40-modda. Davlat fuqarolik xizmatchisining xizmat safarlari',
        }}
      />
      <Stack.Screen
        name="FortyFirst"
        component={FortyFirst}
        options={{
          title:
            '41-modda. Davlat fuqarolik xizmatchisini boshqa davlat organiga vaqtincha xizmat safariga yuborish',
        }}
      />
      <Stack.Screen
        name="FortySecond"
        component={FortySecond}
        options={{
          title:
            '42-modda. Davlat fuqarolik xizmatchisining kasbiy kompetensiyasini uzluksiz ravishda oshirish',
        }}
      />
      <Stack.Screen
        name="FortyThird"
        component={FortyThird}
        options={{
          title: '43-modda. Davlat fuqarolik xizmatchisining mehnatiga haq to‘lash',
        }}
      />
      <Stack.Screen
        name="FortyFourth"
        component={FortyFourth}
        options={{
          title: '44-modda. Davlat fuqarolik xizmatchisini rag‘batlantirish',
        }}
      />
      <Stack.Screen
        name="FortyFifth"
        component={FortyFifth}
        options={{
          title:
            '45-modda. Davlat fuqarolik xizmatchisiga nisbatan rag‘batlantirish choralarining qo‘llanilishi',
        }}
      />
      <Stack.Screen
        name="FortySixth"
        component={FortySixth}
        options={{
          title: '46-modda. Davlat fuqarolik xizmatchisining intizomiy javobgarligi',
        }}
      />
      <Stack.Screen
        name="FortySeventh"
        component={FortySeventh}
        options={{
          title:
            '47-modda. Davlat fuqarolik xizmatchisiga nisbatan intizomiy jazo choralarining qo‘llanilishi',
        }}
      />
      <Stack.Screen
        name="FortyEighth"
        component={FortyEighth}
        options={{
          title: '48-modda. Intizomiy jazo choralarini qo‘llash muddatlari',
        }}
      />
      <Stack.Screen
        name="FortyNinth"
        component={FortyNinth}
        options={{
          title: '49-modda. Xizmat tekshiruvi',
        }}
      />
      <Stack.Screen
        name="Fifteenth"
        component={Fifteenth}
        options={{
          title: '50-modda. Davlat fuqarolik xizmatchisi faoliyatini tugatish asoslari',
        }}
      />
      <Stack.Screen
        name="FiftyFirst"
        component={FiftyFirst}
        options={{
          title:
            '51-modda. Davlat fuqarolik xizmatchisi faoliyatining qonunga xilof ravishda tugatilishi oqibatlari',
        }}
      />
      <Stack.Screen
        name="FiftySecond"
        component={FiftySecond}
        options={{
          title: '52-modda. Davlat fuqarolik xizmatchisini huquqiy jihatdan himoya qilish',
        }}
      />
      <Stack.Screen
        name="FiftyThird"
        component={FiftyThird}
        options={{
          title: '53-modda. Davlat fuqarolik xizmatchisini ijtimoiy jihatdan himoya qilish ',
        }}
      />
      <Stack.Screen
        name="FiftyFourth"
        component={FiftyFourth}
        options={{
          title: '54-modda. Davlat fuqarolik xizmatchisining mehnat va ijtimoiy ta’tillari',
        }}
      />
      <Stack.Screen
        name="FiftyFifth"
        component={FiftyFifth}
        options={{
          title:
            '55-modda. Davlat fuqarolik xizmatchisining hayoti va sog‘lig‘ini majburiy sug‘urta qilish',
        }}
      />
      <Stack.Screen
        name="FiftySixth"
        component={FiftySixth}
        options={{
          title:
            '56-modda. Davlat fuqarolik xizmatchisining hayotiga, sog‘lig‘iga va mol-mulkiga yetkazilgan zararning o‘rnini qoplash',
        }}
      />
      <Stack.Screen
        name="FiftySeventh"
        component={FiftySeventh}
        options={{
          title: '57-modda. Davlat pensiya ta’minoti',
        }}
      />
      <Stack.Screen
        name="FiftyEighth"
        component={FiftyEighth}
        options={{
          title: '58-modda. Davlat fuqarolik xizmati sohasidagi tadbirlarni moliyalashtirish',
        }}
      />
      <Stack.Screen
        name="FiftyNinth"
        component={FiftyNinth}
        options={{
          title: '59-modda. Xalqaro hamkorlik',
        }}
      />
      <Stack.Screen
        name="Sixtieth"
        component={Sixtieth}
        options={{
          title: '60-modda. Nizolarni hal etish',
        }}
      />
      <Stack.Screen
        name="SixtyFirst"
        component={SixtyFirst}
        options={{
          title:
            '61-modda. Davlat fuqarolik xizmati to‘g‘risidagi qonunchilikni buzganlik uchun javobgarlik',
        }}
      />
      <Stack.Screen
        name="SixtySecond"
        component={SixtySecond}
        options={{
          title:
            '62-modda. Ushbu Qonunning ijrosini, yetkazilishini, mohiyati va ahamiyati tushuntirilishini ta’minlash',
        }}
      />
      <Stack.Screen
        name="SixtyThird"
        component={SixtyThird}
        options={{
          title: '63-modda. Qonunchilikni ushbu Qonunga muvofiqlashtirish',
        }}
      />
      <Stack.Screen
        name="SixtyFourth"
        component={SixtyFourth}
        options={{
          title: '64-modda. Ushbu Qonunning kuchga kirishi',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  headerTitle: {
    paddingRight: 10,
    fontSize: 18,
    fontWeight: 'bold',
    width: '100%', // Это поможет тексту занимать всю ширину заголовка
  },
});
