/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

export default function Button() {
  return (
  <TouchableOpacity style={styles.submitContainer}>
      <Text style={styles.submit}>Submit</Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    submitContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00bfff',
        width: 90,
        height: 50,
        borderRadius: 30,
    },
    submit: {
        fontWeight: 'bold',
        fontSize: 20,
    },
});
