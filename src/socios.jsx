import React, { useState } from 'react';

function Socios({ mostrar, cerrar }) {

    const [nombre, setNombre] = useState("");
    const [dni, setDni] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");

    const [socios, setSocios] = useState([]);

    // GUARDAR SOCIO
    function guardarSocio() {

        if (!nombre || !dni || !telefono || !direccion) {
            alert("Completá todos los campos");
            return;
        }

        setSocios([...socios, {
            nombre,
            dni,
            telefono,
            direccion
        }]);

        alert("Socio registrado correctamente");

        setMostrar(false);

        setNombre("");
        setDni("");
        setTelefono("");
        setDireccion("");
    }

    return (
        <>
            {mostrar && (

                <div className="modal d-block modal-socios">

                    <div className="modal-dialog modal-dialog-centered">

                        <div className="modal-content">

                            <div className="modal-header">

                                <h5 className="modal-title">
                                    Registrar socio
                                </h5>

                            </div>

                            <div className="modal-body">

                                <input
                                    className="form-control mb-3"
                                    placeholder="Nombre y apellido"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />

                                <input
                                    className="form-control mb-3"
                                    placeholder="DNI"
                                    value={dni}
                                    onChange={(e) => setDni(e.target.value)}
                                />

                                <input
                                    className="form-control mb-3"
                                    placeholder="Teléfono"
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)}
                                />

                                <input
                                    className="form-control mb-3"
                                    placeholder="Dirección"
                                    value={direccion}
                                    onChange={(e) => setDireccion(e.target.value)}
                                />

                            </div>

                            <div className="modal-footer">

                                <button
                                    className="btn btn-secondary"
                                    onClick={cerrar}
                                >
                                    Cerrar
                                </button>

                                <button
                                    className="btn btn-success"
                                    onClick={guardarSocio}
                                >
                                    Guardar
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            )}

        </>
    );
}

export default Socios;
