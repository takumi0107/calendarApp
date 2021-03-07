/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Text, StyleSheet } from 'react-native';
import { string, func } from 'prop-types';

export default function CircleButton(props: { mark: any; onPress: any; }){
    const { mark, onPress } = props;
    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.button}>{mark}</Text>
      </TouchableOpacity>
    );
  }

CircleButton.propTypes = {
    mark: string,
    onPress: func,
};

CircleButton.defaultProps = {
    mark: '+',
};

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
