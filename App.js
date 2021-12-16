// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screen/Home';
import Getnews from './src/Screen/Getnews';
import WebviewCompo from './src/Components/Webview';


const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Trending" component={Home} />
        <Stack.Screen name='GetNews' component={Getnews} />
        <Stack.Screen name='WebView' component={WebviewCompo} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
