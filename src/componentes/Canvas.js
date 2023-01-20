import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import TuDiseño from './canvas/TuDiseño';
import TusDatos from './canvas/TusDatos';
import Reverso from './canvas/Reverso';

const Canvas = () => {

    const [activo, setActivo] = useState('active');

    return ( 
        <div className='canvas-contenedor'>
            <div className='row justify-content-center'>
                <div className='col-11 col-md-8'>
                    <p>
                        Nos da mucho gusto que estés a punto de crear tu Tarjet, con ella podrás dar una muy buena primera impresión a tus prospectos y clientes.
                    </p>
                    <h2>Diseña tu Tarjet</h2>
                    <h3>Tu tarjeta de Presentación Virtual</h3>
                    
                </div>
            </div>

            <div className='row mt-3 justify-content-center'>
                <div className='col-12 col-md-8 menu'>
                    <div className='nav-container w-auto'>
                        <NavLink to="tu-diseño" className={activo} onClick={()=>setActivo('active')}>
                            <i className="bi bi-1-circle-fill"></i> Tu diseño
                        </NavLink>
                        <NavLink to="tus-datos" onClick={()=>setActivo("")}>
                            <i className="bi bi-2-circle-fill"></i> Tus datos
                        </NavLink>
                        <NavLink to="reverso" onClick={()=>setActivo("")}>
                            <i className="bi bi-3-circle-fill"></i> Reverso
                        </NavLink>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path='/' element={<TuDiseño />}
                />
                <Route path='tu-diseño' element={<TuDiseño />}/>
                <Route path='tus-datos' element={<TusDatos />}/>
                <Route path='reverso' element={<Reverso />}/>
            </Routes>
            
        </div>
    );
}

export default Canvas;