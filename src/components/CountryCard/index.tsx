import * as S from './styles';

interface CountryCardProps {
  iso: string;
  name: string;
}

function CountryCard({ country }: { country: CountryCardProps }) {
  return (
    <S.BoxContainer>
      <S.InternalBox>
        <S.Flag className={`fi fi-${country.iso}`} />
        <h3>{country.name}</h3>
      </S.InternalBox>
    </S.BoxContainer>
  );
}

export default CountryCard;
