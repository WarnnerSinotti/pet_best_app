import styled from 'styled-components/native';

export const MyButtonSubmit = styled.TouchableOpacity`
  width: 100%;
  height: 44px;
  flex-direction: row;
  justify-content: center;
  background-color: ${(props: any) => props.theme.COLORS.secondary};
  align-items: center;
  border-radius: 8px;
`;

export const MyButtonTextSubmit = styled.Text`
  color: ${(props: any) => props.theme.COLORS.colorTextSubmit};
  font-size: ${(props: any) => props.theme.FONT_SIZE.button}px;
`;

export const MyByttonSocialSubmit = styled(MyButtonSubmit)`
  background-color: ${(props: any) => props.theme.COLORS.neutral};
`;

export const MyByttonSocialTextSubmit = styled(MyButtonTextSubmit)`
  padding-left: 10px;
  color: ${(props: any) => props.theme.COLORS.colorTextSocialButton};
  font-size: ${(props: any) => props.theme.FONT_SIZE.button}px;
`;
