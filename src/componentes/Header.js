import React from 'react';
import '../styles/header.css';

function Header(){
    return(
        <div className='header-contenedor'>
            <div className='navegacion-contenedor'>
                <button className='inicio'></button>
                <nav className='navegacion'>
                    <a href='#productos' className='enlace productos'>Products</a>
                    <a href='#galeria' className='enlace sobreNosotros'>Gallery</a>
                    <a href='#contacto' className='enlace contacto'>Contact</a>
                </nav>
            </div>

            <div className='header'>
                <div className='info-contenedor'>
                    <h1 className='info-titulo'>About Us</h1>
                    <h3 className='info'>We are a micro-enterprise originally from Eindhoven, Netherlands. We are with you to offer you the best products.</h3>
                    <div className='localizacion'><span class="material-symbols-outlined">location_on</span></div>
                    <p className='localizacion-txt'>Eindhoven,Netherlands</p>
                </div>
            </div>
        </div>
    );
}

export default Header;