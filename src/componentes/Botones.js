import React from 'react'

/*
export function Filtro(props){
    return(
        <button className={props.clase} onClick={props.onClick}>{props.nombre}</button>
    );
}
*/

export function Filtro(props){
    return(
        <button className={`filtro ${props.claseFun ? props.verdad : props.falso}`} onClick={props.onClick}>{props.nombre}</button>
    );
}