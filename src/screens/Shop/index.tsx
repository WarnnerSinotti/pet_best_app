import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { MyButtonSubmit, MyButtonTextSubmit } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import HeaderMy from '../../components/Header';
import { Container } from '../../components/Global';
import Search from '../../components/Search';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title, onPress }) => (
  <View style={styles.item}>
    <Text onPress={onPress} style={styles.title}>{title}</Text>
  </View>
);

const Shop = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  const navigation: any = useNavigation();

  return (
    <Container style={{ justifyContent: 'flex-start', paddingTop: 50 }}>
       <HeaderMy />
       <Search />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
      />
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