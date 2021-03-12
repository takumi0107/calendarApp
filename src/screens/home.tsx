/* eslint-disable prettier/prettier */
import {Calendar} from 'react-native-calendars';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import firebase from 'firebase';

export default function Home(props: {navigation: any;}) {
  const { navigation } = props;
  function handlePress() {
    firebase.auth().signOut()
    .then(() => {navigation.reset({
      index: 0,
      routes: [{ name: 'Login'}],
    }
    );});
  }
    return (
      <View style={styles.container}>
      <TouchableOpacity style={styles.textContainer} onPress={handlePress}>
          <Text style={styles.text} >Log Out</Text>
      </TouchableOpacity>
      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={(day) => navigation.navigate('List', day)}
          monthFormat={'yyyy MM'}
          enableSwipeMonths={true}
        />
      </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: 'white',
  },
  calendarContainer: {
    backgroundColor: 'white',
    paddingTop: 8,
    flex: 1,
  },
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
