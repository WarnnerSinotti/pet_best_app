import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { MyButtonNext, MyButtonSubmit, MyButtonTextNext, MyButtonTextSubmit } from '../../components/Button';
import { Image } from 'react-native';
import { Container } from '../../components/Global';
import { SubTitulo, Titulo } from '../../components/Text';
import { CardContainer, } from '../../components/Card';

export default function Step01() {
  const navigation = useNavigation();
  const { t } = useTranslation();

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
          adicionar os  - Step01
        </SubTitulo>
        <MyButtonNext onPress={() => navigation.navigate('Step02')}>
        <MyButtonTextNext>{t('loginScreen.next')}</MyButtonTextNext>
        </MyButtonNext>
      </CardContainer>
      
    </Container>
  );
}
