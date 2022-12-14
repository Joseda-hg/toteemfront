import React from "react";
// import { Link } from "react-router-dom";
import logo from '../imagenes/logo.png'

export function ConfirmacionCompra() {
    return (
        <>
            <img className="logo" src={logo} alt="" />
            <p>¿Seguro que quieres realizar tu pedido?</p>
            <p>aceptar</p>
        </>
    );
}
