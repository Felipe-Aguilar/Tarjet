import React, {useRef, useEffect, useState} from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import TuDiseño from './canvas/TuDiseño';
import TusDatos from './canvas/TusDatos';
import Reverso from './canvas/Reverso';

const Canvas = () => {
    
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
                        <NavLink to="/canvas/tu-diseño" className="active">
                            <i className="bi bi-1-circle-fill"></i> Tu diseño
                        </NavLink>
                        <NavLink to="/canvas/tus-datos">
                            <i className="bi bi-2-circle-fill"></i> Tus datos
                        </NavLink>
                        <NavLink to="/canvas/reverso">
                            <i className="bi bi-3-circle-fill"></i> Reverso
                        </NavLink>
                    </div>
                </div>
            </div>

            <TuDiseño />
            <TusDatos />
            <Reverso />
            
        </div>
    );
}

export default Canvas;