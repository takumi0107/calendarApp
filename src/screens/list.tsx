/* eslint-disable prettier/prettier */
import React, {useState,useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Alert, FlatList} from 'react-native';
import CircleButton from '../components/circleButton';
import firebase from 'firebase';
import Button from '../components/button';

export default function List(props: { navigation: any; route: any; }) {
    const { navigation, route } = props;
    const [schedule, setSchedule] = useState<any[]>([]);
    const { day } = route.params;
    function handlePress(id: string) {
      const { currentUser } = firebase.auth();
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser?.uid}/date/${day}/schedules`).doc(id);
      ref.delete().catch(() => Alert.alert('削除できませんでした。'));
    }
    useEffect(() => {
        const db = firebase.firestore();
        const {currentUser} = firebase.auth();
        let unsubscribe = () => {};
        if (currentUser) {
          const ref = db.collection(`users/${currentUser.uid}/date/${day}/schedules`);
          unsubscribe = ref.onSnapshot((snapshot) => {
            const userSchedule: {id: string; level: string; schedule: string; }[] = [];
            snapshot.forEach((doc) => {
              const data = doc.data();
              userSchedule.push({
                id: doc.id,
                level: data.level,
                schedule: data.schedule,
              });
              setSchedule(userSchedule);
            }, () => {
              Alert.alert('データの読み込みに失敗しました。');
            });
          });
        }
        return unsubscribe;
      }, [day]);

    function renderItem({item}: any) {
        return (
            <TouchableOpacity
            style={styles.list}
            onPress={() => {navigation.navigate('Edit', {id: item.id, e_level: item.level, e_schedule: item.schedule, date: day });}}>
            <Text style={styles.listTitle}>{item.schedule}</Text>
            <View style={styles.buttonContainer}>
            <Button onPress={() => {handlePress(item.id);}} style={styles.button} content="x"/>
            </View>
            </TouchableOpacity>
        );
    }
    return (
        <View style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.topTitle}>Schedule</Text>
        </View>
        <View>
            <FlatList
            data={schedule}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </View>
        <View style={styles.circleButtonContainer}>
        <CircleButton onPress={()=>{navigation.navigate('Create', day);}} />
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
        height: 100,
        fontFamily: '',
    },
    topTitle: {
        color: 'black',
        fontSize: 32,
        fontWeight: 'normal',
    },
    list: {
        flexDirection: 'row',
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
        right: 30,
    },
    button: {
        backgroundColor: 'grey',
        height: 40,
        width: 40,
        opacity: 0.5,
    },
    circleButtonContainer: {
        position: 'absolute',
        top: 32,
        right: 32,
    },
});
