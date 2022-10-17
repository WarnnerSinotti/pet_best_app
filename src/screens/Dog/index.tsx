import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MyButtonSubmit, MyButtonTextSubmit } from '../../components/Button';
import { Container } from '../../components/Global';
import { Titulo } from '../../components/Text';
import HeaderMy from '../../components/Header';
import Search from '../../components/Search';

/* interface IUser {
  id: number;
  title: string;
} */

export default function Dog() {
  const navigation: any = useNavigation();
  const { t } = useTranslation();

  return (
    <Container style={{ justifyContent: 'flex-start', paddingTop: 50 }}>
      <HeaderMy />
      <Search />
      <Titulo>Dog</Titulo>
      <MyButtonSubmit onPress={() => navigation.navigate('Shop')}>
        <MyButtonTextSubmit>Back Shop</MyButtonTextSubmit>
      </MyButtonSubmit>
    </Container>
  );
}
