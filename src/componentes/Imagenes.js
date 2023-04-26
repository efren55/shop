import React from 'react';

export function Imagenes(props){
    return(
        <div className='img-contenedor'>
            <img src={require(`../img/bows/${props.imagen}.jpg`)} className={props.clase} alt={props.imgInfo} />
            <div className='img-descripcion'>
                <h3 className='img-titulo'>{props.imgTitulo}</h3>
                <p className='img-texto'>{props.imgTexto}</p>
                <p className='img-precio'>{props.precio}</p>
            </div>
        </div>
    );
};

export function Image(props){
    return(
        <img src={require(`../img/bows/${props.imagen}.jpg`)} className={`img1 ${props.claseFun ? props.verdad : props.falso}`} onClick={props.onClick} alt={props.imgInfo}/>
    );
};