import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MyButtonSubmit, MyButtonTextSubmit } from '../../../components/Button';
import { Container } from '../../../components/Global';
import { Titulo } from '../../../components/Text';
import Search from '../../../components/Search';
import { TouchableOpacity } from 'react-native';
import { IconBird, IconMenu } from '../../../components/SVG';
import themes from '../../../themes';
import { Header } from '../../../components/Header/HeaderIcon/';

/* interface IUser {
  id: number;
  title: string;
} */

export default function Bird() {
  const navigation: any = useNavigation();
  const { t } = useTranslation();

  return (
    <Container style={{ justifyContent: 'flex-start', paddingTop: 50 }}>
      <Header>
        <IconBird height={50} width={50} />
        <Titulo>Bird</Titulo>
        <TouchableOpacity onPress={() => console.log('Menu')}>
          <IconMenu style={{ color: themes.light.COLORS.secondary }} />
        </TouchableOpacity>
      </Header>
      <Search />

      <MyButtonSubmit onPress={() => navigation.navigate('Shop')}>
        <MyButtonTextSubmit>Back Shop</MyButtonTextSubmit>
      </MyButtonSubmit>
    </Container>
  );
}

{
  /* <IconCat height={50} width={50} /> */
}
