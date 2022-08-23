import styled from 'styled-components/native';

export const Container = styled.View`
  background: ${(props: any) => props.theme.COLORS.background};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Column = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  padding-left: 15px;
`;

export const RowCenter = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    padding-top: 5px;
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
    padding-left: 10px;
    padding: 10px;
`;

export const RowRight = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    padding-left: 10px;
    padding: 10px;
`;
