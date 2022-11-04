import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import themes from '../../../themes';
import { Row } from '../../Global';
import { BodyText } from '../../Text';
import { useTranslation } from 'react-i18next';
import { IconHeart } from '../../SVG';

const DATA = [
  {
    id: '1',
    title: 'dog dog',
    image: require('../../../../assets/img/Products/product01.png'),
    button: '',
  },
  {
    id: '2',
    title: 'cat cat',
    image: require('../../../../assets/img/Products/product02.png'),
    button: '',
  },
];

interface ItemProps {
  item: any;
  onPress: () => void;
  backgroundColor: any;
  textColor: any;
}

const Item = ({ item, onPress, backgroundColor }: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <TouchableOpacity style={styles.cardIcon}>
      <IconHeart style={styles.Icon} width={20} />
    </TouchableOpacity>

    <Image source={item.image} style={styles.image} />
    <Row style={{ padding: 15 }}>
      <BodyText style={styles.title}> {item.title} </BodyText>
    </Row>
  </TouchableOpacity>
);

const FlatShopping = () => {
  const [selectedId, setSelectedId] = useState(null);
  const navigation: any = useNavigation();
  const { t } = useTranslation('translation');

  const renderItem = ({ item }: ItemProps) => {
    const backgroundColor =
      item.id === selectedId
        ? themes.light.COLORS.secondary
        : themes.light.COLORS.neutral;
    const color = item.id === selectedId ? 'white' : 'black';
    item.id === selectedId ? navigation.navigate(item.button) : false;

    return (
      <Row>
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
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop: 5,
    marginVertical: 10,
    borderRadius: 12,
    width: 150,
    height: 200,
  },
  image: {
    width: 140,
    height: 140,
  },
  title: {
    fontSize: 20,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Icon: {
    color: themes.light.COLORS.neutral,
    alignSelf: 'center',
  },
  cardIcon: {
    width: 50,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themes.light.COLORS.background,
    borderRadius: 20,
    margin: -2,
    alignSelf: 'flex-end',
  },
});

export default FlatShopping;
