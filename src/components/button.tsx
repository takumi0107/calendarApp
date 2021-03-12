/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import { func, string, shape } from 'prop-types';
export default function Button(props: {onPress: any; content: string; style: any;}) {
  const { onPress, content, style } = props;
  return (
  <TouchableOpacity style={[styles.submitContainer, style]} onPress={onPress}>
      <Text style={styles.submit}>{content}</Text>
  </TouchableOpacity>
  );
}

Button.propTypes = {
  onPress: func,
  content: string,
  style: shape({

  }),
};

Button.defaultProps = {
  content: 'Submit',
  style: null,
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
