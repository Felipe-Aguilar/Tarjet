import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Tarjetimg from '../assets/tarjetquees.png';
import QuienesBanner from '../assets/quienesbanner.png';
import QuienesBanner2 from '../assets/quienesbanner2.png';
import bannertarjet from '../assets/tarjetbanner.jpg';
import collage from '../assets/collage.png';
import mundo from '../assets/mundo.png';
import corazon from '../assets/corazon.png';
import tarjeteroFisico from '../assets/tarjeteroFisico.png';
import tarjetFlecha from '../assets/tarjetFlecha.png';
import esferas from '../assets/esferas.png';
import flecha from '../assets/flecha.png';

const QueEsTarjet = () => {
    return (
        <>
            <div className='row mt-4 justify-content-center'>
                <div className='col-12 text-center'>
                    <h3>¿Qué es Tarjet?</h3>
                    <h6>Una iniciativa creada para personas que mueven al mundo.</h6>
                </div>
            </div>

            <CollageCuerpo className='row mt-3 justify-content-center'>
                <div className='col-11'>
                    <img src={collage} alt="Tarjet | Tu tarjeta de presentación Online" className='img-fluid'/>
                </div>
            </CollageCuerpo>

            <div className='row mt-4 justify-content-center'>
                <div className='col-12 text-center'>
                    <h5>Una tarjeta virtual</h5>
                    <h6>Para todos aquellos que ofrecen un servicio o producto.</h6>
                </div>
            </div>

            <InfoContenedores className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor mundo'>
                    <p>
                        ya sea un negocio propio, una empresa o profesionistas.
                    </p>
                    <p>
                        podrán compartir su información y ser contratados.
                    </p>
                    <img src={mundo} alt="Tarjet | Tu tarjeta de presentación online" />
                </div>

                <div className='col-11 mt-4 mt-md-0 col-md-4 contenedor corazon'>
                    <p>
                        Puedes crear tu tarjeta virtual y dar a conocer tus servicios o productos a nivel local. 
                    </p>
                    <p className='text-right'>
                        <span>Sin costo!</span>
                    </p>
                    <p>
                        o a nivel nacional con nuestra opción Premium
                    </p>
                    <img src={corazon} alt="Tarjet | Tu tarjeta de presentación Online" />
                    <p className='w-100 float-right text-right'>
                        <span>I love Tarjet</span>
                    </p>
                </div>
            </InfoContenedores>

            <div className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-7 text-center'>
                    <h5>Tarjet También es:</h5>
                    <h6>un Tarjetero para administrar y tener a la mano la información actualizada de las personas que ya utilizan Tarjet</h6>
                </div>
            </div>

            <InfoContenedores2 className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor antes'>
                    <p>
                        Tal como se hacia <span>antes</span> con las tarjetas convencionales.
                    </p>
                    <img src={tarjeteroFisico} alt="Tarjet | Tu tarjeta de presentación Online" />
                </div>

                <div className='col-11 col-md-4 mt-4 mt-md-0 contenedor hoy'>
                    <p className='m-0'>
                        <span>Hoy puedes</span>
                    </p>
                    <p>
                        ser parte de esta gran red!
                    </p>
                    <img src={tarjetFlecha} alt="Tarjet | Tu tarjeta de presentación Online" />
                </div>
            </InfoContenedores2>

            <CorporativosContenedor className="row mt-4 justify-content-center">
                <div className='col-11 col-md-8 contenedor'>
                    <p>
                        Las empresas y corporativos también pueden pertenecer a la red de Tarjet, de esa manera todos se integran al tarjetero virtual y podrán ser encontrados por miles de personas.
                    </p>
                    <img src={esferas} alt="Tarjet | Tu tarjeta de presentación Online" />
                    <motion.button
                        whileTap={{scale: 1.4}}
                    >
                        Planes Empresariales <i className="bi bi-arrow-right"></i>
                    </motion.button>
                </div>
            </CorporativosContenedor>

            <CrearContenedor className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-8 contenedor'>
                    <p>
                        No es necesario crear una tarjeta virtual para guardar, recomendar y recibir recomendaciones de Tarjet's
                    </p>
                    <motion.button
                        whileTap={{scale: 1.4}}
                    >
                        Solo Regístrate <i className="bi bi-arrow-right"></i>
                    </motion.button>
                    <img src={flecha} alt="Tarjet | Tu tarjeta de presentación Online" />
                </div>
            </CrearContenedor>

            {/* <QueEsTarjetContenedor className='row mt-4 justify-content-center'>
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
            </QueEsTarjetContenedor> */}
        </>
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

const CollageCuerpo = styled.div`
    img{
        display: block;
        margin: auto;

        width: 70%;
        @media screen and (max-width: 575px){
            width: 100%;
        }
    }
`;

const InfoContenedores = styled.div`
    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0px;
    }
    .contenedor{
        border-radius: 20px;
        padding: 30px;
        color: #fff;

        p{
            span{
                font-size: 20px;
            }
        }
    }

    .mundo{
        background: #12a3d9;
        img{
            width: 95%;
            float: right;
        }
    }

    .corazon{
        background: #ed2f59;
        img{
            width: 50%;
            float: right;
        }
    }
`;

const InfoContenedores2 = styled.div`
    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0px;
    }
    .contenedor{
        border-radius: 20px;
        padding: 30px;
        color: #fff;

        p{
            span{
                font-size: 20px;
            }
        }
    }

    .antes{
        background: #f48884;

        img{
            width: 70%;
            @media screen and (max-width: 575px){
                width: 80%;
            }
            float: right;
        }
    }

    .hoy{
        background: #fff;
        color: #212529;

        img{
            width: 70%;
            float: right;

            @media screen and (max-width: 575px){
                width: 80%;
            }
        }
    }
`;

const CorporativosContenedor = styled.div`
    .contenedor{
        border-radius: 20px;
        padding: 30px;
        background: #f58634;

        img{
            width: 50%;
            float: left;

            @media screen and (max-width: 575px){
                width: 100%;
                display: block;
                margin: auto;
                margin-bottom: 35px;
            }
        }
        button{
            border:none;
            font-size: 20px;
            background: transparent;
            padding: 0;
            outline: none;
            position: absolute;
            bottom: 30px;
            right: 30px;

            @media screen and (max-width: 575px){
                float: right;
            }
        }
    }
`;

const CrearContenedor = styled.div`
    .contenedor{
        border-radius: 20px;
        padding: 30px;
        background: #ed3237;
        color: #fff;

        img{
            width: 50%;
            float: right;
            @media screen and (max-width: 575px){
                width: 80%;
                margin-bottom: 30px;
            }
        }

        button{
            border:none;
            font-size: 20px;
            background: transparent;
            padding: 0;
            outline: none;
            position: absolute;
            bottom: 30px;
            left: 30px;
            color: #fff;

            @media screen and (max-width: 575px){
                float: left;
            }
        }
    }
`;

export default QueEsTarjet;