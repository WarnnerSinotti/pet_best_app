import styled from 'styled-components/native';

export const CardContainer = styled.View`
  width: 100%;
  height: 40%;
  position: 'absolute';
  bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${(props: any) => props.theme.COLORS.background};;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  justify-content: center;
  align-items: center;
 
`;


