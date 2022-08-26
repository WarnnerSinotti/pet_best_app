import styled from 'styled-components/native';

export const InputIconView = styled.View`
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

export const InputText = styled.TextInput`
  width: 83%;
  padding-left: 5px;
  padding-right: 5px;
  color: ${(props: any) => props.theme.COLORS.color}
`;
