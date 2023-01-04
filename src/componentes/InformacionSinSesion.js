import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Promo from '../assets/Promo.png';
import Promo2 from '../assets/Promo2.png';
import Slider1 from '../assets/Slide1.jpg';
import Slider2 from '../assets/Slide2.jpg';
import Slider3 from '../assets/Slide3.png';
import Slider4 from '../assets/Slide4.png';
import Banner3 from '../assets/Banner3.png';
import Planes from '../assets/planes.png';
import TarjetaGratis from '../assets/tarjetaGratis.png';
import mundo from '../assets/mundo.png';
import MujerBanner from '../assets/MujerBanner.jpg';
import mujer from '../assets/mujer.png';

const Informacion = () => {
    return (
        <>
            <div className='row mt-4 justify-content-center'>
                <div className='w-auto text-center'>
                    <h5> <span>Tarjet es </span> la tarjeta virtual de presentación Totalmente Gratis.</h5>
                </div>
            </div>

            <PersonasSlider className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor personas'>
                    <img src={Banner3} 
                        alt="Tarjet | Tú tarjeta de presentación Online" 
                        className='img-fluid'
                    />
                    <p>
                        Y compartir la información de lo que haces, <span>a todo el mundo.</span>
                    </p>
                    <motion.button
                        whileTap={{scale: 1.4}}
                    >
                        Regístrate <i className="bi bi-arrow-right"></i>
                    </motion.button>
                </div>
                <div className='col-11 col-md-4 slider mt-4 mt-md-0'>
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

                            <div className="carousel-item">
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
            </PersonasSlider>

            <div className='row mt-4 justify-content-center'>
                <div className='w-auto text-center'>
                    <h5>Tendrás un micrositio que muestra más sobre tu profesión o negocio.</h5>
                </div>
            </div>

            <MundoMujer className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor mundo'>
                    <p>
                        <span>Comparte</span> tu <span>Tarjet</span> las veces que quieras.
                    </p>
                    <p>
                        Y deja que te recomienden
                    </p>
                    <motion.img 
                        src={mundo} 
                        alt="Tarjet | Tu tarjeta de presentación online" 
                        // initial={{opacity:0, scale:0}}
                        // whileInView={{opacity:1, scale:[1,1.1,1]}}
                        transition={{ease:'easeOut'}}
                        viewport={{once:true}}
                        whileTap={{scale:2}}
                    />
                    <p>Sin costo alguno.</p>
                </div>

                <div className='col-11 col-md-4 mt-4 mt-md-0 contenedor mujer'>
                    {/* <img src={MujerBanner} alt="Tarjet | Tu tarjeta de presentación Online" /> */}
                </div>
            </MundoMujer>

            <div className='row mt-4 justify-content-center'>
                <div className='w-auto text-center'>
                    <h5>
                        En nuestro buscador puedes ser encontrado fácilmente por personas que buscan lo que haces.
                    </h5>
                </div>
            </div>

            <PublicaCrea className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor publica'>
                    <p><span>Pública</span> ó <span>Privada?</span></p>
                    <p><span>Más</span> personas te encontrarán en nuestro buscador, para que te contraten.</p>
                    <motion.img 
                        src={Promo} 
                        alt="Tarjet | Tu tarjeta de presentación Online"
                        
                        initial={{opacity:0, scale:0}}
                        whileInView={{opacity:1, scale: [1,1.1,1]}}
                        viewport={{once: true}}
                        whileTap={{scale: 1}}
                        />
                    <p className='parrafo'>o solamente comparte tu Tarjet a quien tu quieras.</p>
                </div>

                <div className='col-11 col-md-4 mt-4 mt-md-0 contenedor crea'>
                    <h5>Crea tu Tarjet Gratis.</h5>
                    <p>Elige de nuestra galería el diseño que más te guste para tu Perfil.</p>
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
            </PublicaCrea>

            <ConfiguraCrea className='row mt-4 justify-content-center'>
                <div className='w-auto text-center'>
                    <h6>Configura gratis!</h6>
                    <h5>Crea tu Tarjet y comparte tu información de manera profesional.</h5>
                    <a href="#">
                        Regístrate y Disfruta
                    </a>
                </div>
            </ConfiguraCrea>

            <EmpresasPersonalizamos className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor tambien'>
                    <img src={Planes} alt="Tarjet | Tu tarjeta de presentación Online"/>
                    <div className='planesInfo'>
                        <h5 className='mb-5'>También contamos con planes corporativos.</h5>
                        <motion.button
                            whileTap={{scale: 1.4}}
                        >
                            Ver planes <i className="bi bi-arrow-right"></i>
                        </motion.button>
                    </div>
                </div>

                <div className='col-11 col-md-4 contenedor personalizamos mt-4 mt-md-0'>
                    <p>
                        Personalizamos la tarjeta virtual de los colaboradores de tus empresas. 
                    </p>
                    <p>
                        Brindamos una imagen única y diseños vanguardistas.
                    </p>
                    <p>
                        Fortalece el Networking entre clientes y tu empresa.
                    </p>
                    <p>
                        Administra la rotación de tu personal, de esta forma evitas fuga de clientes.
                    </p>
                    <p className='mb-5'>
                        Tus servicios y productos podrán aparecer en nuestro buscador.
                    </p>
                    <motion.button
                            whileTap={{scale: 1.4}}
                        >
                            Ver planes <i className="bi bi-arrow-right"></i>
                        </motion.button>
                </div>
            </EmpresasPersonalizamos>

            <div className='row mt-4 justify-content-center'>
                <div className='w-auto'>
                    <h5>Es una herramienta para todos.</h5>
                </div>
            </div>

            <AmarilloChica className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor amarillo'>
                    <div className='gratisInfo'>
                        <h5>Tarjet y TarjetSite</h5>
                        <p>
                            Son la mejor forma de llegar a más Clientes
                        </p>
                    </div>
                    <motion.img 
                        src={TarjetaGratis} 
                        alt="Tarjet | Tu tarjeta de presentación Online" className='img-fluid' 
                        initial={{scale:0, x:-10}}
                        whileInView={{x:0 , scale: 1}}
                        viewport={{once:true}}
                    />
                    <div className='gratisInfo'>
                        <motion.button
                            whileTap={{scale: 1.4}}
                        >
                            Crea y configura Ya! <i className="bi bi-arrow-right"></i>
                        </motion.button>
                    </div>
                </div>

                <div className='col-11 col-md-4 mt-4 mt-md-0 contenedor chica'>
                    <p>
                        No es necesario crear una tarjeta virtual para guardar, recomendar y recibir recomendaciones de Tarjet's
                    </p>
                    <img src={mujer} alt="Tarjet | Tu tarjeta de presentación Online"/>
                    <motion.button
                            whileTap={{scale: 1.4}}
                        >
                            Solo Regístrate <i className="bi bi-arrow-right"></i>
                        </motion.button>
                </div>

            </AmarilloChica>





            {/* <InformacionContenedor3 className='row mt-4 justify-content-center'>
                <div className='col-11 col-md-4 contenedor personas'>
                    <img src={Banner3} 
                        alt="Tarjet | Tú tarjeta de presentación Online" 
                        className='img-fluid'
                    />
                    <p>
                        Y compartir la información de lo que haces, <span>a todo el mundo.</span>
                    </p>
                    <motion.button
                        whileTap={{scale: 1.4}}
                    >
                        Regístrate <i className="bi bi-arrow-right"></i>
                    </motion.button>
                </div>

                <div className='col-11 col-md-4 contenedor contenedor2 mt-4 mt-md-0'>
                    <h5>Crea tu Tarjet Gratis.</h5>
                    <p>Elige de nuestra galería el diseño que más te guste.</p>
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
                    <p className=' text-right mr-5'>y deja que te recomienden! sin costo alguno.</p>
                    <p className='float-right mr-3'><span>Te encantará!</span></p>

                    <img src={compartirBanner} alt="Tarjet | Tu tarjeta de presentación Online" className='img-fluid'/>
                </div>

                <div className='col-11 col-md-4 mt-4 mt-md-0 contenedor publica'>
                    <p><span>Pública</span> ó <span>Privada?</span></p>
                    <p><span>Más</span> personas te encontrarán en nuestro buscador, para que te contraten.</p>
                    <motion.img 
                        src={Promo} 
                        alt="Tarjet | Tu tarjeta de presentación Online"
                        
                        initial={{opacity:0, scale:0}}
                        whileInView={{opacity:1, scale: [1,1.1,1]}}
                        viewport={{once: true}}
                        whileTap={{scale: 1}}
                        />
                    <p className='parrafo'>o solamente comparte tu Tarjet a quien tu quieras.</p>
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

                            <div className="carousel-item">
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
            </Slider>

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
                    <img src={Planes} alt="Tarjet | Tu tarjeta de presentación Online"/>
                    <div className='planesInfo'>
                        <h5>También contamos con planes corporativos.</h5>
                        <motion.button
                            whileTap={{scale: 1.4}}
                        >
                            Ver planes <i className="bi bi-arrow-right"></i>
                        </motion.button>
                    </div>
                </div>

                <div className='col-11 col-md-4 mt-4 mt-md-0 contenedor gratis'>
                    <div className='gratisInfo'>
                        <h5>Tarjet y TarjetSite</h5>
                        <p>
                            Son la mejor forma de llegar a más Clientes
                        </p>
                    </div>
                    <motion.img 
                        src={TarjetaGratis} 
                        alt="Tarjet | Tu tarjeta de presentación Online" className='img-fluid' 
                        initial={{scale:0, x:-10}}
                        whileInView={{x:0 , scale: 1}}
                        viewport={{once:true}}
                    />
                    <div className='gratisInfo'>
                        <motion.button
                            whileTap={{scale: 1.4}}
                        >
                            Crea y configura Ya! <i className="bi bi-arrow-right"></i>
                        </motion.button>
                    </div>
                </div>
            </PlanesGratis>

            <Configura className='row mt-4 justify-content-center'>
                <div className='w-auto text-center'>
                    <h5 className='mb-1'>Si no requieres tener una tarjeta</h5>
                    <p>solamente crea tu cuenta para guardar Tarjet's de más personas.</p>
                    <a href="#">
                        Registro sencillo
                    </a>
                </div>
            </Configura> */}

        </>
    );
}

