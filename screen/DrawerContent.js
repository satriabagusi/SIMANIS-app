import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { Avatar, Title, Caption, Paragraph, Drawer, Text} from 'react-native-paper';

import {responsiveFontSize, responsiveHeight, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth} from 'react-native-responsive-dimensions';

import { Ionicons } from '@expo/vector-icons';

import DrawerMenu from '../assets/style/DrawerMenu/DrawerMenu';

export function DrawerContent(props){
    return(
        <View style={{flex:1}}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection:'row'}}>
                    <View>
                    <Avatar.Image size={responsiveWidth(20)} 
                        source={{uri:'https://images.unsplash.com/photo-1600527097450-569db51cf00d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'}} />
                    </View>
                    <View style={styles.title}>
                        <Title style={{color:"white"}}>John Doe</Title>
                        <Title style={{color:"white", fontSize: responsiveFontSize(2)}}>Admin Sekolah</Title>
                        <Title style={{color:"white", fontSize: responsiveFontSize(1.5)}}>SMA 1 Indonesia</Title>
                    </View>
                </View>
                    <View style={styles.userInfoBtn}>
                        <TouchableOpacity style={styles.profilBtn}
                        onPress={() => alert('profil pengguna')}>
                            <Ionicons name="ios-person" size={responsiveScreenWidth(6)} color="#3F83F8"/>
                            <Text style={{color: '#3F83F8', textAlign:'center', marginLeft:responsiveScreenWidth(2)}}>Profil Pengguna</Text>
                        </TouchableOpacity>
                    </View>
            </View>
            
            <DrawerContentScrollView>    
                <DrawerMenu/>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Ionicons
                        name="ios-log-out"
                        color={color}
                        size={size}
                        />  
                    )}
                    label="Log Out"
                    onPress={() => alert('LOG OUT')}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    profilBtn:{
        flexDirection:'row',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor:"white",
        width: responsiveScreenWidth(45),
        height: responsiveScreenHeight(4.2),
        paddingHorizontal: responsiveScreenWidth(3.5),
        borderRadius: 12,
    },
    userInfoBtn:{
        marginTop: responsiveScreenHeight(3)
    },  
    userInfoSection: {
        paddingLeft: responsiveScreenWidth(4),
        paddingTop: responsiveHeight(6),
        paddingBottom:  responsiveHeight(3),
        backgroundColor: '#3F83F8',
        shadowColor: "black",
        shadowOffset: {
            width: 3,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    title: {
        flexDirection: 'column',
        fontSize: responsiveScreenFontSize(3),
        marginTop: 3,
        marginLeft: responsiveWidth(10),
        marginTop: responsiveHeight(-0.5),
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: responsiveScreenHeight(2),
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
});