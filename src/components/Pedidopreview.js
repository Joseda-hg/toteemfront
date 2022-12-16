import React from "react";
// import useState from "react"
import observacion from "../imagenes/observacion.png"
import pagar from "../imagenes/pagar.png"
import seguir from "../imagenes/seguir.png"
import logo from "../imagenes/logo.png"
import bandeja from "../imagenes/bandeja.png"
import barra from "../imagenes/barra.png"

const data = [
  { cantidad: "1", producto: "Hamburguesa", precio: "10000" },
  { cantidad: "2", producto: "Completo", precio: "5000" },
  { cantidad: "3", producto: "Bebida", precio: "2000" },
]

export function Pedidopreview() {
  return (
    <>
    <div className="CCC">
      <img className="logopig" src={bandeja} alt="" />
      
      <h1>Pedidos</h1>
    </div>
      
      <table className="default">
        <tr>
          <th>
            Cantidad
          </th>
          <th>
            Producto
          </th>
          <th>
            Precio
          </th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.cantidad}</td>
              <td>{val.producto}</td>
              <td>{val.precio}</td>
            </tr>
          )
        })}
        
        <tr>
          <td></td>
          <td> Total Compra:</td>
          <td> $ 36000</td>
        </tr>
      </table>
   
      <img className="logoobs" src={observacion} alt="" />
      <img className="logopag" src={pagar} alt="" />
      <img className="logoseg" src={seguir} alt="" />
      <img className="logolog" src={logo} alt="" />
      
    </>
  );
}
