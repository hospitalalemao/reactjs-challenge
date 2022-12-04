import styled from 'styled-components';

const ProvincesTable = styled.div`
  width: 60%;
`;

const CountryHeader = styled.div``;

const CountryContent = styled.div`
  display: flex;
  gap: 3rem;
  padding: 2rem;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProvinceContent = styled.div`
  flex: 1;
`;

export { ProvincesTable, CountryHeader, CountryContent, ProvinceContent };
