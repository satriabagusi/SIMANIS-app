import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { Appbar, Card, Avatar } from 'react-native-paper';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const UjianOnline = () => {
    const navigation = useNavigation();
    
    const dataAbsensi =[];
    const LeftContent = props => <Avatar.Icon {...props} icon="school" />

    for(let i = 0; i<10; i++){
      dataAbsensi.push( 
      // <Card>
      //   <Card.Content>
      //   <Title>Kecamatan </Title>
      //   <Paragraph>{i} Sekolah</Paragraph>
      //   </Card.Content>
      // </Card>
      <Card style={{marginVertical: responsiveScreenHeight(1), marginHorizontal: responsiveScreenWidth(1)}}>
        <Card.Title title="Absensi" subtitle="Card Subtitle" left={LeftContent} />
      </Card>
      )
    }

  return (
    <View>

    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.navigate('Home', {screen: 'Home'})} />
      <Appbar.Content title="Absensi Siswa" />
      <Appbar.Action icon="plus" onPress={() =>navigation.navigate('TambahAbsensi')} />
    </Appbar.Header>

    <ScrollView style={{}}>
      {dataAbsensi}
    </ScrollView>

    </View>

    
  );
};

export default UjianOnline;