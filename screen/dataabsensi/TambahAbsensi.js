import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, ScrollView, Platform } from 'react-native';
import { Appbar, Button, DataTable, Divider, Menu, Switch, Text, TextInput, useTheme } from 'react-native-paper';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import {MaterialCommunityIcons as Icons} from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from '@expo/vector-icons/Ionicons';
import moment from 'moment';


const TambahAbsensi = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    const [tahunAjaran, setTahunAjaran] = React.useState('');
    const [semester, setSemester] = React.useState('');
    const [provinsi, setProvinsi] = React.useState('');
    const [kota, setKota] = React.useState('');
    const [kecamatan, setKecamatan] = React.useState('');
    const [jenjang, setJenjang] = React.useState('');
    const [sekolah, setSekolah] = React.useState('');
    const [guru, setGuru] = React.useState('');
    const [kelas, setKelas] = React.useState('');
    const [pelajaran, setPelajaran] = React.useState('');

    const [isPublish, setIsPublish] = React.useState(false);
    const onToggleSwitch = () => setIsPublish(!isPublish);

    const [date, setDate] = React.useState(new Date());
    const [mode, setMode] = React.useState('date');
    const [show, setShow] = React.useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };


  return (
    <View>

    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title="Tambah Data Sekolah" />
    </Appbar.Header>


    <ScrollView style={{alignSelf:'center', alignContent:'center', width: responsiveScreenWidth(90), height:responsiveScreenHeight(80)}}>

    <View style={{marginVertical:20}}>
        <Divider style={{marginBottom:5}}/>
        <Text style={{fontFamily:'Poppins_600SemiBold', top:3}}>Data Sekolah & Guru</Text>
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

    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Kecamatan</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setKecamatan(itemValue)}
    selectedValue={kecamatan}>
        <Picker.Item label="Kecamatan1" value="Kecamatan1"  />
        <Picker.Item label="Kecamatan2" value="Kecamatan2"  />
        <Picker.Item label="Kecamatan3" value="Kecamatan3"  />
        <Picker.Item label="Kecamatan4" value="Kecamatan4"  />
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

    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Sekolah</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setSekolah(itemValue)}
    selectedValue={sekolah}>
        <Picker.Item label="Sekolah1" value="Sekolah1"  />
        <Picker.Item label="Sekolah2" value="Sekolah2"  />
        <Picker.Item label="Sekolah3" value="Sekolah3"  />
        <Picker.Item label="Sekolah4" value="Sekolah4"  />
    </Picker>

    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Guru</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setGuru(itemValue)}
    selectedValue={guru}>
        <Picker.Item label="Guru1" value="Guru1"  />
        <Picker.Item label="Guru2" value="Guru2"  />
        <Picker.Item label="Guru3" value="Guru3"  />
        <Picker.Item label="Guru4" value="Guru4"  />
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


    <View style={{marginVertical:20}}>
        <Divider style={{marginBottom:5}}/>
        <Text style={{fontFamily:'Poppins_600SemiBold', top:3}}>Th Ajaran, Semester, Pelajaran, Kelas</Text>
    </View>
        

    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Tanggal</Text>
    <DataTable.Row>
        <DataTable.Cell>
            <Text style={{fontFamily:'Poppins_600SemiBold', left:5, top:10,bottom:10, color:'black'}}>{moment(date).format('DD/MM/YYYY')}</Text>
        </DataTable.Cell>
        <DataTable.Cell numeric>
            <Button mode="contained" onPress={() => setShow('true')}>
                <Icon name="ios-calendar" size={18}/>
            </Button>
        </DataTable.Cell>
    </DataTable.Row>

    {show && (<DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="calendar"
            onChange={onChange}
            style={{flex:1}}
        />)}
    
        
    </View>

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
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Kelas</Text>
    <Picker mode="dialog" 
            onValueChange={(itemValue) => setKelas(itemValue)}
            selectedValue={kelas}>
                <Picker.Item label="VII" value="VII"  />
                <Picker.Item label="VII" value="VII"  />
                <Picker.Item label="IX" value="IX"  />
                <Picker.Item label="X" value="X"  />
                <Picker.Item label="XI" value="XI"  />
                <Picker.Item label="XII" value="XII"  />
            </Picker>
    </View>
    <View>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Pelajaran</Text>
    <Picker mode="dialog" 
            onValueChange={(itemValue) => setPelajaran(itemValue)}
            selectedValue={pelajaran}>
                <Picker.Item label="Matematika" value="Matematika"  />
                <Picker.Item label="Biologi" value="Biologi"  />
                <Picker.Item label="Fisika" value="Fisika"  />
                <Picker.Item label="Bahasa Inggris" value="Bahasa Inggris"  />
                <Picker.Item label="Bahasa Indonesia" value="Bahasa Indonesia"  />
                <Picker.Item label="Ekonomi" value="Ekonomi"  />
            </Picker>
    </View>
    

    <View style={{marginTop: responsiveScreenHeight(2), width: responsiveScreenWidth(55), alignSelf:'flex-end'}}>
        <Button icon="plus" mode="contained" onPress={() => console.log('Pressed')}>
            Tambah Data Sekolah
        </Button>
    </View>

    </ScrollView>

    </View>
  );
};

export default TambahAbsensi;