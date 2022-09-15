import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { MyButtonSubmit, MyButtonTextSubmit } from '../../components/Button';
import { TouchableOpacity } from 'react-native';
import { Container, Row } from '../../components/Global';
import { SubTitulo } from '../../components/Text';
import { Header } from '../../components/Header';
import { IconCat, IconMenu } from '../../components/SVG';
import themes from '../../themes';

export default function Menu() {
  const navigation: any = useNavigation();

  return (
    <Container>
      <Header>
        <IconCat height={50} width={50} />
        <TouchableOpacity
        onPress={() => console.log('Menu')}
        >
          <IconMenu
            height={30}
            width={30}
            style={{ color: themes.light.COLORS.secondary }}
          />
        </TouchableOpacity>
      </Header>
      <SubTitulo>Icon</SubTitulo>

      <MyButtonTextSubmit>MENU</MyButtonTextSubmit>
      <MyButtonSubmit onPress={() => navigation.navigate('Login')}>
        <MyButtonTextSubmit>Voltar</MyButtonTextSubmit>
      </MyButtonSubmit>
    </Container>
  );
}
