import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Appbar, Button, Card, DataTable, Divider, Menu, TextInput, useTheme } from 'react-native-paper';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import {MaterialCommunityIcons as Icons} from '@expo/vector-icons';

import DataSekolah from './component/DataSekolah';
import DataKelas from './component/DataKelas';
import DataDiri from './component/DataDiri';
import DetailUser from './component/DetailUser';

const TambahDataRombel = () => {
    const theme = useTheme();
    const navigation = useNavigation();

  return (
    <View style={{height: responsiveScreenHeight(90)}}>

    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title="Tambah Data Siswa" />
    </Appbar.Header>


    <ScrollView style={{alignSelf:'center', alignContent:'center', height:responsiveScreenHeight(95)}}>

        <KeyboardAvoidingView behavior="padding" enabled style={{width: responsiveScreenWidth(95)}}>


        <Card>
            <Card.Title title="Data Sekolah"/>
            <Card.Content>
                <DataSekolah/>
            </Card.Content>
        </Card>
        <Card>
            <Card.Title title="Data Kelas"/>
            <Card.Content>
                <DataKelas/>
            </Card.Content>
        </Card>
        <Card>
            <Card.Title title="Data Kelas"/>
            <Card.Content>
                <DataDiri/>
            </Card.Content>
        </Card>
        <Card>
            <Card.Title title="Username & Password"/>
            <Card.Content>
                <DetailUser/>
            </Card.Content>
        </Card>

        <View style={{marginTop: responsiveScreenHeight(2), width: responsiveScreenWidth(55), alignSelf:'flex-end'}}>
        <Button icon="plus" mode="contained" onPress={() => console.log('Pressed')}>
            Simpan Data
        </Button>
        </View>

        </KeyboardAvoidingView>

    
    </ScrollView>
        </View>

  );
};

export default TambahDataRombel;