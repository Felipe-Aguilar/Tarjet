import React from 'react';
import styled from 'styled-components';
import Corona from '../assets/corona.svg';

const Menu = () => {
    return ( 
        <>
            <MenuContenedor className=''>
                <div className='d-flex justify-content-center'>
                    <div className='buscar' for="Buscar">
                        <i className="bi bi-search"></i>
                        <input type="search" placeholder="Buscar Tarjet's" id='Buscar'/>
                    </div>
                </div>

                <div className='links'>
                    <a href="#">¿Qué es Tarjet?</a>
                    <a href="#">Tienda de Productos</a>
                    <a href="#">Mi Perfil</a>
                    <a href="#">Empresas</a>
                    <a href="#" 
                        className='d-flex align-items-center corona'
                    >
                        Hazte Premium
                        <img src={Corona} alt="Tarjet | Tu tarjeta de presentación Online"/>
                    </a>
                    <a href="#">Contacto</a>
                </div>

                <div className='sesion d-flex justify-content-center align-items-end'>
                    <a href="#" className='registro'>Registro</a>
                    <a href="#" className='iniciarSesion'>Iniciar Sesión</a>
                </div>
            </MenuContenedor>
        </>
    );
}

const MenuContenedor = styled.div`
    .buscar{
        background: #171717;
        background: #e9e9e9;
        background: #f3f3f4;
        width: 300px;
        display: flex;
        align-items: center;
        padding: 10px 20px;
        border-radius: 10px;

        &:hover{
            cursor: text;
        }

        input{
            width: 90%;
            outline: none;
            border: none;
            padding: 0px 10px;
            background: transparent;
        }
    }

    .links{
        margin-top: 25px;

        a{
            margin: 5px 0;
            color: #191c1f;
            font-weight: 500;
            transition: all .3s ease;

            &:hover{
                text-decoration: underline;
            }
            img{
                width: 20px;
                margin-left: 8px;
            }
        }
    }

    .sesion{
        height: 310px;
        a{
            padding: 7px 15px;
            background: #fff;
            border-radius: 6px;
            text-decoration: none;
        }
        .registro{
            background: #f3f3f4;
            color: #171717;
            margin-right: 5px;
        }
        .iniciarSesion{
            background: #171717;
            color: #fff;
            margin-left: 5px;
        }
    }
`;

export default Menu;