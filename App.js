import { AppLoading } from 'expo';
import React from 'react';

import Router from './Router';
import { Provider as PaperProvider } from 'react-native-paper';

import {
  useFonts,
  Poppins_100Thin,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

export default function App() {
  
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
      <PaperProvider>
        <Router/>
      </PaperProvider>
    );
  }

  
}


