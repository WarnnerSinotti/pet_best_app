import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Image,
  View,
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
  MyButtonText,
  MyByttonSocial,
} from '../../components/Button';
import themes from '../../themes';
import { TextInputEmail } from '../../components/TextInput';
import { Divider } from '@react-native-material/core';
import { MyDivider } from '../../components/Divider';
import Mail from '../../../assets/icons/mail.svg';
import Lock from '../../../assets/icons/lock.svg';
import Google from '../../../assets/icons/google.svg';
import Apple from '../../../assets/icons/apple.svg';

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
      <RowCenter>
        <MyButton onPress={() => navigation.navigate('Menu')}>
        <MyButtonText>{t('loginScreen.login')}</MyButtonText>
        </MyButton>
      </RowCenter>
      <RowDivider>
        <MyDivider />
        <Titulo style={{ color: themes.light.COLORS.neutral }}>
          {t('loginScreen.or')}
        </Titulo>
        <MyDivider />
      </RowDivider>
      <RowCenter>
      <MyByttonSocial onPress={() => Alert.alert('Ainda não funcionando')}>
        <Google height={25} width={25} />
      <MyButtonText>{t('loginScreen.login_with_google')}</MyButtonText>
      </MyByttonSocial>
      </RowCenter>
      <RowCenter>
      <MyByttonSocial onPress={() => Alert.alert('Ainda não funcionando')}>
        <Apple height={25} width={25} />
      <MyButtonText>{t('loginScreen.login_with_apple')}</MyButtonText>
      </MyByttonSocial>
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
