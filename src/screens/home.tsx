/* eslint-disable prettier/prettier */
import {Calendar} from 'react-native-calendars';
import {View, StyleSheet, Alert} from 'react-native';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Calendar
          onDayPress={() => {
            Alert.alert('ok');
          }}
          monthFormat={'yyyy MM'}
          enableSwipeMonths={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: 'white',
  },
});
