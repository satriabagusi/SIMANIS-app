import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image,Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize, responsiveScreenWidth, responsiveScreenHeight, responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { Avatar, Dialog, Divider, List, Modal, Portal, Surface, Title } from 'react-native-paper';
import styles from '../../assets/style/HomeComponent/Home';

export default function HomeScreen() {
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

  function navigateDataSekolah(){
    navigation.navigate('DataPokok', {screen: 'DataSekolah'});
    hideModalDataPokok();
  }
  function navigateDataPrasarana(){
    navigation.navigate('DataPokok', {screen: 'DataPrasarana'});
    hideModalDataPokok();
  }
  function navigateDataSarana(){
    navigation.navigate('DataPokok', {screen: 'DataSarana'});
    hideModalDataPokok();
  }
  function navigateDataRombel(){
    navigation.navigate('DataPokok', {screen: 'DataRombel'});
    hideModalDataPokok();
  }
  function navigateDataGuru(){
    navigation.navigate('DataPokok', {screen: 'DataGuru'});
    hideModalDataPokok();
  }
  function navigateDataSiswa(){
    navigation.navigate('DataPokok', {screen: 'DataSiswa'});
    hideModalDataPokok();
  }

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
        <Text style={{fontFamily: 'Poppins_400Regular',fontWeight:'bold', fontSize: responsiveFontSize(3), color:'black', marginBottom:5}}>John Doe</Text>
        <Text style={{fontFamily: 'Poppins_400Regular',fontSize: responsiveFontSize(2), color:'black'}}>SMA 1 Indonesia</Text>
        <Text style={{fontFamily: 'Poppins_400Regular',fontSize: responsiveFontSize(1.5) ,color:'black'}}>Admin Sekolah</Text>
      </View>
      </View>

      <View style={{flex:1, alignSelf:'center', width:responsiveScreenWidth(80), top:responsiveScreenHeight(-13), maxHeight:450}}>

        <View>
        <TouchableOpacity
        onPress={showModalDataPokok}>
          <Surface style={{borderRadius:10 ,elevation: 4, alignItems: 'center', justifyContent:'center', height: responsiveScreenHeight(12)}}>
          <Image source={require('../../assets/icons/PokokSekolahIcon.png')} style={{width: responsiveScreenWidth(16.5), height: responsiveScreenHeight(6.5)}}/>
            <Text style={styles.cardText}>Data Pokok Sekolah</Text>
          </Surface>
        </TouchableOpacity>

        </View>

        <View style={{flexDirection: 'row', justifyContent:'space-between', marginTop:responsiveScreenHeight(2)}}>
          <TouchableOpacity
          onPress={() => alert("JADWAL PELAJARAN")} >
            <Surface style={{borderRadius:10 ,elevation: 4, alignItems: 'center', justifyContent:'center', height: responsiveScreenHeight(12), width:responsiveScreenWidth(24)}}>
              <Image source={require('../../assets/icons/jadwalIcon.png')} style={{width: responsiveScreenWidth(8.5), height: responsiveScreenHeight(5)}}/>
              <Text style={{fontFamily: 'Poppins_400Regular', textAlign:'center', fontSize:responsiveScreenFontSize(1.5)}}>Jadwal Pelajaran</Text>
            </Surface>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => alert("Absensi Siswa")} >
            <Surface style={{borderRadius:10 ,elevation: 4, alignItems: 'center', justifyContent:'center', height: responsiveScreenHeight(12), width:responsiveScreenWidth(24)}}>
              <Image source={require('../../assets/icons/absensiIcon.png')} style={{width: responsiveScreenWidth(9.8), height: responsiveScreenHeight(4)}}/>
              <Text style={{fontFamily: 'Poppins_400Regular', textAlign:'center', fontSize:responsiveScreenFontSize(1.5)}}>Absensi Siswa</Text>
            </Surface>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => alert("Tugas Siswa")} >
            <Surface style={{borderRadius:10 ,elevation: 4, alignItems: 'center', justifyContent:'center', height: responsiveScreenHeight(12), width:responsiveScreenWidth(24)}}>
              <Image source={require('../../assets/icons/tugasIcon.png')} style={{width: responsiveScreenWidth(6), height: responsiveScreenHeight(5)}}/>
              <Text style={{fontFamily: 'Poppins_400Regular', textAlign:'center', fontSize:responsiveScreenFontSize(1.5)}}>Tugas Siswa</Text>
            </Surface>
          </TouchableOpacity>
          
        </View>

        <View style={{marginTop: responsiveScreenHeight(2)}}>
        <TouchableOpacity
        onPress={showModalElearning} >
          <Surface style={{borderRadius:10 ,elevation: 4, alignItems: 'center', justifyContent:'center', height: responsiveScreenHeight(12)}}>
            <Image source={require('../../assets/icons/elearningIcon.png')} style={{width: responsiveScreenWidth(13), height: responsiveScreenHeight(7)}}/>
            <Text style={{fontFamily: 'Poppins_400Regular', textAlign:'center'}}>E-Learning</Text>
          </Surface>
        </TouchableOpacity>
        </View>

        <View style={{marginTop: responsiveScreenHeight(2)}}>
        <TouchableOpacity
        onPress={showModalUjian} >
          <Surface style={{borderRadius:10 ,elevation: 4, alignItems: 'center', justifyContent:'center', height: responsiveScreenHeight(12)}}>
            <Image source={require('../../assets/icons/ujianIcon.png')} style={{width: responsiveScreenWidth(14.5), height: responsiveScreenHeight(5.7)}}/>
            <Text style={{fontFamily: 'Poppins_400Regular', textAlign:'center'}}>Ujian Online</Text>
          </Surface>
        </TouchableOpacity>
        </View>

      </View>

    <Portal>
      <Dialog
      visible={modalDataPokok} onDismiss={hideModalDataPokok}>
        <Dialog.Content>
          <Title style={{textAlign:'center'}}>Data Pokok</Title>
          <Divider/>
          <List.Item
            title="Data Sekolah"
            left={props => <List.Icon {...props} icon="school" />}
            onPress={() => navigateDataSekolah()}
            />
            <Divider/>
          <List.Item
            title="Data Prasarana"
            left={props => <List.Icon {...props} icon="book-multiple" />}
            onPress={() => navigateDataPrasarana()}
            />
            <Divider/>
          <List.Item
            title="Data Sarana"
            left={props => <List.Icon {...props} icon="laptop-chromebook" />}
            onPress={() => navigateDataSarana()}
            />
            <Divider/>
          <List.Item
            title="Data Rombel"
            left={props => <List.Icon {...props} icon="chair-school" />}
            onPress={() => navigateDataRombel()}
            />
            <Divider/>
          <List.Item
            title="Data Guru"
            left={props => <List.Icon {...props} icon="teach" />}
            onPress={() => navigateDataGuru()}
          />
            <Divider/>
          <List.Item
            title="Data Siswa"
            left={props => <List.Icon {...props} icon="account" />}
            onPress={() => navigateDataSiswa()}
          />
        </Dialog.Content>
      </Dialog>

      <Dialog visible={modalElearning} onDismiss={hideModalElearning}>
        <Dialog.Content>

        <Title style={{textAlign:'center'}}>E-Learning</Title>
          <Divider/>
          <List.Item
            title="Bank Soal"
            left={props => <List.Icon {...props} icon="library-books" />}
            />
            <Divider/>
          <List.Item
            title="Materi Pelajaran"
            left={props => <List.Icon {...props} icon="notebook-multiple" />}
            />

        </Dialog.Content>
      </Dialog>

      <Dialog visible={modalUjian} onDismiss={hideModalUjian}>
        <Dialog.Content>
          
        <Title style={{textAlign:'center'}}>Ujian Online</Title>
          <Divider/>
          <List.Item
            title="Ujian Online"
            left={props => <List.Icon {...props} icon="pen" />}
            />
            <Divider/>
          <List.Item
            title="UTS/UAS"
            left={props => <List.Icon {...props} icon="checkbook" />}
            />
          <Divider/>
          <List.Item
            title="Tryout Online"
            left={props => <List.Icon {...props} icon="clipboard-text-outline" />}
            />
            <Divider/>
          <List.Item
            title="Students Online Competition"
            left={props => <List.Icon {...props} icon="trophy-award" />}
            />

        </Dialog.Content>
      </Dialog>

      </Portal>
    </SafeAreaView>
  );
}

