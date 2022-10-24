import React from 'react';
import { StyleSheet, StatusBar, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { MyButtonSubmit, MyButtonTextSubmit } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import HeaderMy from '../../components/Header/HeaderMain';
import { Container, Row } from '../../components/Global';
import Search from '../../components/Search';
import MenuCategory from '../../components/FlatList/MenuCategory';
import { BodyText, SubTitulo } from '../../components/Text';
import { CardLastItem } from '../../components/CardShopping';
import { IconHeart } from '../../components/SVG';

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
     
     <Row style={{ paddingTop: 20 }}>
     <CardLastItem>
      <IconHeart style={styles.cardIcon} />
     <Image
source={require('../../../assets/img/Products/product01.png')}
  style={{
    width: '100%',
    height: '100%',
    //bottom: 30,
  }}
/>
        <BodyText>hello</BodyText>
        </CardLastItem>


       
        </Row>

        
     
      <Row>
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
    fontSize: 32,
  },
  cardIcon: {
    backgroundColor:  '#F1F1F1',
    borderRadius: 20,
    color: 'red',
    bottom: -10,
    alignSelf: 'flex-end'
  }
});

export default Shop;
