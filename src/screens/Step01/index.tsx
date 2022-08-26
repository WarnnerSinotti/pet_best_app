import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { MotiView } from 'moti';

import { MyButtonNext, MyButtonTextNext } from '../../components/Button';
import { Image } from 'react-native';
import { Container, RowCenterCard } from '../../components/Global';
import {
  BodyText,
  CaptionText,
  Titulo,
} from '../../components/Text';
import { CardContainer, CardProgress } from '../../components/Card';
import themes from '../../themes';

export default function Step01({ ...props }) {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const [step, setStep] = useState(1);

  const steps = [
    {
      ID: 1,
      Title: t('stepCardScreen.titleStep01'),
      Message: t('stepCardScreen.bodyStep01'),
      TextButton: t('stepCardScreen.buttonNext'),
      Background: themes.light.COLORS.secondary,
      image: require('../../../assets/img/card/myPetFriend.jpg'),
    },
    {
      ID: 2,
      Title: t('stepCardScreen.titleStep02'),
      Message: t('stepCardScreen.bodyStep02'),
      TextButton: t('stepCardScreen.buttonNext'),
      Background: themes.light.COLORS.terciary,
      image: require('../../../assets/img/card/shop.jpg'),
    },
    {
      ID: 3,
      Title: t('stepCardScreen.titleStep03'),
      Message: t('stepCardScreen.bodyStep03'),
      TextButton: t('stepCardScreen.buttonNext'),
      Background: themes.light.COLORS.primary,
      image: require('../../../assets/img/card/clinic.jpg'),
    },
    {
      ID: 4,
      Title: t('stepCardScreen.titleStep04'),
      Message: t('stepCardScreen.bodyStep04'),
      TextButton: t('stepCardScreen.buttonNextGetStart'),
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
                <MotiView
                  from={{ scale: 1, opacity: 15 }}
                  animate={{
                    scale: [
                      { value: 0.5, type: 'timing' },
                      { value: 1, type: 'spring' },
                    ],
                    opacity: 1,
                  }}
                >
                  <CardProgress
                    style={{ backgroundColor: themes.light.COLORS.secondary }}
                  />
                </MotiView>
              ) : (
                <CardProgress />
              )}
              {step == 2 ? (
                <MotiView
                  from={{ scale: 1, opacity: 15 }}
                  animate={{
                    scale: [
                      { value: 0.5, type: 'timing' },
                      { value: 1, type: 'spring' },
                    ],
                    opacity: 1,
                  }}
                >
                  <CardProgress
                    style={{ backgroundColor: themes.light.COLORS.terciary }}
                  />
                </MotiView>
              ) : (
                <CardProgress />
              )}
              {step == 3 ? (
                <MotiView
                  from={{ scale: 1, opacity: 15 }}
                  animate={{
                    scale: [
                      { value: 0.5, type: 'timing' },
                      { value: 1, type: 'spring' },
                    ],
                    opacity: 1,
                  }}
                >
                  <CardProgress
                    style={{ backgroundColor: themes.light.COLORS.primary }}
                  />
                </MotiView>
              ) : (
                <CardProgress />
              )}
              {step == 4 ? (
                <MotiView
                  from={{ scale: 1, opacity: 15 }}
                  animate={{
                    scale: [
                      { value: 0.5, type: 'timing' },
                      { value: 1, type: 'spring' },
                    ],
                    opacity: 1,
                  }}
                >
                  <CardProgress
                    style={{ backgroundColor: themes.light.COLORS.quartenary }}
                  />
                </MotiView>
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
                <MyButtonTextNext>{post.TextButton}</MyButtonTextNext>
              </MyButtonNext>
            </RowCenterCard>
            {step === 4 ? (
              <></>
            ) : (
              <CaptionText
                style={{ marginTop: 25 }}
                onPress={() => navigation.navigate('Menu')}
              >
                {t('stepCardScreen.skip')}
              </CaptionText>
            )}
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
