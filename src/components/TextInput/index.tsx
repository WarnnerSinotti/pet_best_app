import styled from 'styled-components/native';

//INPUTS VIEW
export const InputView = styled.View`
  width: 100%;
  height: 44px;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding-left: 15px;
  background-color: ${(props: any) => props.theme.COLORS.background};
  border-radius: 8px ;
  border-width: 1px;
  border-color: ${(props: any) => props.theme.COLORS.neutral};
 
`;

//TEXTS INPUTS
export const InputText = styled.TextInput`
  width: 100%;
  padding-left: 5px;
  padding-right: 5px;
  color: ${(props: any) => props.theme.COLORS.color}
`;


export const InputTextBirth = styled(InputText)`
  width: 100%;
  justify-content: center;
`;