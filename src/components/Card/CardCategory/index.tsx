import styled from 'styled-components/native';

export const CardCategory = styled.View`
  width: 100%;
  height: 50%;
  border-radius: 8px;
  justify-items: center;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-left: 20px;
`;

export const CardTitle = styled(CardCategory)`
background-color:  ${(props: any) => props.theme.COLORS.greySecondary} ;
  width: 100%;
  height: 100%;
`;