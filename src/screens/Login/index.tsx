import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, KeyboardAvoidingView, Image, View } from 'react-native';
import { Container, Row, RowCenter, RowRight } from '../../components/Global';
import {
  NameAppText,
  NewPetFriendText,
  ORText,
  SubTitulo,
  SubTituloLink,
} from '../../components/Text';
import { useTranslation } from 'react-i18next';
import {
  MyButtonSubmit,
  MyButtonTextSubmit,
  MyButtonSocialSubmit,
  MyButtonSocialTextSubmit,
} from '../../components/Button';
import themes from '../../themes';
import { InputView, InputText } from '../../components/TextInput';
import { MyDivider } from '../../components/Divider';
import {
  IconApple,
  IconEye,
  IconEyeOff,
  IconGoogle,
  IconLock,
  IconMail,
} from '../../components/SVG';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Login(Props: any) {
  const navigation: any = useNavigation();
  const { t } = useTranslation('translation');
  const [textEmail, setTextEmail] = React.useState('');
  const [textPassword, setTextPassword] = React.useState('');
  const [eyed, setEyed] = React.useState(true);

  const VisualPassword = () => {
    setEyed((current) => !current);
  };

  return (
    <Container>
      <KeyboardAvoidingView behavior="position">
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
          <NameAppText>My Pet Friend</NameAppText>
        </RowCenter>
        <Row>
          <SubTitulo>{t('loginScreen.email')}</SubTitulo>
        </Row>
        <RowCenter>
          <InputView>
            <IconMail style={{ color: themes.light.COLORS.neutral }} />
            <InputText
              placeholder={t('loginScreen.email')}
              onChangeText={setTextEmail}
              value={textEmail}
              keyboardType="email-address"
            />
          </InputView>
        </RowCenter>
        <Row>
          <SubTitulo>{t('loginScreen.password')}</SubTitulo>
        </Row>
        <RowCenter>
          <InputView>
            <IconLock style={{ color: themes.light.COLORS.neutral }} />
            <InputText style={{ width: '80%'}}
              secureTextEntry={eyed} //ocultrar senha
              placeholder={t('loginScreen.password')}
              onChangeText={setTextPassword}
              value={textPassword}
              maxLength={20}
            ></InputText>
            <TouchableOpacity onPress={VisualPassword}>
              {eyed ? (
                <IconEyeOff style={{ color: themes.light.COLORS.neutral }} />
              ) : (
                <IconEye style={{ color: themes.light.COLORS.neutral }} />
              )}
            </TouchableOpacity>
          </InputView>
        </RowCenter>
        <RowRight>
          <SubTituloLink onPress={() => Alert.alert('Ainda não funcionando')}>
            {t('loginScreen.forgot_your_password')}
          </SubTituloLink>
        </RowRight>
        <RowCenter>
          <MyButtonSubmit onPress={() => navigation.navigate('Step01')}>
            <MyButtonTextSubmit>{t('loginScreen.login')}</MyButtonTextSubmit>
          </MyButtonSubmit>
        </RowCenter>
      </KeyboardAvoidingView>
      <RowCenter>
        <MyDivider />
        <ORText>{t('loginScreen.or')}</ORText>
        <MyDivider />
      </RowCenter>
      <RowCenter>
        <MyButtonSocialSubmit
          testID={'Google_btn'}
          onPress={() => Alert.alert('Ainda não funcionando')}
        >
          <IconGoogle />
          <MyButtonSocialTextSubmit>
            {t('loginScreen.login_with_google')}
          </MyButtonSocialTextSubmit>
        </MyButtonSocialSubmit>
      </RowCenter>
      <RowCenter>
        <MyButtonSocialSubmit
          testID={'Apple_btn'}
          onPress={() => Alert.alert('Ainda não funcionando')}
        >
          <IconApple />
          <MyButtonSocialTextSubmit>
            {t('loginScreen.login_with_apple')}
          </MyButtonSocialTextSubmit>
        </MyButtonSocialSubmit>
      </RowCenter>

      <RowCenter>
        <NewPetFriendText>
          {t('loginScreen.new_to_my_pet_friend')}
        </NewPetFriendText>
        <SubTituloLink onPress={() => navigation.navigate('Signup')}>
          {t('loginScreen.sign_up')}
        </SubTituloLink>
      </RowCenter>
    </Container>
  );
}
