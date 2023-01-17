import React, {useRef, useEffect, useState} from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import TuDiseño from './canvas/TuDiseño';

import tarjetaFrenteVacia from '../assets/TarjetaFrenteVacia.png';
import tarjetaReversoVacia from '../assets/TarjetaReversoVacia.png';


const Canvas = () => {

    // const [canvasContext, setCanvasContext] = useState(null);
    
    // const canvasRef = useRef(null);
    
    // useEffect(()=>{
    //     const canvas = canvasRef.current;
    //     const context = canvas.getContext('2d');
        
    //     const img = new Image();
    //     img.src = tarjetaFrenteVacia;
    //     context.drawImage(img, 0, 0,397, 238);

    //     context.font = "bold 20px serif";
    //     context.fillStyle = "#fff";
    //     context.fillText("CINDY GUTIERREZ",190,160);
        
    //     setCanvasContext(context);
    // });

    // const guardar = () =>{
    //     const canvas = canvasRef.current;

    //     const dato = canvas.toDataURL();
    //     const link = document.createElement("a");
    //     link.href = dato;
    //     link.download = 'tarjetaImagen';
    //     link.click();
        
    // }
    
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

            <Routes>
                <Route path='*' element={<TuDiseño />}/>
                
                <Route path='*/tu-diseño' element={<TuDiseño />}/>
                <Route path='*/tus-datos'/>
                <Route path='*/reverso'/>
            </Routes>

            {/* <div className='row justify-content-center'>
                <div className='col-11 col-md-5'>
                    <canvas ref={canvasRef} width={'397px'} height={'238px'} >
                    
                    </canvas>

                    <button onClick={()=>guardar()}>
                        Guardar imagen
                    </button>
                </div>
            </div> */}
        </div>
    );
}

export default Canvas;