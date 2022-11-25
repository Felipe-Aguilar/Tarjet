import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FotoPerfil from '../assets/FotoPerfil.png';
import Logo from '../assets/LogoOficial.png';

const TarjetSite = () => {
    return ( 
        <>
            <HeaderPerfil className='row mt-4 justify-content-center'>
                <div className='w-auto text-center'>
                    <img src={FotoPerfil} alt="Tarjet | Tu tarjeta de presentación Online" />
                    <h2>Name</h2>
                    <p>Profession</p>
                </div>

                {/* <div className='row '>
                    <div>

                    </div>
                </div> */}
            </HeaderPerfil>
            
            <HeaderOptions className='row justify-content-center'>
                <div className='w-auto'>
                    <a href="tel: 555555555">
                        <i className="bi bi-telephone-fill"></i>
                    </a>
                </div>
                <div className='w-auto'>
                    <a href="mailto: correo@correo.com">
                        <i className="bi bi-envelope"></i>
                    </a>
                </div>
                <div className='w-auto'>
                    <a href="#" target={'_blank'}>
                        <i className="bi bi-whatsapp"></i>
                    </a>
                </div>
            </HeaderOptions>

            <div className='row mt-4 justify-content-center'>
                <DescriptionContenedor className='col-11'>
                    <h3>Title</h3>
                    <p>Description</p>
                </DescriptionContenedor>
            </div>

            <div className='row mt-4 justify-content-center'>
                <ContactContenedor className='col-11'>
                    <h3>Contacto</h3>
                    <hr/>

                    <div className='row align-items-center optionContact'>
                        <div className='w-auto'>
                            <a href="tel: 555555555" className='ContactIcon'>
                                <i className="bi bi-telephone"></i>
                            </a>
                        </div>
                        <div className='col-8'>
                            <h5>Teléfono</h5>
                            <a href='tel: 555 555 55'>
                                555 555 555
                            </a>
                        </div>
                    </div>

                    <div className='row align-items-center optionContact'>
                        <div className='w-auto'>
                            <a href="mailto: correo@correo.com" className='ContactIcon'>
                                <i className="bi bi-envelope"></i>
                            </a>
                        </div>
                        <div className='col-8'>
                            <h5>Correo</h5>
                            <a href='mailto: correo@correo.com'>
                                correo@correo.com
                            </a>
                        </div>
                    </div>

                    <div className='row align-items-center optionContact'>
                        <div className='w-auto'>
                            <a href="googleMaps" target={'_blank'} className='ContactIcon'>
                                <i className="bi bi-geo-alt"></i>
                            </a>
                        </div>
                        <div className='col-8'>
                            <h5>Dirección</h5>
                            <a href="googleMaps" target={'_blank'} >
                                Av. Valle, Tultitlán
                            </a>
                        </div>
                    </div>
                </ContactContenedor>
            </div>

            <div className='row mt-4 justify-content-center'>
                <div className='col-11'>
                    <h4>Portafolio</h4>
                </div>
                <Slider className='col-11'>
                    <p>
                        Image
                    </p>
                    <NavLink to="/">
                        home
                    </NavLink>
                </Slider>
            </div>

            <div className='row mt-4'>
                <div className='col-12'>
                    <h4>Redes Sociales</h4>
                </div>
            </div>

            <div className='row justify-content-center'>
                <ContenedorRedSocial className='col-11'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='w-auto'>
                            <a href="#">
                                <i className="bi bi-whatsapp"></i>
                            </a>
                        </div>
                        <div className='w-auto'>
                            <a href="#">
                                <i className="bi bi-facebook"></i>
                            </a>
                        </div>
                        <div className='w-auto'>
                            <a href="#">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                        <div className='w-auto'>
                            <a href="#">
                                <i className="bi bi-twitter"></i>
                            </a>
                        </div>
                        <div className='w-auto'>
                            <NavLink to="/">
                                <img src={Logo} alt="Tarjet | Tu tarjeta de presentación Online" />
                            </NavLink>
                        </div>
                    </div>
                </ContenedorRedSocial>
            </div>

        </>
    );
}

const HeaderPerfil = styled.div`
    img{
        width: 70px;
    }
    h2{
        margin: 0;
    }
`;

const HeaderOptions = styled.div`
    padding: 5px 20px;

    a{
        color: #212529;
        font-size: 20px;    
        background: #fff;
        padding: 10px 14px;
        border-radius: 26px;
        margin: 0 10px
    }
`;

const DescriptionContenedor = styled.div`
    background: #fff;
    padding: 15px 20px;
    border-radius: 11px;
    box-shadow:
        0px 0px 2.7px rgba(0, 0, 0, 0.022),
        0px 0px 6.9px rgba(0, 0, 0, 0.031),
        0px 0px 14.2px rgba(0, 0, 0, 0.039),
        0px 0px 29.2px rgba(0, 0, 0, 0.048),
        0px 0px 80px rgba(0, 0, 0, 0.07)
        ;
`;

const ContactContenedor = styled.div`
    background: #fff;
    padding: 15px 20px;
    border-radius: 11px;
    box-shadow:
        0px 0px 2.7px rgba(0, 0, 0, 0.022),
        0px 0px 6.9px rgba(0, 0, 0, 0.031),
        0px 0px 14.2px rgba(0, 0, 0, 0.039),
        0px 0px 29.2px rgba(0, 0, 0, 0.048),
        0px 0px 80px rgba(0, 0, 0, 0.07)
        ;

        .optionContact{
            padding: 5px 20px;
            margin: 10px 0px;

            h5{
                margin:0;
            }
            a{
                text-decoration: none;
                color: #212529;
            }

            .ContactIcon{
                background: #212529;
                padding: 10px 14px;
                border-radius: 26px;
                color: #fff;

                i{
                    font-size: 15px;
                }
            }
        }
`;

const Slider = styled.div`
    height: 250px;
    background: #fff;
    border-radius: 11px;
`;

const ContenedorRedSocial = styled.div`
    background: #fff;
    border-radius: 11px;
    padding: 10px 0px;
    box-shadow:
        0px 0px 2.7px rgba(0, 0, 0, 0.022),
        0px 0px 6.9px rgba(0, 0, 0, 0.031),
        0px 0px 14.2px rgba(0, 0, 0, 0.039),
        0px 0px 29.2px rgba(0, 0, 0, 0.048),
        0px 0px 80px rgba(0, 0, 0, 0.07)
        ;

    a{
        font-size: 25px;
        color: #212529;
        margin: 0 10px;

        img{
            width: 25px;
        }
    }
`;

export default TarjetSite;