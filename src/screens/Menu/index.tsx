import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { MyButtonSubmit, MyButtonTextSubmit } from '../../components/Button';
import { View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Container } from '../../components/Global';
import { SubTitulo } from '../../components/Text';


export default function Menu() {

  const navigation = useNavigation();

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open('default');
  };

  return (
    <Container>
      <MyButtonTextSubmit>MENU</MyButtonTextSubmit>
      <MyButtonSubmit onPress={() => navigation.navigate('Login')} >
        <MyButtonTextSubmit>Voltar</MyButtonTextSubmit>
        </MyButtonSubmit>

      <TouchableOpacity onPress={onOpen}>
        <SubTitulo>Open the modal</SubTitulo>
      </TouchableOpacity>

      <Modalize openAnimationConfig={ {timing: {duration: 15000}, spring: { speed: 0.1} }} snapPoint={300} ref={modalizeRef}>
      <MyButtonSubmit onPress={() => navigation.goBack()} >
        <MyButtonTextSubmit>Voltar</MyButtonTextSubmit>
        </MyButtonSubmit>

      </Modalize>

    </Container>
  );
}
