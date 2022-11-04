import React from 'react';
import { StyleSheet, StatusBar, Image, TouchableOpacity, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { MyButtonSubmit, MyButtonTextSubmit } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import HeaderMy from '../../components/Header/HeaderMain';
import { Container, Row } from '../../components/Global';
import Search from '../../components/Search';
import MenuCategory from '../../components/FlatList/MenuCategory';
import { BodyText, SubTitulo } from '../../components/Text';
import {
  CardBorderLastItem,
  CardContainerLastItem,
  CardLastItem,
} from '../../components/CardShopping';
import { IconHeart } from '../../components/SVG';
import themes from '../../themes';
import FlatShopping from '../../components/FlatList/Shopping';

const Shop = () => {
  const navigation: any = useNavigation();
  const { t } = useTranslation('translation');

  return (
    <Container style={{ justifyContent: 'flex-start', paddingTop: 50 }}>
      <HeaderMy />
      <Search />
      <Row style={{ paddingTop: 20 }}>
        <SubTitulo>{t('shopScreen.category')}</SubTitulo>
      </Row>
      <MenuCategory />
      <Row>
        <SubTitulo>{t('shopScreen.lastItems')}</SubTitulo>
      </Row>
      <FlatShopping/>

      
   
      

     

       {/*  <CardBorderLastItem>
          <TouchableOpacity style={styles.cardIcon}>
            <IconHeart style={styles.Icon} width={20} />
          </TouchableOpacity>
          <CardLastItem>
            <Image
              source={require('../../../assets/img/Products/product02.png')}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </CardLastItem>
          <BodyText style={styles.title}>Aquarium Tank LED </BodyText>
        </CardBorderLastItem> */}
     

      <Row style={{ paddingTop: 30 }}>
        <SubTitulo>{t('shopScreen.promotions')}</SubTitulo>
      </Row>


   
      <MyButtonSubmit onPress={() => navigation.navigate('Menu')}>
        <MyButtonTextSubmit>Back Warnner</MyButtonTextSubmit>
      </MyButtonSubmit>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: 0,
    paddingTop: 10,
    fontFamily: themes.light.FONTS.LEXEND_BOLD,
  },
  Icon: {
    color: themes.light.COLORS.neutral,
    alignSelf: 'center',
  },
  cardIcon: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themes.light.COLORS.background,
    borderRadius: 20,
    margin: -12,
    alignSelf: 'flex-end',
  },
});

export default Shop;
