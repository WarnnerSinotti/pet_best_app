import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import themes from '../../../themes';

const DATA = [
  {
    id: '1',
    title: 'Dog',
    image: require('../../../../assets/img/dog.png'),
     //button: () =>  console.log('01')
  },
  {
    id: '2',
    title: 'Cat',
    //button: () => console.log('02')
    image: require('../../../../assets/img/cat.png'),
  },
  {
    id: '3',
    title: 'Bird',
    //button: () => console.log('03')
    image: require('../../../../assets/img/bird.png'),
  },
  {
    id: '4',
    title: 'Fish',
    //button: () => console.log('03')
    image: require('../../../../assets/img/fish.png'),
  },
  {
    id: '5',
    title: 'Hamster',
    //button: () => console.log('03')
    image: require('../../../../assets/img/hamster.png'),
  },
  {
    id: '6',
    title: 'Rabbit',
    //button: () => console.log('03')
    image: require('../../../../assets/img/rabbit.png'),
  },
  {
    id: '7',
    title: 'Turtle',
    //button: () => console.log('03')
    image: require('../../../../assets/img/turtle.png'),
  },
];

interface ItemProps {
  item: any;
  onPress: () => void;
  backgroundColor: any;
  textColor: any;
}

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
  <TouchableOpacity onPress={onPress}  style={[styles.item, backgroundColor]}>
    <Image
            source={item.image}
            style={{
              width: '40%',
              height: '40%',
            }}
          ></Image>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const MenuCategory = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedButton, setSelectedButton] = useState(1);

  const renderItem = ({ item }: ItemProps) => {
    const backgroundColor =
      item.id === selectedId
        ? themes.light.COLORS.secondary
        : themes.light.COLORS.neutral;
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 30,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 12,
  },
  title: {
    fontSize: 32,
  },
});

export default MenuCategory;
