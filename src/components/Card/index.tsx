import styled from 'styled-components/native';

export const CardContainer = styled.View`
  width: 100%;
  height: 55%;
  position: 'absolute';
  bottom: 20px;
  padding: 20px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${(props: any) => props.theme.COLORS.background};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  justify-content: baseline;
  align-items: center;
 
`;

export const CardProgress = styled.View`
  width: 24px;
  height: 10px;
  margin-bottom: 50px;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 12px;
  background-color: ${(props: any) => props.theme.COLORS.neutral};
`

