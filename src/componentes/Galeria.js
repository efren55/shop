import React from 'react';
import '../styles/galeria.css';
import {Image} from './Imagenes';
import { useState } from 'react';

function Galeria(){

    const [selectorOne,setselectorOne] = useState(true);
    const [selectorTwo,setselectorTwo] = useState(false);
    const [selectorThree,setselectorThree] = useState(false);
    const [selectorFour,setselectorFour] = useState(false);
    const [selectorFive,setselectorFive] = useState(false);
    const [selectorSix,setselectorSix] = useState(false);

    const imgOne = () =>{
        setselectorOne(true);
        setselectorTwo(false);
        setselectorThree(false);
        setselectorFour(false);
        setselectorFive(false);
        setselectorSix(false);
    }

    const imgTwo = () =>{
        setselectorOne(false);
        setselectorTwo(true);
        setselectorThree(false);
        setselectorFour(false);
        setselectorFive(false);
        setselectorSix(false);
    }

    const imgThree = () =>{
        setselectorOne(false);
        setselectorTwo(false);
        setselectorThree(true);
        setselectorFour(false);
        setselectorFive(false);
        setselectorSix(false);
    }

    const imgFour = () =>{
        setselectorOne(false);
        setselectorTwo(false);
        setselectorThree(false);
        setselectorFour(true);
        setselectorFive(false);
        setselectorSix(false);
    }

    const imgFive = () =>{
        setselectorOne(false);
        setselectorTwo(false);
        setselectorThree(false);
        setselectorFour(false);
        setselectorFive(true);
        setselectorSix(false);
    }

    const imgSix = () =>{
        setselectorOne(false);
        setselectorTwo(false);
        setselectorThree(false);
        setselectorFour(false);
        setselectorFive(false);
        setselectorSix(true);
    }

    return(
        <div className='galeria-contenedor' id='galeria'>
            <h2 className='galeria-titulo'>Gallery</h2>
            <div className='visualizacion'>
                {selectorOne && (
                    <img src={require(`../img/bows/bow1.jpg`)} className='imgGrande' alt='Imagen Galeria'/>
                )}
                {selectorTwo && (
                    <img src={require(`../img/bows/bow2.jpg`)} className='imgGrande' alt='Imagen Galeria'/>
                )}
                {selectorThree && (
                    <img src={require(`../img/bows/bow3.jpg`)} className='imgGrande' alt='Imagen Galeria'/>
                )}
                {selectorFour && (
                    <img src={require(`../img/bows/bow4.jpg`)} className='imgGrande' alt='Imagen Galeria'/>
                )}
                {selectorFive && (
                    <img src={require(`../img/bows/bow5.jpg`)} className='imgGrande' alt='Imagen Galeria'/>
                )}
                {selectorSix && (
                    <img src={require(`../img/bows/bow6.jpg`)} className='imgGrande' alt='Imagen Galeria'/>
                )}
            </div>
            <div className='imagenes-galeria'>
                <Image
                    imagen ='bow1'
                    verdad = 'imgPositive'
                    falso = 'imgNegative'
                    claseFun = {selectorOne}
                    imgInfo = 'bow1'
                    onClick = {imgOne}
                />
                <Image
                    imagen ='bow2'
                    verdad = 'imgPositive'
                    falso = 'imgNegative'
                    claseFun = {selectorTwo}
                    imgInfo = 'bow2'
                    onClick = {imgTwo}
                />
                <Image
                    imagen ='bow3'
                    claseFun = {selectorThree}
                    imgInfo = 'bow3'
                    onClick = {imgThree}
                />
                <Image
                    imagen ='bow4'
                    verdad = 'imgPositive'
                    falso = 'imgNegative'
                    claseFun = {selectorFour}
                    imgInfo = 'bow4'
                    onClick = {imgFour}
                />
                <Image
                    imagen ='bow5'
                    verdad = 'imgPositive'
                    falso = 'imgNegative'
                    claseFun = {selectorFive}
                    imgInfo = 'bow5'
                    onClick = {imgFive}
                />
                <Image
                    imagen ='bow6'
                    verdad = 'imgPositive'
                    falso = 'imgNegative'
                    claseFun = {selectorSix}
                    imgInfo = 'bow6'
                    onClick = {imgSix}
                />
            </div>
        </div>
    );
};

export default Galeria;