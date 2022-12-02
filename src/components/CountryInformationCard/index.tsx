import { useSelector } from 'react-redux';
import InformationCard from '../InformationCard';

export default function CountryInformationCard() {
  const total = useSelector((state) => state.provinces.total);

  return (
    <div>
      <InformationCard
        title="Contaminações confirmadas"
        value={total.confirmed}
        value_diff={total.confirmed_diff}
      />
      <InformationCard
        title="Óbitos confirmadas"
        value={total.deaths}
        value_diff={total.deaths_diff}
      />
      <InformationCard
        title="Recuperações confirmadas"
        value={total.recovered}
        value_diff={total.recovered_diff}
      />
      <InformationCard title="Taxa de fatalidade" value={total.fatality_rate} />
    </div>
  );
}
