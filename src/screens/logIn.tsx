/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';

export default function Login() {
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
});
