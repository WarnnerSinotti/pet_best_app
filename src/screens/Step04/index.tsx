import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { MyButtonNext, MyButtonTextNext } from '../../components/Button';
import { Image } from 'react-native';
import { Container, RowCenterCard } from '../../components/Global';
import { BodyText, Titulo } from '../../components/Text';
import { CardContainer, CardProgress } from '../../components/Card';
import themes from '../../themes';

export default function Step04() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  return (
    <Container>
      <Image
        source={require('../../../assets/img/step01.jpg')}
        style={{
          width: '100%',
          height: '60%',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      ></Image>
      <CardContainer>
        <RowCenterCard>
          <CardProgress />
          <CardProgress />
          <CardProgress />
          <CardProgress style={{ backgroundColor: themes.light.COLORS.quartenary }}/>
        </RowCenterCard>
        <RowCenterCard>
          <Titulo style={{ marginBottom: 16 }}>{t('stepCardScreen.titleStep04')}</Titulo>
        </RowCenterCard>
        <RowCenterCard>
          <BodyText style={{ marginBottom: 32 }}>
            {t('stepCardScreen.bodyStep03')}
          </BodyText>
        </RowCenterCard>
        <RowCenterCard>
          <MyButtonNext
            style={{ backgroundColor: themes.light.COLORS.quartenary }}
            onPress={() => navigation.navigate('Menu')}
          >
            <MyButtonTextNext>{t('loginScreen.next')}</MyButtonTextNext>
          </MyButtonNext>
        </RowCenterCard>
      </CardContainer>
    </Container>
  );
}
