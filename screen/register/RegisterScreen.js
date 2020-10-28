import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image,Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button, Headline, Menu, TextInput, useTheme } from 'react-native-paper';
import { responsiveFontSize, responsiveHeight, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const Register = ({navigation}) => {
  const theme = useTheme();
  const [sebagaiMenu, setSebagaiMenu] = React.useState(false);
  const [sebagai, setSebagai] = React.useState('');
  const openSebagai = () => setSebagaiMenu(true);
  const closeSebagai = () => setSebagaiMenu(false);

  if (sebagai == "" ){
    setSebagai('Login Sebagai');
  }

  return(
    <View >
    <StatusBar style={"light"}/>
    <Image
    source={require('../../assets/fluid-bg.png')}
  //   style={styles.fluid}
  style={{position:'absolute',
  justifyContent: "center",
  top:-320,
  zIndex:-99,}}
    />

  <View style={{flexDirection:'column',  alignSelf:'center', }}>
    <View style={{justifyContent:'center', marginTop:responsiveHeight(15)}}>
    <Headline style={{fontFamily:'Poppins_700Bold', color:'white', fontSize:30, textAlign:'center' }}> Register </Headline>
    </View>

    <View style={{width:responsiveScreenWidth(75), flex:1, flexDirection:'column', justifyContent:'center', marginTop:responsiveHeight(-10)}}>
      <TextInput
      mode="outlined"
      style={{backfaceVisibility:'hidden'}}
      label="Email"
      />
      <TextInput
      mode="outlined"
      style={{backgroundColor:theme.colors.background}}
      label="Password"
      secureTextEntry={true}
      />
      <TextInput
      mode="outlined"
      style={{backgroundColor:theme.colors.background}}
      label="Konfirmasi Password"
      secureTextEntry={true}
      />
      <Menu
      style={{paddingTop:responsiveHeight(5), alignContent:'flex-end'}}
      visible={sebagaiMenu}
      onDismiss={closeSebagai}
      anchor={<Button onPress={openSebagai} mode="outlined">{sebagai}</Button>}>
        <Menu.Item onPress={() => setSebagai('Siswa')} title="Siswa" />
        <Menu.Item onPress={() => setSebagai('Guru')} title="Guru" />
        <Menu.Item onPress={() => setSebagai('Admin')} title="Admin" />
      </Menu>
      <Button style={{marginTop:responsiveHeight(1)}} mode="contained" onPress={() => navigation.navigate('Home')}>Register</Button>
    </View>
    
  </View>

  </View>
  );
}

export default Register;
