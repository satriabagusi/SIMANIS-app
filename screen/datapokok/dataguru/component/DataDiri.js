
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, Button, DataTable, Menu, TextInput, useTheme } from 'react-native-paper';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import {MaterialCommunityIcons as Icons} from '@expo/vector-icons';

const DataDiri = () => {
    const theme = useTheme();
    const [menuKelamin, setMenuKelamin] = React.useState(false);
    const [kelamin, setKelamin] = React.useState('');
    const openKelamin = () => setMenuKelamin(true);
    const closeKelamin = () => setMenuKelamin(false);
     
    const dropDownKelamin = () =>{
      return(
        <Menu style={{paddingTop:responsiveScreenHeight(6.5), alignContent:'flex-end'}}
          visible={menuKelamin}
          onDismiss={closeKelamin}
          anchor={
          <Button labelStyle={{color:'black'}} onPress={openKelamin}>{kelamin} <Icons name='chevron-down' size={18} /></Button>
          }>
          <Menu.Item onPress={() => setKelamin('Laki-laki')} title="Laki-laki" />
          <Menu.Item onPress={() => setKelamin('Perempuan')} title="Perempuan" />
        </Menu>
      );
    }
  return (
    <View> 
        
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
        
    <DataTable.Row>
        <DataTable.Cell>Jenis Kelamin</DataTable.Cell>
        <DataTable.Cell numeric>{dropDownKelamin()}</DataTable.Cell>
    </DataTable.Row>

    <TextInput
    mode='flat'
    label="Alamat"
    style={{backgroundColor:theme.colors.background}}
    keyboardType="default"
    multiline={true}
    />

    </View>
  );
};

export default DataDiri;