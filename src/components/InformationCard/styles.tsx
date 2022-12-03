import styled from 'styled-components';

const InternalBox = styled.div`
  padding: 0.75rem 1.25rem;
  border-radius: 10px;
  box-shadow: inset 10px 10px 15px -10px #c3c3c3,
    inset -10px -10px 15px -10px #ffffff;
`;
const BoxContainer = styled.div`
  flex: 1;
  border: 1px solid #fff;
  background-color: #f6f5f0;
  border-radius: 15px;
  padding: 8px;
  box-shadow: 9px 9px 16px rgba(189, 189, 189, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
`;

function Box({ children }) {
  return (
    <BoxContainer>
      <InternalBox>{children}</InternalBox>
    </BoxContainer>
  );
}

const Subtitle = styled.h4`
  text-transform: uppercase;
  color: #bbb;
`;

const MainValue = styled.h1`
  color: #dd1a66;
  text-align: right;
`;

interface DiffValueProps {
  isGood: boolean;
}
const DiffValue = styled.p<DiffValueProps>`
  color: ${(props) => (props.isGood ? 'green' : 'red')};
  text-align: right;
`;

interface CardsContainerProps {
  direction: string;
}
const CardsContainer = styled.div<CardsContainerProps>`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.direction};
  justify-content: space-around;
`;

export { Box, Subtitle, MainValue, DiffValue, CardsContainer };
