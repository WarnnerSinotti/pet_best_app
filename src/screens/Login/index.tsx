import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, KeyboardAvoidingView, Image, View } from 'react-native';
import { Container, Row, RowCenter, RowLeft, RowRight } from '../../components/Global';
import {
  BodyText,
  NameAppText,
  NewPetFriendText,
  ORText,
  SubTitulo,
  SubTituloLink,
  Titulo,
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
import { Modalize } from 'react-native-modalize';

export default function Login(Props: any) {
  const navigation: any = useNavigation();
  const { t } = useTranslation('translation');
  const [textEmail, setTextEmail] = React.useState('');
  const [textPassword, setTextPassword] = React.useState('');
  const [eyed, setEyed] = React.useState(true);

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open('default');
  };

  const onClose = () => {
    modalizeRef.current?.close('default');
  };


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
        <RowCenter style={{paddingTop: 6}}>
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
        <Row style={{paddingTop: 16}}>
          <SubTitulo>{t('loginScreen.password')}</SubTitulo>
        </Row>
        <RowCenter style={{paddingTop: 6}}>
          <InputView>
            <IconLock style={{ color: themes.light.COLORS.neutral }} />
            <InputText
              style={{ width: '80%' }}
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
        <RowRight style={{paddingTop: 8}}>
          <SubTituloLink onPress={() => onOpen()}>
            {t('loginScreen.forgot_your_password')}
          </SubTituloLink>
        </RowRight>
        <RowCenter style={{paddingTop: 32}}>
          <MyButtonSubmit onPress={() => navigation.navigate('Step01')}>
            <MyButtonTextSubmit>{t('loginScreen.login')}</MyButtonTextSubmit>
          </MyButtonSubmit>
        </RowCenter>
      </KeyboardAvoidingView>
      <RowCenter style={{paddingTop: 40}}>
        <MyDivider />
        <ORText>{t('loginScreen.or')}</ORText>
        <MyDivider />
      </RowCenter>
      <RowCenter style={{paddingTop: 40}}>
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
      <RowCenter style={{paddingTop: 16}}>
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

      <RowCenter style={{paddingTop: 42}}>
        <NewPetFriendText>
          {t('loginScreen.new_to_my_pet_friend')}
        </NewPetFriendText>
        <SubTituloLink onPress={() => navigation.navigate('Signup')}>
          {t('loginScreen.sign_up')}
        </SubTituloLink>
      </RowCenter>

      {/* FORGOT */}
      <Modalize
        openAnimationConfig={{
          timing: { duration: 15000 },
          spring: { speed: 0.1 },
        }}
        snapPoint={300}
        ref={modalizeRef}
      >
        <RowCenter style={{paddingTop: 24}}>
        <Titulo>{t('forgotScreen.forgot_your_password')}</Titulo>
        </RowCenter>
        <RowCenter style={{paddingTop: 4}}>
        <BodyText>{t('forgotScreen.no_worries')}</BodyText>
        </RowCenter>
        <RowLeft style={{paddingTop: 24}}>
        <BodyText>{t('forgotScreen.email')}</BodyText>
        </RowLeft>
        <RowCenter style={{paddingTop: 8}}>
          <InputView>
            <IconMail style={{ color: themes.light.COLORS.neutral }} />
            <InputText
              placeholder={t('forgotScreen.emailPlaceholder')}
              onChangeText={setTextEmail}
              value={textEmail}
              keyboardType="email-address"
            />
          </InputView>
        </RowCenter>
        <RowCenter style={{paddingTop: 24}}>
        <MyButtonSubmit  onPress={() => onClose()}>
          <MyButtonTextSubmit>{t('forgotScreen.sendCode')}</MyButtonTextSubmit>
        </MyButtonSubmit>
        </RowCenter>
      </Modalize>
    </Container>
  );
}
