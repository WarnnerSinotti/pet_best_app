import styled from 'styled-components/native';

export const Titulo = styled.Text`
  align-items: flex-start;
  justify-content: flex-start;
  color: ${(props) => props.theme.COLORS.color}
  font-size: ${(props) => props.theme.FONT_SIZE.h6};
`;

export const SubTitulo = styled.Text`
  align-items: flex-start;
  justify-content: flex-start;
  color: ${(props) => props.theme.COLORS.color};
  font-size: ${(props) => props.theme.FONT_SIZE.bodySmall};
`;

export const SubTituloLink = styled.Text`
  color: ${(props) => props.theme.COLORS.secondary};
  align-items: 'flex-start';
  justify-content: 'flex-start';
  font-size: ${(props) => props.theme.FONT_SIZE.bodySmall};
  padding-right: 10px;
`;
