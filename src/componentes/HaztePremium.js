import React from 'react';
import styled from 'styled-components';

import HaztePremiumBanner from '../assets/haztepremiumbanner.png';

const HaztePremium = () => {
    return ( 
        <HaztePremiumContenedor className='row justify-content-center'>

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
        </HaztePremiumContenedor>
    );
}

const HaztePremiumContenedor = styled.div`
    margin-top: 6rem;
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

export default HaztePremium;