import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${(props: any) => props.theme.COLORS.background};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerSignup = styled(Container)`
  background-color: ${(props: any) => props.theme.COLORS.secondary};
  justify-content: flex-start;
  align-items: center;
  padding-top: 20%;
`;

export const Column = styled.View`
  flex-direction: column;
  align-items: left;
  justify-content: left;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  padding-left: 24px;
`;

export const RowCenter = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;

`;

export const RowCenterCard = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const RowLeft = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 24px;
  padding-right: 24px;
`;

export const RowRight = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  padding-left: 24px;
  padding-right: 24px;
`;

export const RowSignup = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;

`;

export const CollumSignup = styled.View`
  width: 100%;
  padding-bottom: 20px;
  flex-direction: column;
  justify-content: center;
`;
