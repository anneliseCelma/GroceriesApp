import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { JSX } from 'react';
import { Button, Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../App';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = NativeStackScreenProps<RootStackParamList,'MyReceipt'>;

export default function ReceiptScreen({navigation}:Props){
    return(
        <>
        <View style={styles.header}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text onPress={() => navigation.navigate('MyShoppingList')}>
                    <Icon style={{color:'white', fontSize:20,fontWeight:'bold'}} name="chevron-back-outline" />
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 30}}>Retour</Text>
                </Text>
                <Text>ROND</Text>
            </View>
        </View>
        </>
    );
}

const guidelineBaseWidth=360;
const guidelineBaseHeight=133;

const {width,height}= Dimensions.get("window");
const horizontalScale =(size: number)=>(width/guidelineBaseWidth)*size;
const verticalScale =(size: number)=>(width/guidelineBaseHeight)*size;

const styles = StyleSheet.create({
    header:{
        height:130,
        padding:20,
        backgroundColor:'#BAB63B',
        justifyContent:'center',
    },
    body:{
        paddingVertical:verticalScale(2),
        paddingHorizontal:horizontalScale(16),
    },
    course:{
        backgroundColor:'#f1ededff',
        height:80,
        justifyContent:'center',
        alignItems:'center'

    }

});