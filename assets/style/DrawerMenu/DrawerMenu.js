import React from 'react';
import { View, StyleSheet,  } from 'react-native';
import {DrawerItem } from '@react-navigation/drawer';

import {Drawer, Text} from 'react-native-paper';

import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';


export default function DrawerMenu(props){
    return( 
                <View style={styles.drawerContent}>
                    <Drawer.Section>
                        <Text style={styles.drawerTitle}>Data Pokok Sekolah</Text>
                        <DrawerItem
                    style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                    label="Data Sekolah"
                    onPress={() => alert("Data Sekolah")}
                    />
                        <DrawerItem
                    style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                    label="Data Prasarana"
                    onPress={() => alert("Data Prasarana")}
                    />
                        <DrawerItem
                    style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                    label="Data Sarana"
                    onPress={() => alert("Data Sarana")}
                    />
                        <DrawerItem
                    style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                    label="Data Rombel"
                    onPress={() => alert("Data Rombel")}
                    />
                        <DrawerItem
                    style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                    label="Data Guru"
                    onPress={() => alert("Data Guru")}
                    />
                        <DrawerItem
                    style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                    label="Data Siswa"
                    onPress={() => alert("Data Siswa")}
                    />
                    </Drawer.Section>

                    <Drawer.Section>
                    <Text style={styles.drawerTitle}>Data Kurikulum</Text>
                    <DrawerItem
                    style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                    label="Jadwal Pelajaran"
                    onPress={() => alert("jadwal pelajaran")}
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
                            onPress={() => alert("Ujian Online")}
                        />
                        <DrawerItem
                            style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                            label="UTS/UAS Online"
                            onPress={() => alert("UTS/UAS Online")}
                        />
                        <DrawerItem
                            style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                            label="Tryout Online"
                            onPress={() => alert("Tryout Online")}
                        />
                        <DrawerItem
                            style={{marginVertical: responsiveScreenHeight(-0.4)}}        
                            label="Students Online Competition"
                            onPress={() => alert("Students Online Competition")}
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