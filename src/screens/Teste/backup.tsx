import React, { useRef, useState, useEffect } from 'react';
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
  MyButtonNext,
} from '../../components/Button';
import themes from '../../themes';
import {
  InputView,
  InputText,
  InputViewCode,
  InputTextCenter,
} from '../../components/TextInput';
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
import { Modalize, useModalize } from 'react-native-modalize';

export default function Backup(Props: any) {
  const navigation: any = useNavigation();
  const { t } = useTranslation('translation');
  const [textEmail, setTextEmail] = React.useState('');
  const [textPassword, setTextPassword] = React.useState('');
  const [forgotEmail, setForgotEmail] = React.useState('');
  const [Code1, setCode1] = React.useState('');
  const [eyed, setEyed] = React.useState(true);
  const [eyedReset, setEyedReset] = React.useState(true);
  const [resetPassword, setResetPassword] = React.useState('');

  const [step, setStep] = useState(1);

  const group = [
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

  const { ref, open, close } = useModalize();

  /* const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  
  }; */

  const VisualPassword = () => {
    setEyed((current) => !current);
  };

  const VisualResetPassword = () => {
    console.log('entrar aqui');
    
  };

  const Click = () => {
    if (step === 3) {
      close;
    }
    setStep(step + 1);
    console.log(step)
  };

  const listItems = group.map((dados) => {
    if (step == dados.ID) {
      return (
        <View key={dados.ID}>
          <RowCenter style={{ paddingTop: 24 }}>
            <Titulo>{dados.Title}</Titulo>
          </RowCenter>
          <RowCenter style={{ paddingTop: 4 }}>
            <BodyText>{dados.Message}</BodyText>
          </RowCenter>
          <RowLeft style={{ paddingTop: 24 }}>
            <BodyText>{dados.TitleInput}</BodyText>
          </RowLeft>
          {step == 1 ? (
            <RowCenter style={{ paddingTop: 8 }}>
              <InputView>
                <IconMail
                  style={{ marginLeft: 10, color: themes.light.COLORS.neutral }}
                />
                <InputText
                  style={{ marginLeft: 8 }}
                  placeholder={t('forgotScreen.emailPlaceholder')}
                  onChangeText={setForgotEmail}
                  value={forgotEmail}
                  keyboardType="email-address"
                />
              </InputView>
            </RowCenter>
          ) : step == 2 ? (
            <RowCenter style={{ paddingTop: 8 }}>
              <InputViewCode>
                <InputTextCenter
                  onChangeText={setCode1}
                  value={Code1}
                  keyboardType="numeric"
                >
                  1
                </InputTextCenter>
              </InputViewCode>
              <InputViewCode
                style={{ marginLeft: 12 }}
                onChangeText={setCode1}
                value={Code1}
                keyboardType="numeric"
              >
                <InputTextCenter>2</InputTextCenter>
              </InputViewCode>
              <InputViewCode
                style={{ marginLeft: 12 }}
                onChangeText={setCode1}
                value={Code1}
                keyboardType="numeric"
              >
                <InputTextCenter>3</InputTextCenter>
              </InputViewCode>
              <InputViewCode
                style={{ marginLeft: 12 }}
                onChangeText={setCode1}
                value={Code1}
                keyboardType="numeric"
              >
                <InputTextCenter>4</InputTextCenter>
              </InputViewCode>
              <InputViewCode
                style={{ marginLeft: 12 }}
                onChangeText={setCode1}
                value={Code1}
                keyboardType="numeric"
              >
                <InputTextCenter>5</InputTextCenter>
              </InputViewCode>
            </RowCenter>
          ) : step == 3 ? (
            <RowCenter style={{ paddingTop: 8 }}>
              <InputView>
                <IconLock
                  style={{ marginLeft: 10, color: themes.light.COLORS.neutral }}
                />
                <InputText
                  style={{ marginLeft: 8, width: '72%' }}
                  placeholder={t('forgotScreen.enterYourNewPassword')}
                  secureTextEntry={eyedReset} //ocultar senha
                  onChangeText={setResetPassword}
                  value={resetPassword}
                  maxLength={3}
                />
               <TouchableOpacity onPress={VisualResetPassword}>
              {eyed ? (
                <IconEyeOff style={{ color: themes.light.COLORS.neutral }} />
              ) : (
                <IconEye style={{ color: themes.light.COLORS.neutral }} />
              )}
            </TouchableOpacity>
               {/*  <TouchableOpacity onPress={VisualResetPassword}>
                  {eyedReset ? (
                    <IconEyeOff
                      style={{ color: themes.light.COLORS.neutral }}
                    />
                  ) : (
                    <IconEye style={{ color: themes.light.COLORS.neutral }} />
                  )}
                </TouchableOpacity> */}
              </InputView>
            </RowCenter>
          ) : null}

          <RowCenter style={{ paddingTop: 24 }}>
            <MyButtonSubmit onPress={() => Click()}>
              <MyButtonTextSubmit>{dados.TitleButton}</MyButtonTextSubmit>
            </MyButtonSubmit>
          </RowCenter>
          {step == 2 ? (
            <RowCenter style={{ paddingTop: 26 }}>
              <NewPetFriendText>
                {t('forgotScreen.receiveTheLink')}
              </NewPetFriendText>
              <SubTituloLink onPress={() => Click()}>
                {t('forgotScreen.resend')}
              </SubTituloLink>
            </RowCenter>
          ) : null}
        </View>
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
        <SubTituloLink onPress={open}>
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

      {/* FORGOT */}
      <Modalize 
        openAnimationConfig={{
          timing: { duration: 500 },
          spring: { speed: 1 },
        }}
        snapPoint={600}
        ref={ref}
      >
        {listItems}
      </Modalize>
    </Container>
  );
}
