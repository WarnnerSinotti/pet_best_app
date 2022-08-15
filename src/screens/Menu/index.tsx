import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { MyButton, MyButtonText } from '../../components/Button';

import { Container } from '../../components/Global';


export default function Menu() {

  const navigation = useNavigation();

  return (
    <Container>
      <MyButtonText>MENU</MyButtonText>
      <MyButton onPress={() => navigation.goBack()} >
        <MyButtonText>Voltar</MyButtonText>
        </MyButton>
    </Container>
  );
}
