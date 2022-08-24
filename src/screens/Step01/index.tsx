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

  const [step, setStep] = useState(1);

  const steps = [
    {
      ID: 1,
      Title: t('stepCardScreen.titleStep01'),
      Message: t('stepCardScreen.bodyStep01'),
      Background: themes.light.COLORS.secondary,
      image: require('../../../assets/img/card/myPetFriend.jpg'),
    },
    {
      ID: 2,
      Title: t('stepCardScreen.titleStep02'),
      Message: t('stepCardScreen.bodyStep02'),
      Background: themes.light.COLORS.terciary,
      image: require('../../../assets/img/card/shop.jpg'),
    },
    {
      ID: 3,
      Title: t('stepCardScreen.titleStep03'),
      Message: t('stepCardScreen.bodyStep03'),
      Background: themes.light.COLORS.primary,
      image: require('../../../assets/img/card/clinic.jpg'),
    },
    {
      ID: 4,
      Title: t('stepCardScreen.titleStep04'),
      Message: t('stepCardScreen.bodyStep04'),
      Background: themes.light.COLORS.quartenary,
      image: require('../../../assets/img/card/wallet.jpg'),
    },
  ];

  const listItems = steps.map((post) => {
    if (step == post.ID) {
      return (
        <Container key={post.ID}>
          <Image
            source={post.image}
            style={{
              width: '100%',
              height: '60%',
              justifyContent: 'center',
              alignContent: 'center',
            }}
          ></Image>
          <CardContainer>
            <RowCenterCard>
              {step == 1 ? (
                <CardProgress
                  style={{ backgroundColor: themes.light.COLORS.secondary }}
                />
              ) : (
                <CardProgress />
              )}
              {step == 2 ? (
                <CardProgress
                  style={{ backgroundColor: themes.light.COLORS.terciary }}
                />
              ) : (
                <CardProgress />
              )}
              {step == 3 ? (
                <CardProgress
                  style={{ backgroundColor: themes.light.COLORS.primary }}
                />
              ) : (
                <CardProgress />
              )}
              {step == 4 ? (
                <CardProgress
                  style={{ backgroundColor: themes.light.COLORS.quartenary }}
                />
              ) : (
                <CardProgress />
              )}
            </RowCenterCard>
            <RowCenterCard>
              <Titulo style={{ marginBottom: 16 }}>{post.Title}</Titulo>
            </RowCenterCard>
            <RowCenterCard>
              <BodyText style={{ marginBottom: 32 }}>{post.Message}</BodyText>
            </RowCenterCard>
            <RowCenterCard>
              <MyButtonNext
                style={{ backgroundColor: post.Background }}
                onPress={() => Click()}
              >
                <MyButtonTextNext>{t('loginScreen.next')}</MyButtonTextNext>
              </MyButtonNext>
            </RowCenterCard>
          </CardContainer>
        </Container>
      );
    }

    return null;
  });

  const Click = () => {
    if (step === 4) {
      navigation.navigate('Menu');
    }
    setStep(step + 1);
  };

  return <>{listItems}</>;
}
