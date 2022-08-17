import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, KeyboardAvoidingView, Image } from 'react-native';
import {
  Container,
  Row,
  RowCenter,
  RowRight,
} from '../../components/Global';
import { NameAppText, NewPetFriendText, ORText, SubTitulo, SubTituloLink} from '../../components/Text';
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
import Ionicons from '@expo/vector-icons/Ionicons';
import { IconApple, IconEye, IconEyeOff, IconGoogle, IconLock, IconMail } from '../../components/SVG';

export default function Login(Props: any) {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [textEmail, setTextEmail] = React.useState('');
  const [textPassword, setTextPassword] = React.useState('');
  const [eyed, setEyed] = React.useState(true); 

  const VisualPassword = () => {
    setEyed((current) => !current);
  };

  /* const button = Button: any/

  if (isLoggedIn) {
    button = <LogoutButton onClick={this.handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={this.handleLoginClick} />;
  } */

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
        <NameAppText>
          My Pet Friend
        </NameAppText>
        </RowCenter>
      <Row>
        <SubTitulo>{t('loginScreen.email')}</SubTitulo>
      </Row>
      <RowCenter>
        <InputIconView>
          <IconMail style={{ color: themes.light.COLORS.neutral }}/>
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
          <IconLock style={{ color: themes.light.COLORS.neutral }} />
          <InputText
            secureTextEntry={eyed} //ocultrar senha
            placeholder={t('loginScreen.password')}
            onChangeText={setTextPassword}
            value={textPassword}
          ></InputText>
          <IconEyeOff style={{ color: themes.light.COLORS.neutral }}
            onPress={VisualPassword} />
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
      <RowCenter>
      <MyDivider />
        <ORText>
          {t('loginScreen.or')}
        </ORText>
        <MyDivider />
      </RowCenter>
      <RowCenter>
        <MyByttonSocialSubmit
          testID={'Google_btn'}
          onPress={() => Alert.alert('Ainda não funcionando')}
        >
          <IconGoogle/>
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
          <IconApple/>
          <MyByttonSocialTextSubmit>
            {t('loginScreen.login_with_apple')}
          </MyByttonSocialTextSubmit>
        </MyByttonSocialSubmit>
      </RowCenter>

      <RowCenter>
        <NewPetFriendText>{t('loginScreen.new_to_my_pet_friend')}</NewPetFriendText>
        <SubTituloLink onPress={() => Alert.alert('Ainda não funcionando')}>
          {t('loginScreen.sign_in')}
        </SubTituloLink>
      </RowCenter>
    </Container>
  );
}
