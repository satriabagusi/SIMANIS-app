import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, Button, DataTable, Menu, Text, TextInput, useTheme } from 'react-native-paper';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import {MaterialCommunityIcons as Icons} from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const DataSekolah = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    const [sarana, setSarana] = React.useState('');
    const [jenisSarana, setJenisSarana] = React.useState('');
    const [kondisi, setKondisi] = React.useState('');
    const [kelaikan, setKelaikan] = React.useState('');
    const [kepemilikan, setKepemilikan] = React.useState('');


  return (
    <View>

    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title="Tambah Data Prasarana" />
    </Appbar.Header>


    <ScrollView style={{alignSelf:'center', alignContent:'center', width: responsiveScreenWidth(90), height:responsiveScreenHeight(90)}}>
    
    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Jenis Prasarana</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setSarana(itemValue)}
    selectedValue={sarana}>
        <Picker.Item label="Ruang Kelas" value="Ruang Kelas"  />
        <Picker.Item label="Laboratorium IPA" value="Laboratorium IPA"  />
        <Picker.Item label="Laboratorium Kimia" value="Laboratorium Kimia"  />
        <Picker.Item label="Laboratorium Fisika" value="Laboratorium Fisika"  />
        <Picker.Item label="Laboratorium Biologi" value="Laboratorium Biologi"  />
    </Picker>
    </View>

    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Jenis Prasarana</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setJenisSarana(itemValue)}
    selectedValue={jenisSarana}>
        <Picker.Item label="Meja Siswa" value="Meja Siswa"  />
        <Picker.Item label="Kursi Siswa" value="Kursi Siswa"  />
        <Picker.Item label="Meja Guru" value="Meja Guru"  />
        <Picker.Item label="Kursi Guru" value="Kursi Guru"  />
    </Picker>
    </View>

    <TextInput
    mode='flat'
    label="Nama Sarana"
    style={{backgroundColor:theme.colors.background}}
    />
    <TextInput
    mode='flat'
    label="Jumlah"
    keyboardType="numeric"
    style={{backgroundColor:theme.colors.background}}
    />

    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Kondisi</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setKondisi(itemValue)}
    selectedValue={kondisi}>
        <Picker.Item label="Baik" value="Baik"  />
        <Picker.Item label="Rusak Ringan" value="Rusak Ringan"  />
        <Picker.Item label="Rusak Berat" value="Rusak Berat"  />
    </Picker>
    </View>

    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Kondisi Dinding</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setKelaikan(itemValue)}
    selectedValue={kelaikan}>
        <Picker.Item label="Laik" value="Laik"  />
        <Picker.Item label="Tidak Laik" value="Tidak Laik"  />
    </Picker>
    </View>

    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Kepemilikan</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setKepemilikan(itemValue)}
    selectedValue={kepemilikan}>
        <Picker.Item label="Milik" value="Milik"  />
        <Picker.Item label="Bukan Milik" value="Bukan Milik"  />
    </Picker>
    </View>
    

    <View style={{marginTop: responsiveScreenHeight(2), width: responsiveScreenWidth(45), alignSelf:'flex-end'}}>
        <Button icon="plus" mode="contained" onPress={() => console.log('Pressed')}>
            Simpan Data
        </Button>
    </View>

    </ScrollView>

    </View>
  );
};

export default DataSekolah;