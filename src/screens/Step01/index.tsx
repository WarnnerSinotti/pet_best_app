import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { MyButtonSubmit, MyButtonTextSubmit } from '../../components/Button';
import { Image } from 'react-native';
import { Container } from '../../components/Global';
import { SubTitulo, Titulo } from '../../components/Text';
import { CardContainer, } from '../../components/Card';

export default function Step01() {
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
          adicionar os textos
        </SubTitulo>
      </CardContainer>
      
    </Container>
  );
}
