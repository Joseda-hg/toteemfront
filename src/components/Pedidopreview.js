import React from "react";
// import useState from "react"
import observacion from "../imagenes/observacion.png"
import pagar from "../imagenes/pagar.png"
import seguir from "../imagenes/seguir.png"
import logo from "../imagenes/logo.png"
import bandeja from "../imagenes/bandeja.png"
import menos from "../imagenes/menos.jpg"
import mas from "../imagenes/mas.png"
export function Pedidopreview() {
  return (
    <>
    <h1>Pedidos</h1>
    <p>Cantidad</p>
    <p>Producto</p>
    <p>Precio</p>
    <p>Total de Compra</p>
    <img className="logo" src={observacion} alt="" />
    <img className="logo" src={pagar} alt="" />
    <img className="logo" src={seguir} alt="" />
    <img className="logo" src={logo} alt="" />
    <img className="logo" src={bandeja} alt="" />
    <img className="logo" src={menos} alt="" />
    <img className="logo" src={mas} alt="" />
    </>
  );
}
