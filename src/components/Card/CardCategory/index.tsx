import styled from 'styled-components/native';

export const CardCategory = styled.View`
  width: 180%;
  height: 45%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 20px;
  margin-left: 20px;
  background-color:  ${(props: any) => props.theme.COLORS.secondary}
`;