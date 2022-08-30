import styled from 'styled-components/native';

//TITULO
export const Titulo = styled.Text`
  align-items: flex-start;
  justify-content: flex-start;
  color: ${(props: any) => props.theme.COLORS.color};
  font-size: ${({ ...props }) => props.theme.FONT_SIZE.h5}px;
  font-family: ${(props: any) => props.theme.FONTS.LEXEND_BOLD};
`;

//TITULO DO APP - MY PET FRIEND
export const NameAppText = styled(Titulo)`
  font-size: ${({ ...props }) => props.theme.FONT_SIZE.h5}px;
  font-family: ${(props: any) => props.theme.FONTS.NUNITO_BLACK};
`;

//SUB TITULO
export const SubTitulo = styled.Text`
  align-items: flex-start;
  justify-content: flex-start;
  font-size: ${({ ...props }) => props.theme.FONT_SIZE.h6}px;
  color: ${(props: any) => props.theme.COLORS.color};
  font-family: ${(props: any) => props.theme.FONTS.LEXEND_BOLD};
`;

//SUB TITULO COM LINK
export const SubTituloLink = styled.Text`
  align-items: flex-start;
  justify-content: flex-start;
  font-size: ${({ ...props }) => props.theme.FONT_SIZE.caption}px;
  color: ${(props: any) => props.theme.COLORS.secondary};
  font-family: ${(props: any) => props.theme.FONTS.LEXEND_BOLD};
`;

//BODY
export const BodyText = styled(SubTituloLink)`
  text-align: center;
  font-size: ${({ ...props }) => props.theme.FONT_SIZE.body}px;
  color: ${(props: any) => props.theme.COLORS.colorTextSingup};
  font-family: ${(props: any) => props.theme.FONTS.LEXEND_LIGHT};
`;

//BODY
export const BodySmallText = styled(SubTituloLink)`
  text-align: center;
  font-size: ${({ ...props }) => props.theme.FONT_SIZE.bodySmall}px;
  color: ${(props: any) => props.theme.COLORS.color};
  font-family: ${(props: any) => props.theme.FONTS.LEXEND_LIGHT};
`;

//OR-OU LOGIN
export const ORText = styled(SubTituloLink)`
  padding-left: 5px;
  padding-right: 5px;
  color: ${(props: any) => props.theme.COLORS.neutral};
`;

//CaptionText (Skip)
export const CaptionText = styled(SubTituloLink)`
  font-family: ${(props: any) => props.theme.FONTS.LEXEND_LIGHT};
  color: ${(props: any) => props.theme.COLORS.color};
  text-align: center;
`;

//TEXT - MYPET FRIEND
export const NewPetFriendText = styled(SubTituloLink)`
  padding-right: 5px;
  color: ${(props: any) => props.theme.COLORS.color};
`;
