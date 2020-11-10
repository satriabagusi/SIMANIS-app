

import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, Button, DataTable, Menu, TextInput, useTheme } from 'react-native-paper';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import {MaterialCommunityIcons as Icons} from '@expo/vector-icons';

const DataSekolah = () => {
    const [menuJenjang, setMenuJenjang] = React.useState(false);
    const [menuProvinsi, setMenuProvinsi] = React.useState(false);
    const [menuKota, setMenuKota] = React.useState(false);
    const [menuKecamatan, setMenuKecamatan] = React.useState(false);
    const [menuSekolah, setMenuSekolah] = React.useState(false);
    const [jenjang, setJenjang] = React.useState('');
    const [provinsi, setProvinsi] = React.useState('');
    const [kota, setKota] = React.useState('');
    const [kecamatan, setKecamatan] = React.useState('');
    const [sekolah, setSekolah] = React.useState('');
    const openJenjang = () => setMenuJenjang(true);
    const closeJenjang = () => setMenuJenjang(false);
    const openSekolah = () => setMenuSekolah(true);
    const closeSekolah = () => setMenuSekolah(false);
    const openProvinsi = () => setMenuProvinsi(true);
    const closeProvinsi = () => setMenuProvinsi(false);
    const openKota = () => setMenuKota(true);
    const closeKota = () => setMenuKota(false);
    const openKecamatan = () => setMenuKecamatan(true);
    const closeKecamatan = () => setMenuKecamatan(false);
     
    const dropDownJenjang = () =>{
      return(
        <Menu style={{paddingTop:responsiveScreenHeight(6.5), alignContent:'flex-end'}}
          visible={menuJenjang}
          onDismiss={closeJenjang}
          anchor={
          <Button labelStyle={{color:'black'}} onPress={openJenjang}>{jenjang} <Icons name='chevron-down' size={18} /></Button>
          }>
          <Menu.Item onPress={() => setJenjang('SD')} title="SD" />
          <Menu.Item onPress={() => setJenjang('SMP')} title="SMP" />
          <Menu.Item onPress={() => setJenjang('SMA')} title="SMA" />
          <Menu.Item onPress={() => setJenjang('SMK')} title="SMK" />
        </Menu>
      );
    }
    const dropDownSekolah = () =>{
      return(
        <Menu style={{paddingTop:responsiveScreenHeight(6.5), alignContent:'flex-end'}}
          visible={menuSekolah}
          onDismiss={closeSekolah}
          anchor={
          <Button labelStyle={{color:'black'}} onPress={openSekolah}>{sekolah} <Icons name='chevron-down' size={18} /></Button>
          }>
          <Menu.Item onPress={() => setSekolah('SEKOLAH NEGERI 1 INDONESIA')} title="SEKOLAH NEGERI 1 INDONESIA" />
          <Menu.Item onPress={() => setSekolah('SEKOLAH NEGERI 2 INDONESIA')} title="SEKOLAH NEGERI 2 INDONESIA" />
          <Menu.Item onPress={() => setSekolah('SEKOLAH NEGERI 3 INDONESIA')} title="SEKOLAH NEGERI 1 INDONESIA" />
          <Menu.Item onPress={() => setSekolah('SEKOLAH NEGERI 4 INDONESIA')} title="SEKOLAH NEGERI 1 INDONESIA" />
        </Menu>
      );
    }
    const dropDownProvinsi = () =>{
      return(
        <Menu style={{paddingTop:responsiveScreenHeight(6.5), alignContent:'flex-end'}}
          visible={menuProvinsi}
          onDismiss={closeProvinsi}
          anchor={
          <Button labelStyle={{color:'black'}} onPress={openProvinsi}>{provinsi} <Icons name='chevron-down' size={18} /></Button>
          }>
          <Menu.Item onPress={() => setProvinsi('Jatim')} title="Jatim" />
          <Menu.Item onPress={() => setProvinsi('Jabar')} title="Jabar" />
          <Menu.Item onPress={() => setProvinsi('Sumsel')} title="Sumsel" />
          <Menu.Item onPress={() => setProvinsi('Kaltim')} title="Kaltim" />
        </Menu>
      );
    }
    const dropDownKota = () =>{
      return(
        <Menu style={{paddingTop:responsiveScreenHeight(6.5), alignContent:'flex-end'}}
          visible={menuKota}
          onDismiss={closeKota}
          anchor={
          <Button labelStyle={{color:'black'}} onPress={openKota}>{kota} <Icons name='chevron-down' size={18} /></Button>
          }>
          <Menu.Item onPress={() => setKota('Kota1')} title="Kota1" />
          <Menu.Item onPress={() => setKota('Kota2')} title="Kota2" />
          <Menu.Item onPress={() => setKota('Kota3')} title="Kota3" />
          <Menu.Item onPress={() => setKota('Kota4')} title="Kota4" />
        </Menu>
      );
    }
    const dropDownKecamatan = () =>{
      return(
        <Menu style={{paddingTop:responsiveScreenHeight(6.5), alignContent:'flex-end'}}
          visible={menuKecamatan}
          onDismiss={closeKecamatan}
          anchor={
          <Button labelStyle={{color:'black'}} onPress={openKecamatan}>{kecamatan} <Icons name='chevron-down' size={18} /></Button>
          }>
          <Menu.Item onPress={() => setKecamatan('Jatim')} title="Jatim" />
          <Menu.Item onPress={() => setKecamatan('Jabar')} title="Jabar" />
          <Menu.Item onPress={() => setKecamatan('Sumsel')} title="Sumsel" />
          <Menu.Item onPress={() => setKecamatan('Kaltim')} title="Kaltim" />
        </Menu>
      );
    }

  return (
    <View> 
        
    <DataTable.Row>
        <DataTable.Cell>Provinsi</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownProvinsi()}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
        <DataTable.Cell>Kota</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownKota()}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
        <DataTable.Cell>Kecamatan</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownKecamatan()}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
        <DataTable.Cell>Jenjang</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownJenjang()}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
        <DataTable.Cell>Sekolah</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownSekolah()}</DataTable.Cell>
    </DataTable.Row>

    </View>
  );
};

export default DataSekolah;