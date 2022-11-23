import React from 'react';
import styled from 'styled-components';
import Promo1 from '../assets/promo1.png';

const Informacion = () => {
    return ( 
        <InformacionContenedor className='row mt-5 justify-content-center'>
            <div className='col-11 bg-success contenedor'>
                <h2>Title</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <img src={Promo1} alt=""/>
            </div>
        </InformacionContenedor>
    );
}

const InformacionContenedor = styled.div`
    .contenedor{
        background: rgb(3,23,57);
        background: linear-gradient(0deg, rgba(3,23,57,1) 0%, rgba(22,57,117,1) 24%, rgba(12,43,96,1) 55%, rgba(4,18,43,1) 100%);
        border-radius: 20px;
        height: 450px;
        padding: 30px 30px;
        color: #fff;

        img{
            width: 80%;
        }
    }
`;

export default Informacion;