import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, Button, Card, Paragraph, Title, Avatar } from 'react-native-paper';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const DataGuru = () => {
    const navigation = useNavigation();
    const dataGuru =[];
    const LeftContent = props => <Avatar.Icon {...props} icon="account" />

    for(let i = 0; i<10; i++){
      dataGuru.push( 
      // <Card>
      //   <Card.Content>
      //   <Title>Kecamatan </Title>
      //   <Paragraph>{i} Sekolah</Paragraph>
      //   </Card.Content>
      // </Card>
      <Card style={{marginVertical: responsiveScreenHeight(1), marginHorizontal: responsiveScreenWidth(1)}}>
        <Card.Title title="Data Pokok Guru" subtitle="Card Subtitle" left={LeftContent} />
      </Card>
      )
    }

  return (
    <View>

    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.navigate('Home', {screen: 'Home'})} />
      <Appbar.Content title="Data Pokok Guru" />
      <Appbar.Action icon="plus" onPress={() => navigation.navigate('TambahDataGuru')} />
    </Appbar.Header>

    <ScrollView style={{}}>
    {dataGuru}
    </ScrollView>
    
    </View>
  );
};

export default DataGuru;