import { useSelector } from 'react-redux';
import InformationCard from '../InformationCard';

export default function ProvinceInformationCard() {
  const province = useSelector((state) => state.provinces.selected);

  return (
    <div>
      <h1>{province.name}</h1>

      <InformationCard
        title="Contaminações confirmadas"
        value={province.confirmed}
        value_diff={province.confirmed_diff}
      />
      <InformationCard
        title="Óbitos confirmadas"
        value={province.deaths}
        value_diff={province.deaths_diff}
      />
      <InformationCard
        title="Recuperações confirmadas"
        value={province.recovered}
        value_diff={province.recovered_diff}
      />
      <InformationCard
        title="Taxa de fatalidade"
        value={province.fatality_rate}
      />
    </div>
  );
}