const PersonasSlider = styled.div`
    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0px;
    }
    .contenedor{
        background: #fff;
        border-radius: 20px;
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
    .personas{
        p{
            margin-bottom: 80px;
        }
        button{
            position: absolute;
            right: 30px;
            bottom: 30px;
        }
    }
    .slider{
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
    }
`;

const MundoMujer = styled.div`
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
            width: 100%;
            float: right;
            word-break: break-word!important;
            
            @media screen and (max-width: 575px){
                width: 110%;
            }
        }
    }
    .mujer{
        width: 100%;

        background-image: url(${MujerBanner});
        background-size: cover;
        /* background-position: center center; */

        @media screen and (max-width: 575px){
            height: 330px;
        }
    }
`;

const PublicaCrea = styled.div`
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
        .parrafo{
            position: absolute;
            bottom: 20px;
            width: 50%;
        }
    }
    .crea{
        background: #f58634;
        color: #000;
        
        h5{
            font-weight: 600;
        }
        img{
            margin-top: 30px;
            @media screen and (max-width: 575px){
                margin-bottom: 60px;
            }
        }
        button{
            position: absolute;
            bottom: 30px;
            right: 30px;
            border:none;
            font-size: 25px;
            background: transparent;
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

const ConfiguraCrea = styled.div`
    h5{
        margin-bottom: 20px;
    }
    a{
        background: #171717;
        color: #fff;
        padding: 7px 18px;    
        border-radius: 6px;
        text-decoration: none;
    }
