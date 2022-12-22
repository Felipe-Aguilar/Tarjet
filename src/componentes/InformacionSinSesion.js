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
import Slider3 from '../assets/Slide3.png';
import Slider4 from '../assets/Slide4.png';
import Banner3 from '../assets/Banner3.png';

const Informacion = () => {
    return (
        <>
            {/* <Perfil /> */}

            <InformacionContenedor3 className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor'>
                    <img src={Banner3} 
                        alt="Tarjet | Tú tarjeta de presentación Online" 
                        className='img-fluid'
                    />
                </div>

                <div className='col-11 col-md-4 contenedor contenedor2 mt-4 mt-md-0'>
                    <h5>Crea tu Tarjet Gratis.</h5>
                    <p>Elige de nuestra galería el diseño que más te guste para tu <span>Tarjet.</span></p>
                    <motion.img 
                        src={Promo2} 
                        alt="Tarjet | Tu tarjeta de presentación Online" 
                        className='img-fluid'
                        initial={{opacity:0, scale:0}}
                        animate={{opacity:1, scale:1}}
                        transition={{delay:1.2}}
                        whileInView={{rotate: [0,-5]}}
                        viewport={{once:true}}
                    />
                    <motion.button
                        whileTap={{scale: 1.4}}
                    >
                        Regístrate <i className="bi bi-arrow-right"></i>
                    </motion.button>
                </div>
            </InformacionContenedor3>

            <InfoComparte className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor comparte'>
                    <p><span>Comparte</span> tu <span>Tarjet</span> las veces que quieras.</p>
                    <p>y deja que te recomienden! Te encantará.</p>
                    <p><span>Sin ningún costo!</span></p>
                </div>

                <div className='col-11 col-md-4 mt-4 mt-md-0 contenedor publica'>
                    <p><span>Pública</span> ó <span>Privada?</span></p>
                    <p><span>Más</span> personas te encontrarán en nuestro buscador, para que te contraten.</p>
                    <p>o solamente comparte tu Tarjet a quien tu quieras.</p>
                    <motion.img 
                        src={Promo} 
                        alt="Tarjet | Tu tarjeta de presentación Online"

                        initial={{opacity:0, scale:0}}
                        whileInView={{opacity:1, scale: [1,1.1,1]}}
                        viewport={{once: true}}
                        whileTap={{scale: 1}}
                    />
                </div>
            </InfoComparte>

            <div className='row mt-4 justify-content-center'>
                <div className='w-auto text-center'>
                    <h6>También puedes tener</h6>
                    <h3>TarjetSite</h3>
                    <p>
                        El micrositio que muestra más
                        <br/> sobre tu profesión o negocio.
                    </p>
                </div>
            </div>

            {/* <InformacionContenedor2 className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor'>
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
            </InformacionContenedor2> */}

            {/* <InformacionContenedor className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor'>
                    <p>
                        Encuentra personas
                        <span> que ofrecen servicios </span>
                        de tu interés, <span>cerca de tí</span>
                    </p>
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
            </InformacionContenedor> */}

            <Slider className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4'>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='contenedor'>
                                    <img src={Slider4} 
                                        alt="Tarjet | Tu tarjeta de presentación Online" 
                                        className='img-fluid'
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='contenedor '>
                                    <img src={Slider1} 
                                        alt="Tarjet | Tu tarjeta de presentación Online" 
                                        className='img-fluid'
                                    />
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                <div className='col-11 mt-4 mt-md-0 col-md-4'>
                    <div id="carouselExampleControls2" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='contenedor'>
                                    <img src={Slider2} 
                                        alt="Tarjet | Tu tarjeta de presentación Online" 
                                        className='img-fluid'
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='contenedor '>
                                    <img src={Slider3} 
                                        alt="Tarjet | Tu tarjeta de presentación Online" 
                                        className='img-fluid'
                                    />
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                
            </Slider>

            {/* <Slider className='row mt-4 justify-content-center'>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className='contenedor col-11'>
                                <img src={Slider1} 
                                    alt="Tarjet | Tu tarjeta de presentación Online" 
                                    className='img-fluid'
                                />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='col-11 contenedor col-11'>
                                <img src={Slider2} 
                                    alt="Tarjet | Tu tarjeta de presentación Online" 
                                    className='img-fluid'
                                />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='col-11 contenedor col-11'>
                                <img src={Slider3} 
                                    alt="Tarjet | Tu tarjeta de presentación Online" 
                                    className='img-fluid'
                                />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='col-11 contenedor col-11'>
                                <img src={Slider4} 
                                    alt="Tarjet | Tu tarjeta de presentación Online" 
                                    className='img-fluid'
                                />
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </Slider> */}

            {/* <Slider className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4'>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className='contenedor'>
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
                            <div className="carousel-item">
                                <div className='col-11 contenedor'>
                                    <img src={Slider3} 
                                        alt="Tarjet | Tu tarjeta de presentación Online" 
                                        className='img-fluid'
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className='col-11 contenedor'>
                                    <img src={Slider4} 
                                        alt="Tarjet | Tu tarjeta de presentación Online" 
                                        className='img-fluid'
                                    />
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </Slider> */}

            {/* <Slider className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4'>

                </div>
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
                        <div className="carousel-item">
                            <div className='col-11 contenedor'>
                                <img src={Slider3} 
                                    alt="Tarjet | Tu tarjeta de presentación Online" 
                                    className='img-fluid'
                                />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='col-11 contenedor'>
                                <img src={Slider4} 
                                    alt="Tarjet | Tu tarjeta de presentación Online" 
                                    className='img-fluid'
                                />
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </Slider> */}

            <Configura className='row mt-4 justify-content-center'>
                <div className='w-auto text-center'>
                    <h6>Configura Gratis!</h6>
                    <h5>TarjetSite y muestra tu información de manera profesional.</h5>
                    <a href="#">
                        Regístrate y Disfruta
                    </a>
                </div>
            </Configura>

            <PlanesGratis className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor planes'>
                    <p><span>Planes para empresas.</span></p>
                    <p className='mt-2'>
                        * Personalizamos la tarjeta virtual y TarjetSite de los colaboradores de tu empresa.
                    </p>
                    <p className='mt-1'>
                        *Brindamos una imágen única y diseños vanguardistas.
                    </p>
                    <motion.button
                        whileTap={{scale: 1.4}}
                    >
                        Ver planes <i className="bi bi-arrow-right"></i>
                    </motion.button>
                </div>

                <div className='col-11 col-md-4 mt-4 mt-md-0 contenedor gratis'>
                    <p><span>2x1 Gratis</span></p>
                    <p className='mt-2'>
                        Tarjet y TarjetSite
                    </p>
                    <p className='mt-1'>
                        La mejor forma de llegar a más clientes.
                    </p>
                    <motion.button
                        whileTap={{scale: 1.4}}
                    >
                        Crea y configura Ya! <i className="bi bi-arrow-right"></i>
                    </motion.button>
                </div>
            </PlanesGratis>

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
    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0px;
    }
    .contenedor{
        /* background-image: url(${FondoContenedor3}); */
        background: #fff;
        border-radius: 20px;

        /* height: 500px; */
        /* padding: 30px 30px; */
        color: #000;

        p{
            margin: 0;
            span{
                font-size: 20px;
            }
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
    .contenedor2{
        padding: 30px 30px;
        background: #e6e7e8;
        h5{
            font-weight: 600;
        }
        img{
            margin-top: 30px;
        }
        button{
            position: absolute;
            bottom: 15px;
            right: 15px;
            @media screen and (max-width: 575px){
                position: relative;
                float: right;
            }
        }
    }
`;

const Slider = styled.div`
    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0px;
    }
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

const InfoComparte = styled.div`
    gap: 20px;

    @media screen and (max-width: 575px){
        gap:0px;
    }

    .contenedor{
        border-radius: 20px;
        color: #fff;
        padding: 30px 30px;
        p{
            margin: 0;
            span{
                font-size: 20px;
            }
        }
    }
    .comparte{
        background: #3ea97b;
        @media screen and (max-width: 575px){
            height: 400px;
        }
    }
    .publica{
        background: #406fe8;
        img{
            width: 250px;
            margin-top: 20px;
            float: right;

            @media screen and (max-width: 575px){
                width: 200px;
            }
        }
    }
`;

const Configura = styled.div`
    padding: 10px 20px;
    h5{
        margin-bottom: 25px;
    }
    a{
        background: #171717;
        color: #fff;
        padding: 7px 18px;    
        border-radius: 6px;
        text-decoration: none;
    }
`;

const PlanesGratis = styled.div`
    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0px;
    }
    .contenedor{
        border-radius: 20px;
        color: #fff;
        padding: 30px 30px;
        height: 300px;
        @media screen and (max-width: 575px){
            height: 400px;
        }
        p{
            margin: 0;
            span{
                font-size: 20px;
            }
        }
        button{
            border:none;
            font-size: 25px;
            background: transparent;
            color: #fff;
            padding: 0;
            outline: none;
            position: absolute;
            bottom: 15px;
            right: 15px;
        }
    }
    .planes{
        background: #ee7a3f;
    }
    .gratis{
        background: #323c46;
    }
`;


export default Informacion;