/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import CircleButton from '../components/circleButton';
import firebase from 'firebase';

export default function Create(props: { navigation: any; route: any;}) {
  const { navigation, route } = props;
  const [content, setContent] = useState('');
  const [level, setLevel] = useState('');
  const {id, date,e_level, e_schedule} = route.params;
  function handlePress() {
      const { currentUser } = firebase.auth();
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser?.uid}/date/${date}/schedules`);
      const d_ref = db.collection(`users/${currentUser?.uid}/date/${date}/schedules`).doc(id);
      if (!level) {
        Alert.alert('Please choose importance');
    }
    else if (!content) {
        Alert.alert('Please input schedule');
    }
    else {
    d_ref.delete();
    ref.add({
      level,
      schedule: content,
    })
     .then(() => {
      navigation.goBack();
     })
     .catch((error) => {Alert.alert(error.message);});
  }
  }
  return (
    <View style={styles.container}>
      <View style={styles.top}>
          <Text style={styles.topText}>Edit Schedule</Text>
          <View style={styles.buttonContainer}>
              <CircleButton mark={'✓'} onPress={handlePress} />
              </View>
      </View>
      <View style={styles.pickContainer}>
      <RNPickerSelect
            onValueChange={(lev) => {setLevel(lev);}}
            items={[
                { label: 'Level 1', value: 'Level 1' },
                { label: 'Level 2', value: 'Level 2' },
                { label: 'Level 3', value: 'Level 3' },
            ]}
        >
        <TextInput
        style={styles.choseContainer}
        placeholder={e_level}>{level}</TextInput>
        </RNPickerSelect>
        </View>
        <View style={styles.contentContainer}>
            <TextInput
            style={styles.content}
            value={content}
            onChangeText={(schedule) => {setContent(schedule);}}
            placeholder={e_schedule}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        paddingVertical: 25,
    },
    topText: {
        fontSize: 32,
    },
    buttonContainer: {
        position: 'absolute',
        top: 32,
        right: 32,
    },
    pickContainer: {
        paddingTop: 32,
    },
    pickText: {
        fontSize: 25,
        paddingHorizontal: 32,
    },
    choseContainer: {
        paddingHorizontal: 16,
        fontSize: 20,
    },
    contentContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
    },
    content: {
        fontSize: 16,
    },
});
