import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuBar from '../../components/MenuBar';
import CountryPage from '../CountryPage';
import HomePage from '../CountriesPage';
import AppContainer from './styles';
import PageNotFound from '../PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <AppContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:countryISO" element={<CountryPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
