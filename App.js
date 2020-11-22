import { AppLoading } from 'expo';
import React from 'react';

import Router from './Router';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import {
  useFonts,
  Poppins_100Thin,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';


const App = () => {

  const theme ={
    dark:false,
    ...DefaultTheme,
    roundness:2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3F83F8',
      accent: '#0A7391',
      background: '#f2f2f2',
      surface: '#f2f2f2',
      text: '#001021',
      error: '#F05252',
      disabled: '#BEC6C6',
      warning: '#FACA15',
      success: '#31C48D'

    }
  }
  
  let [fonstLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  
  let fontSize = 24;
  let paddingVertical = 6;

  if (!fonstLoaded){
    return <AppLoading/>
  }else{
    return(
      <PaperProvider theme={theme}>
        <Router/>
      </PaperProvider>
    );
  }
}

export default App;


