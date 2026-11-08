
import React, { useState } from 'react';

function Prestamos({ mostrar, cerrar }) {

    const [nombre, setNombre] = useState("");
    const [dni, setDni] = useState("");
    const [libro, setLibro] = useState("");
    const [fechaPrestamo, setFechaPrestamo] = useState("");
    const [fechaDevolucion, setFechaDevolucion] = useState("");

    const [prestamos, setPrestamos] = useState([]);

    // GUARDAR PRESTAMO
    function guardarPrestamo() {

        if (!nombre || !dni || !libro || !fechaPrestamo || !fechaDevolucion) {
            alert("Completá todos los campos");
            return;
        }

        if (fechaDevolucion < fechaPrestamo) {
            alert("La fecha de devolución no puede ser anterior al préstamo");
            return;
        }

        setPrestamos([...prestamos, {
            nombre,
            dni,
            libro,
            fechaPrestamo,
            fechaDevolucion
        }]);

        alert("Préstamo registrado correctamente");

        setNombre("");
        setDni("");
        setLibro("");
        setFechaPrestamo("");
        setFechaDevolucion("");

        cerrar();
    }

    return (
        <>
            {mostrar && (

                <div className="modal d-block modal-socios">

                    <div className="modal-dialog modal-dialog-centered">

                        <div className="modal-content">

                            <div className="modal-header">

                                <h5 className="modal-title">
                                    Registrar nuevo préstamo
                                </h5>

                            </div>

                            <div className="modal-body">

                                <input
                                    className="form-control mb-3"
                                    placeholder="Nombre y apellido del socio"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />

                                <input
                                    className="form-control mb-3"
                                    placeholder="DNI del socio"
                                    value={dni}
                                    onChange={(e) => setDni(e.target.value)}
                                />

                                <input
                                    className="form-control mb-3"
                                    placeholder="Título del libro"
                                    value={libro}
                                    onChange={(e) => setLibro(e.target.value)}
                                />

                                <label className="mb-1">
                                    Fecha del préstamo
                                </label>

                                <input
                                    type="date"
                                    className="form-control mb-3"
                                    value={fechaPrestamo}
                                    onChange={(e) => setFechaPrestamo(e.target.value)}
                                />

                                <label className="mb-1">
                                    Fecha de devolución
                                </label>

                                <input
                                    type="date"
                                    className="form-control mb-3"
                                    value={fechaDevolucion}
                                    onChange={(e) => setFechaDevolucion(e.target.value)}
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
                                    onClick={guardarPrestamo}
                                >
                                    Registrar préstamo
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            )}

        </>
    );
}

export default Prestamos;
