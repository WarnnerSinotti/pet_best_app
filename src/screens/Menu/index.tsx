import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MyButtonSubmit, MyButtonTextSubmit } from '../../components/Button';
import {
  Container,
  Row,
  RowCenter,
} from '../../components/Global';
import { SubTitulo } from '../../components/Text';
import HeaderMy from '../../components/Header';
import { MyDivider } from '../../components/Divider';
import { CardLocalization } from '../../components/Card/CardLocalization';
import MenuListHorizontal from '../../components/FlatList';
import Search from '../../components/Search';

/* interface IUser {
  id: number;
  title: string;
} */

export default function Menu() {
  const navigation: any = useNavigation();
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState(null);

  const services = [
    {
      id: '1',
      title: 'item 1',
    },
    {
      id: '2',
      title: 'item 2',
    },
    {
      id: '3',
      title: 'item 3',
    },
    {
      id: '4',
      title: 'item 4',
    },
    {
      id: '5',
      title: 'item 5',
    },
  ];


  return (
    <Container style={{ justifyContent: 'flex-start', paddingTop: 50 }}>
      <HeaderMy/>
      <Search />
      <CardLocalization>
        <SubTitulo>Adicionar Localização</SubTitulo>
      </CardLocalization>
      <RowCenter style={{ paddingTop: 20 }}>
        <MyDivider />
      </RowCenter>

      <Row style={{ padding: 24 }}>
        <SubTitulo>{t('menuScreen.services')}</SubTitulo>
      </Row>

      {/* ADICIONANDO SERVIÇOS  */}

      <RowCenter>
        <MenuListHorizontal />
      </RowCenter>
      <MyButtonSubmit onPress={() => navigation.navigate('Shop')}>
        <MyButtonTextSubmit>Shop</MyButtonTextSubmit>
      </MyButtonSubmit>

      <MyButtonSubmit onPress={() => navigation.navigate('Login')}>
        <MyButtonTextSubmit>Back Warnner</MyButtonTextSubmit>
      </MyButtonSubmit>
    </Container>
  );
}
