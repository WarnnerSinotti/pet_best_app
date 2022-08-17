import styled from 'styled-components/native';

//TITULO
export const Titulo = styled.Text`
  align-items: flex-start;
  justify-content: flex-start;
  color: ${(props: any) => props.theme.COLORS.color};
  font-size: ${({ ...props }) => props.theme.FONT_SIZE.h6};
  font-family: ${(props: any) => props.theme.FONTS.LEXEND_BOLD};
`;

//TITULO DO APP - MY PET FRIEND
export const NameAppText = styled(Titulo)`
  font-size: ${({ ...props }) => props.theme.FONT_SIZE.h5};
  font-family: ${(props: any) => props.theme.FONTS.NUNITO_BLACK};
`;

//SUB TITULO
export const SubTitulo = styled.Text`
  align-items: flex-start;
  justify-content: flex-start;
  font-size: ${({ ...props }) => props.theme.FONT_SIZE.h6};
  color: ${(props: any) => props.theme.COLORS.color};
  font-family: ${(props: any) => props.theme.FONTS.LEXEND_BOLD};
`;

//SUB TITULO COM LINK
export const SubTituloLink = styled.Text`
  align-items: flex-start;
  justify-content: flex-start;
  font-size: ${({ ...props }) => props.theme.FONT_SIZE.caption};
  color: ${(props: any) => props.theme.COLORS.secondary};
  font-family: ${(props: any) => props.theme.FONTS.LEXEND_BOLD};
`;

//OR-OU LOGIN
export const ORText = styled(SubTituloLink)`
  padding-left: 15px;
  padding-right: 15px;
  color: ${(props: any) => props.theme.COLORS.neutral};
`;

//TEXT - MYPET FRIEND
export const NewPetFriendText = styled(SubTituloLink)`
  padding-right: 5px;
  color: ${(props: any) => props.theme.COLORS.color};
`;
