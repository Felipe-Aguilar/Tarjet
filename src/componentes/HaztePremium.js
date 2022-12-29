import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import HaztePremiumBanner from '../assets/haztepremiumbanner.png';
import BannerPremium1 from '../assets/BannerPremium1.png';
import BannerPremium2 from '../assets/BannerPremium2.png';
import BannerPremium3 from '../assets/BannerPremium3.png';
import PersonaMovimiento from '../assets/PersonaMovimiento.png';
import ChicaDatos from '../assets/ChicaDatos.png';
import TarjetaPremium from '../assets/TarjetaPremium.png';
import Radar from '../assets/radar.png';
import PersonasMundo from '../assets/PersonasMundo.png';
import Tarjetas from '../assets/tarjetas.png';
import Restaurante from '../assets/restaurante.png';

const HaztePremium = () => {
    return (

        <>
            <Slider className='row'>
                <div className='col-12 p-0'>
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={BannerPremium1} alt="Tarjet | Tu tarjeta de presentación Online" className='img-fluid'/>
                            </div>
                            <div class="carousel-item">
                                <img src={BannerPremium2} alt="Tarjet | Tu tarjeta de presentación Online" className='img-fluid'/>
                            </div>
                            <div class="carousel-item">
                                <img src={BannerPremium3} alt="Tarjet | Tu tarjeta de presentación Online" className='img-fluid'/>
                            </div>
                        </div>

                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </Slider>

            <div className='row mt-4 justify-content-center'>
                <div className='w-auto text-center'>
                    <h6>Tu tarjeta de presentación Virtual</h6>
                    <h5>a otro Nivel.</h5>
                </div>
            </div>

            <DiseñosTarjet className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor diseños'>
                    <p>
                        Elije <span>diseños</span> exclusivos de Tarjet y TarjetSite
                    </p>
                    <img src={PersonaMovimiento} alt="Tarjet | Tu tarjeta de presentación Online" />
                    <p className='float-left'>
                        incluso con movimiento
                    </p>
                </div>

                <div className='col-11 col-md-4 mt-4 mt-md-0 contenedor tarjet'>
                    <p>
                        <span>TarjetSite es Gratis, pero con <span>Premium</span> podrás Subir tu fotografía con un diseño genial.</span>
                    </p>
                    <img src={ChicaDatos} alt="Tarjet | Tu tarjeta de presentación Online" />
                </div>
            </DiseñosTarjet>

            <Logotipo className='row mt-4 justify-content-center'>

                <div className='col-11 col-md-8 contenedor'>
                    <p>
                        Agrega el logotipo de tu negocio a tu Tarjet y Tarjet Site
                    </p>
                    <p className='mt-4'>
                        Aquí tu logotipo
                    </p>
                    <img src={TarjetaPremium} alt="Tarjet | Tu tarjeta de presentación Online"/>
                </div>
            </Logotipo>

            <div className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-8 text-center'>
                    <p>
                        <b>El buscador de Tarjet</b> es ideal para aquellos que buscan un servicio o un producto determinado, y es gratis en un rango de 3kms.
                    </p>
                </div>
            </div>

            <PremiumConfigura className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor premium'>
                    <p>
                        Con <span>Premium</span> no existen límites ya que las personas podrán encontrar tus servicios en un rango mayor. 
                    </p>
                    <img src={Radar} alt="Tarjet | Tu tarjeta de presentación Online" />
                </div>

                <div className='col-11 col-md-4 mt-4 mt-md-0 contenedor configura'>
                    <p>
                        Configura el rango en el que deseas ser localizado, incluso a nivel Nacional y atrearás y más <span>clientes</span>
                    </p>
                    <img src={PersonasMundo} alt="Tarjet | Tu tarjeta de presentación Online" />
                </div>
            </PremiumConfigura>

            <div className='row mt-4 justify-content-center text-center'>
                <div className='w-75'>
                    <h5>Más espacio en tu Tarjet y TarjetSite</h5>
                </div>
            </div>

            <TarjetEmpresa className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor TarjetSite'>
                    <p>TarjetSite te permite subir hasta 4 imágenes Gratis de tus servicios.</p>
                    <p>
                        Con <span>Premium podrás subir hasta 10 imágenes.</span>
                    </p>
                    <img src={Tarjetas} alt="Tarjet | Tu tarjeta de presentación Online"/>
                </div>

                <div className='col-11 col-md-4 contenedor empresa'>
                    <p>
                        Si tienes una empresa o negocio con 2 o más participantes, visita nuestro apartado empresas o contáctanos. 
                    </p>
                    <img src={Restaurante} alt="Tarjet | Tu tarjeta de presentación Online" />
                    <motion.button
                        whileTap={{scale: 1.4}}
                    >
                        Regístrate <i className="bi bi-arrow-right"></i>
                    </motion.button>
                </div>
            </TarjetEmpresa>

            {/* <HaztePremiumContenedor className='row mt-4 justify-content-center'>

                <div className='col-11 col-md-4 contenedor  contenedor1'>
                    <img src={HaztePremiumBanner} alt="Tarjet | Tu tarjeta de presentación Online" />
                    <div className='info'>
                        <h6>Tu tarjeta de presentación Virtual a otro Nivel.</h6>
                        <p className='mensuales'>
                            <span>Por sólo 39 mxn <br/> mensuales.</span>
                        </p>
                        <p className='diferencia'>
                            Marca la Diferencia frente a tus competidores. <br/>
                            Dándo un toque único a tu tarjeta virtual.
                        </p>
                        <p className='elije'>
                            Elije uno de los <span>diseños</span> <br/>
                            exclusivos que tenemos para ti. 
                        </p>
                        <p className='elije'>
                            Además podrás subir tu fotografía en <span>TarjetSite</span>, el micrositio en dónde describesmás de tus servicios.
                        </p>
                    </div>
                </div>

                <div className='col-11 col-md-4 mt-4 mt-md-0 contenedor contenedor2'>
                    <h6>Con Tarjet Premium Accede a estas opciones.</h6>
                    <p>
                        - Si deseas que tu Tarjet se vea en una mayor zona Geofráfica o a nivel Nacional, puedes configurarlo en tu cuenta Premium.
                    </p>
                    <p>
                        - Agrega el Logo de tu empresa o negocio, en tu Tarjet y en tu TarjetSite.
                    </p>
                    <p>
                        - Agrega tu Fotografía en tu TarjetSite.
                    </p>
                    <p>
                        - Al contratar por un año recibe gratis el diseño de tu Tarjet Impreso en PVC tu código QR para compartir.
                    </p>
                </div>
            </HaztePremiumContenedor> */}
        </>

    );
}

