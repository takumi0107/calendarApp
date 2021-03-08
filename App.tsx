import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/home';
import List from './src/screens/list';
import Create from './src/screens/create';
import Login from './src/screens/logIn';
import SignUp from './src/screens/signUp';
import Edit from './src/screens/edit';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import firebase from 'firebase';
import {firebaseConfig} from './env';

const Stack = createStackNavigator();

require('firebase/firestore');

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({experimentalForceLongPolling: true});
}
export default function PageNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
