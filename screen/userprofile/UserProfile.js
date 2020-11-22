import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Appbar, Avatar, Badge, Button, Card, DataTable, Divider, Menu, Surface, Text, TextInput, useTheme } from 'react-native-paper';
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import {MaterialCommunityIcons as Icons} from '@expo/vector-icons';

import { Picker } from '@react-native-picker/picker';

const UserProfile = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    const [kelamin, setKelamin] = React.useState('');
    const [isDisabled, setIsDisabled] = React.useState(true);
    const [btnDisabled, setBtnDisabled] = React.useState(false)
    const [pickerEnabled, setPickerEnabled] = React.useState(false);

    const editMode = () => {
        setBtnDisabled(true);

        if(btnDisabled == true){
            setIsDisabled(true);
            setPickerEnabled(false);
        }else{
            setIsDisabled(false);
            setPickerEnabled(true)
        }
    }

    const saveEdit = () => {
        // FUNCTION SAVE DB
        setBtnDisabled(false);
        setIsDisabled(true);
        setPickerEnabled(false);

        alert("DATA TERSIMPAN")
    }

  return (
    <View style={{height: responsiveScreenHeight(90)}}>

    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title="Profil Pengguna" />
    </Appbar.Header>

    <View style={{flex:1, alignSelf:'center', top:25}}>
    <Avatar.Image size={responsiveScreenWidth(24)} 
          source={{uri:'https://images.unsplash.com/photo-1600527097450-569db51cf00d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'}} 
          >
    </Avatar.Image>

    <Badge size={28} style={{backgroundColor:theme.colors.primary, zIndex:99, position:'relative', top:-25, left:-5, elevation:4}} onPress={() => alert("UPLOAD IMAGE")}>
        <Icons name="camera-plus" size={16}/>
    </Badge>
    </View>
    
    <KeyboardAvoidingView style={{flex:1, bottom:50, minHeight:150}} enabled={false}>



    <View style={{flex:1, width:responsiveScreenWidth(90), alignSelf:'center'}}>
    <Text>Nama</Text>
    <TextInput
        style={{backgroundColor:theme.colors.background}}
            value="John Doe"
            disabled={isDisabled}
            returnKeyType="next"
    />
    </View>

    <View style={{flex:1, width:responsiveScreenWidth(90), alignSelf:'center'}}>
    <Text>No HP</Text>
    <TextInput
        style={{backgroundColor:theme.colors.background}}
        value="08211111111"
        keyboardType="phone-pad"
        disabled={isDisabled}
        returnKeyType="next"
    />
    </View>

    <View style={{flex:1, width:responsiveScreenWidth(90), alignSelf:'center'}}>
    <Text>Alamat</Text>
    <TextInput
        style={{backgroundColor:theme.colors.background}}
        value="JL. Jalan Ke Indonesia No.14"
        keyboardType="default"
        numberOfLines={3}
        multiline={true}
        disabled={isDisabled}
        returnKeyType="next"
    />
    </View>

    <View style={{flex:1, width:responsiveScreenWidth(90), alignSelf:'center'}}>
    <Text style={{fontFamily:'Poppins_400Regular', left:5, top:10,bottom:10, color:'black'}}>Jenis Kelamin</Text>
    <Picker mode="dialog" 
    onValueChange={(itemValue) => setKelamin(itemValue)}
    selectedValue={kelamin}
    enabled={pickerEnabled}>
        <Picker.Item label="Laki-Laki" value="Laki-Laki"  />
        <Picker.Item label="Perempuan" value="Perempuan"  />
    </Picker>
    </View>


    </KeyboardAvoidingView>

    <View style={{flexDirection: "row",marginTop: responsiveScreenHeight(2), width: responsiveScreenWidth(100), alignSelf:'flex-end', alignContent:'space-between', left:120}}>
    
        <Button style={{backgroundColor:theme.colors.warning, right:10, width:130}} labelStyle={{color:theme.colors.text}} icon="pencil" mode="contained" onPress={() => editMode()}
        disabled={btnDisabled}>
            Ubah Data
        </Button>

        <Button style={{backgroundColor:theme.colors.success, width:140}} icon="plus" mode="contained" onPress={() => saveEdit()}>
            Simpan Data
        </Button>
    </View>

    </View>

  );
};

export default UserProfile;