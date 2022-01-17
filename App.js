import React from 'react';
import HomeScreen from './src/screen/Home/home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import Detail from './src/screen/Detail/detail';
import Movie from './src/screen/Movie/movie';
const Stack = createNativeStackNavigator();
import { LogBox } from 'react-native';
LogBox.ignoreLogs([
 'Non-serializable values were found in the navigation state',
]);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          headerShown : false,
        }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{
          headerShown : false,
        }} name="Genere" component={Detail} />
        <Stack.Screen options={{
        headerShown : false,
        }} name="Movie" component={Movie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
