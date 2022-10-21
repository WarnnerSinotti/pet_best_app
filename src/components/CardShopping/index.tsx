import { View } from 'moti';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Row } from '../Global';
import { IconApple, IconHeart } from '../SVG';
import { BodyText } from '../Text';
import { Image } from 'react-native';

const DATA = [
  {
    id: '1',
    image: require('../../../assets/img/dog.png'),
    text: 'product 1',
  },
  {
    id: '2',
    image: require('../../../assets/img/dog.png'),
    text: 'product 2',
  },
  {
    id: '3',
    image: require('../../../assets/img/dog.png'),
    text: 'product 3',
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
     
    <View style={styles.container}>

    <View>
    <TouchableOpacity style={styles.warnner} >
    <IconHeart style={styles.icon}/>
    </TouchableOpacity>
    </View>
    <Image
      source={require('../../../assets/img/cat.png')}
      style={{
        width: '100%',
        height: '40%',
      }}
    />
    
    </View>
    <View>
    <BodyText>Criar a Lista de Items</BodyText>
    </View>
   
    
    </Row>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '40%',
    borderRadius: 12,
    backgroundColor: "#F3F3F3",
  },
  card:{
    height: '100%',
    width: '50%',
  },
  icon:{
    color: '#C6C6C6',
    backgroundColor: 'white',
    borderRadius: 80,
  },
  iconContainer:{
    alignContent: 'flex-end'
  },
  warnner: {
    paddingLeft: 140,
    bottom: 10,
  },
});

export default CardLastItem;
