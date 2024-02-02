import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import Catalog from './components/Catalog/Catalog';
import Aboutus from './components/AboutUs/Aboutus';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Catalog />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/aboutus' element={<Aboutus />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