`;

const EmpresasPersonalizamos = styled.div`
    gap: 20px;
    @media screen and (max-width: 575px){
        gap: 0px;
    }
    .contenedor{
        border-radius: 20px;
        padding: 30px;
        color: #fff;
        background: #ad3534;

        p{
            span{
                font-size: 20px;
            }
        }
    }
    .tambien{
        padding: 0;
        
        button{
            border:none;
            font-size: 25px;
            background: transparent;
            color: #fff;
            padding: 0;
            outline: none;
            float: right;
            margin-bottom: 30px;
        }
        img{
            width: 100%;
            border-radius: 20px 20px 0px 0px;
        }

        .planesInfo{
            padding: 30px;
        }
    }
    .personalizamos{
        button{
            border:none;
            font-size: 25px;
            background: transparent;
            color: #fff;
            padding: 0;
            outline: none;
            position: absolute;
            right: 30px;
            bottom: 30px;
        }
    }
`;

const AmarilloChica = styled.div`
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
    .amarillo{
        background: #fbd208;
        padding: 0;
        color: #212529;

        .gratisInfo{
            padding: 30px;
            button{
                border:none;
                font-size: 25px;
                background: transparent;
                color: #212529;
                float: left;
                padding: 0;
                outline: none;
                margin-bottom: 30px;
            }
        }
    }
    .chica{
        background: #fff;
        color: #212529;

        img{
            width: 70%;
            display: block;
            margin: auto;
            margin-bottom: 20px;

            @media screen and (max-width: 575px){
                width: 90%;
            }
        }
        button{
            border:none;
            font-size: 25px;
            background: transparent;
            color: #212529;
            float: left;
            padding: 0;
            outline: none;
        }
    }
