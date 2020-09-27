import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import { FontDisplay, loadAsync } from 'expo-font';
import React from 'react';

import Router from './Router';


export default function App() {
  
  let [fonstLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins.ttf'),
  });

  if (!fonstLoaded){
    return <AppLoading/>
  }else{
    return(
      <Router/>
    );
  }

  
}


