import { Image, Text, TouchableOpacity, View } from 'react-native';
import { CardCategory, CardTitle } from '../Card/CardCategory';
import { BodyText, SubTituloLink, Titulo } from '../Text';

export const TesteComponent = () => {
  return (
    <View>
      <TouchableOpacity>
         <CardCategory>
         <CardTitle>
        <Image
          source={require('../../../assets/img/fish.png')}
          style={{
            width: '80%',
            height: '80%',
          }}
        />
        <BodyText>Fish</BodyText>
        
        </CardTitle>
        
        </CardCategory>
      </TouchableOpacity>
    </View>
  );
};
