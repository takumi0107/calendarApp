/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CircleButton from '../components/circleButton';

export default function List(props: { navigation: any; }) {
    const { navigation } = props;
    return (
        <ScrollView style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.topTitle}>Schedule</Text>
        </View>
        <View>
        <TouchableOpacity
        style={styles.list}
        onPress={() => {navigation.navigate('Edit');}}>
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
        <CircleButton onPress={()=>{navigation.navigate('Create');}} />
        </View>
        </ScrollView>
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
