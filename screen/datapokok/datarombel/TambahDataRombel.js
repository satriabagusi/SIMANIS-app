import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, Button, DataTable, Menu, Text, TextInput, useTheme } from 'react-native-paper';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import {MaterialCommunityIcons as Icons} from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const TambahDataRombel = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    const [tahun, setTahun] = React.useState('');
    const [tingkat, setTingkat] = React.useState('');
    const [prasarana, setPrasarana] = React.useState('');


  return (
    <View>

    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title="Tambah Data Rombel" />
    </Appbar.Header>


    <ScrollView style={{alignSelf:'center', alignContent:'center', width: responsiveScreenWidth(90), height:responsiveScreenHeight(90)}}>
    
    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Tahun Ajaran</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setTahun(itemValue)}
    selectedValue={tahun}>
        <Picker.Item label="2020/2021" value="2020/2021"  />
        <Picker.Item label="2021/2022" value="2021/2022n"  />
    </Picker>
    </View>
    
    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Tingkat Kelas</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setTingkat(itemValue)}
    selectedValue={tingkat}>
        <Picker.Item label="7" value="7"  />
        <Picker.Item label="8" value="8"  />
        <Picker.Item label="9" value="9"  />
        <Picker.Item label="10" value="10"  />
        <Picker.Item label="11" value="11"  />
        <Picker.Item label="12" value="12"  />
    </Picker>
    </View>

    <TextInput
    mode='flat'
    label="Nama Kelas"
    style={{backgroundColor:theme.colors.background}}
    />

    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Prasarana</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setPrasarana(itemValue)}
    selectedValue={prasarana}>
        <Picker.Item label="Ruang Kelas Teori" value="Ruang Kelas Teori"  />
        <Picker.Item label="Ruang Kelas Praktikum" value="Ruang Kelas Praktikum"  />
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

export default TambahDataRombel;