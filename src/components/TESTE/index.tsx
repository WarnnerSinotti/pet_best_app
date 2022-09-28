import { Image, TouchableOpacity, View } from 'react-native';
import { CardCategory } from '../Card/CardCategory';
import { Row, RowCenter } from '../Global';
import { BodyText, SubTituloLink, Titulo } from '../Text';

export const TesteComponent = () => {
  return (
    <View>
      <TouchableOpacity>
         <CardCategory>
          
        <Image
          source={require('../../../assets/img/fish.png')}
          style={{
            width: '100%',
            height: '100%',
            bottom: 15
          }}
        />
        <BodyText style={{bottom: 15}}>Fish</BodyText>
        
        </CardCategory>
      </TouchableOpacity>
    </View>
  );
};
