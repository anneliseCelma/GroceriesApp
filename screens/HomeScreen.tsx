import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { JSX } from 'react';
import { Button, Dimensions, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { RootStackParamList } from '../App';
import { Container } from 'postcss';
import Icon from 'react-native-vector-icons/Ionicons';

type Props =NativeStackScreenProps<RootStackParamList,'Home'>;

export default function HomeScreen({navigation}:Props){
    return(
        <><View style={styles.header}>
            <View style={{ gap: 8, alignItems: 'flex-end' }}>
                <View style={{ flexDirection: 'row', gap: 8 }}>
                    <Pressable style={styles.btnMyGrosseries} onPress={() => navigation.navigate('MyShoppingList')}>
                        <Text style={{ color: '#FFC6B2', fontWeight: 'bold', fontSize: 20 }}>Mes courses</Text>
                        <View style={styles.iconNoteBook}>
                            <Icon name='reader-outline' style={{ color:'white', fontSize: 20}}/>
                        </View>
                    </Pressable>
                </View>
                <Pressable style={{ backgroundColor: 'white', padding: 12, borderRadius: 10 }}>
                    <Text>Langages</Text>
                </Pressable>
            </View>
        </View>
        <View style={styles.body}>
            <View style={styles.sectionAjout}>
                <Pressable style={{backgroundColor:'#ECE99C',borderRadius:18,width:150,alignItems:'center',justifyContent:'center'}}>
                    <Text><Icon name='camera-outline' style={{color:'white', fontSize:80}}/></Text>
                </Pressable>
                <Pressable style={{backgroundColor:'#FFC009',borderRadius:18, width:150,alignItems:'center',justifyContent:'center'}}>
                    <Text><Icon name='add-outline' style={{color:'white', fontSize:80}} /></Text>
                </Pressable>
            </View>
            <View style={styles.input}>
                <Icon style={{fontSize:20,gap:5,color:'#ECE99C'}} name='search' />
                <TextInput  placeholder='Rechecher un article'/>
            </View>
            <View style={styles.sectionArticle}>
                <View style={styles.article}>
                    <View style={{alignItems:'center'}}>
                        <Text>Pommes</Text>
                        <View style={{backgroundColor:'#F8F8F8',borderRadius:8,flexDirection:'row',alignItems:'center'}}>
                            <Pressable><Icon name='remove-circle-outline' style={{fontSize:30,color: "#717065"}} /></Pressable>
                            <TextInput  keyboardType="number-pad"/>
                            <Pressable><Icon name='add-circle-outline'style={{fontSize:30,color: "#717065"}}  /></Pressable>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',gap:8,alignItems:'center'}}>
                        <Text style={{fontSize:20,padding:8,borderRadius:8, backgroundColor:'#FFC6B2',color:'#FFFFFF'}} >$3.50</Text>
                        <Pressable>
                            <Icon style={{fontSize:20,padding:10,borderRadius:8, backgroundColor:'#ECE99C',color:'#FFFFFF'}} name='trash' />
                        </Pressable>
                    </View>
                </View>
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
        paddingVertical:verticalScale(2),
        paddingHorizontal:horizontalScale(16),
        paddingTop:50,
        backgroundColor: '#ECEA9C',
        height:190,
        flexDirection:'row',
        justifyContent:'flex-end',
        fontFamily:'Inter',
        borderBottomRightRadius:50,
        borderBottomLeftRadius:50,

    },
    btnMyGrosseries:{
        flexDirection:'row',
        alignItems:'center',
        gap:8,
        backgroundColor:'#FFFFFF',
        fontWeight:'bold',
        justifyContent:'center',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:8,
        paddingBottom:8,
        borderRadius:15, 
    },
    iconNoteBook:{
        backgroundColor:'#FFC6B2',
        borderRadius:10,
        padding:8,
        color:'white'
    },

    body:{
        paddingVertical:verticalScale(2),
        paddingHorizontal:horizontalScale(16),
    },
    sectionAjout:{
        flexDirection:'row',
        gap:8,
        paddingTop:30,
        paddingBottom:30,
        justifyContent:'center',
        height:210
    },
    input:{
        backgroundColor:'#F8F8F8',
        elevation: 2,
        shadowColor: '#52006A',
        borderRadius:5,
        paddingTop:2,
        paddingBottom:2,
        paddingLeft:8,
        paddingRight:8,
        fontSize:17,
        flexDirection:'row',
        alignItems:'center',
    },

    sectionArticle:{
        paddingTop:10,
        paddingBottom:20,
    },
    article:{
        padding:10,
        backgroundColor:'#FFFBEF',
        borderRadius:8,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        elevation:5,
        shadowColor:'#ECE99C'
    }


});

