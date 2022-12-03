import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CountryInformationCard from '../../components/CountryInformationCard';
import ProvinceInformationCard from '../../components/ProvinceInformationCard';
import Table from '../../components/Table';
import { formatProvinces } from '../../features/provinces';
import api from '../../services/covid_statics_api';

function BrazilPage() {
  const provinces = useSelector((state) => state.provinces.value);
  const dispatch = useDispatch();

  const getData = async (): Promise<object> => {
    const response = await api.get('reports', {
      params: {
        iso: 'BRA',
      },
    });
    return { ...response.data.data };
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['reports/brazil'],
    queryFn: getData,
  });

  useEffect(() => {
    if (data) {
      dispatch(formatProvinces(data));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error ao requisitar os dados. Por favor, tente outra vez.</h1>;
  }

  return (
    <div>
      <h1>Brazil Page</h1>
      <CountryInformationCard />
      <ProvinceInformationCard />

      <Table data={provinces} />
      {/* <pre>{JSON.stringify(provinces, null, 2)}</pre> */}
    </div>
  );
}
export default BrazilPage;
