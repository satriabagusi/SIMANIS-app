import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './screen/DrawerContent';

import LoginScreen from './screen/login/LoginScreen';
import RegisterScreen from './screen/register/RegisterScreen';
import MainScreen from './screen/MainScreen';

import HomeScreen from './screen/home/HomeScreen';
const Drawer = createDrawerNavigator();
function HomeStackScreen(){
  return(
    <Drawer.Navigator 
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="HomeScreen">
        <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
    </Drawer.Navigator>
  );
}

const MainStack = createStackNavigator();
function MainStackScreen(){
  return(
      <MainStack.Navigator initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}>
        <MainStack.Screen name="Main" component={MainScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Register" component={RegisterScreen} />
      </MainStack.Navigator>
  );
}

const RootStack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
          <RootStack.Screen name="Main" component={MainStackScreen}/>
          <RootStack.Screen name="Home" component={HomeStackScreen}/>
        </RootStack.Navigator>
    </NavigationContainer>
  );
}

