import { Button, Text } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { MyRS, Title, Wrapper } from '../../components/Button';

import { Container } from '../../components/Global';
import themes from '../../themes';

export default function Menu() {

  const navigation = useNavigation();

  return (
    <Container>
      <Text>MENU</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
   
        <Title>Warnner</Title>
        <MyRS color={'red'} background={'black'} title={"TESTE"} onPress={() => console.log('test')}>teste</MyRS>
 
    </Container>
  );
}
