
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, Button, DataTable, Menu, TextInput, useTheme } from 'react-native-paper';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import {MaterialCommunityIcons as Icons} from '@expo/vector-icons';

const DataDiri = () => {
    const theme = useTheme();

  return (
    <View> 
        
    <TextInput
    mode='flat'
    label="Email"
    style={{backgroundColor:theme.colors.background}}
    keyboardType="email-address"
    />
    <TextInput
    mode='flat'
    label="Password"
    style={{backgroundColor:theme.colors.background}}
    secureTextEntry={true}
    />
    <TextInput
    mode='flat'
    label="Konfirmasi Password"
    style={{backgroundColor:theme.colors.background}}
    secureTextEntry={true}
    />

    </View>
  );
};

export default DataDiri;