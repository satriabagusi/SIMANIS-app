import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export default function App() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={"light"}/>
      <ImageBackground source={require('../../assets/fluid-bg.png')}
      style={styles.fluid}>

      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={styles.btnMenu}>
        <Ionicons name="ios-menu" size={30} color="white" />
      </TouchableOpacity>

      <View style={styles.profile}>
        <View style={styles.avatar}>
        <Image
          source={{uri:'https://images.unsplash.com/photo-1600527097450-569db51cf00d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'}}
          style={{flex:1,width: 72, height:72, resizeMode: 'contain'}}
        />
        </View>
        <Text style={{fontWeight:'bold', fontSize: 24, color:'white', marginBottom:5}}>John Doe</Text>
        <Text style={{fontSize: 18, color:'white'}}>SMA 1 Indonesia</Text>
        <Text style={{color:'white'}}>Admin Sekolah</Text>
      </View>

      <TouchableOpacity style={styles.card}
      onPress={() => alert("DATA POKOK SEKOLAh")}>
          <Image source={require('../../assets/icons/PokokSekolahIcon.png')} style={{marginRight: responsiveWidth(3)}}/>
          <Text style={styles.cardText}>Data Pokok Sekolah</Text>
      </TouchableOpacity>

      </ImageBackground>

      
    <View style={styles.content}>
      <Text>Home</Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fluid:{
    flex:1,
    justifyContent: "center",
    top: responsiveHeight(-5)
  },
  btnMenu:{
    flex:1,
    marginVertical: responsiveHeight(7),
    marginHorizontal: responsiveWidth(6.5),
    zIndex:21
  },
  profile:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'column',
    marginTop: responsiveHeight(-15),
    marginBottom: responsiveHeight(7),
  },
  avatar:{
    borderRadius:50
  },  
  card:{
    flex:1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#FFF",
    width: responsiveWidth(70),
    height: responsiveHeight(15),
    marginHorizontal: responsiveWidth(15),
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 3,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardText:{
    fontFamily: 'Poppins',
    fontWeight: "bold"
  },
  content:{
    flex: 1,
    // backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
