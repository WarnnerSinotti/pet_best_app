import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, KeyboardAvoidingView, Image, View } from 'react-native';
import {
  Container,
  Row,
  RowCenter,
  RowLeft,
  RowRight,
} from '../../components/Global';
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
  const [forgotEmail, setForgotEmail] = React.useState('');
  const [Code1, setCode1] = React.useState('');
  const [eyed, setEyed] = React.useState(true);

  const [step, setStep] = useState(1);

  const steps = [
    {
      ID: 1,
      Title: t('forgotScreen.forgotYourPassword'),
      Message: t('forgotScreen.noWorries'),
      TitleInput: t('forgotScreen.email'),
      TitleButton: t('forgotScreen.sendCode'),
    },
    {
      ID: 2,
      Title: t('forgotScreen.checkYourEmail'),
      Message: t('forgotScreen.verificationCode'),
      TitleInput: t('forgotScreen.enterCode'),
      TitleButton: t('forgotScreen.done'),
    },
    {
      ID: 3,
      Title: t('forgotScreen.newPassword'),
      Message: t('forgotScreen.mustBeDifferentUsedPasswords'),
      TitleInput: t('forgotScreen.password'),
      TitleButton: t('forgotScreen.resetPassword'),
    },
  ];

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open('default');
  };


  const VisualPassword = () => {
    setEyed((current) => !current);
  };

  /*   const SendCodeView = () => {
    <Row>
      <InputView>
        <InputText>APARECER CODE VIEW</InputText>
      </InputView>
    </Row>;
  }; */

  const Click = () => {
    if (step === 3) {
      modalizeRef.current?.close('default');
      setStep(1)
    }
    setStep(step + 1);
  };

  const listItems = steps.map((post) => {
    if (step == post.ID) {
      return (
        <Container key={post.ID}>
          <View>
            <RowCenter style={{ paddingTop: 24 }}>
              <Titulo>{post.Title}</Titulo>
            </RowCenter>
            <RowCenter style={{ paddingTop: 4 }}>
              <BodyText>{post.Message}</BodyText>
            </RowCenter>
            <RowLeft style={{ paddingTop: 24 }}>
              <BodyText>{post.TitleInput}</BodyText>
            </RowLeft>
            {step == 1 ? (
              <RowCenter style={{ paddingTop: 8 }}>
                <InputView>
                  <IconMail style={{ color: themes.light.COLORS.neutral }} />
                  <InputText
                    placeholder={t('forgotScreen.emailPlaceholder')}
                    onChangeText={setForgotEmail}
                    value={forgotEmail}
                    keyboardType="email-address"
                  />
                </InputView>
              </RowCenter>
            ) : step == 2 ? (
              <RowCenter style={{ paddingTop: 8 }}>
                <InputView>
                  <IconMail style={{ color: themes.light.COLORS.neutral }} />
                  <InputText
                    placeholder={'STEP02'}
                    onChangeText={setCode1}
                    value={Code1}
                    keyboardType="email-address"
                  />
                </InputView>
              </RowCenter>
            ) : step == 3 ? (
              <RowCenter style={{ paddingTop: 8 }}>
                <InputView>
                  <IconMail style={{ color: themes.light.COLORS.neutral }} />
                  <InputText
                    placeholder={'STEP03'}
                    onChangeText={setCode1}
                    value={Code1}
                    keyboardType="email-address"
                  />
                </InputView>
              </RowCenter>
            ) : null}

            <RowCenter style={{ paddingTop: 24 }}>
              <MyButtonSubmit onPress={() => Click()}>
                <MyButtonTextSubmit>{post.TitleButton}</MyButtonTextSubmit>
              </MyButtonSubmit>
            </RowCenter>
            {step == 2 ? (
              <RowCenter style={{ paddingTop: 8 }}>
                <BodyText>ADICIONAR Didn’t receive the link? Resend</BodyText>
              </RowCenter>
            ) : null}
          </View>
        </Container>
      );
    }
  });

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
            <IconMail style={{ color: themes.light.COLORS.neutral }} />
            <InputText
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
        <RowRight style={{ paddingTop: 8 }}>
          <SubTituloLink onPress={() => onOpen()}>
            {t('loginScreen.forgot_your_password')}
          </SubTituloLink>
        </RowRight>
        <RowCenter style={{ paddingTop: 32 }}>
          <MyButtonSubmit onPress={() => navigation.navigate('Step01')}>
            <MyButtonTextSubmit>{t('loginScreen.login')}</MyButtonTextSubmit>
          </MyButtonSubmit>
        </RowCenter>
      </KeyboardAvoidingView>
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

      {/* FORGOT */}
      <Modalize
        openAnimationConfig={{
          timing: { duration: 500 },
          spring: { speed: 1 },
        }}
        snapPoint={600}
        ref={modalizeRef}
      >
        {listItems}
      </Modalize>
    </Container>
  );
}
