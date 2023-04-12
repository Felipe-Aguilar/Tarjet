import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuDesktop = () => {
    return ( 
        <MenuDesktopContenedor>
            <NavLink to="/que-es-tarjet">Qué es Tarjet</NavLink>
            <NavLink href="">Tienda</NavLink>
            <a href="https://tarjet.site/#/login">Mi Perfil</a>
            <NavLink to="/hazte-premium">Premium</NavLink>
            <NavLink href="">Empresas</NavLink>
            <a href="https://wa.me/5586763895" target='_blank'>Contacto</a>
            <a href="https://tarjet.site/#/login">Iniciar Sesión</a>
            {/* <NavLink to="/canvas">Canvas</NavLink> */}
        </MenuDesktopContenedor>
    );
}

const MenuDesktopContenedor = styled.div`
    display: flex;
    gap: 25px;
    a{
        color: #191c1f;
        text-decoration: none;
    }
`;

export default MenuDesktop;