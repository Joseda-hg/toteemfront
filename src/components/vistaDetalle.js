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
        <div className="WWW">
           <h3>Valor total: $</h3>
           <img className="logoB" src={bandeja} alt="" /> 
        </div>
        <div className="KKK">
            <h1>Cervezas</h1>
            <h2>Marca Cerveza</h2>
            <img className="logoC" src={cerveza} alt="" /> 
        </div>  
         <div className="QQQ">
            <p>Cantidad</p>
            <p>- 10 +</p>
            <p>Descripcion del Producto e Ingredientes</p>
            <p>Precio: 3000$</p> 
        </div>
           

            <img className="logoA" src={logo} alt="" />  
            <img className="logoD" src={observacion} alt="" />  
            <img className="logoI" src={pagar} alt="" />  
             </>
    );
}
