import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { DrawerContent } from './screen/DrawerContent';

import HomeScreen from './screen/home/HomeScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator 
        drawerContent={props => <DrawerContent {...props} />}
        initialRouteName="HomeScreen">
            <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

