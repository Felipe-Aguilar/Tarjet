import React from 'react';
import Header from './componentes/Header';
import VistaInicio from './componentes/VistaInicio';
import TarjetSite from './componentes/TarjetSite';
import Footer from './componentes/Footer';
import { Route, Routes } from 'react-router-dom';

import QueEsTarjet from './componentes/QueEsTarjet';
import HaztePremium from './componentes/HaztePremium';

const App = () => {
  return ( 
    <>
      <div className='container-fluid p-0'>
        <Header />
      </div>
      <div className='container-fluid'>

        <Routes>
          <Route path='*' element={<VistaInicio />}/>          
          <Route path='/' element={<VistaInicio />}/>   

          <Route path='/tarjetSite' element={<TarjetSite />}/>
          <Route path='/que-es-tarjet' element={<QueEsTarjet />}/>
          <Route path='/hazte-premium' element={<HaztePremium />}/>
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;