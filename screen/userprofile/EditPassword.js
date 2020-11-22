import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Appbar, Avatar, Button, Card, DataTable, Divider, Menu, Text, TextInput, useTheme } from 'react-native-paper';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import {MaterialCommunityIcons as Icons} from '@expo/vector-icons';

import { Picker } from '@react-native-picker/picker';

const EditPassword = () => {
    const theme = useTheme();
    const navigation = useNavigation();

  return (
    <View style={{height: responsiveScreenHeight(90)}}>

    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.goBack()} />
      <Appbar.Content title="Profil Pengguna" />
    </Appbar.Header>

    <View style={{flex:1, width:responsiveScreenWidth(90), alignSelf:'center'}}>
    <Text>Alamat</Text>
    <TextInput
        style={{backgroundColor:theme.colors.background}}
        value="JL. Jalan Ke Indonesia No.14"
        keyboardType="default"
        numberOfLines={3}
        multiline={true}
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
        returnKeyType="next"
    />
    </View>

    </View>

  );
};

export default EditPassword;