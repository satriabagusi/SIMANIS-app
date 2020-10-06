import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { responsiveHeight, responsiveWidth, responsiveFontSize, responsiveScreenWidth, responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { Avatar, Button, Modal, Portal } from 'react-native-paper';
import styles from '../../assets/style/HomeComponent/Home';

export default function App() {
  const navigation = useNavigation();

  const [modalDataPokok, visibleDataPokok] = React.useState(false);
  const showModalDataPokok = () => visibleDataPokok(true);
  const hideModalDataPokok = () => visibleDataPokok(false);

  const [modalElearning, visibleElearning] = React.useState(false);
  const showModalElearning = () => visibleElearning(true);
  const hideModalElearning = () => visibleElearning(false);

  const [modalUjian, visibleUjian] = React.useState(false);
  const showModalUjian = () => visibleUjian(true);
  const hideModalUjian = () => visibleUjian(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={"light"}/>
      <Image
      source={require('../../assets/fluid-bg.png')}
      style={styles.fluid}
      />

      <View style={styles.sectionTop}>
      <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={styles.btnMenu}>
        <Ionicons name="ios-menu" size={30} color="white" />
      </TouchableOpacity>

      <View style={styles.profile}>
          <Avatar.Image size={responsiveScreenWidth(24)} 
          source={{uri:'https://images.unsplash.com/photo-1600527097450-569db51cf00d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'}} />
        <Text style={{fontWeight:'bold', fontSize: responsiveFontSize(3), color:'white', marginBottom:5}}>John Doe</Text>
        <Text style={{fontSize: responsiveFontSize(2), color:'white'}}>SMA 1 Indonesia</Text>
        <Text style={{fontSize: responsiveFontSize(1.5) ,color:'white'}}>Admin Sekolah</Text>
      </View>
      </View>

      <View style={{flex:1, alignSelf:'center', width:responsiveScreenWidth(80), top:responsiveScreenHeight(-15), maxHeight:450}}>

        <TouchableOpacity style={styles.card}
        onPress={showModalDataPokok} >
            <Image source={require('../../assets/icons/PokokSekolahIcon.png')} style={{marginRight: responsiveWidth(3), width: responsiveScreenWidth(16.5), height: responsiveScreenHeight(6.5)}}/>
            <Text style={styles.cardText}>Data Pokok Sekolah</Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', marginVertical:responsiveScreenHeight(2)}}>
          <TouchableOpacity style={styles.cardChild}
          onPress={() => alert("JADWAL PELAJARAN")} >
              <Image source={require('../../assets/icons/jadwalIcon.png')} style={{marginRight: responsiveWidth(3), width: responsiveScreenWidth(8.5), height: responsiveScreenHeight(5)}}/>
              <Text >Jadwal Pelajaran</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardChild}
          onPress={() => alert("Absensi Siswa")} >
              <Image source={require('../../assets/icons/absensiIcon.png')} style={{marginRight: responsiveWidth(3.5), width: responsiveScreenWidth(9.8), height: responsiveScreenHeight(4)}}/>
              <Text >Absensi Siswa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardChild}
          onPress={() => alert("Tugas Siswa")} >
              <Image source={require('../../assets/icons/tugasIcon.png')} style={{marginRight: responsiveWidth(3), width: responsiveScreenWidth(6), height: responsiveScreenHeight(5)}}/>
              <Text >Tugas Siswa</Text>
          </TouchableOpacity>
          
        </View>

        <TouchableOpacity style={styles.card}
        onPress={showModalElearning} >
            <Image source={require('../../assets/icons/elearningIcon.png')} style={{marginRight: responsiveWidth(3), width: responsiveScreenWidth(16.5), height: responsiveScreenHeight(6.5)}}/>
            <Text style={styles.cardText}>E-Learning</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}
        onPress={showModalUjian} >
            <Image source={require('../../assets/icons/ujianIcon.png')} style={{marginRight: responsiveWidth(3), width: responsiveScreenWidth(16.5), height: responsiveScreenHeight(6.5)}}/>
            <Text style={styles.cardText}>Ujian Online</Text>
        </TouchableOpacity>

      </View>


      

    <Portal>
    <Modal  visible={modalDataPokok} onDismiss={hideModalDataPokok}>
          <View style={styles.modal}>
            <Text>This is Modal DATA POKOK</Text>
          </View>
    </Modal>
    <Modal  visible={modalElearning} onDismiss={hideModalElearning}>
          <View style={styles.modal}>
            <Text>This is Modal E-learning</Text>
          </View>
    </Modal>
    <Modal  visible={modalUjian} onDismiss={hideModalUjian}>
          <View style={styles.modal}>
            <Text>This is Modal Ujian Online</Text>
          </View>
    </Modal>
    </Portal>
    </SafeAreaView>
  );
}

