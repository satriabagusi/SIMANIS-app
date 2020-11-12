import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContent } from './screen/DrawerContent';

import DataSekolah from './screen/datapokok/datasekolah/DataSekolah';
import TambahDataSekolah from './screen/datapokok/datasekolah/TambahDataSekolah';
import ListJenjangSekolah from './screen/datapokok/datasekolah/ListJenjangSekolah';
import DetailDataSekolah from './screen/datapokok/datasekolah/DetailDataSekolah';
import DataPrasarana from './screen/datapokok/dataprasarana/DataPrasarana';
import TambahDataPrasarana from './screen/datapokok/dataprasarana/TambahDataPrasarana';
import DataSarana from './screen/datapokok/datasarana/DataSarana';
import TambahDataSarana from './screen/datapokok/datasarana/TambahDataSarana';
import DataRombel from './screen/datapokok/datarombel/DataRombel';
import TambahDataRombel from './screen/datapokok/datarombel/TambahDataRombel';
import DataGuru from './screen/datapokok/dataguru/DataGuru';
import TambahDataGuru from './screen/datapokok/dataguru/TambahDataGuru';
import DataSiswa from './screen/datapokok/datasiswa/DataSiswa';
import TambahDataSiswa from './screen/datapokok/datasiswa/TambahDataSiswa';

import JadwalPelajaran from './screen/datakurikulum/jadwalpelajaran/JadwalPelajaran';

import LoginScreen from './screen/login/LoginScreen';
import RegisterScreen from './screen/register/RegisterScreen';
import MainScreen from './screen/MainScreen';
import HomeScreen from './screen/home/HomeScreen';

const DataSekolahStack = createStackNavigator();
function DataSekolahStackScreen(){
  return(
    <DataSekolahStack.Navigator
      initialRouteName="DataSekolah"
      screenOptions={{headerShown:false}}>
      <DataSekolahStack.Screen name="DataSekolah" component={DataSekolah} />
      <DataSekolahStack.Screen name="TambahDataSekolah" component={TambahDataSekolah} />
      <DataSekolahStack.Screen name="ListJenjangSekolah" component={ListJenjangSekolah} />
      <DataSekolahStack.Screen name="DetailDataSekolah" component={DetailDataSekolah} />
    </DataSekolahStack.Navigator>
  );
}

const DataPrasaranaStack = createStackNavigator();
function DataPrasaranaStackScreen(){
  return(
    <DataPrasaranaStack.Navigator
    initialRouteName="DataPrasarana"
    screenOptions={{headerShown:false}}>
      <DataPrasaranaStack.Screen name="DataPrasarana" component={DataPrasarana}/>
      <DataPrasaranaStack.Screen name="TambahDataPrasarana" component={TambahDataPrasarana}/>
    </DataPrasaranaStack.Navigator>
  );
}

const DataSaranaStack = createStackNavigator();
function DataSaranaStackScreen(){
  return(
    <DataSaranaStack.Navigator
    initialRouteName="DataSarana"
    screenOptions={{headerShown:false}}>
      <DataSaranaStack.Screen name="DataSarana" component={DataSarana}/>
      <DataSaranaStack.Screen name="TambahDataSarana" component={TambahDataSarana}/>
    </DataSaranaStack.Navigator>
  );
}

const DataRombelStack = createStackNavigator();
function DataRombelStackScreen(){
  return(
    <DataRombelStack.Navigator
    initialRouteName="DataRombel"
    screenOptions={{headerShown:false}}>
      <DataRombelStack.Screen name="DataRombel" component={DataRombel}/>
      <DataRombelStack.Screen name="TambahDataRombel" component={TambahDataRombel}/>
    </DataRombelStack.Navigator>
  );
}

const DataGuruStack = createStackNavigator();
function DataGuruStackScreen(){
  return(
    <DataGuruStack.Navigator
    initialRouteName="DataGuru"
    screenOptions={{headerShown:false}}>
      <DataGuruStack.Screen name="DataGuru" component={DataGuru}/>
      <DataGuruStack.Screen name="TambahDataGuru" component={TambahDataGuru}/>
    </DataGuruStack.Navigator>
  );
}

const DataSiswaStack = createStackNavigator();
function DataSiswaStackScreen(){
  return(
    <DataSiswaStack.Navigator
    initialRouteName="DataSiswa"
    screenOptions={{headerShown:false}}>
      <DataSiswaStack.Screen name="DataSiswa" component={DataSiswa}/>
      <DataSiswaStack.Screen name="TambahDataSiswa" component={TambahDataSiswa}/>
    </DataSiswaStack.Navigator>
  );
}

const DataPokokStack = createStackNavigator();
function DataPokokScreen(){
  return(
      <DataPokokStack.Navigator 
      screenOptions={{headerShown:false}}>
        <DataPokokStack.Screen name="DataSekolah" component={DataSekolahStackScreen} />
        <DataPokokStack.Screen name="DataPrasarana" component={DataPrasaranaStackScreen} />
        <DataPokokStack.Screen name="DataSarana" component={DataSaranaStackScreen} />
        <DataPokokStack.Screen name="DataRombel" component={DataRombelStackScreen} />
        <DataPokokStack.Screen name="DataGuru" component={DataGuruStackScreen} />
        <DataPokokStack.Screen name="DataSiswa" component={DataSiswaStackScreen} />
      </DataPokokStack.Navigator>
  );
}

const DataKurikulum = createStackNavigator();
function DataKurikulumScreen(){
  return(
    <DataKurikulum.Navigator
    screenOptions={{headerShown:false}}>
      <DataKurikulum.Screen name="JadwalPelajaran" component={JadwalPelajaran} />
    </DataKurikulum.Navigator>
  );
}

const Drawer = createDrawerNavigator();
function HomeStackScreen(){
  return(
    <Drawer.Navigator 
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="DataPokok" component={DataPokokScreen} />
        <Drawer.Screen name="DataKurikulum" component={DataKurikulumScreen} />
    </Drawer.Navigator>
  );
}

const MainStack = createStackNavigator();
function MainStackScreen(){
  return(
    <MainStack.Navigator
    initialRouteName="Main"
    screenOptions={{headerShown:false}}>
      <MainStack.Screen name="Main" component={MainScreen}/>
      <MainStack.Screen name="Login" component={LoginScreen}/>
      <MainStack.Screen name="Register" component={RegisterScreen}/>
    </MainStack.Navigator>
  );
}

const RootStack = createStackNavigator();
const Router = () => {
  return(
    <NavigationContainer>
      <RootStack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}>
        <RootStack.Screen name="Main" component={MainStackScreen}/>
        <RootStack.Screen name="Home" component={HomeStackScreen}/>
      </RootStack.Navigator>  
    </NavigationContainer>
  )
}

export default Router;