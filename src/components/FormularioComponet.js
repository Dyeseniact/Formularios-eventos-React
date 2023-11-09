import React, { useState } from "react";

export const FormularioComponet = () => {
  const [usuario, setUsuario] = useState({});

  const conseguirDatosFormulario = (e) => {
    e.preventDefault();

    let datos = e.target;
    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      bio: datos.bio.value,
      enviar: datos.enviar.value
    };
    console.log(usuario);

    setUsuario(usuario);
  };

  const cambiarDatos = (e) => {
    let nameDelInput = e.target.name;
    let usuarioParaModificar = usuario;

    //usuarioParaModificar[nameDelInput] = e.target.value;
    //console.log(usuarioParaModificar);
    setUsuario(estadoPrevio => ({
        ...estadoPrevio,
        [nameDelInput]: e.target.value,
    })
    );
  };

  return (
    <div>
      <h1>Formulario con React</h1>

      {usuario.enviar && (
        <div className="info_ususario label label-gray">
          {usuario.nombre} {usuario.apellido} es un {usuario.genero} y su
          biografia es esta: {usuario.bio}
        </div>
      )}

      <form onSubmit={conseguirDatosFormulario}>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          onChange={cambiarDatos}
        />
        <input
          type="text"
          placeholder="Apellido"
          name="apellido"
          onChange={cambiarDatos}
        />
        <select name="genero" onChange={cambiarDatos}>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <textarea
          name="bio"
          placeholder="biografia"
          onChange={cambiarDatos}
        ></textarea>

        <input type="submit" value="Enviar" name="enviar" />
      </form>
    </div>
  );
};
