import styled from 'styled-components';

const Table = styled.table`
  display: inline-block;
  max-width: 90vw;
  overflow-x: auto;
  overflow-y: hidden;
  border-spacing: 0;
  border-radius: var(--radius-default);
  color: var(--primary);
  background: transparent;
  text-align: right;

  thead {
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6);
  }

  tfoot {
    box-shadow: -9px -9px 16px rgba(163, 177, 198, 0.6);
    tr > td {
      padding: 10px;
    }
  }

  th {
    padding: 7px;
  }

  th:first-child,
  td:first-child {
    text-align: left;
  }

  tbody > tr > td {
    padding: 10px;
    font-size: 14px;
    position: relative;
  }

  td:hover::after {
    content: '';
    position: absolute;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(163, 177, 198, 0.6);
    left: 0;
    top: -5000px;
    height: 10000px;
    width: 100%;
    z-index: -1;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(2n) > * {
    ${(props) =>
      // @ts-expect-error: Unreachable code error
      props.active
        ? 'background: var(--positive-color); color: #ffffff;'
        : 'background: #e4e4e4;'}
  }

  ${(props) =>
    // @ts-expect-error: Unreachable code error
    props.active && 'background: var(--positive-color); color: #ffffff;'};

  &:hover {
    padding: 20px;
    box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(163, 177, 198, 0.6);
  }
`;

const ButtonHeader = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  box-shadow: inset 10px 10px 15px -10px #c3c3c3,
    inset -10px -10px 15px -10px #ffffff;
  cursor: pointer;

  span {
    margin: 4px 0 0 6px;
    color: var(--primary);
  }
`;

export { Table, ButtonHeader };
