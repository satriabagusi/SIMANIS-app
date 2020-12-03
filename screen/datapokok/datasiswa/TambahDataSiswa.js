import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Appbar, Button, Card, DataTable, Divider, Menu, Text, TextInput, useTheme } from 'react-native-paper';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import {MaterialCommunityIcons as Icons} from '@expo/vector-icons';

<<<<<<< HEAD
=======
// import DataSekolah from './component/DataSekolah';
// import DataKelas from './component/DataKelas';
// import DataDiri from './component/DataDiri';
// import DetailUser from './component/DetailUser';
>>>>>>> 7dde32be9a8ab1b10390e96a9f06ee61da2276b4
import { Picker } from '@react-native-picker/picker';

const TambahDataRombel = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const [jenjang, setJenjang] = React.useState('');
    const [provinsi, setProvinsi] = React.useState('');
    const [kota, setKota] = React.useState('');
    const [kecamatan, setKecamatan] = React.useState('');
    const [sekolah, setSekolah] = React.useState('');
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    const [tahun, setTahun] = React.useState('');
    const [tingkat, setTingkat] = React.useState('');
    const [kelas, setKelas] = React.useState('');
    
    const [kelamin, setKelamin] = React.useState('');

  return (
    <View style={{height: responsiveScreenHeight(90)}}>

    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title="Tambah Data Siswa" />
    </Appbar.Header>


    <ScrollView style={{alignSelf:'center', alignContent:'center', height:responsiveScreenHeight(95), width:responsiveScreenWidth(90)}}>



        <Card>
            <Card.Title title="Data Sekolah"/>
            <Card.Content>
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

                <View>
                <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Sekolah</Text>
                <Picker mode="dialog" 
                onValueChange={(itemValue) => setSekolah(itemValue)}
                selectedValue={sekolah}>
                    <Picker.Item label="SEKOLAH1" value="SEKOLAH1"  />
                    <Picker.Item label="SEKOLAH2" value="SEKOLAH2"  />
                    <Picker.Item label="SEKOLAH3" value="SEKOLAH3"  />
                    <Picker.Item label="SEKOLAH4" value="SEKOLAH4"  />
                </Picker>
                </View>
            </Card.Content>
        </Card>
        <Card>
            <Card.Title title="Data Kelas"/>
            <Card.Content>
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

                <View>
                <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Tingkat Kelas</Text>
                <Picker mode="dialog" 
                onValueChange={(itemValue) => setKelas(itemValue)}
                selectedValue={kelas}>
                    <Picker.Item label="7" value="7"  />
                    <Picker.Item label="8" value="8"  />
                    <Picker.Item label="9" value="9"  />
                    <Picker.Item label="10" value="10"  />
                    <Picker.Item label="11" value="11"  />
                    <Picker.Item label="12" value="12"  />
                </Picker>
                </View>
            </Card.Content>
        </Card>
        <Card>
            <Card.Title title="Data Diri"/>
            <Card.Content>
            <TextInput
            mode='flat'
            label="Nama Lengkap"
            style={{backgroundColor:theme.colors.background}}
            />
            <TextInput
            mode='flat'
            label="Nomor Handphone"
            style={{backgroundColor:theme.colors.background}}
            keyboardType="name-phone-pad"
            />
            <View>
                <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Jenis Kelamin</Text>
                <Picker mode="dialog" 
                onValueChange={(itemValue) => setKelamin(itemValue)}
                selectedValue={kelamin}>
                    <Picker.Item label="Laki-laki" value="Laki-laki"  />
                    <Picker.Item label="Perempuan" value="Perempuan"  />
                </Picker>
                </View>
            </Card.Content>
        </Card>
        <Card>
            <Card.Title title="Username & Password"/>
            <Card.Content>
                <TextInput
                mode='flat'
                label="Email"
                style={{backgroundColor:theme.colors.background}}
                keyboardType="email-address"
                returnKeyType="next"
                />
                <TextInput
                mode='flat'
                label="Password"
                style={{backgroundColor:theme.colors.background}}
                secureTextEntry={true}
                returnKeyType="next"
                />
                <TextInput
                mode='flat'
                label="Konfirmasi Password"
                style={{backgroundColor:theme.colors.background}}
                secureTextEntry={true}
                returnKeyType="done"
                />
            </Card.Content>
        </Card>

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