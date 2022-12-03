import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CountryInformationCard from '../../components/CountryInformationCard';
import * as Global from '../../components/InformationCard/styles';
import * as S from './styles';
import ProvinceInformationCard from '../../components/ProvinceInformationCard';
import Table from '../../components/Table';
import { formatProvinces } from '../../features/provinces';
import api from '../../services/covid_statics_api';
import DatePickerComponent from '../../components/DatePickerComponent';

function BrazilPage() {
  const provinces = useSelector((state) => state.provinces.value);
  const { dateFilter } = useSelector((state) => state.dateFilter);
  const dispatch = useDispatch();

  const getData = async (): Promise<object> => {
    let params = { iso: 'BRA' };
    if (dateFilter) {
      params = { ...params, date: dateFilter };
    }
    const response = await api.get('reports', { params });
    return { ...response.data.data };
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['reports/brazil', dateFilter],
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
  if (Object.keys(data).length === 0) {
    return <h1>Não foram encotrados dados.</h1>;
  }

  return (
    <>
      <S.CountryHeader>
        <Global.Title>Brasil</Global.Title>
        <DatePickerComponent />
      </S.CountryHeader>
      <CountryInformationCard />
      <S.CountryContent>
        <S.ProvincesTable>
          <Global.Subtitle>Estados</Global.Subtitle>
          <Table data={provinces} />
        </S.ProvincesTable>
        <S.ProvinceContent>
          <ProvinceInformationCard />
        </S.ProvinceContent>
      </S.CountryContent>
    </>
  );
}
export default BrazilPage;
