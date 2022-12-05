import * as S from './styles';

interface ICountryCardProps {
  iso2: string;
  name: string;
}

function CountryCard({ country }: { country: ICountryCardProps }) {
  return (
    <S.BoxContainer>
      <S.InternalBox>
        <S.Flag className={`fi fi-${country.iso2}`} />
        <h3>{country.name}</h3>
      </S.InternalBox>
    </S.BoxContainer>
  );
}

export default CountryCard;
