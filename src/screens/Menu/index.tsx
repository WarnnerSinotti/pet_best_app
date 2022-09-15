import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MyButtonSubmit, MyButtonTextSubmit } from '../../components/Button';
import { TouchableOpacity } from 'react-native';
import { Container, Row, RowCenter } from '../../components/Global';
import { SubTitulo } from '../../components/Text';
import { Header } from '../../components/Header';
import { IconCat, IconMenu, IconSearch, IconSliders } from '../../components/SVG';
import themes from '../../themes';
import { InputText, InputView } from '../../components/TextInput';

export default function Menu() {
  const navigation: any = useNavigation();
  const { t } = useTranslation();

  return (
    <Container>
      <Header>
        <IconCat height={50} width={50} />
        <TouchableOpacity onPress={() => console.log('Menu')}>
          <IconMenu
            style={{ color: themes.light.COLORS.secondary }}
          />
        </TouchableOpacity>
      </Header>
      <RowCenter style={{ paddingTop: 25 }}>
        <InputView style={{ backgroundColor: themes.light.COLORS.greyPrimary }}>
          <IconSearch
            style={{ marginLeft: 10, color: themes.light.COLORS.secondary }}
          />
          <InputText
            style={{ marginLeft: 8, width: '74%' }}
            placeholder={t('menuScreen.search')}
            //onChangeText={setTextPassword}
            //value={textPassword}
            maxLength={33}
          ></InputText>
          <TouchableOpacity onPress={() => console.log('Icone')}>
            <IconSliders
              style={{ color: themes.light.COLORS.secondary }}
            />
          </TouchableOpacity>
        </InputView>
      </RowCenter>
      <SubTitulo>Icon</SubTitulo>

      <MyButtonTextSubmit>MENU</MyButtonTextSubmit>
      <MyButtonSubmit onPress={() => navigation.navigate('Login')}>
        <MyButtonTextSubmit>Voltar</MyButtonTextSubmit>
      </MyButtonSubmit>
    </Container>
  );
}
