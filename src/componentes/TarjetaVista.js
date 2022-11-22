import React from 'react';
import styled from 'styled-components';
import tarjetaFrente from '../assets/TarjetaFrente.png';

const TarjetaVista = () => {
    return (
        <>
            <TarjetaVistaContenedor className='row justify-content-center mt-3'>
                <div className="col-11 col-md-4">
                    <img src={tarjetaFrente} alt=""/>
                </div>
                <Opciones className='col-10 text-center'>
                    <div className='row justify-content-around'>
                        <div className='w-auto'>
                            <i className="bi bi-arrow-repeat"></i>
                            <p>Reverso</p>
                        </div>
                    </div>
                </Opciones>
            </TarjetaVistaContenedor>
            {/* <Opciones className='row'>
                <div className='col-10'>
                    <i class="bi bi-arrow-repeat"></i>
                </div>
            </Opciones> */}

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
`;

const Opciones = styled.div`
    background: #fff;
    border-radius: 11px;
    margin-top: 20px;
    padding: 10px 10px;
    i{
        font-size: 25px;
    }
`;

export default TarjetaVista;