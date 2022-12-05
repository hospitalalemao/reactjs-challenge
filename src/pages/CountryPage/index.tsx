import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import CountryInformationCard from '../../components/CountryInformationCard';
import * as Global from '../../components/GlobalStyledComponents';
import * as S from './styles';
import ProvinceInformationCard from '../../components/ProvinceInformationCard';
import Table from '../../components/Table';
import { formatProvinces } from '../../features/provinces';
import api from '../../services/covid_statics_api';
import LoadingComponent from '../../components/Loading';
import DatePickerComponent from '../../components/DatePickerComponent';

function CountryPage() {
  const provinces = useSelector((state) => state.provinces.value);
  const { dateFilter } = useSelector((state) => state.dateFilter);
  const dispatch = useDispatch();
  const { countryISO } = useParams();

  const getData = async (): Promise<object> => {
    let params = { iso: countryISO };
    if (dateFilter) {
      params = { ...params, date: dateFilter };
    }
    const response = await api.get('reports', { params });
    return { ...response.data.data };
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: [`reports/${countryISO}`, dateFilter],
    queryFn: getData,
  });

  useEffect(() => {
    if (data) {
      dispatch(formatProvinces(data));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return <LoadingComponent />;
  }
  if (isError) {
    return (
      <Global.CenterContainer>
        <h1>Error ao requisitar os dados. Por favor, tente outra vez.</h1>
      </Global.CenterContainer>
    );
  }
  if (Object.keys(data).length === 0) {
    return (
      <Global.CenterContainer>
        <h1>Não foram encotrados dados.</h1>
      </Global.CenterContainer>
    );
  }
  return (
    <>
      <Global.PageTitleContainer>
        <Global.Title>{data['0'].region.name}</Global.Title>
        <DatePickerComponent />
      </Global.PageTitleContainer>
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
export default CountryPage;