const HaztePremiumContenedor = styled.div`
    
    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0;
    }
    .contenedor{
        background: #fff;
        border-radius: 20px;
        padding: 0;
    }
    
    .contenedor1{

        img{
            width: 100%;
            border-radius: 20px 20px 0 0;
        }

        .info{
            width: 100%;
            padding: 15px 20px;

            h6{
                margin-bottom: 15px;
            }
            .mensuales{
                line-height: 17px;
                span{
                    font-size: 20px;
                    font-weight: 600;
                }
            }
            .diferencia{
                text-align: center;
            }
            .elije{
                span{
                    font-size: 20px;
                }
            }
        }
    }

    .contenedor2{
        padding: 15px 20px;

        h6{
            text-align: center;
            font-weight: 600;
        }
    }
`;

const Slider = styled.div`
    margin-top: 4rem;
`;

const DiseñosTarjet = styled.div`

    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0;
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
    .diseños{
        background: #ed2f59;
        img{
            width: 65%;
            float: right;
        }
    }
    .tarjet{
        background: #00a859;

        p{
            @media screen and (max-width: 575px){
                margin-bottom: 250px;
            }
        }

        img{
            width: 70%;
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }
`;

const Logotipo = styled.div`
    .contenedor{
        border-radius: 20px;
        padding: 30px;
        color: #fff;
        background: #5ca47a;

        p{
            width: 40%;
            @media screen and (max-width: 575px){
                width: 100%;
            }
            span{
                font-size: 20px;
            }
        }
        img{
            width: 50%;
            float: right;
            @media screen and (max-width: 575px){
                width:100%;
            }
        }

    }
`;

const PremiumConfigura = styled.div`
    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0;
    }
    .contenedor{
        border-radius: 20px;
        padding: 30px;
        color: #fff;
        background: #0d82ae;

        p{
            span{
                font-size: 20px;
            }
        }
    }
    .premium{
        img{
            width: 70%;
            float: right;

            @media screen and (max-width: 575px){
                width: 90%;
            }
        }
    }
    .configura{
        img{
            width: 100%;
            float: right;
        }
    }
`;

const TarjetEmpresa = styled.div`
    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0;
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
    .TarjetSite{
        background: #6a9493;
        img{
            width: 100%;
            float: right;
        }
    }
    .empresa{
        background: #fff;
        color: #212529;

        img{
            width: 100%;
        }
        button{
            border:none;
            font-size: 25px;
            background: transparent;
            padding: 0;
            outline: none;
            float: right;
            margin-top: 10px;
        }
    }
`;
export default HaztePremium;