`;




// const InformacionContenedor3 = styled.div`
//     gap: 20px;
//     @media screen and (max-width: 575px){
//         gap: 0px;
//     }
//     .contenedor{
//         background: #fff;
//         border-radius: 20px;
//         color: #000;

//         p{
//             margin: 0;
//             span{
//                 font-size: 20px;
//             }
//         }

//         button{
//             border:none;
//             font-size: 25px;
//             background: transparent;
//             color: #000;
//             padding: 0;
//             margin-top: 30px;
//             outline: none;
            
//             @media screen and (max-width: 360px) and (max-height: 800px){
//                 margin-top: 30px;
//             }

//             i{
//                 padding-top: 5px;
//             }
//         }
//     }

//     .personas{
//         p{
//             margin-bottom: 80px;
//         }
//         button{
//             position: absolute;
//             right: 30px;
//             bottom: 30px;
//         }
//     }
//     .contenedor2{
//         padding: 30px 30px;
//         background: #f58634;
//         h5{
//             font-weight: 600;
//         }
//         img{
//             margin-top: 30px;
//             @media screen and (max-width: 575px){
//                 margin-bottom: 60px;
//             }
//         }
//         button{
//             position: absolute;
//             bottom: 30px;
//             right: 30px;
//         }
//     }
// `;

// const InformacionContenedor = styled.div`
//     .contenedor{
//         background: #406fe8;
//         border-radius: 20px;
//         /* height: 500px; */
//         padding: 30px 30px;
//         color: #fff;

//         p{
//             margin: 0;
//             span{
//                 font-size: 20px;
//             }
//         }
//         .nacional{
//             font-size: 20px;
//             span{
//                 font-size: 25px;
//                 text-transform: uppercase;
//             }
//         }
        
//         .celularPromo{
//             width: 20%;
//             position: absolute;
//             right: 0;
//             bottom: 40px;
//             @media screen and (max-width: 575px){
//                 width: 200px;
//             }
//             @media screen and (max-width: 360px) and (max-height: 800px){
//                 width: 170px;
//                 bottom: 30px;
//             }
//         }

