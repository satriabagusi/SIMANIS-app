import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, Button, DataTable, Menu, TextInput, useTheme } from 'react-native-paper';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import {MaterialCommunityIcons as Icons} from '@expo/vector-icons';

const DataSekolah = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    const [menuPrasarana, setMenuPrasarana] = React.useState(false);
    const [menuSarana, setMenuSarana] = React.useState(false);
    const [menuKondisi, setMenuKondisi] = React.useState(false);
    const [menuKelaikan, setMenuKelaikan] = React.useState(false);
    const [menuKepemilikan, setMenuKepemilikan] = React.useState(false);
    const [prasarana, setPrasarana] = React.useState('');
    const [sarana, setSarana] = React.useState('');
    const [kondisi, setKondisi] = React.useState('');
    const [kelaikan, setKelaikan] = React.useState('');
    const [kepemilikan, setKepemilikan] = React.useState('');
    const openMenuPrasarana = () => setMenuPrasarana(true);
    const closeMenuPrasarana = () => setMenuPrasarana(false);
    const openMenuSarana = () => setMenuSarana(true);
    const closeMenuSarana = () => setMenuSarana(false);
    const openMenuKondisi = () => setMenuKondisi(true);
    const closeMenuKondisi = () => setMenuKondisi(false);
    const openMenuKelaikan = () => setMenuKelaikan(true);
    const closeMenuKelaikan = () => setMenuKelaikan(false);
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
    const dropDownSarana = () =>{
    return(
        <Menu style={{paddingTop:responsiveScreenHeight(6.5), alignContent:'flex-end'}}
        visible={menuSarana}
        onDismiss={closeMenuSarana}
        anchor={
        <Button labelStyle={{color:'black'}} onPress={openMenuSarana}>{sarana} <Icons name='chevron-down' size={18} /></Button>
        }>
        <Menu.Item onPress={() => setSarana('Meja Siswa')} title="Meja Siswa" />
        <Menu.Item onPress={() => setSarana('Kursi Siswa')} title="Kursi Siswa" />
        <Menu.Item onPress={() => setSarana('Meja Guru')} title="Meja Guru" />
        <Menu.Item onPress={() => setSarana('Kursi Guru')} title="Kursi Guru" />
        </Menu>
    );
    }
    const dropDownKondisi = () =>{
        return(
            <Menu style={{paddingTop:responsiveScreenHeight(6.5), alignContent:'flex-end'}}
            visible={menuKondisi}
            onDismiss={closeMenuKondisi}
            anchor={
                <Button labelStyle={{color:'black'}} onPress={openMenuKondisi}>{kondisi} <Icons name='chevron-down' size={18} /></Button>
            }>
        <Menu.Item onPress={() => setKondisi('Baik')} title="Baik" />
        <Menu.Item onPress={() => setKondisi('Rusak Ringan')} title="Rusak Ringan" />
        <Menu.Item onPress={() => setKondisi('Rusak Berat')} title="Rusak Berat" />
        </Menu>
    );
    }
    const dropDownKelaikan = () =>{
    return(
        <Menu style={{paddingTop:responsiveScreenHeight(6.5), alignContent:'flex-end'}}
        visible={menuKelaikan}
        onDismiss={closeMenuKelaikan}
        anchor={
        <Button labelStyle={{color:'black'}} onPress={openMenuKelaikan}>{kelaikan} <Icons name='chevron-down' size={18} /></Button>
        }>
        <Menu.Item onPress={() => setKelaikan('Laik')} title="Laik" />
        <Menu.Item onPress={() => setKelaikan('Tidak Laik')} title="Tidak Laik" />
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
    <DataTable.Row>
        <DataTable.Cell>Jenis Prasarana</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownSarana()}</DataTable.Cell>
    </DataTable.Row>

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

    <DataTable.Row>
        <DataTable.Cell>Kondisi</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownKondisi()}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
        <DataTable.Cell>Kelaikan</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownKelaikan()}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
        <DataTable.Cell>Kepemilikan</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownKepemilikan()}</DataTable.Cell>
    </DataTable.Row>
    

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