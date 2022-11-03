import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import Home from './pages/Home';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerStyle: { backgroundColor: '#00468d' },
              headerTintColor: '#d6e3ff',
              title: 'SIFRP Character Generator'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
