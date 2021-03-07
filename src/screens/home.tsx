/* eslint-disable prettier/prettier */
import {Calendar} from 'react-native-calendars';
import {View, StyleSheet} from 'react-native';
import React from 'react';

export default function Home(props: {navigation: any;}) {
  const { navigation } = props;
    return (
      <View style={styles.container}>
        <Calendar
          onDayPress={() => navigation.navigate('List')}
          monthFormat={'yyyy MM'}
          enableSwipeMonths={true}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: 'white',
  },
});
