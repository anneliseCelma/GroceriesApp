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
                    <Pressable style={styles.btnMyGrosseries} onPress={() => navigation.navigate('MyGrosseries')}>
                        <Text style={{ color: '#FFC6B2', fontWeight: 'bold', fontSize: 20 }}>Mes courses</Text>
                        <View style={styles.iconNoteBook}>
                            <Image source={require('../assets/Notebook.png')} />
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
                <Pressable style={{backgroundColor:'#ECE99C',borderRadius:18,padding:33}}>
                    <Text><Image source={require('../assets/Camera_2 Symbol.png')}/></Text>
                </Pressable>
                <Pressable style={{backgroundColor:'#FFC009',borderRadius:18}}>
                    <Text><Image source={require('../assets/Cut_Close_Cancle.png')}/></Text>
                </Pressable>
            </View>
            <View style={styles.input}>
                <Icon style={{fontSize:20,gap:5,color:'#ECE99C'}} name='search' />
                <TextInput  placeholder='Rechecher un article'/>
            </View>
            <View style={styles.sectionArticle}>
                <View style={styles.article}>
                    <View>
                        <Text>Pommes</Text>
                        <TextInput style={{backgroundColor:'#F8F8F8'}} keyboardType="number-pad"/>
                    </View>
                    <View>
                        <Text style={{fontSize:20,padding:10,borderRadius:8, backgroundColor:'#FFC6B2',color:'#FFFFFF'}} >$3.50</Text>
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
        borderRadius:15,
        padding:8,
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
        justifyContent:'center'
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
        alignItems:'center'
    }


});

