import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

import {
  RowCenter,
  RowLeft,
} from '../Global';
import {
  BodyText,
  NewPetFriendText,
  SubTituloLink,
  Titulo,
} from '../Text';
import {
  MyButtonSubmit,
  MyButtonTextSubmit,
} from '../Button';
import {
  InputView,
  InputText,
  InputTextCenter,
  InputViewCode,
} from '../TextInput';
import {
  IconEye,
  IconEyeOff,
  IconLock,
  IconMail,
} from '../SVG';

import themes from '../../themes';

 interface BottonSheetProps {
  bottomSheetModalRef: any
 }

const BottonSheetForgot: React.FC <BottonSheetProps> = ({bottomSheetModalRef}) => { 

//const BottonSheetForgot = ({...rest}) => {

  const navigation: any = useNavigation();
  const { t } = useTranslation('translation');
  const [textEmail, setTextEmail] = React.useState('');
  const [textPassword, setTextPassword] = React.useState('');
  const [eyed, setEyed] = React.useState(true);

  const [forgotEmail, setForgotEmail] = React.useState('');
  const [Code1, setCode1] = React.useState('');
  const [eyedReset, setEyedReset] = React.useState(true);
  const [password, setPassword] = React.useState('');

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

  const VisualPassword = () => {
    setEyed((current) => !current);
  };

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const Click = () => {
    if (step === 3) {
      setStep(1);
      bottomSheetModalRef.current?.close();
    } else {
      setStep(step + 1);
    }
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
                  secureTextEntry={eyed} //ocultar senha
                  onChangeText={setPassword}
                  value={password}
                  maxLength={3}
                />
                <TouchableOpacity onPress={VisualPassword}>
                  {eyed ? (
                    <IconEyeOff
                      style={{ color: themes.light.COLORS.neutral }}
                    />
                  ) : (
                    <IconEye style={{ color: themes.light.COLORS.neutral }} />
                  )}
                </TouchableOpacity>
              </InputView>
            </RowCenter>
          ) : null}

          {step == 2 ? (
            <RowCenter style={{ paddingTop: 24 }}>
              <MyButtonSubmit
                onPress={() => {
                  console.log('teste');
                }}
              >
                <MyButtonTextSubmit>{dados.TitleButton}</MyButtonTextSubmit>
              </MyButtonSubmit>
            </RowCenter>
          ) : (
            <RowCenter style={{ paddingTop: 24 }}>
              <MyButtonSubmit onPress={() => Click()}>
                <MyButtonTextSubmit>{dados.TitleButton}</MyButtonTextSubmit>
              </MyButtonSubmit>
            </RowCenter>
          )}
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
  // renders
  return (
    <BottomSheetModalProvider >
      <BottomSheetModal
        style={styles.container }
        handleIndicatorStyle={{backgroundColor: themes.light.COLORS.secondary, width: 50}}
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
      >
        <View style={styles.contentContainer}>{listItems}</View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0.9,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    opacity: 0.9,
  },
});

export default BottonSheetForgot;
