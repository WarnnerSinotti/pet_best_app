import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

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
import {
  MyButtonSubmit,
  MyButtonTextSubmit,
  MyButtonSocialSubmit,
  MyButtonSocialTextSubmit,
} from '../../components/Button';
import { InputView, InputText, InputTextCenter, InputViewCode } from '../../components/TextInput';
import { MyDivider } from '../../components/Divider';
import {
  IconApple,
  IconEye,
  IconEyeOff,
  IconGoogle,
  IconLock,
  IconMail,
} from '../../components/SVG';

import themes from '../../themes';
import { useEffect } from 'react';

const Teste = () => {
 
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
 
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);


  const Click = () => {
    if (step === 3) {
      navigation.navigate('Login');
      setStep(0)
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
              <MyButtonSubmit onPress={() => {console.log('teste')}}>
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
    <BottomSheetModalProvider>
     
         <Button
          onPress={handlePresentModalPress}
          title="Button Funcional"
          color="black"
        /> 
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            {listItems}
          </View>
        </BottomSheetModal>
     
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Teste;
