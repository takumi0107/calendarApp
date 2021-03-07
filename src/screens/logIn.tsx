/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import Button from '../components/button';

export default function Login(props: { navigation: any; }) {
  const {navigation} = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
    <View style={styles.top}>
    <Text style={styles.topTitle}>Log In</Text>
    </View>
    <View style={styles.emailContainer}>
    <TextInput
    style={styles.email}
    value={email}
    onChangeText={(text) => {setEmail(text);}}
    placeholder="Email Address"
    autoCapitalize="none"
    keyboardType="email-address"
    textContentType="emailAddress"  />
    </View>
    <View style={styles.passwordContainer}>
    <TextInput
    style={styles.password}
    value={password}
    onChangeText={(text) => {setPassword(text);}}
    placeholder="Password"
    autoCapitalize="none"
    secureTextEntry />
    </View>
    <TouchableOpacity
        onPress={() => { navigation.reset({
          index: 0,
          routes: [{ name: 'SignUp' }],
      });
    }}>
    <Text style={styles.signUp}>Sign up here!</Text>
    </TouchableOpacity>
    <View style={styles.buttonContainer}>
    <Button onPress={() => {navigation.reset({
        index: 0,
        routes: [{ name: 'Home'}],
    });}} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        backgroundColor: 'lightblue',
        paddingVertical: 25,
        alignItems: 'center',
    },
    topTitle: {
        fontSize: 32,
    },
    emailContainer: {
        paddingHorizontal: 32,
        paddingTop: 32,
    },
    email: {
        fontSize: 20,
        backgroundColor: '#fffaf0',
    },
    passwordContainer: {
        paddingHorizontal: 32,
        paddingVertical: 32,
    },
    password: {
        fontSize: 20,
        backgroundColor: '#fffaf0',
    },
    buttonContainer: {
        position: 'absolute',
        right: 32,
        top: 300,
    },
    signUp: {
        paddingHorizontal: 50,
        paddingTop: 20,
        color: '#00bfff',
        fontSize: 15,
    },
});
