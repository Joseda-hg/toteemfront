import React from "react";
import logo from '../imagenes/logo.png'
import bandeja from "../imagenes/bandeja.png"
import pagar from "../imagenes/pagar.png"
// import { Link } from "react-router-dom";

export function AgregarObservacion() {
    return (
        <>
            <p>◀ Atras</p>
            <img className="bandejaObservacion imgred" src={bandeja} alt="" />
            <div className= "RRR">
                
                <h3 >Agregar observacion</h3> 
            </div>
            
            <div className="Observacion">
                <b>
                    <p>
                        Quiero una cerveza sin agua y una
                        hamburguesa sin pan carne tomate y
                        palta solo pepinillos y mayo gracias
                    </p>
                </b>
                
            </div>
            <img className="pagarObservacion" src={pagar} alt="" />
            <div className="PPP">
                <p>Enviar</p> 
            </div>
           
            
            <img className="botonEnviar" src={logo} alt="" />
            
           
           
        </>
    );
}
