import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, Button, DataTable, Menu, TextInput, useTheme,Text } from 'react-native-paper';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import {MaterialCommunityIcons as Icons} from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const TambahDataSekolah = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    const [jenjang, setJenjang] = React.useState('');
    const [provinsi, setProvinsi] = React.useState('');
    const [kota, setKota] = React.useState('');
    const [kecamatan, setKecamatan] = React.useState('');


  return (
    <View>

    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title="Tambah Data Sekolah" />
    </Appbar.Header>


    <ScrollView style={{alignSelf:'center', alignContent:'center', width: responsiveScreenWidth(90), height:responsiveScreenHeight(80)}}>
    

    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Jenjang</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setJenjang(itemValue)}
    selectedValue={jenjang}>
        <Picker.Item label="SD" value="SD"  />
        <Picker.Item label="SMP" value="Kecamatan"  />
        <Picker.Item label="SMA" value="SMA"  />
        <Picker.Item label="SMK" value="SMK"  />
    </Picker>
    </View>

    <TextInput
    mode='flat'
    label="Nama Sekolah"
    style={{backgroundColor:theme.colors.background}}
    />
    <TextInput
    mode='flat'
    label="NPSN"
    style={{backgroundColor:theme.colors.background}}
    />
      
    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Provinsi</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setProvinsi(itemValue)}
    selectedValue={provinsi}>
        <Picker.Item label="Sumatera Utara" value="Sumatera Utara"  />
        <Picker.Item label="Sumatera Selata" value="Sumatera Selatan"  />
        <Picker.Item label="Sumatera Barat" value="Sumatera Barat"  />
    </Picker>
    </View>

    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Provinsi</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setKota(itemValue)}
    selectedValue={kota}>
        <Picker.Item label="Kota1" value="Kota1"  />
        <Picker.Item label="Kota2" value="Kota2n"  />
        <Picker.Item label="Kota3" value="Kota3"  />
    </Picker>
    </View>

    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Provinsi</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setKecamatan(itemValue)}
    selectedValue={kecamatan}>
        <Picker.Item label="Kecamatan1" value="Kecamatan1"  />
        <Picker.Item label="Kecamatan2" value="Kecamatan2"  />
        <Picker.Item label="Kecamatan3" value="Kecamatan3"  />
    </Picker>
    </View>

    <TextInput
    mode='flat'
    label="Alamat Lengkap"
    style={{backgroundColor:theme.colors.background}}
    />
    <TextInput
    mode='flat'
    label="Nama Kepsek"
    style={{backgroundColor:theme.colors.background}}
    />
    <TextInput
    mode='flat'
    label="No HP"
    style={{backgroundColor:theme.colors.background}}
    />

    <View style={{marginTop: responsiveScreenHeight(2), width: responsiveScreenWidth(55), alignSelf:'flex-end'}}>
        <Button icon="plus" mode="contained" onPress={() => console.log('Pressed')}>
            Tambah Data Sekolah
        </Button>
    </View>

    </ScrollView>

    </View>
  );
};

export default TambahDataSekolah;