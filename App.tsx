import { StatusBar } from 'expo-status-bar';
import React, { JSX } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ShoppingListScreen from './screens/ShoppingListScreen';
import ReceiptScreen from './screens/ReceiptScreen';


export type RootStackParamList ={
    Home : undefined;
    MyShoppingList : undefined;
    MyReceipt : undefined;
}

const MyNavigation =createNativeStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MyNavigation.Navigator screenOptions={{headerShown:false}}>
          <MyNavigation.Screen name="Home" component={HomeScreen} options={{animation: 'slide_from_left'}} />
          <MyNavigation.Screen name="MyShoppingList" component={ShoppingListScreen}/>
          <MyNavigation.Screen name="MyReceipt" component={ReceiptScreen} />
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
