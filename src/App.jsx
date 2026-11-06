// COMPONENTE PRINCIPAL

import React, { useState } from 'react';
import Login from './loguing.jsx';
import Socios from './socios.jsx';
import Libro from './libros.jsx';
import Pagos from './pagos.jsx';

function App() {

  const [logeado, setLogeado] = useState(false);
  const [mostrarSocios, setMostrarSocios] = useState(false);
  const [mostrarLibros, setMostrarLibros] = useState(false);
  const[mostrarPagos, setMostrarPagos] = useState(false)

  if (!logeado) {
    return <Login onLoginSuccess={() => setLogeado(true)} />;
  }

  return (
    <div className="container-biblioteca">

      {/* TITULO */}
      <div className="seccion-titulo">
        <h1 className="nombre-biblioteca">
          La biblioteca de todos
        </h1>

        <p className="subtitulo-biblioteca">
          Un lugar donde cada libro tiene una historia por contar
        </p>
      </div>

      {/* CITA DEL DIA */}
      <div className="seccion-centro">
        <div className="tarjeta-cita">
          <h5 className="cita-titulo">
            📖 Cita del día
          </h5>

          <p className="cita-texto">
            "Para viajar lejos, no hay mejor nave que un libro."
          </p>

          <footer className="cita-autor">
            — Emily Dickinson
          </footer>
        </div>
      </div>

      {/* BOTONES */}
      <div className="seccion-botones">

        <button
          className="btn-gestion"
          onClick={() => setMostrarSocios(true)}
        >
          😎 Socios
        </button>

        <button
          className="btn-gestion"
          onClick={() => setMostrarLibros(true)}
        >
          📖 Libro
        </button>

        <button
        className="btn-gestion"
        onClick={() => setMostrarPagos(true)}
    >
        🪙 Pagos
    </button>


        <button className="btn-gestion">🕵 Usuarios</button>
        <button className="btn-gestion">📚 Prestamos</button>
        <button className="btn-gestion">📝 Devolucion</button>

        <button
          className="btn-gestion btn-cerrar"
          onClick={() => setLogeado(false)}
        >
          Cerrar Sesión
        </button>

      </div>

      {/* VENTANA DE SOCIOS */}
      <Socios
        mostrar={mostrarSocios}
        cerrar={() => setMostrarSocios(false)}
      />

      {/* VENTANA DE LIBROS */}
      {mostrarLibros && (
        <Libro cerrar={() => setMostrarLibros(false)} />
      )}

      {mostrarPagos && (
    <Pagos cerrar={() => setMostrarPagos(false)} />
)}

    </div>
  );
}

export default App;