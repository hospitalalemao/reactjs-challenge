import styled from 'styled-components';

export const InternalBox = styled.div`
  height: 100%;
  padding: 0.75rem 1.25rem;
  border-radius: 10px;
  box-shadow: inset 10px 10px 15px -10px #c3c3c3,
    inset -10px -10px 15px -10px #ffffff;

  h3 {
    margin-top: 20px;
    padding: 8px;
    color: var(--primary);
    border-radius: var(--radius-default);
    box-shadow: 9px 9px 16px rgba(189, 189, 189, 0.6),
      -9px -9px 16px rgba(189, 189, 189, 0.6);
  }
`;

export const BoxContainer = styled.div`
  height: 100%;
  max-width: 200px;
  text-align: center;
  border: 1px solid #fff;
  background-color: #f6f5f0;
  border-radius: 15px;
  padding: 8px;
  box-shadow: 9px 9px 16px rgba(189, 189, 189, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);

  &:hover {
    box-shadow: 0 5px 15px var(--primary);
    transform: scale(1.1);
  }
`;

export const Flag = styled.span`
  width: 140px;
  height: 100px;
`;
