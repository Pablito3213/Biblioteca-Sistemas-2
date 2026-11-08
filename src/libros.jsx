import React, { useState } from 'react';

export default function Libro({ cerrar, alBuscar }) {
  // 1. Estado para guardar el texto que escribe el usuario
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  // 2. Función para que funcione la 'X' (cierra el modal)
  const manejarCierre = () => {
    setIsOpen(false);
    if (cerrar) cerrar(); // Avisa al componente padre que se cerró
  };

  // 3. Función para que funcione el botón "Buscar" (o al presionar Enter)
  const manejarSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página
    
    if (terminoBusqueda.trim() === '') {
      alert('Por favor, escribe el nombre de un libro.');
      return;
    }

    // Aquí ejecutas la búsqueda (puedes usar una prop o hacerlo aquí mismo)
    if (alBuscar) {
      alBuscar(terminoBusqueda);
    } else {
      console.log("Buscando el libro:", terminoBusqueda);
      // Aquí puedes poner tu fetch() o axios() a tu base de datos
    }
  };

  return (
    <>
      {isOpen && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
              
            

  
              
              <div className="modal-body text-center px-4 pb-5">
                <h3 className="fw-bold text-dark mb-4">¿Qué libro deseas buscar?</h3>
                
                {/* ACCIÓN DEL FORMULARIO: Al enviar ejecuta manejarSubmit */}
                <form className="mx-auto" style={{ maxWidth: '480px' }} onSubmit={manejarSubmit}>
                  <div className="input-group input-group-lg shadow-sm rounded-3 overflow-hidden border">
                    
                    {/* ENTRADA DE TEXTO: Guarda lo que se escribe en el estado */}
                    <input 
                      type="text" 
                      className="form-control border-0 ps-3 fs-6" 
                      placeholder="Escribe el título, autor o tema..." 
                      aria-label="Buscar libro"
                      value={terminoBusqueda}
                      onChange={(e) => setTerminoBusqueda(e.target.value)}
                    />
                    
                    <div className="mt-5">
                    <button 
                      type="button"
                      className="btn btn-secondary px-4"
                      onClick={manejarCierre}
                    >
                      Cerrar
                    </button>
                  </div>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

