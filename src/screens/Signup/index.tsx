import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, KeyboardAvoidingView, Image, View } from 'react-native';
import {
  CollumSignup,
  Container,
  ContainerSignup,
  Row,
  RowCenter,
  RowRight,
  RowSignup,
  RowSigun,
} from '../../components/Global';
import {
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
import { InputIconView, InputText } from '../../components/TextInput';
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
import { CardContainer, CardContainerSingup } from '../../components/Card';

export default function Signup(Props: any) {
  const navigation: any = useNavigation();
  const { t } = useTranslation('translation');
  const [textEmail, setTextEmail] = React.useState('');
  const [textPassword, setTextPassword] = React.useState('');
  const [eyed, setEyed] = React.useState(true);

  const VisualPassword = () => {
    setEyed((current) => !current);
  };

  return (
    <ContainerSignup>
      <KeyboardAvoidingView behavior="position">
        <CollumSignup>
        <RowSignup>
          <SubTitulo>{t('signup.Screen.welcomeToMyPetFriend')}</SubTitulo>
        </RowSignup>
        <RowSignup>
        <Titulo>{t('signup.Screen.creatYourAccount')}</Titulo>
        </RowSignup>
        </CollumSignup>
        </KeyboardAvoidingView>

        <CardContainerSingup>
        <RowCenter>
          <NameAppText>Adicionar complementos</NameAppText>
        </RowCenter>
        <Row>
          <SubTitulo>{t('loginScreen.email')}</SubTitulo>
        </Row>
        <RowCenter>
          <InputIconView>
            <IconMail style={{ color: themes.light.COLORS.neutral }} />
            <InputText
              placeholder={t('loginScreen.email')}
              onChangeText={setTextEmail}
              value={textEmail}
            />
          </InputIconView>
        </RowCenter>
        <Row>
          <SubTitulo>{t('loginScreen.password')}</SubTitulo>
        </Row>
        <RowCenter>
          <InputIconView>
            <IconLock style={{ color: themes.light.COLORS.neutral }} />
            <InputText
              secureTextEntry={eyed} //ocultrar senha
              placeholder={t('loginScreen.password')}
              onChangeText={setTextPassword}
              value={textPassword}
            ></InputText>
            <TouchableOpacity onPress={VisualPassword}>
              {eyed ? (
                <IconEyeOff style={{ color: themes.light.COLORS.neutral }} />
              ) : (
                <IconEye style={{ color: themes.light.COLORS.neutral }} />
              )}
            </TouchableOpacity>
          </InputIconView>
        </RowCenter>
        
        <RowCenter>
          <MyButtonSubmit onPress={() => navigation.navigate('Step01')}>
            <MyButtonTextSubmit>{t('loginScreen.login')}</MyButtonTextSubmit>
          </MyButtonSubmit>
        </RowCenter>

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
        <SubTituloLink onPress={() => Alert.alert('Ainda não funcionando')}>
          {t('loginScreen.sign_up')}
        </SubTituloLink>
      </RowCenter>

        </CardContainerSingup>
    </ContainerSignup>
  );
}