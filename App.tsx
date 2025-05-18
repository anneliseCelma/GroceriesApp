import { StatusBar } from 'expo-status-bar';
import React, { JSX } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import GrosseriesScreen from './screens/GrosseriesScreen';

export type RootStackParamList ={
    Home : undefined;
    MyGrosseries : undefined;
}

const MyNavigation =createNativeStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MyNavigation.Navigator screenOptions={{headerShown:false}}>
          <MyNavigation.Screen name="Home" component={HomeScreen} />
          <MyNavigation.Screen name="MyGrosseries" component={GrosseriesScreen} />
      </MyNavigation.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
