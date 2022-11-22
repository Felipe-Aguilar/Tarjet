import React from 'react';
import Header from './componentes/Header';
import TarjetaVista from './componentes/TarjetaVista';

const App = () => {
  return ( 
    <div className='container-fluid'>
      <Header />
      <TarjetaVista />
    </div>
  );
}

export default App;