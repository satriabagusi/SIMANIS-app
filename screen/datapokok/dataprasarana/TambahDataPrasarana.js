import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, Button, DataTable, Menu, TextInput, useTheme } from 'react-native-paper';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import {MaterialCommunityIcons as Icons} from '@expo/vector-icons';

const TambahDataPrasarana = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    const [menuPrasarana, setMenuPrasarana] = React.useState(false);
    const [menuAtap, setMenuAtap] = React.useState(false);
    const [menuDinding, setMenuDinding] = React.useState(false);
    const [menuKusen, setMenuKusen] = React.useState(false);
    const [menuPondasi, setMenuPondasi] = React.useState(false);
    const [menuLantai, setMenuLantai] = React.useState(false);
    const [menuKepemilikan, setMenuKepemilikan] = React.useState(false);
    const [prasarana, setPrasarana] = React.useState('');
    const [atap, setAtap] = React.useState('');
    const [pondasi, setPondasi] = React.useState('');
    const [dinding, setDinding] = React.useState('');
    const [kusen, setKusen] = React.useState('');
    const [lantai, setLantai] = React.useState('');
    const [kepemilikan, setKepemilikan] = React.useState('');
    const openMenuPrasarana = () => setMenuPrasarana(true);
    const closeMenuPrasarana = () => setMenuPrasarana(false);
    const openMenuAtap = () => setMenuAtap(true);
    const closeMenuAtap = () => setMenuAtap(false);
    const openMenuDinding = () => setMenuDinding(true);
    const closeMenuDinding = () => setMenuDinding(false);
    const openMenuKusen = () => setMenuKusen(true);
    const closeMenuKusen = () => setMenuKusen(false);
    const openMenuPondasi = () => setMenuPondasi(true);
    const closeMenuPondasi = () => setMenuPondasi(false);
    const openMenuLantai = () => setMenuLantai(true);
    const closeMenuLantai = () => setMenuLantai(false);
    const openMenuKepemilikan = () => setMenuKepemilikan(true);
    const closeMenuKepemilikan = () => setMenuKepemilikan(false);

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
    const dropDownAtap = () =>{
    return(
        <Menu style={{paddingTop:responsiveScreenHeight(6.5), alignContent:'flex-end'}}
        visible={menuAtap}
        onDismiss={closeMenuAtap}
        anchor={
        <Button labelStyle={{color:'black'}} onPress={openMenuAtap}>{atap} <Icons name='chevron-down' size={18} /></Button>
        }>
        <Menu.Item onPress={() => setAtap('Baik')} title="Baik" />
        <Menu.Item onPress={() => setAtap('Rusak Ringan')} title="Rusak Ringan" />
        <Menu.Item onPress={() => setAtap('Rusak Berat')} title="Rusak Berat" />
        </Menu>
    );
    }
    const dropDownDinding = () =>{
    return(
        <Menu style={{paddingTop:responsiveScreenHeight(6.5), alignContent:'flex-end'}}
        visible={menuDinding}
        onDismiss={closeMenuDinding}
        anchor={
        <Button labelStyle={{color:'black'}} onPress={openMenuDinding}>{dinding} <Icons name='chevron-down' size={18} /></Button>
        }>
        <Menu.Item onPress={() => setDinding('Baik')} title="Baik" />
        <Menu.Item onPress={() => setDinding('Rusak Ringan')} title="Rusak Ringan" />
        <Menu.Item onPress={() => setDinding('Rusak Berat')} title="Rusak Berat" />
        </Menu>
    );
    }
    const dropDownKusen = () =>{
    return(
        <Menu style={{paddingTop:responsiveScreenHeight(6.5), alignContent:'flex-end'}}
        visible={menuKusen}
        onDismiss={closeMenuKusen}
        anchor={
        <Button labelStyle={{color:'black'}} onPress={openMenuKusen}>{kusen} <Icons name='chevron-down' size={18} /></Button>
        }>
        <Menu.Item onPress={() => setKusen('Baik')} title="Baik" />
        <Menu.Item onPress={() => setKusen('Rusak Ringan')} title="Rusak Ringan" />
        <Menu.Item onPress={() => setKusen('Rusak Berat')} title="Rusak Berat" />
        </Menu>
    );
    }
    const dropDownPondasi = () =>{
    return(
        <Menu style={{paddingTop:responsiveScreenHeight(6.5), alignContent:'flex-end'}}
        visible={menuPondasi}
        onDismiss={closeMenuPondasi}
        anchor={
        <Button labelStyle={{color:'black'}} onPress={openMenuPondasi}>{pondasi} <Icons name='chevron-down' size={18} /></Button>
        }>
        <Menu.Item onPress={() => setPondasi('Baik')} title="Baik" />
        <Menu.Item onPress={() => setPondasi('Rusak Ringan')} title="Rusak Ringan" />
        <Menu.Item onPress={() => setPondasi('Rusak Berat')} title="Rusak Berat" />
        </Menu>
    );
    }
    const dropDownLantai = () =>{
    return(
        <Menu style={{paddingTop:responsiveScreenHeight(6.5), alignContent:'flex-end'}}
        visible={menuLantai}
        onDismiss={closeMenuLantai}
        anchor={
        <Button labelStyle={{color:'black'}} onPress={openMenuLantai}>{lantai} <Icons name='chevron-down' size={18} /></Button>
        }>
        <Menu.Item onPress={() => setLantai('Baik')} title="Baik" />
        <Menu.Item onPress={() => setLantai('Rusak Ringan')} title="Rusak Ringan" />
        <Menu.Item onPress={() => setLantai('Rusak Berat')} title="Rusak Berat" />
        </Menu>
    );
    }
    const dropDownKepemilikan = () =>{
        return(
            <Menu style={{paddingTop:responsiveScreenHeight(6.5), alignContent:'flex-end'}}
            visible={menuKepemilikan}
            onDismiss={closeMenuKepemilikan}
            anchor={
            <Button labelStyle={{color:'black'}} onPress={openMenuKepemilikan}>{kepemilikan} <Icons name='chevron-down' size={18} /></Button>
            }>
            <Menu.Item onPress={() => setKepemilikan('Milik')} title="Milik" />
            <Menu.Item onPress={() => setKepemilikan('Bukan Milik')} title="Bukan Milik" />
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
        <DataTable.Cell>Jenis Prasarana</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownPrasarana()}</DataTable.Cell>
    </DataTable.Row>

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

    <DataTable.Row>
        <DataTable.Cell>Kondisi Atap</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownAtap()}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
        <DataTable.Cell>Kondisi Dinding</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownDinding()}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
        <DataTable.Cell>Kondisi Kusen</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownKusen()}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
        <DataTable.Cell>Kondisi Pondasi</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownPondasi()}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
        <DataTable.Cell>Kondisi Lantai</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownLantai()}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
        <DataTable.Cell>Kepemilikan</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownKepemilikan()}</DataTable.Cell>
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

export default TambahDataPrasarana;