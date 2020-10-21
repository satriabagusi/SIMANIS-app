import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image,Text, TouchableOpacity, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import { Button } from 'react-native-paper';


export default function MainScreen({navigation}){
  return(
    <SafeAreaView >
      <StatusBar style={"light"}/>
      {/* <Image
      source={require('../assets/fluid-bg.png')}
    //   style={styles.fluid}
    style={{zIndex:-999}}
      /> */}

    <View style={{justifyContent: 'center'}}>
    <Text>Main Screen</Text>
    </View>

      <Button
      title="Login" onPress={() => navigation.navigate('LoginScreen')} />

    </SafeAreaView>
  )
}
