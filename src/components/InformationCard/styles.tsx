import styled from 'styled-components';

export const TitleCard = styled.h4`
  text-transform: uppercase;
  color: var(--title-card-color);
`;

interface InformationCardValueProps {
  isGood: boolean;
}

export const MainValue = styled.h2<InformationCardValueProps>`
  color: ${(props) =>
    props.isGood ? 'var(--positive-color)' : 'var(--negative-color)'};
  text-align: right;
`;

export const DiffValue = styled.p<InformationCardValueProps>`
  color: ${(props) =>
    props.isGood ? 'var(--positive-color)' : 'var(--negative-color)'};
  text-align: right;

  & > span {
    margin-right: 6px;
  }
`;
