import React from 'react';
import { View, StyleSheet,  } from 'react-native';
import {DrawerItem } from '@react-navigation/drawer';

import {Drawer, Text} from 'react-native-paper';

import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

import {useNavigation} from '@react-navigation/native';

export default function DrawerMenu({props}){
    const navigation = useNavigation();
    return( 
                <View style={styles.drawerContent}>
                    <Drawer.Section>
                        <Text style={styles.drawerTitle}>Data Pokok Sekolah</Text>
                        <DrawerItem
                    style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                    label="Data Sekolah"
                    onPress={() => navigation.navigate('DataPokok', {screen: 'DataSekolah'})}
                    />
                        <DrawerItem
                    style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                    label="Data Prasarana"
                    onPress={() => navigation.navigate('DataPokok', {screen: 'DataPrasarana'})}
                    />
                        <DrawerItem
                    style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                    label="Data Sarana"
                    onPress={() => navigation.navigate('DataPokok', {screen: 'DataSarana'})}
                    />
                        <DrawerItem
                    style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                    label="Data Rombel"
                    onPress={() => navigation.navigate('DataPokok', {screen: 'DataRombel'})}
                    />
                        <DrawerItem
                    style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                    label="Data Guru"
                    onPress={() => navigation.navigate('DataPokok', {screen: 'DataGuru'})}
                    />
                        <DrawerItem
                    style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                    label="Data Siswa"
                    onPress={() => navigation.navigate('DataPokok', {screen: 'DataSiswa'})}
                    />
                    </Drawer.Section>

                    <Drawer.Section>
                    <Text style={styles.drawerTitle}>Data Kurikulum</Text>
                    <DrawerItem
                    style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                    label="Jadwal Pelajaran"
                    onPress={() => navigation.navigate('DataKurikulum')}
                    />
                    </Drawer.Section>

                    <Drawer.Section>
                        <Text style={styles.drawerTitle}>Data Absensi</Text>
                        <DrawerItem
                            style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                            label="Absensi Siswa"
                            onPress={() => alert("Absensi Siswa")}
                        />
                    </Drawer.Section>
                    
                    <Drawer.Section>
                        <Text style={styles.drawerTitle}>Data Tugas</Text>
                        <DrawerItem
                            style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                            label="Tugas siswa"
                            onPress={() => alert("Tugas siswa")}
                        />
                    </Drawer.Section>

                    <Drawer.Section>
                        <Text style={styles.drawerTitle}>e-Learning</Text>
                        <DrawerItem
                            style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                            label="Bank Soal"
                            onPress={() => alert("Bank Soal")}
                        />
                        <DrawerItem
                            style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                            label="Materi Pelajaran"
                            onPress={() => alert("Materi Pelajaran")}
                        />
                    </Drawer.Section>
                    <Drawer.Section>
                        <Text style={styles.drawerTitle}>Ujian, Tryout, & SOC Online</Text>
                        <DrawerItem
                            style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                            label="Ujian Online"
                            onPress={() => navigation.navigate('DataUjian')}
                        />
                        <DrawerItem
                            style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                            label="UTS/UAS Online"
                            onPress={() => navigation.navigate('UTSUASOnline')}
                        />
                        <DrawerItem
                            style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                            label="Tryout Online"
                            onPress={() => navigation.navigate('TryoutOnline')}
                        />
                        <DrawerItem
                            style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                            label="Students Online Competition"
                            onPress={() => navigation.navigate('Soc')}
                        />
                    </Drawer.Section>

                </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        marginTop: responsiveScreenHeight(-3)
    },
    drawerTitle:{
        fontSize:responsiveScreenFontSize(1.5), 
        color:'gray', 
        marginLeft: responsiveScreenWidth(3)
    }
});