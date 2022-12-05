import { useSelector } from 'react-redux';
import InformationCard from '../InformationCard';
import * as Global from '../GlobalStyledComponents';

export default function ProvinceInformationCard() {
  const province = useSelector((state) => state.provinces.selected);

  return (
    <Global.CardsContainer direction="column">
      <Global.Subtitle>{province.name}</Global.Subtitle>

      <InformationCard
        title="Casos"
        value={province.confirmed}
        valueDiff={province.confirmed_diff}
        positiveIsGood={false}
      />
      <InformationCard
        title="Óbitos"
        value={province.deaths}
        valueDiff={province.deaths_diff}
        positiveIsGood={false}
      />
      <InformationCard
        title="Recuperações"
        value={province.recovered}
        valueDiff={province.recovered_diff}
        positiveIsGood
      />
      <InformationCard
        title="Taxa de fatalidade"
        value={province.fatality_rate}
        positiveIsGood={false}
      />
    </Global.CardsContainer>
  );
}
