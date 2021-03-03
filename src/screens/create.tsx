/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import CircleButton from '../components/circleButton';

export default function Create() {
  const [content, setContent] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.top}>
          <Text style={styles.topText}>Add Schedule</Text>
          <View style={styles.buttonContainer}>
              <CircleButton />
              </View>
      </View>
      <View style={styles.pickContainer}>
      <RNPickerSelect
            onValueChange={() => {}}
            items={[
                { label: 'Level 1', value: 'Level 1' },
                { label: 'Level 2', value: 'Level 2' },
                { label: 'Level 3', value: 'Level 3' },
            ]}
        >
        <Text style={styles.pickText}>chose importance</Text>
        </RNPickerSelect>
        </View>
        <View style={styles.contentContainer}>
            <TextInput
            style={styles.content}
            value={content}
            onChangeText={(schedule) => {setContent(schedule);}}
            placeholder="put schedule"/>
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
    contentContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
    },
    content: {
        fontSize: 16,
    },
});
