import React from "react";
// import useState from "react"

export function Pedidopreview() {
  return (
    <>
      <div>
        <h1 id="PageTitle">Formulario de contacto</h1>
      </div>
      <form action="https://formbold.com/s/3Gjv9" method="POST">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Direccion de correo electronico</label>
          <input type="email" name="Correo electronico"
            className="form-control"  
            id="direccionMail"
            aria-describedby="emailHelp"
            placeholder="Correo Electronico" required={true}
          ></input>
        </div>

        <label htmlFor="exampleInputEmail1">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="Nombre"
          aria-describedby="emailHelp"
          placeholder="Nombre" required={true}
          name="Nombre"
        ></input>
        <label htmlFor="exampleInputEmail1">Mensaje</label>
        <textarea
          className="form-control"
          id="mensaje"
          aria-describedby="emailHelp"
          placeholder="Escribe tu mensaje aqui..." required={true}
          name="Mensaje"
        ></textarea>
        <br />
        <button
          type="submit"
          className="btn btn-primary btn-block"
          id="formButton"

          // onClick={ContactHandler}
          value={"Enviar"}> Enviar formulario</button>
      </form>
    </>
  );
}
