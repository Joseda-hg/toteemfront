import React from "react";
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';


export function Sidebar() {
    return (
        <div className="menu">
        <>
        <div className="menuText">
<Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Tragos</Accordion.Header>
        <Accordion.Body>
        <Link className="sidebarItem" to="/">
                    <li>Tragos</li>
                </Link>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Tablas</Accordion.Header>
        <Accordion.Body>
        <Link className="sidebarItem" to="/">
                    <li>Tablas</li>
                </Link> 
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Pizzas</Accordion.Header>
        <Accordion.Body>
        <Link className="sidebarItem" to="/">
                    <li>Pizzas</li>
                </Link> 
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Rolls</Accordion.Header>
        <Accordion.Body>
        <Link className="sidebarItem" to="/">
                    <li>Rolls</li>
                </Link> 
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Cafeteria</Accordion.Header>
        <Accordion.Body>
        <Link className="sidebarItem" to="/">
                    <li>Cafeteria</li>
                </Link> 
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>Cervezas</Accordion.Header>
        <Accordion.Body>
        <Link className="sidebarItem" to="/">
                    <li>Cervezas</li>
                </Link>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header>Vinos</Accordion.Header>
        <Accordion.Body>
        <Link className="sidebarItem" to="/">
                    <li>Vinos</li>
                </Link>   
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7">
        <Accordion.Header>Aperitivos</Accordion.Header>
        <Accordion.Body>
        <Link className="sidebarItem" to="/">
                    <li>Aperitivos</li>
                </Link>     
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="8">
        <Accordion.Header>Ceviche</Accordion.Header>
        <Accordion.Body>
        <Link className="sidebarItem" to="/">
                    <li>Ceviche</li>
                </Link>      
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="9">
        <Accordion.Header>Almuerzo</Accordion.Header>
        <Accordion.Body>
        <Link className="sidebarItem" to="/">
                    <li>Almuerzo</li>
                </Link>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion> 
    </div>    
        </>
        </div>
    
   );
}


export default Sidebar;