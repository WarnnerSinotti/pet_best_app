import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, KeyboardAvoidingView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import { Container, Row, RowCenter, RowRight } from '../../components/Global';
import {
  NameAppText,
  NewPetFriendText,
  ORText,
  SubTitulo,
  SubTituloLink,
} from '../../components/Text';
import {
  MyButtonSubmit,
  MyButtonTextSubmit,
  MyButtonSocialSubmit,
  MyButtonSocialTextSubmit,
} from '../../components/Button';
import { InputView, InputText } from '../../components/TextInput';
import { MyDivider } from '../../components/Divider';
import BottonSheetForgot from '../../components/BottonSheetForgot';
import {
  IconApple,
  IconEye,
  IconEyeOff,
  IconGoogle,
  IconLock,
  IconMail,
} from '../../components/SVG';

import themes from '../../themes';


export default function Login({}) {
  const navigation: any = useNavigation();
  const { t } = useTranslation('translation');
  const [textEmail, setTextEmail] = React.useState('');
  const [textPassword, setTextPassword] = React.useState('');
  const [eyed, setEyed] = React.useState(true);

  const VisualPassword = () => {
    setEyed((current) => !current);
  };
 
  const warnner = () => {
    console.log('entrar')
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
        <RowCenter style={{ paddingTop: 6 }}>
          <InputView>
            <IconMail
              style={{ marginLeft: 10, color: themes.light.COLORS.neutral }}
            />
            <InputText
              style={{ marginLeft: 8 }}
              placeholder={t('loginScreen.email')}
              onChangeText={setTextEmail}
              value={textEmail}
              keyboardType="email-address"
            />
          </InputView>
        </RowCenter>
        <Row style={{ paddingTop: 16 }}>
          <SubTitulo>{t('loginScreen.password')}</SubTitulo>
        </Row>
        <RowCenter style={{ paddingTop: 6 }}>
          <InputView>
            <IconLock
              style={{ marginLeft: 10, color: themes.light.COLORS.neutral }}
            />
            <InputText
              style={{ marginLeft: 8, width: '72%' }}
              secureTextEntry={eyed} //ocultar senha
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
      </KeyboardAvoidingView>
      <RowRight style={{ paddingTop: 8 }}>
        <SubTituloLink
          onPress={warnner}
        >
          {t('loginScreen.forgot_your_password')}
        </SubTituloLink>
      </RowRight>
      <RowCenter style={{ paddingTop: 32 }}>
        <MyButtonSubmit onPress={() => navigation.navigate('Step01')}>
          <MyButtonTextSubmit>{t('loginScreen.login')}</MyButtonTextSubmit>
        </MyButtonSubmit>
      </RowCenter>

      <RowCenter style={{ paddingTop: 40 }}>
        <MyDivider />
        <ORText>{t('loginScreen.or')}</ORText>
        <MyDivider />
      </RowCenter>
      <RowCenter style={{ paddingTop: 40 }}>
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
      <RowCenter style={{ paddingTop: 16 }}>
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

      <RowCenter style={{ paddingTop: 42 }}>
        <NewPetFriendText>
          {t('loginScreen.new_to_my_pet_friend')}
        </NewPetFriendText>
        <SubTituloLink onPress={() => navigation.navigate('Signup')}>
          {t('loginScreen.sign_up')}
        </SubTituloLink>
      </RowCenter>
      
      <BottonSheetForgot warnner={() => console.log('warnner')}/>
    </Container>
  );
}
