
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, Button, DataTable, Menu, TextInput, useTheme } from 'react-native-paper';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import {MaterialCommunityIcons as Icons} from '@expo/vector-icons';

const DataKelas = () => {
    const [menuTahun, setMenuTahun] = React.useState(false);
    const [menuTingkat, setMenuTingkat] = React.useState(false);
    const [menuKelas, setMenuKelas] = React.useState(false);
    const [tahun, setTahun] = React.useState('');
    const [tingkat, setTingkat] = React.useState('');
    const [kelas, setKelas] = React.useState('');
    const openTahun = () => setMenuTahun(true);
    const closeTahun = () => setMenuTahun(false);
    const openTingkat = () => setMenuTingkat(true);
    const closeTingkat = () => setMenuTingkat(false);
    const openKelas = () => setMenuKelas(true);
    const closeKelas = () => setMenuKelas(false);
     
    const dropDownTahun = () =>{
      return(
        <Menu style={{paddingTop:responsiveScreenHeight(6.5), alignContent:'flex-end'}}
          visible={menuTahun}
          onDismiss={closeTahun}
          anchor={
          <Button labelStyle={{color:'black'}} onPress={openTahun}>{tahun} <Icons name='chevron-down' size={18} /></Button>
          }>
          <Menu.Item onPress={() => setTahun('2019-2020')} title="2019-2020" />
          <Menu.Item onPress={() => setTahun('2018-2019')} title="2018-2019" />
          <Menu.Item onPress={() => setTahun('2017-2018')} title="2017-2018" />
        </Menu>
      );
    }
    const dropDownTingkat = () =>{
      return(
        <Menu style={{paddingTop:responsiveScreenHeight(6.5), alignContent:'flex-end'}}
          visible={menuTingkat}
          onDismiss={closeTingkat}
          anchor={
          <Button labelStyle={{color:'black'}} onPress={openTingkat}>{tingkat} <Icons name='chevron-down' size={18} /></Button>
          }>
          <Menu.Item onPress={() => setTingkat('SD')} title="SD" />
          <Menu.Item onPress={() => setTingkat('SMP')} title="SMP" />
          <Menu.Item onPress={() => setTingkat('SMA')} title="SMA" />
        </Menu>
      );
    }
    const dropDownKelas = () =>{
      return(
        <Menu style={{paddingTop:responsiveScreenHeight(6.5), alignContent:'flex-end'}}
          visible={menuKelas}
          onDismiss={closeKelas}
          anchor={
          <Button labelStyle={{color:'black'}} onPress={openKelas}>{kelas} <Icons name='chevron-down' size={18} /></Button>
          }>
          <Menu.Item onPress={() => setKelas('VI')} title="VI" />
          <Menu.Item onPress={() => setKelas('VII')} title="VII" />
          <Menu.Item onPress={() => setKelas('IX')} title="IX" />
          <Menu.Item onPress={() => setKelas('X')} title="X" />
          <Menu.Item onPress={() => setKelas('XI')} title="XI" />
          <Menu.Item onPress={() => setKelas('XII')} title="XII" />
        </Menu>
      );
    }
    
    
  return (
    <View> 
        
    <DataTable.Row>
        <DataTable.Cell>Tahun Ajaran</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownTahun()}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
        <DataTable.Cell>Tingkat Kelas</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownTingkat()}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
        <DataTable.Cell>Nama Kelas</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownKelas()}</DataTable.Cell>
    </DataTable.Row>

    </View>
  );
};

export default DataKelas;