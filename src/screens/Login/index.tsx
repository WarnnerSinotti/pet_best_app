import React from 'react';
import { Text, StyleSheet, Alert } from 'react-native';
import { Container } from '../../components/Global';
import { TitleLogo, Titulo } from '../../components/Text';
import { useTranslation } from 'react-i18next';
import { MyButtonLogin } from '../../components/Button';
import themes from '../../themes';

export default function Login() {
  const { t } = useTranslation();

  return (
    <Container>
      <TitleLogo>ICONE</TitleLogo>
      <TitleLogo>My Pet Friend</TitleLogo>
      <Titulo>{t('loginScreen.email')}</Titulo>
      <Titulo>{t('loginScreen.password')}</Titulo>
      <Titulo>{t('loginScreen.forgot_your_password')}</Titulo>
      <MyButtonLogin 
        style={{ backgroundColor: 'grey' }}
        onPress={() => Alert.alert('Cannot press this one')}
      >{t('loginScreen.login')}</MyButtonLogin>

      <Titulo>{t('loginScreen.or')}</Titulo>
      <Titulo>{t('loginScreen.login_with_google')}</Titulo>
      <Titulo>{t('loginScreen.login_with_apple')}</Titulo>
      <Titulo>{t('loginScreen.new_to_my_pet_friend')}</Titulo>
      <Titulo>{t('loginScreen.sign_in')}</Titulo>
    </Container>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
