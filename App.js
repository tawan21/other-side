import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Home from './screens/Home';
import MeetingRoom from './screens/MeetingRoom';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NativeBaseProvider>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Meeting" component={MeetingRoom} options={{
            title: "Start a Meeting",
            headerStyle: {
              backgroundColor: '#1c1c1c',
            },
            headerTintColor: '#fff'
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}