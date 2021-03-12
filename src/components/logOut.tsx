/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import firebase from 'firebase';
import {useNavigation} from '@react-navigation/native';

export default function LogOut() {
  function handlePress() {
    const navigation = useNavigation();
    firebase.auth().signOut()
    .then(() => navigation.reset({
      index: 1,
      route: [{ name: 'LogIn'}],
    }));
  }
    return (
      <TouchableOpacity style={styles.textContainer} onPress={handlePress}>
          <Text style={styles.text} >Log Out</Text>
      </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({
    textContainer: {
        alignSelf: 'flex-end',
        paddingRight: 30,
        paddingTop: 20,
    },
    text: {
        color: 'lightblue',
        fontSize: 15,
    },
});
