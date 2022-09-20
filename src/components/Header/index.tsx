import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import { IconCat, IconMenu } from '../SVG';

import themes from '../../themes';

const Header = styled.View`
  background: ${(props: any) => props.theme.COLORS.background};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
`;

const HeaderMy = () => {
  
  return (
    <Header>
        <IconCat height={50} width={50} />
        <TouchableOpacity onPress={() => console.log('Menu')}>
          <IconMenu style={{ color: themes.light.COLORS.secondary }} />
        </TouchableOpacity>
      </Header>
  );
};


export default HeaderMy;








