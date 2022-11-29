import React from 'react';
import styled from 'styled-components';
import Promo from '../assets/Promo.png';
import Promo2 from '../assets/Promo2.png';
import FondoContenedor3 from '../assets/FondoContenedor3.jpg';
import Perfil from './Perfil';
import { motion } from 'framer-motion';
import Logo from '../assets/LogoOficial.png';
import LogoOficial from '../assets/TarjetLogo.png';
import Slider1 from '../assets/Slide1.jpg';
import Slider2 from '../assets/Slide2.jpg';

const Informacion = () => {
    return (
        <>
            {/* <Perfil /> */}

            <InformacionContenedor3 className='row mt-4 justify-content-center'>
                <div className='col-11 contenedor'>
                    <p>
                        Tarjet es la tarjeta de presentación virtual para todo el mundo. Crea y configura tu tarjet site.
                    </p>
                    <p className='mt-3'>
                        Completamente gratis
                    </p>
                    <p className='mt-3 text-right'>
                        ¡Haz que todos te conozcan! 
                    </p>
                    <motion.img 
                        src={LogoOficial} 
                        alt="Tarjet | Logo" 

                        initial={{opacity:0, scale:0}}
                        whileInView={{opacity:1, scale: [1,1.1,1]}}
                        viewport={{once: true}}
                        whileTap={{scale: 1}}
                    />
                    <motion.button
                        whileTap={{scale: 1.4}}
                    >
                        Regístrate <i className="bi bi-arrow-right"></i>
                    </motion.button>
                </div>
            </InformacionContenedor3>

            {/* <InformacionContenedor2 className='row mt-4 justify-content-center'>
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
            </InformacionContenedor2> */}

            <InformacionContenedor2 className='row mt-4 justify-content-center'>
                <div className='col-11 contenedor'>
                    <p>
                        <span>E</span>lige de nuestra galería el diseño que más te guste para tu <span><b>Tarjet</b></span>.
                    </p>
                    <p className='mt-3 text-right'>
                        <span>C</span>ompártela fácil y rápido, haz que conozcan lo que haces.
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
                        Tú decides si hacer tu <span><b>Tarjet</b> pública o privada</span>
                    </p>
                    <p className='mt-3'>
                        Todo esto es <span>GRATIS</span>
                    </p>
                    <motion.button
                        whileTap={{scale: 1.4}}
                    >
                        Regístrate <i className="bi bi-arrow-right"></i>
                    </motion.button>
                </div>
            </InformacionContenedor2>

            <InformacionContenedor className='row mt-4 justify-content-center'>
                <div className='col-11 contenedor'>
                    <p>
                        Encuentra personas
                        <span> que ofrecen servicios </span>
                        de tu interés, <span>cerca de tí</span>
                    </p>
                    {/* <img className='logo' src={Logo} alt="Tarjet | Logo" /> */}
                    <p className="nacional mt-5">
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

            <Slider className='row mt-4 justify-content-center'>
                
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='col-11 contenedor'>
                                    <img src={Slider1} 
                                        alt="Tarjet | Tu tarjeta de presentación Online" 
                                        className='img-fluid'
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='col-11 contenedor'>
                                    <img src={Slider2} 
                                        alt="Tarjet | Tu tarjeta de presentación Online" 
                                        className='img-fluid'
                                    />
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                            <span className="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                
            </Slider>
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
            bottom: 40px;
            @media screen and (max-width: 575px){
                width: 200px;
            }
            @media screen and (max-width: 360px) and (max-height: 800px){
                width: 170px;
                bottom: 30px;
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
        background: #3ea97b;
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
            width: 260px;
            /* display: block;
            margin: auto; */
            margin-top: 40px;
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
            float: right;
            
            @media screen and (max-width: 360px) and (max-height: 800px){
                margin-top: 30px;
            }

            i{
                padding-top: 5px;
            }
        }
    }
`;
const InformacionContenedor3 = styled.div`
    .contenedor{
        /* background-image: url(${FondoContenedor3}); */
        background: #fff;
        border-radius: 20px;

        /* height: 500px; */
        padding: 30px 30px;
        color: #000;

        p{
            margin: 0;
            span{
                font-size: 20px;
            }
        }

        img{
            width: 230px;
            display: block;
            float: right;
            
            margin-top: 50px;
            /* margin-bottom: 50px; */
        }

        button{
            border:none;
            font-size: 25px;
            background: transparent;
            color: #000;
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

const Slider = styled.div`
    .contenedor{
        background: #3ea97b;
        border-radius: 20px;
        /* height: 500px; */
        padding: 0;
        color: #fff;
        display: block;
        margin: auto;
        
        img{
            border-radius: 20px;
        }
    }
`;


export default Informacion;