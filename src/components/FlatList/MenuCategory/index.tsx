import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import themes from '../../../themes';
import { Row } from '../../Global';
import { BodyText } from '../../Text';

//const navigation: any = useNavigation();

const DATA = [
  {
    id: '1',
    title: 'Dog',
    image: require('../../../../assets/img/dog.png'),
    //button: navigation.navigate('menu')
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
              width: '100%',
              height: '100%',
              bottom: 30
            }}
          ></Image>
    <BodyText style={[styles.title, textColor]}>{item.title}</BodyText>
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
      <Row style={{width: '10%', justifyContent: 'left' }}>
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
      </Row>
    );
  };

  return (
    <Row>
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      </Row>
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop: 35,
    marginVertical: 20,
    marginRight: 40,
    borderRadius: 12,
    width: 80,
    height: 90,
  },
  title: {
    fontSize: 10,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default MenuCategory;
