import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuBar from '../../components/MenuBar';
import BrazilPage from '../BrazilPage';
import HomePage from '../CountriesPage';
import AppContainer from './styles';

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <AppContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brazil" element={<BrazilPage />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
