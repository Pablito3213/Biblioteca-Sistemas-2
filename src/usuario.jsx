import React, { useState } from 'react';

export function Usuario({ cerrar }) {

    const [pestana, setPestana] = useState('registrar');

    return (
        <div className="usuario-overlay">
            <div className="usuario-ventana">

                <div className="card text-center">

                    {/* PESTAÑAS */}
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">

                            <li className="nav-item">
                                <button
                                    className={`nav-link ${pestana === 'registrar' ? 'active' : ''}`}
                                    onClick={() => setPestana('registrar')}
                                >
                                    Registrar usuario
                                </button>
                            </li>

                            <li className="nav-item">
                                <button
                                    className={`nav-link ${pestana === 'buscar' ? 'active' : ''}`}
                                    onClick={() => setPestana('buscar')}
                                >
                                    Buscar usuario
                                </button>
                            </li>

                        </ul>
                    </div>

                    {/* CONTENIDO */}
                    <div className="card-body">

                        {pestana === 'registrar' && (
                            <>
                                <h5 className="card-title">Registrar usuario</h5>

                                <input className="form-control mb-3" placeholder="Nombre y apellido" />
                                <input className="form-control mb-3" placeholder="DNI" />
                                <input className="form-control mb-3" placeholder="Nombre de usuario" />
                                <input className="form-control mb-3" type="password" placeholder="Contraseña" />

                                <button className="btn btn-primary">
                                    Guardar usuario
                                </button>
                            </>
                        )}

                        {pestana === 'buscar' && (
                            <>
                                <h5 className="card-title">Buscar usuario</h5>

                                <input className="form-control mb-3" placeholder="Ingresar DNI" />

                                <button className="btn btn-primary">
                                    Buscar
                                </button>

                                <button className="btn btn-danger ms-2">
                                    Eliminar
                                </button>
                            </>
                        )}

                        <hr />

                        <button className="btn btn-secondary" onClick={cerrar}>
                            Cerrar
                        </button>

                    </div>
                </div>

            </div>
        </div>
    );
}