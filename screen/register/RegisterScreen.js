import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image,Text, TouchableOpacity, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import { Button } from 'react-native-paper';

export default function RegisterScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView >
      <StatusBar style={"light"}/>
      {/* <Image
      source={require('../../assets/fluid-bg.png')}
    //   style={styles.fluid}
      /> */}

    <Text>Register Screen</Text>
    <Button onPress={navigation.goBack()}
    title="GO BACK">
    </Button>

    </SafeAreaView>
  );
}

