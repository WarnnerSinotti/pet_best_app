import styled from 'styled-components/native';

//INPUTS VIEW
export const InputView = styled.View`
  width: 100%;
  height: 44px;
  flex-direction: row;
  align-items: center;
  background-color: ${(props: any) => props.theme.COLORS.background};
  border-radius: 8px;
  border-width: 1px;
  border-color: ${(props: any) => props.theme.COLORS.neutral};
`;

//TEXTS INPUTS
export const InputText = styled.TextInput`
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  color: ${(props: any) => props.theme.COLORS.color};
`;

export const InputTextBirth = styled(InputText)`
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const InputViewCode = styled(InputView)`
  width: 17%;
`;

export const InputTextCenter = styled.TextInput`
  width: 100%;
  align-items: center;
  text-align: center;
  color: ${(props: any) => props.theme.COLORS.color};
`;
