import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { MyButtonSubmit, MyButtonTextSubmit } from '../../components/Button';
import { Image } from 'react-native';
import { Container } from '../../components/Global';
import { SubTitulo, Titulo } from '../../components/Text';
import { CardContainer, } from '../../components/Card';

export default function Step03() {
  const navigation = useNavigation();

  return (
    <Container>
      <MyButtonSubmit onPress={() => navigation.goBack()}>
        <MyButtonTextSubmit>Voltar</MyButtonTextSubmit>
      </MyButtonSubmit>
      <Image
          source={require('../../../assets/img/step01.jpg')}
          style={{
            width: '100%',
            height: '40%',
            justifyContent: 'center',
            alignContent: 'center',
            
          }}
        ></Image>
      <CardContainer>
        <SubTitulo>
          Step03
        </SubTitulo>
        <MyButtonSubmit onPress={() => navigation.navigate('Step04')}></MyButtonSubmit>
      </CardContainer>
      
    </Container>
  );
}
