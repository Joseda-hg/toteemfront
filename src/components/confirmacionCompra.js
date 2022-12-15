import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import logo from '../imagenes/logo.png'

export function ConfirmacionCompra() {
    return (
        <>
            <img className="logo logoConf" src={logo} alt="" />
            <div className="Observacion">
                <p>¿Seguro que quieres realizar tu pedido?</p>
            </div>
            <Link to="/Pedidopreview">
            <button className="botonConfirmacion">Aceptar</button>
            </Link>
        </>
    );
}
