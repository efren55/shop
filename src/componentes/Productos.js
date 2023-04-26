import React from 'react'
import '../styles/productos.css'
import {Filtro} from './Botones';
import { useState } from 'react';
import {Imagenes} from './Imagenes';

function Productos(){

    const [todosFun,settodosFun] = useState(true);
    const [metalFun,setmetalFun] = useState(false);
    const [telaFun,settelaFun] = useState(false);

    const todos = () =>{
        settodosFun(true); /*!todosFun */
        setmetalFun(false);
        settelaFun(false);
    }

    const metal = () =>{
        setmetalFun(true); /*!metalFun */
        settodosFun(false);
        settelaFun(false);
    }

    const tela = () => {
        settelaFun(true); /*!telaFun */
        settodosFun(false);
        setmetalFun(false);
    }



    return(
        <div className='productos-hero' id='productos'>
            <div className='filtros-contenedor'>
                <h3 className='filtro-titulo'>Filter</h3>
                <Filtro
                    nombre='Todos'
                    verdad='filtroTrue'
                    falso='filtroFalse'
                    claseFun={todosFun}
                    onClick={todos}
                />

                <Filtro
                    nombre='Metal'
                    verdad='filtroTrue'
                    falso='filtroFalse'
                    claseFun={metalFun}
                    onClick={metal}
                />
                <Filtro
                    nombre='Tela'
                    verdad='filtroTrue'
                    falso='filtroFalse'
                    claseFun={telaFun}
                    onClick={tela}
                />
            </div>
            <div className='productos-contenedor'>
                <div className='producto-lista'>
                    {todosFun && (
                        <>
                            <Imagenes
                                imagen = 'bow1'
                                clase = 'imgProducto'
                                imgInfo = 'bow1'
                                imgTitulo = 'Josh Homme'
                                imgTexto = 'Tela de asia'
                                precio ='$20 EUR'
                            />
                            <Imagenes
                                imagen = 'bow2'
                                clase = 'imgProducto'
                                imgInfo = 'bow1'
                                imgTitulo = 'Dave Grohl'
                                imgTexto = 'Tela Sudamericana'
                                precio ='$20 EUR'
                            />
                            <Imagenes
                                imagen = 'bow3'
                                clase = 'imgProducto'
                                imgInfo = 'bow1'
                                imgTitulo = 'Joey Castillo'
                                imgTexto = 'Tela Norteamericana'
                                precio ='$20 EUR'
                            />
                            <Imagenes
                                imagen = 'bow4'
                                clase = 'imgProducto'
                                imgInfo = 'bow1'
                                imgTitulo = 'Freddy Mercury'
                                imgTexto = 'Aleacion de tierras raras'
                                precio ='$20 EUR'
                            />
                            <Imagenes
                                imagen = 'bow5'
                                clase = 'imgProducto'
                                imgInfo = 'bow1'
                                imgTitulo = 'Jimmy Page'
                                imgTexto = 'Hierro'
                                precio ='$20 EUR'
                            />
                            <Imagenes
                                imagen = 'bow6'
                                clase = 'imgProducto'
                                imgInfo = 'bow1'
                                imgTitulo = 'Robert Plant'
                                imgTexto = 'Plata'
                                precio ='$20 EUR'
                            />
                        </>
                    )}
                    {metalFun && (
                        <>
                            <Imagenes
                                imagen = 'bow4'
                                clase = 'imgProducto'
                                imgInfo = 'bow1'
                                imgTitulo = 'Freddy Mercury'
                                imgTexto = 'Aleacion de tierras raras'
                                precio ='$20'
                            />
                            <Imagenes
                                imagen = 'bow5'
                                clase = 'imgProducto'
                                imgInfo = 'bow1'
                                imgTitulo = 'Jimmy Page'
                                imgTexto = 'Hierro'
                                precio ='$20'
                            />
                            <Imagenes
                                imagen = 'bow6'
                                clase = 'imgProducto'
                                imgInfo = 'bow1'
                                imgTitulo = 'Robert Plant'
                                imgTexto = 'Plata'
                                precio ='$20'
                            />
                        </>
                    )}
                    {telaFun && (
                        <>
                            <Imagenes
                                imagen = 'bow1'
                                clase = 'imgProducto'
                                imgInfo = 'bow1'
                                imgTitulo = 'Josh Homme'
                                imgTexto = 'Tela de asia'
                                precio ='$20'
                            />
                            <Imagenes
                                imagen = 'bow2'
                                clase = 'imgProducto'
                                imgInfo = 'bow1'
                                imgTitulo = 'Dave Grohl'
                                imgTexto = 'Tela Sudamericana'
                                precio ='$20'
                            />
                            <Imagenes
                                imagen = 'bow3'
                                clase = 'imgProducto'
                                imgInfo = 'bow1'
                                imgTitulo = 'Joey Castillo'
                                imgTexto = 'Tela Norteamericana'
                                precio ='$20'
                            />
                        </>
                    )}
                </div>
            </div>
        </div>
        
    );
}

export default Productos;