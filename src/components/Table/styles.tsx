import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  color: #212121;
  text-align: center;
  overflow: hidden;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.6);

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

  th > button {
    width: 100%;
    border: none;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    box-shadow: inset 10px 10px 15px -10px #c3c3c3,
      inset -10px -10px 15px -10px #ffffff;
    cursor: pointer;
  }

  tbody > tr {
    &:hover {
      padding: 20px;
      box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
        -9px -9px 16px rgba(163, 177, 198, 0.6);
    }

    /* &:nth-child(2n) > * {
      background: #e4e4e4;
    } */
  }
`;

const ButtonHeader = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export { Table, ButtonHeader };
