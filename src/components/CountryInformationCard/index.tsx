import { useSelector } from 'react-redux';
import InformationCard from '../InformationCard';
import * as S from '../GlobalStyledComponents';

export default function CountryInformationCard() {
  // @ts-expect-error: Unreachable code error
  const { total } = useSelector((state) => state.provinces);

  return (
    <S.CardsContainer direction="row">
      <InformationCard
        title="Casos"
        value={total.confirmed}
        valueDiff={total.confirmed_diff}
        positiveIsGood={false}
      />
      <InformationCard
        title="Óbitos"
        value={total.deaths}
        valueDiff={total.deaths_diff}
        positiveIsGood={false}
      />
      <InformationCard
        title="Recuperações"
        value={total.recovered}
        valueDiff={total.recovered_diff}
        positiveIsGood
      />
      <InformationCard
        title="Taxa de fatalidade"
        value={total.fatality_rate}
        isOnlyInt={false}
      />
    </S.CardsContainer>
  );
}
