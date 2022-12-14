import React from "react";
// @ts-ignore
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link id="logo" className="navbar-brand" to="/">
                    HG
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto nav-fill w-100">
                        <li>
                            <Link className="nav-link" to="/agregar">
                                Agregar Observacion
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/">
                                Splashscreen
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/MenuDisplay">
                                MenuDisplay
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/vista">
                                Vista Detalles
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/Pedidopreview">
                                Pedidopreview
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/confirmacion">
                                ConfirmacionCompra
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}