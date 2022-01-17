import React from 'react';
import HomeScreen from './src/screen/Home/home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import Detail from './src/screen/Detail/detail';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#1b212f',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{
          headerStyle: {
            backgroundColor: '#1b212f',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} name="Genere" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
