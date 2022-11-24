import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return ( 
        <FooterContenedor className='row mt-4 justify-content-center'>
            <div className='w-auto p-3 text-center'>
                <h4>Tarjet.</h4>
                <p>
                    © Todos los Derechos Reservados | 2022
                </p>
                <a href="https://tekrobot.com.mx/" target={'_blank'}>
                    Powered By TekRobot
                </a>
            </div>
        </FooterContenedor>
    );
}

const FooterContenedor = styled.footer`
    background: #212529;
    color: #fff;

    p, a{
        margin:0;
        font-size: 13px;
    }
    a{
        color: #00a859;
        transition: all .3s ease;
        text-decoration: none;
    }
`;

export default Footer;