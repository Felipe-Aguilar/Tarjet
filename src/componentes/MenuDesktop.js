import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuDesktop = () => {
    return ( 
        <MenuDesktopContenedor>
            <NavLink to="/que-es-tarjet">Qué es Tarjet</NavLink>
            <NavLink href="">Tienda</NavLink>
            <NavLink to="/hazte-premium">Premium</NavLink>
            <NavLink href="">Empresas</NavLink>
            <NavLink href="">Mi Perfil</NavLink>
            <NavLink href="">Contacto</NavLink>
            <NavLink to="/canvas">Canvas</NavLink>
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