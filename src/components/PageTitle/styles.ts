import styled from 'styled-components';

const PageTitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: space-between;
  padding: 2rem 0 4rem 0;

  & > button {
    justify-content: flex-end;
  }
`;

export default PageTitleContainer;
