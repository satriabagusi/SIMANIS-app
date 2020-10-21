import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { Appbar, Button, Card, Paragraph, Title, Avatar } from 'react-native-paper';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const DataRombel = () => {
    const navigation = useNavigation();
    const dataRombel =[];
    const LeftContent = props => <Avatar.Icon {...props} icon="chair-school" />

    for(let i = 0; i<10; i++){
      dataRombel.push( 
      // <Card>
      //   <Card.Content>
      //   <Title>Kecamatan </Title>
      //   <Paragraph>{i} Sekolah</Paragraph>
      //   </Card.Content>
      // </Card>
      <Card style={{marginVertical: responsiveScreenHeight(1), marginHorizontal: responsiveScreenWidth(1)}}>
        <Card.Title title="Data Pokok Rombel" subtitle="Card Subtitle" left={LeftContent} />
      </Card>
      )
    }

  return (
    <View>

    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.navigate('Home', {screen: 'Home'})} />
      <Appbar.Content title="Data Pokok Rombel" />
      <Appbar.Action icon="plus" onPress={() => navigation.navigate('TambahDataRombel')} />
    </Appbar.Header>

    <ScrollView style={{}}>
    {dataRombel}
    </ScrollView>
    
    </View>
  );
};

export default DataRombel;