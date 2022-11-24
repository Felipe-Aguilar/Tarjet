import React from 'react';
import Header from './componentes/Header';
import TarjetaVista from './componentes/TarjetaVista';
import Informacion from './componentes/Informacion';
import Footer from './componentes/Footer';

const App = () => {
  return ( 
    <>
      <div className='container-fluid p-0'>
        <Header />
      </div>
      <div className='container-fluid'>
        <TarjetaVista />
        <Informacion />
        <Footer />
      </div>
    </>
  );
}

export default App;