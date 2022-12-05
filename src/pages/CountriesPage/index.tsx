import { useQuery } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import CountryCard from '../../components/CountryCard';
import LoadingComponent from '../../components/Loading';
import * as Global from '../../components/GlobalStyledComponents';
import SearchField from '../../components/SearchField';
import api from '../../services/covid_statics_api';
import getCountryISO2 from '../../utils/getCountryISO2.js';

function CountriesPage() {
  const [countries, setCountries] = useState([]);

  // @ts-expect-error: Unreachable code error
  const formatData = (coutriesObj) => {
    const coutriesObjLength = Object.keys(coutriesObj).length;
    const countriesList = [];

    for (let i = 0; i <= coutriesObjLength; i += 1) {
      if (coutriesObj[i]) {
        const iso2 = getCountryISO2(coutriesObj[i].iso);
        if (iso2) {
          countriesList.push({
            index: i,
            iso: coutriesObj[i].iso,
            iso2: iso2.toLowerCase(),
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

    // @ts-expect-error: Unreachable code error
    setCountries(formattedData);

    return formattedData;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['regions'],
    queryFn: getData,
  });

  if (isLoading || !countries.length) {
    return <LoadingComponent />;
  }

  if (isError) {
    return (
      <Global.CenterContainer>
        <h1>Error ao requisitar os dados. Por favor, tente outra vez.</h1>
      </Global.CenterContainer>
    );
  }

  const handleSearch = (countryName: string) => {
    // @ts-expect-error: Unreachable code error
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

      <Global.GridCard>
        {countries.map((country: ICountriesPage) => (
          <NavLink to={`/country/${country.iso}`} key={country.index}>
            <CountryCard country={country} />
          </NavLink>
        ))}
      </Global.GridCard>
    </>
  );
}

interface ICountriesPage {
  index: number;
  iso: string;
  iso2: string;
  name: string;
}
export default CountriesPage;
