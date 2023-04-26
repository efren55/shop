import React from 'react';
import '../styles/footer.css';

function Footer(){
    return (
        <div className='footer-contenedor' id='contacto'>
            <h3 className='footer-titulo'>Contact</h3>
            <nav className='footer-icons'>
                <a className='icon facebook' href='' alt='Facebook'></a>
                <a className='icon instagram' href='https://www.instagram.com/sunshine.netherlands/?hl=es-la' alt='Instagram'></a>
                <a className='icon gmail' href='' alt='Gmail'></a>
            </nav>
        </div>
    );
};

export default Footer;