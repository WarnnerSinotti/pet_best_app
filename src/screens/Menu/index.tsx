import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useRef } from 'react';
import { MyButtonSubmit, MyButtonTextSubmit } from '../../components/Button';
import { View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Container } from '../../components/Global';
import { SubTitulo, Titulo } from '../../components/Text';



export default function Menu() {

  const [count, setCount] = useState(0);
  const [comidas, setComidas] = React.useState('');
  const [position, setPosition] = React.useState(0);

  const opcoes = [
    'Hamburger', 
    'Chachorro-quente', 
    'Lasanha', 
    'Strogonoff'
  ];

  useEffect(() => {
    setComidas(opcoes[position]);
  }, [position]);

  const posicionClick = () => {
    const pos = position + 1 === opcoes.length 
      ? 0 
      : position + 1;
    setPosition(pos);
  }


  const navigation = useNavigation();

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open('default');
  };

  return (
    <Container>
      <MyButtonTextSubmit>MENU</MyButtonTextSubmit>
      <Titulo>{comidas}</Titulo>
      <MyButtonSubmit onPress={() => posicionClick()}><MyButtonTextSubmit>contador</MyButtonTextSubmit></MyButtonSubmit>
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
