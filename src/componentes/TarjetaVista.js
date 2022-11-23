import React, {useState} from 'react';
import styled from 'styled-components';
import tarjetaFrente from '../assets/TarjetaFrente.png';
import tarjetaReverso from '../assets/TarjetaReverso.png';
import { motion } from 'framer-motion';

const TarjetaVista = () => {

    const [ver, cambiarVer] = useState(true);
    const [reverso, cambiarReverso]  = useState(false);
    const [compartir, cambiarCompartir] = useState(false);

    return (
        <>
            <TarjetaVistaContenedor className='row justify-content-center mt-3'>
                <div className="col-11 col-md-4 tarjeta-contenedor">
                    { ver ? 
                        reverso ? 
                        <>
                            <img src={tarjetaFrente} alt=""/>
                        </>
                        :
                        <>
                            <img src={tarjetaReverso} alt=""/>
                        </>
                    :
                        <>
                        </>
                    }
                </div>
                <Opciones className='col-11 text-center'>
                    <div className='row justify-content-around'>
                        <div className='w-auto'>
                            <i 
                                className="bi bi-arrow-repeat"
                                onClick={() => cambiarReverso(!reverso)}
                            ></i>
                            <p>Reverso</p>
                        </div>
                        <div className='w-auto'>
                            { ver ?
                                <>
                                    <i 
                                        className="bi bi-eye-slash"
                                        onClick={() => cambiarVer(false)}
                                    ></i>
                                    <p>Ver/Ocultar</p>
                                </>
                            :
                                <>
                                    <i 
                                        className="bi bi-eye"
                                        onClick={() => cambiarVer(true)}
                                    ></i>
                                    <p>Ver/Ocultar</p>
                                </>
                            }
                            
                        </div>
                        <div className='w-auto'>
                            <i 
                                className="bi bi-share"
                                onClick={() => cambiarCompartir(!compartir)}
                            ></i>
                            <p>Compartir</p>
                        </div>
                        <div className='w-auto'>
                            <i className="bi bi-download"></i>
                            <p>Guardar</p>
                        </div>
                    </div>
                </Opciones>
                { compartir &&
                    <motion.div 
                        className='row justify-content-between compartir'

                        initial={{opacity:0, scale: 0}}
                        animate={{opacity:1, scale:1}}
                    >
                        <div className='w-auto'>
                            <a href="">
                                <i className="bi bi-whatsapp"></i>
                            </a>
                        </div>
                        <div className='w-auto'>
                            <a href="">
                                <i className="bi bi-facebook"></i>
                            </a>
                        </div>
                        <div className='w-auto'>
                            <a href="">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                        <div className='w-auto'>
                            <a href="">
                                <i className="bi bi-twitter"></i>
                            </a>
                        </div>
                    </motion.div>
                }
            </TarjetaVistaContenedor>
        </>
    );
}

const TarjetaVistaContenedor = styled.div`
    div{
        position: static;
    }
    img{
        width: 100%;
        @media screen and (max-width: 575px){
            width: 100%;
        }
    }
    .tarjeta-contenedor{
        height: 250px;
        @media screen and (max-width: 575px){
            height: 198px;
        }
    }
    .compartir{
        position: fixed;
        width: 50%;
        background: #fff;
        margin-top: 300px;
        padding: 15px;
        border-radius: 11px;    
        a{
            font-size: 20px;
            color: #000;
        }
    }
`;

const Opciones = styled.div`
    background: #fff;
    border-radius: 11px;
    margin-top: 20px;
    padding: 5px 15px;
    i{
        font-size: 25px;
        padding: 0;
    }
    p{
        margin:0;
    }
`;

const Compartir = styled.div`
    position: fixed;
    width: 50%;
    background: #fff;
    margin-top: 10px;
    padding: 15px;
    border-radius: 11px;    

    a{
        font-size: 20px;
        color: #000;
    }
`;

export default TarjetaVista;