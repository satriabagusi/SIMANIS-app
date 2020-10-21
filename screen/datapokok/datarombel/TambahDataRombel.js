import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, Button, DataTable, Menu, TextInput, useTheme } from 'react-native-paper';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import {MaterialCommunityIcons as Icons} from '@expo/vector-icons';

const TambahDataRombel = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    const [menuTahun, setMenuTahun] = React.useState(false);
    const [menuTingkat, setMenuTingkat] = React.useState(false);
    const [menuPrasarana, setMenuPrasarana] = React.useState(false);
    const [tahun, setTahun] = React.useState('');
    const [tingkat, setTingkat] = React.useState('');
    const [prasarana, setPrasarana] = React.useState('');
    const openMenuTahun = () => setMenuTahun(true);
    const closeMenuTahun = () => setMenuTahun(false);
    const openMenuTingkat = () => setMenuTingkat(true);
    const closeMenuTingkat = () => setMenuTingkat(false);
    const openMenuPrasarana = () => setMenuPrasarana(true);
    const closeMenuPrasarana = () => setMenuPrasarana(false);

    const dropDownTahun = () =>{
    return(
        <Menu style={{paddingTop:responsiveScreenHeight(6.5), alignContent:'flex-end'}}
        visible={menuTahun}
        onDismiss={closeMenuTahun}
        anchor={
        <Button labelStyle={{color:'black'}} onPress={openMenuTahun}>{tahun} <Icons name='chevron-down' size={18} /></Button>
        }>
        <Menu.Item onPress={() => setTahun('Ruang Kelas')} title="Ruang Kelas" />
        <Menu.Item onPress={() => setTahun('Laboratorium IPA')} title="Laboratorium IPA" />
        <Menu.Item onPress={() => setTahun('Laboratorium Kimia')} title="Laboratorium Kimia" />
        <Menu.Item onPress={() => setTahun('Laboratorium Fisika')} title="Laboratorium Fisika" />
        <Menu.Item onPress={() => setTahun('Laboratorium Biologi')} title="Laboratorium Biologi" />
        </Menu>
    );
    }
    const dropDownTingkat = () =>{
    return(
        <Menu style={{paddingTop:responsiveScreenHeight(6.5), alignContent:'flex-end'}}
        visible={menuTingkat}
        onDismiss={closeMenuTingkat}
        anchor={
        <Button labelStyle={{color:'black'}} onPress={openMenuTingkat}>{tingkat} <Icons name='chevron-down' size={18} /></Button>
        }>
        <Menu.Item onPress={() => setTingkat('Ruang Kelas')} title="Ruang Kelas" />
        <Menu.Item onPress={() => setTingkat('Laboratorium IPA')} title="Laboratorium IPA" />
        <Menu.Item onPress={() => setTingkat('Laboratorium Kimia')} title="Laboratorium Kimia" />
        <Menu.Item onPress={() => setTingkat('Laboratorium Fisika')} title="Laboratorium Fisika" />
        <Menu.Item onPress={() => setTingkat('Laboratorium Biologi')} title="Laboratorium Biologi" />
        </Menu>
    );
    }
    const dropDownPrasarana = () =>{
    return(
        <Menu style={{paddingTop:responsiveScreenHeight(6.5), alignContent:'flex-end'}}
        visible={menuPrasarana}
        onDismiss={closeMenuPrasarana}
        anchor={
        <Button labelStyle={{color:'black'}} onPress={openMenuPrasarana}>{prasarana} <Icons name='chevron-down' size={18} /></Button>
        }>
        <Menu.Item onPress={() => setPrasarana('Ruang Kelas')} title="Ruang Kelas" />
        <Menu.Item onPress={() => setPrasarana('Laboratorium IPA')} title="Laboratorium IPA" />
        <Menu.Item onPress={() => setPrasarana('Laboratorium Kimia')} title="Laboratorium Kimia" />
        <Menu.Item onPress={() => setPrasarana('Laboratorium Fisika')} title="Laboratorium Fisika" />
        <Menu.Item onPress={() => setPrasarana('Laboratorium Biologi')} title="Laboratorium Biologi" />
        </Menu>
    );
    }

  return (
    <View>

    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title="Tambah Data Prasarana" />
    </Appbar.Header>


    <ScrollView style={{alignSelf:'center', alignContent:'center', width: responsiveScreenWidth(90), height:responsiveScreenHeight(90)}}>
    
    <DataTable.Row>
        <DataTable.Cell>Tahun Ajaran</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownTahun()}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
        <DataTable.Cell>Tingkat Kelas</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownTingkat()}</DataTable.Cell>
    </DataTable.Row>

    <TextInput
    mode='flat'
    label="Nama Kelas"
    style={{backgroundColor:theme.colors.background}}
    />

    <DataTable.Row>
        <DataTable.Cell>Prasarana</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownPrasarana()}</DataTable.Cell>
    </DataTable.Row>
    
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