import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Tarjetimg from '../assets/tarjetquees.png';
import QuienesBanner from '../assets/quienesbanner.png';
import QuienesBanner2 from '../assets/quienesbanner2.png';
import bannertarjet from '../assets/tarjetbanner.jpg';

const QueEsTarjet = () => {
    return ( 
        <QueEsTarjetContenedor className='row mt-4 justify-content-center'>
            <div className='col-11 col-md-4 contenedor contenedor1'>
                <img src={Tarjetimg} alt="Tarjet | Tu tarjeta de presentación Online" />
                <div className='w-100 info'>
                    <h2>¿Qué es Tarjet?</h2>
                    <p>
                        Es un micrositio en la nube, para todos aquellos que ofrecen un servicio, ya sea en el ámbito de Negocio Propio, Empresarial y Profesionistas que buscan darse a conocer.
                    </p>
                    <p>
                        Tarjet es una iniciativa para que todas las personas puedan crear su tarjeta virtual y dar a conocer sus servicios a nivel nacional ó local dentro de su comunidad.
                    </p>
                    <div className='w-auto text-right'>
                        <motion.button
                            whileTap={{scale: 1.4}}
                        >
                            Regístrate <i className="bi bi-arrow-right"></i>
                        </motion.button>
                    </div>
                </div>
            </div>

            <div className='col-11 col-md-4 mt-4 mt-md-0 contenedor contenedor4'>
                <img src={bannertarjet} alt="Tarjet | Tu tarjeta de presentacion Online" />
            </div>

            <div className='col-11 col-md-8 mt-4 contenedor contenedor2'>
                <p className='p1'>
                    <span>Comparte</span> por redes sociales, whatsApp, telegram, SMS.
                </p>
                <p className='p2'>
                    También desde tu smartphone <br/> hacia otro smartphone.
                </p>
            </div>

            <div className='col-11 mt-4 col-md-8 contenedor contenedor3'>
                <p>
                    Puedes solicitar tu código <br/> QR impreso en diferentes <br/> artículos.
                </p>
                <motion.button
                    whileTap={{scale: 1.4}}
                >
                    Visita Nuestra Tienda <i className="bi bi-arrow-right"></i>
                </motion.button>
            </div>
        </QueEsTarjetContenedor>
    );
}

const QueEsTarjetContenedor = styled.div`
    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0;
    }
    .contenedor{
        border-radius: 20px;
        padding: 0;
    }
    .contenedor1{
        img{
            width: 100%;
            border-radius: 20px 20px 0 0;
        }
        .info{
            background: #0e70ec;
            border-radius: 0 0 20px 20px;
            color: #fff;
            padding: 15px 20px;
            h2{
                font-size: 18px;
            }
            p{
                font-size: 13px;
                text-align: justify;
            }
            button{
                text-decoration: none;
                color: #fff;
                font-size: 18px;
                background: none;
                border:none;
                outline: none;
            }
        }
    }

    .contenedor2{
        height: 450px;
        padding: 0 20px;
        color: #fff;
        background-image: url(${QuienesBanner});
        background-size: cover;
        background-position: center;

        p{
            span{
                font-size: 20px;
            }
        }
        .p1{
            position: absolute;
            top:30px;
        }
        .p2{
            position: absolute;
            bottom:50px;
        }
    }

    .contenedor3{
        height: 450px;
        padding: 0 20px;
        color: #fff;
        background-image: url(${QuienesBanner2});
        background-size: cover;
        background-position: center;

        p{
            position: absolute;
            bottom: 80px;
            span{
                font-size: 20px;
            }
        }
        button{
            background: none;
            border: none;
            outline: none;
            color: #fff;
            position: absolute;
            bottom: 20px;
        }
    }

    .contenedor4{
        img{
            width: 100%;
            border-radius: 20px;
        }
    }
`;

export default QueEsTarjet;