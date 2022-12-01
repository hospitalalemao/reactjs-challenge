import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuBar from '../../components/MenuBar';
import BrazilPage from '../BrazilPage';
import HomePage from '../HomePage';

function App() {
  return (
    <BrowserRouter>
      <MenuBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brazil" element={<BrazilPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
