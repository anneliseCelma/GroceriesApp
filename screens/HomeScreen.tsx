import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { JSX } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../App';
import { Container } from 'postcss';

type Props =NativeStackScreenProps<RootStackParamList,'Home'>;

export default function HomeScreen({navigation}:Props){
    return(
        <View style={styles.header}>
            <View style={styles.menuContainer}>
                <Button title="My Grosseries" onPress={()=> navigation.navigate('MyGrosseries')}/>
                <Button title="Languages"/>
            </View>
        </View>

    );

}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#ECEA9C',
        height:150,
        flexDirection:'row',
        justifyContent:'flex-end',
        padding:30,

    },

    menuContainer:{
        gap:8
    }

});

