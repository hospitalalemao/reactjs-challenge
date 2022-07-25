import styled from 'styled-components'

export const Article = styled.article`
  max-width: 1120px;
  height: 15rem;
  margin: 0 auto;

  padding: 0 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    font-size: 1rem;
    color: #fff;
    background: #6933ff;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 2rem;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
