import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image,Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button, Headline, useTheme } from 'react-native-paper';
import { responsiveWidth, responsiveScreenHeight, responsiveHeight } from 'react-native-responsive-dimensions';

const MainScreen = ({navigation}) => {
  const theme = useTheme();
  return(
    <SafeAreaView >
    <StatusBar style={"light"}/>
    <Image
    source={require('../assets/fluid-bg.png')}
  //   style={styles.fluid}
  style={{position:'absolute',
  justifyContent: "center",
  top:-300,
  zIndex:-99,}}
    />

  <View style={{flexDirection:'column',  alignSelf:'center', }}>
    <View style={{justifyContent:'center', alignItems:'center' , marginTop:responsiveScreenHeight(10)}}>
    <Headline style={{fontFamily:'Poppins_700Bold', color:'white', fontSize:30, textAlign:'center' }}> SIMANIS </Headline>
    <Image
            source={require('../assets/muaraenimlogo.gif')}
            style={{width:responsiveWidth(25), height:responsiveHeight(25)}}
            resizeMode="center"/>
    </View>
    <View style={{marginTop: responsiveScreenHeight(30)}}>
    <Button icon="login" mode="contained" onPress={() => navigation.navigate('Login')}>
      Login
    </Button>
    <Text style={{fontFamily: 'Poppins_400Regular', marginTop:responsiveScreenHeight(1.5)}}>Belum Punya akun? Klik Disini untuk 
    <Text style={{color: theme.colors.primary }} onPress={() => navigation.navigate('Register')}> Daftar</Text>
    </Text>
    </View>
  </View>

  </SafeAreaView>
  );
}

export default MainScreen;
