import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import CharacterSetup from './pages/CharacterSetup';
import Home from './pages/Home';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: '#00468d' },
            headerTitleAlign: 'center',
            headerTintColor: '#d6e3ff',
            headerTitleStyle: { fontWeight: 'bold' }
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'SIFRP Character Generator',
              headerTitleStyle: { fontSize: 18, fontWeight: 'bold' }
            }}
          />
          <Stack.Screen
            name="CharacterSetup"
            component={CharacterSetup}
            options={{
              title: 'Character Generation'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
