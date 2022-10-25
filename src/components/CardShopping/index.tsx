import styled from 'styled-components/native';


export const CardContainerLastItem = styled.View`
  background-color:  ${(props: any) => props.theme.COLORS.background};
  height: 25%;
  width: 100%;
  flex-direction: row;
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;
  justify-content: space-between;
`;

export const CardBorderLastItem = styled.View`
width: 48%;
height: 100%;
background-color:  ${(props: any) => props.theme.COLORS.neutral} ;
border-radius: 12px;
justify-content: center;
align-items: center;
`;

export const CardLastItem = styled.View`
width: 80%;
height: 80%;
background-color:  ${(props: any) => props.theme.COLORS.neutral} ;
border-radius: 12px;
justify-content: center;
align-items: center;
`;

