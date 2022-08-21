import * as React from 'react';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import das telas para a navegação.
import { login } from './src/screens/login';
import { splash } from './src/screens/splash';
import { ativos } from './src/screens/ativos';
const Stack = createNativeStackNavigator()

//Return que realiza a navegação.
export default function App() {
  return (

    //HeaderShown false tira o header da tela. 
    //Navegação que leva para a tela Splash.
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="splash">
        <Stack.Screen name="splash" component={splash} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="ativos" component={ativos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


