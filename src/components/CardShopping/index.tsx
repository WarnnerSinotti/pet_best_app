import React from 'react';
import { StyleSheet } from 'react-native';
import { Row } from '../Global';
import { BodyText } from '../Text';

const DATA = [
  {
    id: '1',
    image: require('../../../../assets/img/dog.png'),
    text: 'product 1'
  },{
    id: '2',
    image: require('../../../../assets/img/dog.png'),
    text: 'product 2'
  },
  {
    id: '3',
    image: require('../../../../assets/img/dog.png'),
    text: 'product 3'
  },
];

/* interface ItemProps {
  item: any;
  onPress: () => void;
  backgroundColor: any;
  textColor: any;
} */

const CardLastItem = () => {
  
  return (
    <Row>
      <BodyText>Criar a Lista de Items</BodyText>
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
    justifyContent: 'center',
  },
});

export default CardLastItem;
