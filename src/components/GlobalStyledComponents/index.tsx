import styled from 'styled-components';

export const InternalBox = styled.div`
  height: 100%;
  padding: 0.35rem 1rem;
  border-radius: 10px;
  box-shadow: inset 10px 10px 15px -10px #c3c3c3,
    inset -10px -10px 15px -10px #ffffff;
`;

export const BoxContainer = styled.div`
  flex: 1;
  border: 1px solid #fff;
  background-color: #f6f5f0;
  border-radius: 15px;
  padding: 8px;
  box-shadow: 9px 9px 16px rgba(189, 189, 189, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
`;

export function Box({ children }: { children: JSX.Element }) {
  return (
    <BoxContainer>
      <InternalBox>{children}</InternalBox>
    </BoxContainer>
  );
}

export const Title = styled.h1`
  color: var(--title-color);
  padding: 0.5rem 0;
`;
export const Subtitle = styled.h2`
  color: var(--title-color);
  padding: 0.5rem 0;
`;

interface CardsContainerProps {
  direction: string;
}
export const CardsContainer = styled.div<CardsContainerProps>`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.direction};
  justify-content: space-around;
`;

export const GridCard = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-auto-rows: auto;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fill, 200px);
`;

export const PageTitleContainer = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  & > button {
    justify-content: flex-end;
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: auto;
`;
