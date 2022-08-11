import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import {
  Container,
  Column,
  Row,
  RowCenter,
  RowLeft,
  RowRight,
  RowDivider,
} from '../../components/Global';
import { SubTitulo, SubTituloLink, Titulo } from '../../components/Text';
import { useTranslation } from 'react-i18next';
import {
  MyButton,
  MyButtonGoogle,
  MyButtonApple,
} from '../../components/Button';
import themes from '../../themes';
import { TextInputEmail } from '../../components/TextInput';
import { Divider } from '@react-native-material/core';
import { MyDivider } from '../../components/Divider';

export default function Login() {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [textEmail, setTextEmail] = React.useState('');
  const [textPassword, setTextPassword] = React.useState('');

  return (
    <Container>
      <RowCenter>
        <Image
          source={require('../../../assets/img/logo.png')}
          style={{
            width: 200,
            height: 250,
            justifyContent: 'center',
            alignContent: 'center',
          }}
        />
      </RowCenter>
      <Row>
        <Titulo>{t('loginScreen.email')}</Titulo>
      </Row>
      <TextInputEmail
        placeholder={t('loginScreen.email')}
        onChangeText={setTextEmail}
        value={textEmail}
      />
      <Row>
        <Titulo>{t('loginScreen.password')}</Titulo>
      </Row>
      <TextInputEmail
        secureTextEntry={true} //ocultrar senha
        placeholder={t('loginScreen.password')}
        onChangeText={setTextPassword}
        value={textPassword}
      />
      <RowRight>
        <SubTituloLink onPress={() => Alert.alert('Ainda não funcionando')}>
          {t('loginScreen.forgot_your_password')}
        </SubTituloLink>
      </RowRight>
      <MyButton onPress={navigation.navigate('Menu')}>
        {t('loginScreen.login')}
      </MyButton>
      <RowDivider>
        <MyDivider />
        <Titulo style={{ color: themes.light.COLORS.neutral }}>
          {t('loginScreen.or')}
        </Titulo>
        <MyDivider />
      </RowDivider>
      <MyButtonGoogle onPress={() => Alert.alert('Ainda não funcionando')}>
        {t('loginScreen.login_with_google')}
      </MyButtonGoogle>

      <MyButtonApple onPress={() => Alert.alert('Ainda não funcionando')}>
        {t('loginScreen.login_with_apple')}
      </MyButtonApple>

      <RowCenter>
        <SubTitulo>{t('loginScreen.new_to_my_pet_friend')}</SubTitulo>
        <SubTituloLink onPress={() => Alert.alert('Ainda não funcionando')}>
          {t('loginScreen.sign_in')}
        </SubTituloLink>
      </RowCenter>
    </Container>
  );
}
