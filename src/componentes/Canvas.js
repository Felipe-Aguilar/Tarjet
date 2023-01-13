import React, {useRef, useEffect, useState} from 'react';

import tarjetaFrenteVacia from '../assets/TarjetaFrenteVacia.png';
import tarjetaReversoVacia from '../assets/TarjetaReversoVacia.png';


const Canvas = () => {

    const [canvasContext, setCanvasContext] = useState(null);
    
    const canvasRef = useRef(null);
    
    useEffect(()=>{
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        
        const img = new Image();
        img.src = tarjetaFrenteVacia;
        context.drawImage(img, 0, 0, 397, 238);

        context.font = "bold 20px serif";
        context.fillStyle = "#fff";
        context.fillText("CINDY GUTIERREZ",200,200);
        
        setCanvasContext(context);
    },[]);

    const guardar = () =>{
        const canvas = canvasRef.current;

        const dato = canvas.toDataURL();
        const link = document.createElement("a");
        link.href = dato;
        link.download = 'tarjetaImagen';
        link.click();
        
    }
    
    return ( 
        <div className='row justify-content-center canvas'>
            <div className='col-11 col-md-5 bg-danger'>
                <canvas ref={canvasRef} width={'397px'} height={'238px'} >
                    
                </canvas>

                <button onClick={()=>guardar()}>
                    Guardar imagen
                </button>
            </div>
        </div>
    );
}

export default Canvas;