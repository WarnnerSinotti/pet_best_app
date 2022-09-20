import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, KeyboardAvoidingView, Image, View } from 'react-native';
import {
  CollumSignup,
  ContainerSignup,
  Row,
  RowCenter,
  RowLeft,
} from '../../components/Global';
import {
  BodySmallText,
  BodyText,
  NewPetFriendText,
  ORText,
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
import {
  InputText,
  InputTextBirth,
  InputView,
} from '../../components/TextInput';
import { MyDivider } from '../../components/Divider';
import {
  IconApple,
  IconEye,
  IconEyeOff,
  IconGoogle,
  IconMail,
  IconUser,
} from '../../components/SVG';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CardContainerSingup } from '../../components/Card/CardGlobal';
import { MotiView } from 'moti';
import { ProgressSignup } from '../../components/Progress';

export default function Signup(Props: any) {
  const navigation: any = useNavigation();
  const { t } = useTranslation('translation');

  const [name, setName] = React.useState('');
  const [day, setDay] = React.useState('');
  const [month, setMonth] = React.useState('');
  const [year, setYear] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [eyed, setEyed] = React.useState(true);

  const VisualPassword = () => {
    setEyed((current) => !current);
  };

  return (
    <ContainerSignup>
      <CollumSignup>
          <BodySmallText style={{ color: themes.light.COLORS.colorTextSubmit }}>
            {t('singupScreen.welcomeToMyPetFriend')}
          </BodySmallText>
          <Titulo style={{ textAlign: 'center', color: themes.light.COLORS.colorTextSubmit }}>
            {t('singupScreen.creatYourAccount')}
          </Titulo>
     
      </CollumSignup>

      <MotiView
        from={{ translateY: 200 }}
        animate={{
          translateY: 0,
        }}
      >
        <CardContainerSingup>
          <Row>
            <BodyText>{t('singupScreen.name')}</BodyText>
          </Row>
          <RowCenter style={{ padding: 4 }}>
            <InputView>
              <IconUser style={{ marginLeft: 10, color: themes.light.COLORS.neutral }} />
              <InputText  style={{ marginLeft: 8 }}
                placeholder={t('singupScreen.name')}
                onChangeText={setName}
                value={name}
              />
            </InputView>
          </RowCenter>
          <Row style={{ padding: 8 }}>
            <BodyText>{t('singupScreen.dateOfBirth')}</BodyText>
          </Row>
          <Row style={{ padding: 2 }}>
            <BodySmallText style={{ paddingLeft: 2, color: themes.light.COLORS.neutral }}>
              {t('singupScreen.dayText')}
            </BodySmallText>
            <BodySmallText style={{ paddingLeft: 62, color: themes.light.COLORS.neutral }}>
              {t('singupScreen.monthText')}
            </BodySmallText>
            <BodySmallText style={{ paddingLeft: 44, color: themes.light.COLORS.neutral }}>
              {t('singupScreen.yearText')}
            </BodySmallText>
          </Row>
    
          <Row style={{ padding: 2 }}>
            <InputView style={{ width: '22%', justifyContent: 'center' }}>
              <InputTextBirth
                type="number"
                placeholder={t('singupScreen.day')}
                onChangeText={setDay}
                value={day}
                keyboardType="numeric"
                maxLength={2}
              />
            </InputView>
            <InputView
              style={{ width: '22%', justifyContent: 'center', marginLeft: 16 }}
            >
              <InputTextBirth
                placeholder={t('singupScreen.month')}
                onChangeText={setMonth}
                value={month}
                keyboardType="numeric"
                maxLength={2}
              />
            </InputView>
            <InputView
              style={{ width: '25%', justifyContent: 'center', marginLeft: 16 }}
            >
              <InputTextBirth
                placeholder={t('singupScreen.year')}
                onChangeText={setYear}
                value={year}
                keyboardType="numeric"
                maxLength={4} //Fazer Tratamento
              />
            </InputView>
          </Row>
          <BodySmallText style={{ paddingLeft: 25, color: themes.light.COLORS.neutral}}>
              {t('singupScreen.messageBirth')}
            </BodySmallText>
          <Row style={{ padding: 8 }}>
            <BodyText>{t('singupScreen.email')}</BodyText>
          </Row>
          <RowCenter>
            <InputView>
              <IconMail style={{ marginLeft: 10, color: themes.light.COLORS.neutral }} />
              <InputText style={{ marginLeft: 8}}
                placeholder={t('loginScreen.email')}
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
              />
            </InputView>
          </RowCenter>
          <Row style={{ padding: 8 }}>
            <BodyText>{t('singupScreen.createPassword')}</BodyText>
          </Row>
          <RowCenter>
            <InputView>
              <InputText 
                style={{ marginLeft: 10, width: '84%' }}
                secureTextEntry={eyed} //ocultrar senha
                placeholder={t('singupScreen.caracteres')}
                onChangeText={setPassword}
                value={password}
                maxLength={20} //FAZER TRATAMENTO
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
          <RowLeft style={{ padding: 8 }}>
            {password.length > 0 ? (
              <ProgressSignup
                style={{ backgroundColor: themes.light.COLORS.secondary }}
              />
            ) : (
              <ProgressSignup />
            )}
            {password.length > 1 ? (
              <ProgressSignup
                style={{ backgroundColor: themes.light.COLORS.secondary }}
              />
            ) : (
              <ProgressSignup />
            )}
            {password.length > 3 ? (
              <ProgressSignup
                style={{ backgroundColor: themes.light.COLORS.secondary }}
              />
            ) : (
              <ProgressSignup />
            )}
            {password.length > 3 ? (
              <ProgressSignup
                style={{ backgroundColor: themes.light.COLORS.secondary }}
              />
            ) : (
              <ProgressSignup />
            )}
            {password.length > 4 ? (
              <ProgressSignup
                style={{ backgroundColor: themes.light.COLORS.secondary }}
              />
            ) : (
              <ProgressSignup />
            )}
            {password.length > 5 ? (
              <ProgressSignup
                style={{ backgroundColor: themes.light.COLORS.secondary }}
              />
            ) : (
              <ProgressSignup />
            )}
            {password.length > 6 ? (
              <ProgressSignup
                style={{ backgroundColor: themes.light.COLORS.secondary }}
              />
            ) : (
              <ProgressSignup />
            )}
            {password.length > 7 ? (
              <ProgressSignup
                style={{ backgroundColor: themes.light.COLORS.secondary }}
              />
            ) : (
              <ProgressSignup />
            )}
          </RowLeft>
          <RowCenter style={{ padding: 14 }}>
            <MyButtonSubmit onPress={() => navigation.navigate('Menu')}>
              <MyButtonTextSubmit>
                {t('singupScreen.signupButton')}
              </MyButtonTextSubmit>
            </MyButtonSubmit>
          </RowCenter>

          <RowCenter style={{ padding: 6 }}>
          <MyDivider style={{ width: '46%', height: 2, backgroundColor: themes.light.COLORS.neutral}}/>
        <ORText>{t('loginScreen.or')}</ORText>
        <MyDivider style={{ width: '46%', height: 2, backgroundColor: themes.light.COLORS.neutral}}/>
          </RowCenter>
          <RowCenter style={{ padding: 12 }}>
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

          <RowCenter style={{ padding: 12 }}>
            <NewPetFriendText>
              {t('singupScreen.alreadyHaveAnAccount')}
            </NewPetFriendText>
            <SubTituloLink onPress={() => navigation.navigate('Login')}>
              {t('singupScreen.sign_in')}
            </SubTituloLink>
          </RowCenter>
        </CardContainerSingup>
      </MotiView>
    </ContainerSignup>
  );
}
