import React from "react";
// import useState from "react"
import observacion from "../imagenes/observacion.png"
import pagar from "../imagenes/pagar.png"
import seguir from "../imagenes/seguir.png"
import logo from "../imagenes/logo.png"
import bandeja from "../imagenes/bandeja.png"

const data = [
  { cantidad: "1", producto: "Hamburguesa", precio: "10000" },
  { cantidad: "2", producto: "Completo", precio: "5000" },
  { cantidad: "3", producto: "Bebida", precio: "2000" },
]

export function Pedidopreview() {
  return (
    <>
      <h1>Pedidos</h1>
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
          <td> 36000$</td>
        </tr>
      </table>
      <p>Total de Compra</p>
      <img className="logo" src={observacion} alt="" />
      <img className="logo" src={pagar} alt="" />
      <img className="logo" src={seguir} alt="" />
      <img className="logo" src={logo} alt="" />
      <img className="logo" src={bandeja} alt="" />
    </>
  );
}
