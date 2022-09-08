import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import BottomSheet from '@gorhom/bottom-sheet';

import { RowCenter, RowLeft } from '../../components/Global';
import {
  BodyText,
  NewPetFriendText,
  SubTituloLink,
  Titulo,
} from '../../components/Text';
import { MyButtonSubmit, MyButtonTextSubmit } from '../../components/Button';
import {
  InputView,
  InputText,
  InputViewCode,
  InputTextCenter,
} from '../../components/TextInput';
import { IconEye, IconEyeOff, IconLock, IconMail } from '../../components/SVG';

import themes from '../../themes';

const Forgot = () => {
  const navigation: any = useNavigation();
  const { t } = useTranslation('translation');
  const [textEmail, setTextEmail] = React.useState('');
  const [textPassword, setTextPassword] = React.useState('');
  const [forgotEmail, setForgotEmail] = React.useState('');
  const [Code1, setCode1] = React.useState('');
  const [eyed, setEyed] = React.useState(true);
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

  const Click = () => {
    console.log(step, "contador")
    if (step == 3) {
      navigation.navigate('Login');
      bottomSheetRef.current?.snapToIndex
      console.log('entrou aqui')
    }

    setStep(step + 1);
    console.log(step);
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
              <MyButtonSubmit onPress={() => navigation.navigate('Login')}>
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

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => [1, '50%'], []);

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      //onChange={handleSheetChanges}
      handleIndicatorStyle={{ backgroundColor: themes.light.COLORS.secondary}}
    >
      <View style={styles.contentContainer}>{listItems}</View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Forgot;
