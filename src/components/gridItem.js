import React from "react";
import cerveza from '../imagenes/cerveza.png'

// import { Link } from "react-router-dom";

export function GridItem(titulo, imagen, precio) {
    return (
        <>
            <h3>Cerveza</h3>
            <img className="gridImg" src={cerveza} alt="" />
            <p>Precio: 300$</p>
        </>
    );
}
