import React from "react";
import logo from '../imagenes/logo.png'
import bandeja from "../imagenes/bandeja.png"
import pagar from "../imagenes/pagar.png"
// import { Link } from "react-router-dom";

export function AgregarObservacion() {
    return (
        <>
            <p>Atras</p>
            <p>Agregar observacion</p>
            <p> Quiero una cerveza sin agua y una
                hamburguesa sin pan carne tomate y
                palta solo pepinillos y mayo gracias </p>
            <img className="logo" src={logo} alt="" />
            <img className="logo" src={bandeja} alt="" />
            <img className="logo" src={pagar} alt="" />
        </>
    );
}
