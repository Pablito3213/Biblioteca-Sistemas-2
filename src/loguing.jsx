import React, { useState } from 'react'

// COMPONENTE LOGIN
function Login({ onLoginSuccess }) {

  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (usuario === "admin" && clave === "1234") {
      onLoginSuccess();
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  };

  return (

    <div className="login-contenedor">

      <form className="login-formulario" onSubmit={manejarEnvio}>

        <h2 className="login-titulo">
          Tu próxima historia comienza aquí.
        </h2>

        <div className="login-campo">

          <label>Usuario</label>

          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />

        </div>

        <div className="login-campo">

          <label>Contraseña</label>

          <input
            type="password"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />

        </div>

        <button type="submit" className="btn-login">
          Aceptar
        </button>

      </form>

    </div>
  );
}
export default Login;