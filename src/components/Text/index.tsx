import styled from 'styled-components/native';

export const Titulo = styled.Text`
  align-items: flex-start;
  justify-content: flex-start;
  color: ${(props: any) => props.theme.COLORS.color};
  font-size: ${({...props}) => props.theme.FONT_SIZE.h6};
  font-family: ${(props: any) => props.theme.FONTS.LEXEND};
`;

export const SubTitulo = styled.Text`
  align-items: flex-start;
  justify-content: flex-start;
  color: ${(props: any) => props.theme.COLORS.color};
  font-family: ${(props: any) => props.theme.FONTS.LEXEND};
`;

export const SubTituloLink = styled.Text`
  color: ${(props: any) => props.theme.COLORS.secondary};
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 12px;
  padding-right: 10px;
  font-family: ${(props: any) => props.theme.FONTS.LEXEND};
`;
