import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import { MyButtonSubmit, MyButtonTextSubmit } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import HeaderMy from '../../components/Header';
import { Container, Row } from '../../components/Global';
import Search from '../../components/Search';
import MenuCategory from '../../components/FlatList/MenuCategory';
import { SubTitulo } from '../../components/Text';


const Shop = () => {


  const navigation: any = useNavigation();

  return (
    <Container style={{ justifyContent: 'flex-start', paddingTop: 50 }}>
       <HeaderMy />
       <Search />
       <Row style={{paddingTop: 20}}>
       <SubTitulo>Category</SubTitulo>
       </Row>
   
     <MenuCategory /> 

     

    
    


     <Row >
       <SubTitulo>Last Itens</SubTitulo>
       </Row>
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