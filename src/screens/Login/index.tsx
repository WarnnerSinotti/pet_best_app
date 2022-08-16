import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, KeyboardAvoidingView, Image } from 'react-native';
import {
  Container,
  Row,
  RowCenter,
  RowRight,
  RowDivider,
} from '../../components/Global';
import { SubTitulo, SubTituloLink, Titulo } from '../../components/Text';
import { useTranslation } from 'react-i18next';
import {
  MyButtonSubmit,
  MyButtonTextSubmit,
  MyByttonSocialSubmit,
  MyByttonSocialTextSubmit,
} from '../../components/Button';
import themes from '../../themes';
import {
  InputIconView,
  InputText,
} from '../../components/TextInputIcon';
import { MyDivider } from '../../components/Divider';
import Google from '../../../assets/icons/google.svg';
import Apple from '../../../assets/icons/apple.svg';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Login(Props: any) {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [textEmail, setTextEmail] = React.useState('');
  const [textPassword, setTextPassword] = React.useState('');
  const [eyed, setEyed] = React.useState(true); 

  const VisualPassword = () => {
    setEyed((current) => !current);
  };

  return (
    <Container>
      <RowCenter>
        <Image
          source={require('../../../assets/img/dog.png')}
          style={{
            width: 150,
            height: 150,
            justifyContent: 'center',
            alignContent: 'center',
          }}
        />
      </RowCenter>
      <RowCenter>
        <Titulo>
          My Pet Friend
        </Titulo>
        </RowCenter>
      <Row>
        <SubTitulo>{t('loginScreen.email')}</SubTitulo>
      </Row>
      <RowCenter>
        <InputIconView>
          <Ionicons name="mail" size={20} color={'grey'} />
          <InputText
            placeholder={t('loginScreen.email')}
            onChangeText={setTextEmail}
            value={textEmail}
          />
        </InputIconView>
      </RowCenter>
      <Row>
        <SubTitulo>{t('loginScreen.password')}</SubTitulo>
      </Row>
      <RowCenter>
        <InputIconView>
          <Ionicons name="key" size={20} color={'grey'} />
          <InputText
            secureTextEntry={eyed} //ocultrar senha
            placeholder={t('loginScreen.password')}
            onChangeText={setTextPassword}
            value={textPassword}
          ></InputText>
          <Ionicons
            name="camera"
            size={20}
            color={'grey'}
            onPress={VisualPassword}
          />
        </InputIconView>
      </RowCenter>
     
      <RowRight>
        <SubTituloLink onPress={() => Alert.alert('Ainda não funcionando')}>
          {t('loginScreen.forgot_your_password')}
        </SubTituloLink>
      </RowRight>
      <RowCenter>
        <MyButtonSubmit onPress={() => navigation.navigate('Menu')}>
          <MyButtonTextSubmit>{t('loginScreen.login')}</MyButtonTextSubmit>
        </MyButtonSubmit>
      </RowCenter>
      <RowDivider>
        <MyDivider />
        <SubTitulo style={{ color: themes.light.COLORS.neutral }}>
          {t('loginScreen.or')}
        </SubTitulo>
        <MyDivider />
      </RowDivider>
      <RowCenter>
        <MyByttonSocialSubmit
          testID={'Google_btn'}
          onPress={() => Alert.alert('Ainda não funcionando')}
        >
          <Google height={25} width={25} />
          <MyByttonSocialTextSubmit>
            {t('loginScreen.login_with_google')}
          </MyByttonSocialTextSubmit>
        </MyByttonSocialSubmit>
      </RowCenter>
      <RowCenter>
        <MyByttonSocialSubmit
          testID={'Apple_btn'}
          onPress={() => Alert.alert('Ainda não funcionando')}
        >
          <Apple height={25} width={25} />
          <MyByttonSocialTextSubmit>
            {t('loginScreen.login_with_apple')}
          </MyByttonSocialTextSubmit>
        </MyByttonSocialSubmit>
      </RowCenter>

      <RowCenter>
        <SubTitulo>{t('loginScreen.new_to_my_pet_friend')}</SubTitulo>
        <SubTituloLink onPress={() => Alert.alert('Ainda não funcionando')}>
          {t('loginScreen.sign_in')}
        </SubTituloLink>
      </RowCenter>
    </Container>
  );
}
