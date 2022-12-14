import React from "react";
import logo from '../imagenes/logo.png'
import bandeja from '../imagenes/bandeja.png'
import cerveza from '../imagenes/cerveza.png'
import observacion from '../imagenes/observacion.png'
import pagar from '../imagenes/pagar.png'
// import { Link } from "react-router-dom";


export function VistaDetalle() {
    return (
        <>
            <h1>Cervezas</h1>
            <h2>Marca Cerveza</h2>
            <p>Cantidad</p>
            <p>- 10 +</p>
            <p>Descripcion del Producto e Ingredientes</p>
            <p>Precio: 3000$</p>     
            <img className="logo" src={logo} alt="" />  
            <img className="logo" src={bandeja} alt="" />  
            <img className="logo" src={cerveza} alt="" />  
            <img className="logo" src={observacion} alt="" />  
            <img className="logo" src={pagar} alt="" />  
             </>
    );
}
