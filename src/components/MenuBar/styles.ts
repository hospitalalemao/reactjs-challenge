import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MenuNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  box-shadow: 10px 10px 12px 0 rgba(0, 0, 0, 0.07);

  & > ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
  }
`;

export const StyledMenuLink = styled(NavLink)`
  margin: 0 1rem;
  padding: 0.5rem 1.5rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.1),
    -4px -4px 6px rgba(255, 255, 255, 1);
  border-radius: 10px;
  cursor: pointer;
  transition: color 0.2s ease-out, transform 0.2s ease-out;
  color: var(--seconday);

  &:hover {
    transform: scale(1.05);
    box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.1),
      -4px -4px 10px rgba(255, 255, 255, 1);
    color: var(--primary);
  }
  &.active {
    outline: none;
    color: var(--primary);
    transform: scale(0.95);
    box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.1),
      -4px -4px 10px rgba(255, 255, 255, 1),
      4px 4px 10px 0 rgba(0, 0, 0, 0.1) inset,
      -4px -4px 10px rgba(255, 255, 255, 1) inset;
  }
`;

export const x = '';
