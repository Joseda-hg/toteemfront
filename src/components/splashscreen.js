import React from "react";

import logo from '../imagenes/logo.png'
import touch from '../imagenes/touch.png'
import cerveza from '../imagenes/cerveza.png'
import hamburguesa from '../imagenes/hamburguesas.png'
import papas from '../imagenes/papas fritas.png'
import pizza from '../imagenes/pizza.png'
import fondo from '../imagenes/fondo.png'
import { Link } from "react-router-dom";

export function Splashscreen() {
  return (
    <>
      <img className="logo" src={logo} alt="" />
      <Link id="logo" className="navbar-brand" to="/menuDisplay">
        <img className="logo" src={touch} alt="" />
      </Link>
      <img className="logo" src={cerveza} alt="" />
      <img className="logo" src={hamburguesa} alt="" />
      <img className="logo" src={papas} alt="" />
      <img className="logo" src={pizza} alt="" />
      <img className="logo" src={fondo} alt="" />

    </>
  );
}
