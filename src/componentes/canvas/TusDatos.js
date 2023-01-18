import React,{ useRef, useState, useEffect } from 'react';

import tarjetaReversoVacia from '../../assets/TarjetaReversoVacia.png';

const TusDatos = () => {

    const [telefono, setTelefono] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [servicio1, setServicio1] = useState('');
    const [servicio2, setServicio2] = useState('');
    const [servicio3, setServicio3] = useState('');

    const [canvasContext, setCanvasContext] = useState(null);
    const canvasRef = useRef(null);
    
    useEffect(()=>{
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        
        const img = new Image();
        img.src = tarjetaReversoVacia;
        context.drawImage(img, 0, 0,397, 238);

        context.font = "bold 20px serif";
        context.fillStyle = "#fff";
        context.fillText(telefono ,30,180);
        context.fillText(ubicacion ,30,210);
        context.fillText(servicio1 ,30,80);
        context.fillText(servicio2 ,30,100);
        context.fillText(servicio3 ,30,120);
        
        setCanvasContext(context);
    });

    return ( 
        <div className='mt-3 TusDatos'>
            <div className='row justify-content-center'>

                <div className='col-11 col-md-8'>
                    <canvas ref={canvasRef} width={'397px'} height={'238px'} >
                    </canvas>
                </div>
            </div>

            <div className='row mt-3 justify-content-center'>
                <div className='col-11 col-md-5'>
                    <form>
                        <div className='d-flex align-items-center'>
                            <label>Teléfono de contacto</label>
                            <i className="bi bi-question-circle-fill"></i>
                        </div>
                        <div className='d-flex align-items-center'>
                            <input 
                                type="text" 
                                className='whats'
                                placeholder='WhatsApp'
                                maxLength={10}
                                value={telefono}
                                onChange={(e)=>{setTelefono(e.target.value)}}
                            />
                            <label className='label-info'>
                                Preferentemente ingresa un número con WhatsApp para que sea más fácil contactarte.
                            </label>
                        </div>

                        <div className='d-flex align-items-center mt-1'>
                            <label>Ingresa tu dirección (opcional)</label>
                            <i className="bi bi-question-circle-fill"></i>
                        </div>
                        <div className='d-flex align-items-center'>
                            <input 
                                type="text" 
                                placeholder='Ubicación'
                                maxLength={20}
                                className="ubicacion"
                                value={ubicacion}
                                onChange={(e)=>{setUbicacion(e.target.value)}}
                            />
                            <label className='label-info'>
                                El ícono los llevará a tu ubicación en Google Maps
                            </label>
                        </div>
                    </form>
                </div>
            </div>

            <div className='row justify-content-center mt-3'>
                <div className='col-11 col-md-5'>
                    <div className='row'>
                        <div className='col-6'>
                                <form className='formulario-columnas'>
                                    <label>Descripción de Servicio 1 (premium)</label>
                                    <input 
                                        type="text" 
                                        placeholder='Servicio 1'
                                        maxLength={15}
                                        value={servicio1}
                                        onChange={(e)=>{setServicio1(e.target.value)}}
                                    />

                                    <label>Descripción de Servicio 3 (premium)</label>
                                    <input 
                                        type="text" 
                                        placeholder='Servicio 3'
                                        maxLength={15}
                                        onChange={(e)=>{setServicio2(e.target.value)}}
                                    />

                                    <label>Descripción de Servicio 5 (premium)</label>
                                    <input 
                                        type="text" 
                                        placeholder='Servicio 5'
                                        maxLength={15}
                                        onChange={(e)=>{setServicio3(e.target.value)}}
                                    />
                                    
                                </form>
                        </div>
                        <div className='col-6'>
                                <form className='formulario-columnas'>
                                    <label>Descripción de Servicio 2 (premium)</label>
                                    <input 
                                        type="text" 
                                        placeholder='Servicio 2'
                                        maxLength={15}
                                        readOnly
                                    />
                                    <label>Descripción de Servicio 4 (premium)</label>
                                    <input 
                                        type="text" 
                                        placeholder='Servicio 4'
                                        maxLength={15}
                                        readOnly
                                    />
                                    <label>Descripción de Servicio 6 (premium)</label>
                                    <input 
                                        type="text" 
                                        placeholder='Servicio 6'
                                        maxLength={15}
                                        readOnly
                                    />
                                </form>
                        </div>

                    </div>
                </div>
            </div>

            <div className='row justify-content-center mt-3'>
                <div className='col-11 col-md-5'>
                    <form>
                        <input type="checkbox" className='mr-2' id='terminos'/> 
                        <label htmlFor='terminos'>
                            Acepto términos de privacidad
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TusDatos;