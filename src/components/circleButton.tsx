/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function CircleButton(){
    return (
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.button}>+</Text>
      </TouchableOpacity>
    );
  }


const styles = StyleSheet.create({
  buttonContainer: {
     backgroundColor: 'orange',
     flex: 1,
     justifyContent: 'space-around',
     alignItems: 'center',
     width: 50,
     height: 50,
     borderRadius: 50,
     elevation: 8,
  },
  button: {
     fontSize: 16,
  },
})
;