//         .logo{
//             width: 100px;
//         }

//         button{
//             border:none;
//             font-size: 25px;
//             background: transparent;
//             color: #fff;
//             padding: 0;
//             margin-top: 150px;
//             outline: none;
            
//             @media screen and (max-width: 360px) and (max-height: 800px){
//                 margin-top: 130px;
//             }

//             i{
//                 padding-top: 5px;
//             }
//         }
//     }
// `;

// const InformacionContenedor2 = styled.div`
//     .contenedor{
//         background: #3ea97b;
//         border-radius: 20px;
//         /* height: 500px; */
//         padding: 30px 30px;
//         color: #fff;

//         p{
//             margin: 0;
//             span{
//                 font-size: 20px;
//             }
//         }

//         img{
//             width: 260px;
//             /* display: block;
//             margin: auto; */
//             margin-top: 40px;
//             margin-bottom: 50px;
//         }

//         button{
//             border:none;
//             font-size: 25px;
//             background: transparent;
//             color: #fff;
//             padding: 0;
//             margin-top: 30px;
//             outline: none;
//             float: right;
            
//             @media screen and (max-width: 360px) and (max-height: 800px){
//                 margin-top: 30px;
//             }

//             i{
//                 padding-top: 5px;
//             }
//         }
//     }
// `;

// const Slider = styled.div`
//     gap: 20px;
//     @media screen and (max-width: 575px){
//         gap: 0px;
//     }
//     .contenedor{
//         background: #3ea97b;
//         border-radius: 20px;
//         /* height: 500px; */
//         padding: 0;
//         color: #fff;
//         display: block;
//         margin: auto;
        
//         img{
//             border-radius: 20px;
//         }
//     }
// `;

// const InfoComparte = styled.div`
//     gap: 20px;

//     @media screen and (max-width: 575px){
//         gap:0px;
//     }

//     .contenedor{
//         border-radius: 20px;
//         color: #fff;
//         padding: 30px;
//         p{
            
//             span{
//                 font-size: 20px;
//             }
//         }
//     }
//     .comparte{
//         background: #3ea97b;
//     }
//     .publica{
//         background: #406fe8;
//         img{
//             width: 250px;
//             margin-top: 20px;
//             float: right;

//             @media screen and (max-width: 575px){
//                 width: 200px;
//             }
//         }
//         .parrafo{
//             position: absolute;
//             bottom: 20px;
//             width: 50%;
//         }
//     }
// `;

// const Configura = styled.div`
//     padding: 10px 20px;
//     h5{
//         margin-bottom: 25px;
//     }
//     a{
//         background: #171717;
//         color: #fff;
//         padding: 7px 18px;    
//         border-radius: 6px;
//         text-decoration: none;
//     }
// `;

// const PlanesGratis = styled.div`
//     gap: 20px;
//     @media screen and (max-width: 575px){
//         gap: 0px;
//     }
//     .contenedor{
//         border-radius: 20px;
//         color: #fff;
//         padding: 0;
//         p{
//             margin: 0;
//             span{
//                 font-size: 20px;
//             }
//         }
//         button{
//             border:none;
//             font-size: 25px;
//             background: transparent;
//             color: #fff;
//             padding: 0;
//             outline: none;
//             float: right;
//             margin-bottom: 30px;
//         }
//         img{
//             width: 100%;
//             border-radius: 20px 20px 0px 0px;
//         }

//         .planesInfo{
//             padding: 30px;
//         }
//         .gratisInfo{
//             padding: 30px;
//             button{
//                 color: #212529;
//                 float: left;
//             }
//         }
//     }
//     .planes{
//         background: #ad3534;
//     }
//     .gratis{
//         background: #fbd208;
//         color: #212529;
//     }
// `;


export default Informacion;