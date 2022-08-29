import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, KeyboardAvoidingView, Image, View } from 'react-native';
import {
  CollumSignup,
  Column,
  Container,
  ContainerSignup,
  Row,
  RowCenter,
  RowLeft,
  RowRight,
  RowSignup,
} from '../../components/Global';
import {
  BodySmallText,
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
  IconLock,
  IconMail,
  IconName,
} from '../../components/SVG';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CardContainer, CardContainerSingup } from '../../components/Card';
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
        <RowSignup>
          <BodySmallText style={{color: themes.light.COLORS.colorTextSubmit}}>{t('singupScreen.welcomeToMyPetFriend')}</BodySmallText>
        </RowSignup>
        <RowSignup>
          <Titulo style={{color: themes.light.COLORS.colorTextSubmit}}>{t('singupScreen.creatYourAccount')}</Titulo>
        </RowSignup>
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
          <RowCenter style={{padding: 8}}>
            <InputView>
              <IconName style={{ color: themes.light.COLORS.neutral }} />
              <InputText
                placeholder={t('singupScreen.name')}
                onChangeText={setName}
                value={name}
              />
            </InputView>
          </RowCenter>
          <Row >
            <BodyText>{t('singupScreen.dateOfBirth')}</BodyText>
          </Row>

          <Row style={{padding: 8}}>
            <InputView style={{ width: '20%', justifyContent: 'center' }}>
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
              style={{ width: '20%', justifyContent: 'center', marginLeft: 16 }}
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
              style={{ width: '28%', justifyContent: 'center', marginLeft: 16 }}
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
          <Row style={{padding: 8}}>
            <BodyText>{t('singupScreen.email')}</BodyText>
          </Row>
          <RowCenter>
            <InputView>
              <IconMail style={{ color: themes.light.COLORS.neutral }} />
              <InputText
                placeholder={t('loginScreen.email')}
                onChangeText={setEmail}
                value={email}
                keyboardType="email-address"
              />
            </InputView>
          </RowCenter>
          <Row style={{padding: 8}}>
            <BodyText>{t('singupScreen.createPassword')}</BodyText>
          </Row>
          <RowCenter>
            <InputView>
              <InputText
                style={{ width: '88%' }}
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
          <RowLeft style={{padding: 8}}>
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
              {password.toLocaleString.length > 6 ? (
                  <ProgressSignup 
                    style={{ backgroundColor: themes.light.COLORS.secondary }}
                    />
              
              ) : (
                <ProgressSignup />
              )}
              {password.toLocaleString.length > 7 ? (
                  <ProgressSignup 
                    style={{ backgroundColor: themes.light.COLORS.secondary }}
                    />
              
              ) : (
                <ProgressSignup />
              )}
          </RowLeft>
          <RowCenter style={{padding: 14}}>
            <MyButtonSubmit onPress={() => navigation.navigate('Menu')}>
              <MyButtonTextSubmit>
                {t('singupScreen.signupButton')}
              </MyButtonTextSubmit>
            </MyButtonSubmit>
          </RowCenter>

          <RowCenter style={{padding: 6}}>
            <MyDivider />
            <ORText>{t('loginScreen.or')}</ORText>
            <MyDivider />
          </RowCenter>
          <RowCenter style={{padding: 14}}>
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

          <RowCenter style={{padding: 24}}>
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
