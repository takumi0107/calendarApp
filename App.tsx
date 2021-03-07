import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/home';
import List from './src/screens/list';
import Create from './src/screens/create';
import Login from './src/screens/logIn';
import SignUp from './src/screens/signUp';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function PageNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
