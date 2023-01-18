import React, {useEffect, useRef, useState} from 'react';

import tarjetaFrenteVacia from '../../assets/TarjetaFrenteVacia.png';

const TuDiseño = () => {

    const [nombre, setNombre] = useState('');
    const [subtitulo, setSubtitulo] = useState('');

    const [canvasContext, setCanvasContext] = useState(null);
    const canvasRef = useRef(null);
    
    useEffect(()=>{
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        
        const img = new Image();
        img.src = tarjetaFrenteVacia;
        context.drawImage(img, 0, 0,397, 238);

        context.font = "bold 20px serif";
        context.fillStyle = "#fff";
        context.fillText(nombre.toUpperCase() ,190,160);
        context.fillText(subtitulo.toUpperCase() ,190,190);
        
        setCanvasContext(context);
    });

    // const guardar = () =>{
    //     const canvas = canvasRef.current;

    //     const dato = canvas.toDataURL();
    //     const link = document.createElement("a");
    //     link.href = dato;
    //     link.download = 'tarjetaImagen';
    //     link.click();
        
    // }

    return ( 
        <div className='mt-3 TuDiseño'>
            <div className='row justify-content-center'>
                <div className='col-11 col-md-8'>
                    <form>
                        <label>Colección: </label>
                        <select>
                            <option value="Ejecutivas" key="">Ejecutivas</option>
                        </select>
                        <i className="bi bi-question-circle-fill"></i>
                    </form>
                </div>
            </div>

            <div className='row mt-2 justify-content-center'>
                <div className='col-11 col-md-8'>
                    <canvas ref={canvasRef} width={'397px'} height={'238px'} >
                    </canvas>
                </div>
            </div>

            <div className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-5'>
                    <form>
                        <input 
                            type="text" 
                            placeholder='Encabezado de tu Tarjet (30 caracteres)' 
                            maxLength={30} 
                            className='encabezado'
                            // value={encabezado}
                            // onChange={(e)=>{setEncabezado(e.target.value)}}
                            readOnly
                        />
                        <select className='select'>
                            <option value="Sr." key="">Sr.</option>
                        </select>
                        <input 
                            type="text" 
                            placeholder='Nombre y apellidos (40 caracteres)' 
                            maxLength={40} 
                            className='nombre'
                            value={nombre}
                            onChange={(e)=>{setNombre(e.target.value)}}
                        />
                        <input 
                            type="text" 
                            placeholder='Texto debajo de tu nombre (30 caracteres)' 
                            maxLength={30} 
                            className='texto'
                            value={subtitulo}
                            onChange={(e)=>{setSubtitulo(e.target.value)}}
                        />
                    </form>
                </div>
            </div>

        </div>
    );
}

export default TuDiseño;