// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screen/Home';
import { StyleSheet, View } from 'react-native';


const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Trending" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
