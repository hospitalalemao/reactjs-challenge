import { useQuery } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import CountryCard from '../../components/CountryCard';
import { GridCard } from '../../components/InformationCard/styles';
import LoadingComponent from '../../components/Loading';
import * as Global from '../../components/InformationCard/styles';
import SearchField from '../../components/SearchField';
import api from '../../services/covid_statics_api';
import getCountryISO2 from '../../utils/getCountryISO2.js';

function HomePage() {
  const [countries, setCountries] = useState([]);

  const formatData = (coutriesObj) => {
    const coutriesObjLength = Object.keys(coutriesObj).length;
    const countriesList = [];

    for (let i = 0; i <= coutriesObjLength; i += 1) {
      if (coutriesObj[i]) {
        const iso = getCountryISO2(coutriesObj[i].iso);
        if (iso) {
          countriesList.push({
            index: i,
            iso: iso.toLowerCase(),
            name: coutriesObj[i].name,
          });
        } else {
          // console.log(coutriesObj[i]);
        }
      }
    }
    return countriesList;
  };

  const getData = async (): Promise<object> => {
    const response = await api.get('regions');
    const data = { ...response.data.data };
    const formattedData = formatData(data);

    setCountries(formattedData);

    return formattedData;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['regions'],
    queryFn: getData,
  });

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isError) {
    return <h1>Error ao requisitar os dados. Por favor, tente outra vez.</h1>;
  }

  const handleSearch = (countryName: string) => {
    const filteredCountries = data.filter((country) =>
      country.name.toLowerCase().includes(countryName.toLowerCase())
    );
    setCountries(filteredCountries);
  };

  return (
    <>
      <Global.PageTitleContainer>
        <h1>Lista de Países</h1>
        <SearchField handleSearch={handleSearch} />
      </Global.PageTitleContainer>

      <GridCard>
        {countries.map((country) => (
          <NavLink to="/brazil" key={country.index}>
            <CountryCard country={country} />
          </NavLink>
        ))}
      </GridCard>
    </>
  );
}
export default HomePage;
