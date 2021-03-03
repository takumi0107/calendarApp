/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Button from '../components/button';

export default class List extends React.Component {
  render() {
    return (
        <ScrollView style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.topTitle}>Schedule</Text>
        </View>
        <View>
        <TouchableOpacity
        style={styles.list}
        onPress={() => {}}>
            <Text style={styles.listTitle}>hello</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.list}
        onPress={() => {}}>
            <Text style={styles.listTitle}>hello</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.list}
        onPress={() => {}}>
            <Text style={styles.listTitle}>hello</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.list}
        onPress={() => {}}>
            <Text style={styles.listTitle}>hello</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.list}
        onPress={() => {}}>
            <Text style={styles.listTitle}>hello</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.list}
        onPress={() => {}}>
            <Text style={styles.listTitle}>hello</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.list}
        onPress={() => {}}>
            <Text style={styles.listTitle}>hello</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.list}
        onPress={() => {}}>
            <Text style={styles.listTitle}>hello</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.list}
        onPress={() => {}}>
            <Text style={styles.listTitle}>hello</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.list}
        onPress={() => {}}>
            <Text style={styles.listTitle}>hello</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.list}
        onPress={() => {}}>
            <Text style={styles.listTitle}>hello</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.list}
        onPress={() => {}}>
            <Text style={styles.listTitle}>hello</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.list}
        onPress={() => {}}>
            <Text style={styles.listTitle}>hello</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
        <Button />
        </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        height: 100,
        fontFamily: '',
    },
    topTitle: {
        color: 'black',
        fontSize: 32,
        fontWeight: 'normal',
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.15)',
        paddingVertical: 16,
        paddingBottom: 19,
    },
    listTitle: {
        fontSize: 24,
    },
    buttonContainer: {
        position: 'absolute',
        top: 32,
        right: 32,
    },
});
