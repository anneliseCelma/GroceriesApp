import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { JSX } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList,'MyGrosseries'>;

export default function GrosseriesScreen({navigation}:Props){
    return(
        <View>
            <Text>Panier</Text>
        </View>
    );
}
