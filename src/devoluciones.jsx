import React, { useState } from 'react';

function Devoluciones({ cerrar }) {

    const [dni, setDni] = useState('');

    return (

        <div className="devoluciones-overlay">

            <div className="devoluciones-ventana">

                <h2>Control de devoluciones</h2>

                <div className="mb-3">

                    <label className="form-label">
                        Buscar socio por DNI
                    </label>

                    <div className="input-group">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ingresar DNI..."
                            value={dni}
                            onChange={(e) => setDni(e.target.value)}
                        />

                        <button className="btn btn-success">
                            Buscar
                        </button>

                    </div>

                </div>

                <div className="text-end mt-4">

                    <button
                        className="btn btn-secondary"
                        onClick={cerrar}
                    >
                        Cerrar
                    </button>

                </div>

            </div>

        </div>

    );
}

export default Devoluciones;
