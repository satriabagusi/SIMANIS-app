import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image,Keyboard,KeyboardAvoidingView,Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button, Headline, TextInput, useTheme } from 'react-native-paper';
import { responsiveFontSize, responsiveHeight, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';

import Icons from '@expo/vector-icons/Ionicons';

const LoginScreen = ({navigation}) => {
  const theme = useTheme();
  return(
    

<KeyboardAvoidingView
  enabled={false}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex:1}}>

<StatusBar style={"light"}/>
    <Image
    source={require('../../assets/fluid-bg.png')}
  //   style={styles.fluid}
  style={{position:'absolute',
  justifyContent: "center",
  top:-350,
  zIndex:-99,}}
    />
        <View style={{padding: 24, flex: 1, justifyContent: "space-around"}}>
          <View style={{flex:1, flexDirection:'row', alignContent:'center', top:responsiveHeight(4)}}>
            <TouchableOpacity onPress={() => navigation.popToTop()}>
              <Icons name="md-arrow-round-back" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View style={{flex:1, alignItems:'center', bottom:responsiveHeight(28)}}>
          <Headline style={{top:responsiveHeight(2), color:"white",fontFamily:'Poppins_700Bold'}}>Login</Headline>
          <Image
            source={require('../../assets/muaraenimlogo.gif')}
            style={{width:responsiveWidth(20), height:responsiveHeight(20)}}
            resizeMode= {Platform.OS === 'ios' ? "contain" : "center"}
            />
          </View>

          <View style={{flex:1, flexDirection:'column', bottom:responsiveHeight(33)}}>
          <TextInput
            mode="flat"
            style={{backgroundColor:'rgba(255, 255, 255, 0)'}}
            label="Email"
            />
            <TextInput
            mode="flat"
            style={{backgroundColor:'rgba(255, 255, 255, 0)'}}
            label="Password"
            secureTextEntry={true}
            />
            <Button style={{marginTop:responsiveHeight(1)}} mode="contained" onPress={() => navigation.navigate('Home')}>Login</Button>
          </View>

        </View>
    </KeyboardAvoidingView>


  );
}

export default LoginScreen;
