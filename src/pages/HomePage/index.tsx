import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import DatePickerComponent from '../../components/DatePickerComponent';
import api from '../../services/covid_statics_api';

function HomePage() {
  const { dateFilter } = useSelector((state) => state.dateFilter);
  const getData = async (): Promise<object> => {
    const params = dateFilter
      ? {
          params: { date: dateFilter },
        }
      : {};

    const response = await api.get('reports/total', params);

    return { ...response.data.data };
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['reports/total', dateFilter],
    queryFn: getData,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error ao requisitar os dados. Por favor, tente outra vez.</h1>;
  }

  return (
    <div>
      <h1>World Report Page</h1>
      <DatePickerComponent />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
export default HomePage;
