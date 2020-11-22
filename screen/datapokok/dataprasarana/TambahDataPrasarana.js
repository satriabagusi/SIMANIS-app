import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, Button, DataTable, Menu, Text, TextInput, useTheme } from 'react-native-paper';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import {MaterialCommunityIcons as Icons} from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const TambahDataPrasarana = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    const [prasarana, setPrasarana] = React.useState('');
    const [atap, setAtap] = React.useState('');
    const [pondasi, setPondasi] = React.useState('');
    const [dinding, setDinding] = React.useState('');
    const [kusen, setKusen] = React.useState('');
    const [lantai, setLantai] = React.useState('');
    const [kepemilikan, setKepemilikan] = React.useState('');

    
  return (
    <View>

    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title="Tambah Data Prasarana" />
    </Appbar.Header>


    <ScrollView style={{alignSelf:'center', alignContent:'center', width: responsiveScreenWidth(90), height:responsiveScreenHeight(80)}}>
    
    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Jenis Prasarana</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setPrasarana(itemValue)}
    selectedValue={prasarana}>
        <Picker.Item label="Ruang Kelas" value="Ruang Kelas"  />
        <Picker.Item label="Laboratorium IPA" value="Laboratorium IPA"  />
        <Picker.Item label="Laboratorium Kimia" value="Laboratorium Kimia"  />
        <Picker.Item label="Laboratorium Fisika" value="Laboratorium Fisika"  />
        <Picker.Item label="Laboratorium Biologi" value="Laboratorium Biologi"  />
    </Picker>
    </View>

    <TextInput
    mode='flat'
    label="Nama Prasarana"
    style={{backgroundColor:theme.colors.background}}
    />
    <TextInput
    mode='flat'
    label="Panjang (m)"
    keyboardType="numeric"
    style={{backgroundColor:theme.colors.background}}
    />
    <TextInput
    mode='flat'
    label="Lebar (m)"
    keyboardType="numeric"
    style={{backgroundColor:theme.colors.background}}
    />

    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Kondisi Atap</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setAtap(itemValue)}
    selectedValue={atap}>
        <Picker.Item label="Baik" value="Baik"  />
        <Picker.Item label="Rusak Ringan" value="Rusak Ringan"  />
        <Picker.Item label="Rusak Berat" value="Rusak Berat"  />
    </Picker>
    </View>

    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Kondisi Dinding</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setDinding(itemValue)}
    selectedValue={dinding}>
        <Picker.Item label="Baik" value="Baik"  />
        <Picker.Item label="Rusak Ringan" value="Rusak Ringan"  />
        <Picker.Item label="Rusak Berat" value="Rusak Berat"  />
    </Picker>
    </View>

    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Kondisi Kusen</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setKusen(itemValue)}
    selectedValue={kusen}>
        <Picker.Item label="Baik" value="Baik"  />
        <Picker.Item label="Rusak Ringan" value="Rusak Ringan"  />
        <Picker.Item label="Rusak Berat" value="Rusak Berat"  />
    </Picker>
    </View>

    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Kondisi Pondasi</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setPondasi(itemValue)}
    selectedValue={pondasi}>
        <Picker.Item label="Baik" value="Baik"  />
        <Picker.Item label="Rusak Ringan" value="Rusak Ringan"  />
        <Picker.Item label="Rusak Berat" value="Rusak Berat"  />
    </Picker>
    </View>

    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Kondisi Lantai</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setLantai(itemValue)}
    selectedValue={lantai}>
        <Picker.Item label="Baik" value="Baik"  />
        <Picker.Item label="Rusak Ringan" value="Rusak Ringan"  />
        <Picker.Item label="Rusak Berat" value="Rusak Berat"  />
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

    

    <View style={{marginTop: responsiveScreenHeight(2), width: responsiveScreenWidth(55), alignSelf:'flex-end'}}>
        <Button icon="plus" mode="contained" onPress={() => console.log('Pressed')}>
            Simpan Data
        </Button>
    </View>

    </ScrollView>

    </View>
  );
};

export default TambahDataPrasarana;