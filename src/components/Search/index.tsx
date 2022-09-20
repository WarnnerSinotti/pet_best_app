import React from 'react';
import { TouchableOpacity } from 'react-native';
import { IconSearch, IconSliders } from '../SVG';

import themes from '../../themes';
import { RowCenter } from '../Global';
import { InputText, InputView } from '../TextInput';
import { useTranslation } from 'react-i18next';

const Search = () => {
  const { t } = useTranslation();

  return (
    <RowCenter style={{ paddingTop: 25 }}>
      <InputView style={{ backgroundColor: themes.light.COLORS.greyPrimary }}>
        <IconSearch
          style={{ marginLeft: 10, color: themes.light.COLORS.neutral }}
        />
        <InputText
          style={{ marginLeft: 8, width: '74%' }}
          placeholder={t('menuScreen.search')}
          //onChangeText={setTextPassword}
          //value={textPassword}
          maxLength={33}
        ></InputText>
        <TouchableOpacity onPress={() => console.log('Icone')}>
          <IconSliders style={{ color: themes.light.COLORS.neutral }} />
        </TouchableOpacity>
      </InputView>
    </RowCenter>
  );
};

export default Search;
