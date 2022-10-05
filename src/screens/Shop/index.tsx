import React from 'react';
import { StyleSheet,StatusBar} from 'react-native';
import { useTranslation } from 'react-i18next';
import { MyButtonSubmit, MyButtonTextSubmit } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import HeaderMy from '../../components/Header';
import { Container, Row } from '../../components/Global';
import Search from '../../components/Search';
import MenuCategory from '../../components/FlatList/MenuCategory';
import { SubTitulo } from '../../components/Text';
import Warnner from '../../components/FlatListTest';



const Shop = () => {


  const navigation: any = useNavigation();
  const  {t}  = useTranslation('translation');

  return (
    <Container style={{ justifyContent: 'flex-start', paddingTop: 50 }}>
       <HeaderMy />
       <Search />
       <Row style={{paddingTop: 20}}>
       <SubTitulo>{t('shopScreen.category')}</SubTitulo>
       </Row>
       <Row>
       <Warnner/>
       </Row>
  <MenuCategory /> 

     <Row >
       <SubTitulo>{t('shopScreen.lastItems')}</SubTitulo>
       </Row>
       <SubTitulo>{t('shopScreen.promotions')}</SubTitulo>
      <MyButtonSubmit onPress={() => navigation.navigate('Menu')}>
        <MyButtonTextSubmit>Back Warnner</MyButtonTextSubmit>
      </MyButtonSubmit>
    </Container>
  );
}

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
});

export default Shop;