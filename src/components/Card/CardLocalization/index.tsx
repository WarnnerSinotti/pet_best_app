import styled from 'styled-components/native';

export const CardLocalization = styled.View`
  width: 88%;
  height: 25%;
  background-color:  ${(props: any) => props.theme.COLORS.greySecondary} ;
  border-radius: 20px;
  justify-items: center;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  margin-left: 20px;
`;

export const CardLocalizationIntern = styled.View`
  width: 100%;
  height: 100%;
  background:  ${(props: any) => props.theme.COLORS.greyPrimary} ;
  justify-items: center;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 2px solid ${(props: any) => props.theme.COLORS.secondary};
  margin-top: 20px;
`;