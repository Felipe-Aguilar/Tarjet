import React, {useState} from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {

    const [menu, cambioMenu] = useState(true);

    return (
        <>
            <Encabezado className='row justify-content-between align-items-center'>
                <div className='w-auto'>
                    <h1>Tarjet.</h1>
                </div>
                <div className='w-auto'>
                    { menu ?
                        <motion.div 
                            className='Icon'
                            transition={{duration:0.03}}
                            whileInView={{
                                opacity:1,
                                background: '#fff'
                            }}
                        >
                            <button onClick={()=> cambioMenu(false)}>
                                <i className="bi bi-list"></i>
                            </button>
                        </motion.div>
                    :
                        <motion.div 
                            className='Icon'
                            initial={{opacity:0}}
                            transition={{duration:0.03}}
                            whileInView={{
                                opacity:1,
                                background: '#191c1f'
                            }}
                        >
                            <button onClick={()=> cambioMenu(true)}>
                                <i className="bi bi-x" style={{color: '#fff'}}></i>
                            </button>
                        </motion.div>
                    }
                </div>
            </Encabezado>
            {!menu &&
                <motion.div
                    initial={{opacity: 0, scale:0, x:0}}
                    whileInView={{opacity: 1, scale:1, x:15}}
                >
                    <NavMenu>
                        <a href="">Option</a>
                        <a href="">Option</a>
                        <a href="">Option</a>
                        <a href="">Option</a>
                    </NavMenu>
                </motion.div>
            }
        </>
    );
}

const Encabezado = styled.div`
    padding: 5px 15px;
    backdrop-filter: blur(16px);
    background-color: rgba(234, 237, 240, 0.8);
    /* position: fixed;
    width: 100%; */
    /* z-index: 1; */

    h1{
        font-weight: bold;
    }

    .Icon{
        background: #fff;
        padding: 3px 3px;
        border-radius: 12px;
        transition: all .3s ease;

        button{
            border:none;
            background: transparent;
            outline: none;
            color: #000;
        }
        i{
            font-size: 20px;
            font-weight: bold;
        }
    }
`;

const NavMenu = styled.div`
    background: #fff;
    width: 40%;
    height: 250px;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    padding: 20px;
    
    @media screen and (max-width: 575px){
        width: 100%;
    }

    a{
        display: block;
    }
`;

export default Header;