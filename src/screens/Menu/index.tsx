import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MyButtonSubmit, MyButtonTextSubmit } from '../../components/Button';
import { FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import {
  Column,
  Container,
  Row,
  RowCenter,
  RowCenterCard,
  RowLeft,
} from '../../components/Global';
import { SubTitulo } from '../../components/Text';
import { Header } from '../../components/Header';
import {
  IconCat,
  IconMenu,
  IconSearch,
  IconSliders,
} from '../../components/SVG';
import themes from '../../themes';
import { InputText, InputView } from '../../components/TextInput';
import { MyDivider } from '../../components/Divider';
import { CardLocalization } from '../../components/Card/CardLocalization';
import { CardMenuList } from '../../components/Card/CardMenuList';
import MenuListWarnner, { FlatlistMenu } from '../../components/FlatList';

/* interface IUser {
  id: number;
  title: string;
} */

export default function Menu() {
  const navigation: any = useNavigation();
  const { t } = useTranslation();
  const [selectedId, setSelectedId] = useState(null)

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

  const CardList = ({ item }) => (
    <CardMenuList item={item.id} >
      <SubTitulo>{item.title}</SubTitulo>
    </CardMenuList>
  );

  return (
    <Container style={{ justifyContent: 'flex-start', paddingTop: 50,  }}>
      <Header>
        <IconCat height={50} width={50} />
        <TouchableOpacity onPress={() => console.log('Menu')}>
          <IconMenu style={{ color: themes.light.COLORS.secondary }} />
        </TouchableOpacity>
      </Header>
      <RowCenter style={{ paddingTop: 25 }}>
        <InputView style={{ backgroundColor: themes.light.COLORS.greyPrimary }}>
          <IconSearch
            style={{ marginLeft: 10, color: themes.light.COLORS.neutral }}
          />
          <InputText
            style={{ marginLeft: 8, width: '74%' }}
            placeholder={t('menuScreen.search')}
            //onChangeText={setTextPassword}
            //value={textPassword}
            maxLength={33}
          ></InputText>
          <TouchableOpacity onPress={() => console.log('Icone')}>
            <IconSliders style={{ color: themes.light.COLORS.neutral }} />
          </TouchableOpacity>
        </InputView>
      </RowCenter>
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

      <MenuListWarnner/>
        
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
