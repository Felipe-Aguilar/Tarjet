import React from 'react';
import Header from './componentes/Header';
import TarjetaVista from './componentes/TarjetaVista';
import TarjetSite from './componentes/TarjetSite';
import Footer from './componentes/Footer';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return ( 
    <>
      <div className='container-fluid p-0'>
        <Header />
      </div>
      <div className='container-fluid'>

        <Routes>
          <Route path='*' element={<TarjetaVista />}/>          
          <Route path='/' element={<TarjetaVista />}/>   

          <Route path='/tarjetSite' element={<TarjetSite />}/>          
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;