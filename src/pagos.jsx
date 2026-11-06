
import React, { useState } from 'react';

function Pagos({ cerrar }) {

    const [mostrarModal, setMostrarModal] = useState(false);

    return (
        <div className="pagos-overlay">

            <div className="pagos-ventana">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h2>Control de pagos</h2>

                    <button
                        className="btn-close"
                        onClick={cerrar}
                    ></button>

                </div>

                <div className="d-flex gap-2 mb-3">

                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar socio por nombre o DNI..."
                />

                <button className="btn btn-success">
                    Buscar
                </button>

            </div>

                <table className="table table-dark table-hover">

                    <thead>
                        <tr>
                            <th>Socio</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                        </tr>
                    </thead>

                    <tbody>
                         <tr>
                            <td>Matias Brizuela</td>
                            <td>05/11/26</td>
                            <td>Pagado</td>
                        </tr>
                        <tr>
                            <td>Juan Gramajo</td>
                            <td>05/11/26</td>
                            <td>Pagado</td>
                        </tr>

                        <tr>
                            <td>Missael Carrizo</td>
                            <td>—</td>
                            <td>Pendiente</td>
                        </tr>

                        <tr>
                            <td>Fuentes Pablo</td>
                            <td>02/11/26</td>
                            <td>Pagado</td>
                        </tr>
                    </tbody>

                </table>

                <button
                    className="btn btn-success w-100"
                    onClick={() => setMostrarModal(true)}
                >
                    + Registrar pago
                </button>

                <div className="text-end mt-4">

                <button
                    className="btn btn-secondary"
                    onClick={cerrar}
                >
                    Cerrar
                </button>

            </div>

                {mostrarModal && (

                    <div
                        className="modal d-block"
                        tabIndex="-1"
                        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                    >

                        <div className="modal-dialog">

                            <div className="modal-content">

                                <div className="modal-header">

                                    <h5 className="modal-title">
                                        Registrar pago
                                    </h5>

                                    <button
                                        className="btn-close"
                                        onClick={() => setMostrarModal(false)}
                                    ></button>

                                </div>

                                <div className="modal-body">
                                    <p>Pagos registrado con excito.</p>
                                </div>

                            </div>

                        </div>

                    </div>

                )}

            </div>

        </div>
    );
}

export default Pagos;
