import * as S from './styles';

function MenuBar() {
  return (
    <S.MenuNav>
      <ul>
        <li>
          <S.StyledMenuLink to="/">Lista de Países</S.StyledMenuLink>
        </li>
        <li>
          <S.StyledMenuLink to="/brazil">Brasil</S.StyledMenuLink>
        </li>
      </ul>
    </S.MenuNav>
  );
}

export default MenuBar;
