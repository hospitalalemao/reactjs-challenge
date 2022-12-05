import { FaSearch } from 'react-icons/fa';
import { Box } from '../GlobalStyledComponents';
import * as S from './styles';

export default function SearchField({
  handleSearch,
}: {
  handleSearch: (searchText: string) => void;
}) {
  return (
    <S.SearchFieldContainer>
      <form autoComplete="off">
        <Box>
          <>
            <S.InputField
              type="text"
              name="filterField"
              placeholder="Buscar país pelo nome..."
              onChange={(e) => handleSearch(e.target.value)}
            />
            <S.IconContainer>
              <FaSearch />
            </S.IconContainer>
          </>
        </Box>
      </form>
    </S.SearchFieldContainer>
  );
}
