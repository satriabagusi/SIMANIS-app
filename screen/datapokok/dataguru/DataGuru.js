import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Appbar } from 'react-native-paper';

const DataGuru = () => {
    const navigation = useNavigation();
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => navigation.navigate('Home', {screen: 'Home'})} />
      <Appbar.Content title="Data Guru" />
      <Appbar.Action icon="plus" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default DataGuru;