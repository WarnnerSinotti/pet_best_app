import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { MyButtonNext, MyButtonTextNext } from '../../components/Button';
import { Image } from 'react-native';
import { Container, RowCenterCard } from '../../components/Global';
import { BodyText, Titulo } from '../../components/Text';
import { CardContainer, CardProgress } from '../../components/Card';
import themes from '../../themes';

export default function Step01() {
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
          <CardProgress
            style={{ backgroundColor: themes.light.COLORS.secondary }}
          />
          <CardProgress />
          <CardProgress />
          <CardProgress />
        </RowCenterCard>
        <RowCenterCard>
          <Titulo style={{ marginBottom: 16 }}>{t('stepCardScreen.titleStep01')}</Titulo>
        </RowCenterCard>
        <RowCenterCard>
          <BodyText style={{ marginBottom: 32 }}>
            {t('stepCardScreen.bodyStep01')}
          </BodyText>
        </RowCenterCard>
        <RowCenterCard>
          <MyButtonNext
            style={{ backgroundColor: themes.light.COLORS.secondary }}
            onPress={() => navigation.navigate('Step02')}
          >
            <MyButtonTextNext>{t('loginScreen.next')}</MyButtonTextNext>
          </MyButtonNext>
        </RowCenterCard>
      </CardContainer>
    </Container>
  );
}
