import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, Button, DataTable, Divider, Menu, Switch, Text, TextInput, useTheme } from 'react-native-paper';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import {MaterialCommunityIcons as Icons} from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';


const TambahSoc = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    const [ruangLingkupUtsUas, setRuangLingkupUtsUas] = React.useState('');
    const [tahunAjaran, setTahunAjaran] = React.useState('');
    const [semester, setSemester] = React.useState('');
    const [provinsi, setProvinsi] = React.useState('');
    const [kota, setKota] = React.useState('');
    const [jenjang, setJenjang] = React.useState('');
    const [kelas, setKelas] = React.useState('');

    const [isPublish, setIsPublish] = React.useState(false);
    const onToggleSwitch = () => setIsPublish(!isPublish);


  return (
    <View>

    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title="Tambah Data Sekolah" />
    </Appbar.Header>


    <ScrollView style={{alignSelf:'center', alignContent:'center', width: responsiveScreenWidth(90), height:responsiveScreenHeight(80)}}>

    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Tahun Ajaran</Text>
    <Picker mode="dialog" 
            onValueChange={(itemValue) => setTahunAjaran(itemValue)}
            selectedValue={tahunAjaran}>
                <Picker.Item label="2019-2020" value="2019-2020"  />
                <Picker.Item label="2020-2021" value="2020-2021"  />
            </Picker>
    </View>

    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Semester</Text>
    <Picker mode="dialog" 
            onValueChange={(itemValue) => setSemester(itemValue)}
            selectedValue={semester}>
                <Picker.Item label="II - GENAP" value="II - GENAP"  />
                {/* <Picker.Item label="Latihan Soal Online" value="Latihan Soal Online"  /> */}
            </Picker>
    </View>


    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Provinsi</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setProvinsi(itemValue)}
    selectedValue={provinsi}>
        <Picker.Item label="Sumatera Selatan" value="Sumatera Selatan"  />
    </Picker>
    
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Kota/Kab</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setKota(itemValue)}
    selectedValue={kota}>
        <Picker.Item label="Kota1" value="Kota1"  />
        <Picker.Item label="Kota2" value="Kota2"  />
        <Picker.Item label="Kota3" value="Kota3"  />
        <Picker.Item label="Kota4" value="Kota4"  />
    </Picker>

    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Jenjang</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setJenjang(itemValue)}
    selectedValue={jenjang}>
        <Picker.Item label="SD" value="SD"  />
        <Picker.Item label="SMP" value="SMP"  />
        <Picker.Item label="SMA" value="SMA"  />
        <Picker.Item label="SMK" value="SMK"  />
    </Picker>

    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Kelas</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setKelas(itemValue)}
    selectedValue={kelas}>
        <Picker.Item label="VII" value="VII"  />
        <Picker.Item label="VIII" value="VIII"  />
        <Picker.Item label="IX" value="IX"  />
        <Picker.Item label="X" value="X"  />
        <Picker.Item label="XI" value="XI"  />
        <Picker.Item label="XII" value="XII"  />
    </Picker>

    </View>

    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Ruang Lingkup</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setRuangLingkupUtsUas(itemValue)}
    selectedValue={ruangLingkupUtsUas}>
        <Picker.Item label="Sekolah" value="Sekolah"  />
        <Picker.Item label="Kecamatan" value="Kecamatan"  />
        <Picker.Item label="Kabupaten" value="Kabupaten"  />
    </Picker>
    </View>


    <TextInput
    mode='flat'
    label="Nama Kegiatan Ujian"
    style={{backgroundColor:theme.colors.background}}
    />
    <TextInput
    mode='flat'
    label="Jumlah Paket Soal"
    style={{backgroundColor:theme.colors.background}}
    />

    <DataTable.Row>
        <DataTable.Cell>Publish</DataTable.Cell>
        <DataTable.Cell numeric>
            <Switch value={isPublish} onValueChange={onToggleSwitch} color={theme.colors.primary}/>
        </DataTable.Cell>
     </DataTable.Row>
    

    <View style={{marginTop: responsiveScreenHeight(2), width: responsiveScreenWidth(55), alignSelf:'flex-end'}}>
        <Button icon="plus" mode="contained" onPress={() => console.log('Pressed')}>
            Tambah Data Sekolah
        </Button>
    </View>

    </ScrollView>

    </View>
  );
};

export default TambahSoc;