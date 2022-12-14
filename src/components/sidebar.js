import React from "react";
import { Link } from "react-router-dom";

export function Sidebar() {
    return (
        <>
            <ul>
                <Link className="sidebarItem" to="/">
                    <li>Tragos</li>
                </Link>    <Link className="sidebarItem" to="/">
                    <li>Tablas</li>
                </Link>    <Link className="sidebarItem" to="/">
                    <li>Pizzas</li>
                </Link>    <Link className="sidebarItem" to="/">
                    <li>Rolls</li>
                </Link>    <Link className="sidebarItem" to="/">
                    <li>Cafeteria</li>
                </Link>    <Link className="sidebarItem" to="/">
                    <li>Cervezas</li>
                </Link>    <Link className="sidebarItem" to="/">
                    <li>Vinos</li>
                </Link>    <Link className="sidebarItem" to="/">
                    <li>Aperitivos</li>
                </Link>    <Link className="sidebarItem" to="/">
                    <li>Ceviche</li>
                </Link>    <Link className="sidebarItem" to="/">
                    <li>Almuerzo</li>
                </Link>
            </ul>
        </>
    );
}
