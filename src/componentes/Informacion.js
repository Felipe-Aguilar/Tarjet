import React from 'react';
import styled from 'styled-components';
import Promo from '../assets/Promo.png';
import Promo2 from '../assets/Promo2.png';
import Perfil from './Perfil';
import { motion } from 'framer-motion';
import Logo from '../assets/LogoOficial.png';

const Informacion = () => {
    return (
        <>
            {/* <Perfil /> */}
            
            <InformacionContenedor className='row mt-4 justify-content-center'>
                <div className='col-11 contenedor'>
                    <p>
                        Encuentra personas
                        <span> que ofrecen servicios </span>
                        de tu interés, <span>cerca de tí</span>
                    </p>
                    <img className='logo' src={Logo} alt="Tarjet | Logo" />
                    <p className="nacional">
                        ó a nivel <br/>
                        <span> NACIONAL</span>
                    </p>
                    <motion.img 
                        src={Promo} 
                        alt="Tarjet | Tu tarjeta de presentación"
                        className='celularPromo'

                        initial={{opacity:0, scale:0}}
                        whileInView={{opacity:1, scale: [1,1.1,1]}}
                        viewport={{once: true}}
                        whileTap={{scale: 1}}
                    />
                    <motion.button
                        whileTap={{scale: 1.4}}
                    >
                        Buscar <i className="bi bi-arrow-right"></i>
                    </motion.button>
                </div>
            </InformacionContenedor>

            <InformacionContenedor2 className='row mt-4 justify-content-center'>
                <div className='col-11 contenedor'>
                    <p>
                        <span>C</span>rea tu propia tarjeta de presentación y compártela con quien tú quieras, <span>completamente gratis.</span>
                    </p>
                    <motion.img 
                        src={Promo2} 
                        alt="Tarjet | Logo" 

                        initial={{opacity:0, scale:0}}
                        whileInView={{opacity:1, scale: [1,1.1,1]}}
                        viewport={{once: true}}
                        whileTap={{scale: 1}}
                    />
                    <p className='text-right'>
                        Tú decides si hacer tu tarjeta <span>pública o privada.</span>
                    </p>
                    <motion.button
                        whileTap={{scale: 1.4}}
                    >
                        Regístrate <i className="bi bi-arrow-right"></i>
                    </motion.button>
                </div>
            </InformacionContenedor2>
        </>
    );
}

const InformacionContenedor = styled.div`
    .contenedor{
        background: #406fe8;
        border-radius: 20px;
        /* height: 500px; */
        padding: 30px 30px;
        color: #fff;

        p{
            margin: 0;
            span{
                font-size: 20px;
            }
        }
        .nacional{
            font-size: 20px;
            span{
                font-size: 25px;
                text-transform: uppercase;
            }
        }
        
        .celularPromo{
            width: 20%;
            position: absolute;
            right: 0;
            bottom: 45px;
            @media screen and (max-width: 575px){
                width: 200px;
            }
            @media screen and (max-width: 360px) and (max-height: 800px){
                width: 170px;
                bottom: 80px;
            }
        }

        .logo{
            width: 100px;
        }

        button{
            border:none;
            font-size: 25px;
            background: transparent;
            color: #fff;
            padding: 0;
            margin-top: 150px;
            outline: none;
            
            @media screen and (max-width: 360px) and (max-height: 800px){
                margin-top: 130px;
            }

            i{
                padding-top: 5px;
            }
        }
    }
`;

const InformacionContenedor2 = styled.div`
    .contenedor{
        background: #58775b;
        border-radius: 20px;
        /* height: 500px; */
        padding: 30px 30px;
        color: #fff;

        p{
            margin: 0;
            span{
                font-size: 20px;
            }
        }

        img{
            width: 250px;
            display: block;
            margin: auto;
            margin-top: 50px;
            margin-bottom: 50px;
        }

        button{
            border:none;
            font-size: 25px;
            background: transparent;
            color: #fff;
            padding: 0;
            margin-top: 30px;
            outline: none;
            
            @media screen and (max-width: 360px) and (max-height: 800px){
                margin-top: 30px;
            }

            i{
                padding-top: 5px;
            }
        }
    }
`;

export default Informacion;