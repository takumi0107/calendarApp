/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import { func } from 'prop-types';
export default function Button(props: {onPress: any;}) {
  const { onPress } = props;
  return (
  <TouchableOpacity style={styles.submitContainer} onPress={onPress}>
      <Text style={styles.submit}>Submit</Text>
  </TouchableOpacity>
  );
}

Button.propTypes = {
  onPress: func,
};

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
