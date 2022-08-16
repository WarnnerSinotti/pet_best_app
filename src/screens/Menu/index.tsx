import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { MyButtonSubmit, MyButtonTextSubmit } from '../../components/Button';

import { Container } from '../../components/Global';


export default function Menu() {

  const navigation = useNavigation();

  return (
    <Container>
      <MyButtonTextSubmit>MENU</MyButtonTextSubmit>
      <MyButtonSubmit onPress={() => navigation.goBack()} >
        <MyButtonTextSubmit>Voltar</MyButtonTextSubmit>
        </MyButtonSubmit>
    </Container>
  );
}
