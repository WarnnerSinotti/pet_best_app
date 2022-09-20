import styled from 'styled-components/native';

export const CardLocalization = styled.View`
  width: 88%;
  height: 25%;
  background-color:  ${(props: any) => props.theme.COLORS.neutral} ;
  border-radius: 20px;
  justify-items: center;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  margin-left: 20px;
`;