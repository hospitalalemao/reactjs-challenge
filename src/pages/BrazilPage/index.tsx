import { useQuery } from '@tanstack/react-query';
import api from '../../services/covid_statics_api';

function BrazilPage() {
  const getData = async (): Promise<object> => {
    const response = await api.get('reports/total');
    return { ...response.data.data };
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['reports/total'],
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
      <h1>Brazil Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
export default BrazilPage;
