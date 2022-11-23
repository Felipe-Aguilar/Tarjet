import React from 'react';
import Header from './componentes/Header';
import TarjetaVista from './componentes/TarjetaVista';
import Informacion from './componentes/Informacion';

const App = () => {
  return ( 
    <div className='container-fluid'>
      <Header />
      <TarjetaVista />
      <Informacion />
    </div>
  );
}

export default App;