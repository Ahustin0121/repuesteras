import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({ 
    tipoConsulta: 'Consultar disponibilidad', 
    codigoProducto: '',
    nombre: '', 
    email: '', 
    mensaje: ''
  });
  
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

//validaciones
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.tipoConsulta !== 'Consulta general') {
        const formatoCodigo = /^[a-zA-Z0-9]{3,4}-[a-zA-Z]{3}-\d{2}$/;
        if (!formatoCodigo.test(formData.codigoProducto)) {
          setError("¡Ojo! El código del repuesto no tiene el formato correcto.");
          setStatus("");
          return;
        }
    }

    if (formData.nombre.length < 3) {
      setError("El nombre debe tener al menos 3 letras.");
      setStatus(""); 
      return;
    }
    
    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setError("Por favor, pon un correo electrónico válido.");
      setStatus("");
      return;
    }
    
    if (formData.mensaje.length < 10) {
      setError("El mensaje is muy corto, danos un poco más de detalles.");
      setStatus("");
      return;
    }

    setError('');
    
    const bdExistente = localStorage.getItem('repuesterasBD');
    const bd = bdExistente ? JSON.parse(bdExistente) : { solicitudes: [], reclamos: [] };

    const nuevoRegistro = {
      id: Date.now(),
      fecha: new Date().toLocaleString(),
      codigoProducto: formData.tipoConsulta === 'Consulta general' ? 'N/A' : formData.codigoProducto.toUpperCase(),
      nombre: formData.nombre,
      email: formData.email,
      mensaje: formData.mensaje,
      tipo: formData.tipoConsulta
    };

    if (formData.tipoConsulta === 'Reclamo de producto') {
      bd.reclamos.push(nuevoRegistro);
    } else {
      bd.solicitudes.push(nuevoRegistro);
    }

    localStorage.setItem('repuesterasBD', JSON.stringify(bd));

    setStatus(`¡Gracias, ${formData.nombre}! Hemos recibido tu consulta correctamente.`);
    
    setFormData({ 
      tipoConsulta: 'Consultar disponibilidad', 
      codigoProducto: '', 
      nombre: '', 
      email: '', 
      mensaje: ''
    });
  };

  return (
    //define el contenido principal de la página de contacto
    <main className="container mt-5" style={{ maxWidth: '600px' }}>
      
      {/*Parte para agrupa el formulario de manera lógica */}
      <section aria-labelledby="titulo-contacto">
        <h2 className="text-center mb-4" id="titulo-contacto">Contáctanos</h2>
        
        <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
          
          <div className="mb-3">
            <label htmlFor="tipoConsulta" className="form-label fw-bold">¿En qué te podemos ayudar?</label>
            <select 
              id="tipoConsulta"
              className="form-select"
              value={formData.tipoConsulta}
              onChange={(e) => setFormData({...formData, tipoConsulta: e.target.value})}
            >
              <option value="Consultar disponibilidad">Consultar disponibilidad</option>
              <option value="Reclamo de producto">Reclamo de producto</option>
              <option value="Consulta general">Consulta general</option>
            </select>
          </div>

          {formData.tipoConsulta !== 'Consulta general' && (
            <div className="mb-3">
              <label htmlFor="codigoProducto" className="form-label fw-bold">Código del producto:</label>
              <input 
                id="codigoProducto"
                type="text" 
                className="form-control text-uppercase"
                placeholder="Pega el código aquí (ej: MZ3-FRN-01)"
                value={formData.codigoProducto}
                onChange={(e) => setFormData({...formData, codigoProducto: e.target.value})}
              />
            </div>
          )}

          <div className="mb-3">
            <label htmlFor="nombre" className="form-label fw-bold">Nombre completo:</label>
            <input 
              id="nombre"
              type="text" 
              className="form-control"
              value={formData.nombre}
              onChange={(e) => setFormData({...formData, nombre: e.target.value})}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">Correo electrónico:</label>
            <input 
              id="email"
              type="email" 
              className="form-control"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mensaje" className="form-label fw-bold">Mensaje:</label>
            <textarea 
              id="mensaje"
              className="form-control"
              rows="4"
              placeholder="Escribe aquí tu consulta..."
              value={formData.mensaje}
              onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
              required
            ></textarea>
          </div>

          {/* Alertas de Estado con rol de accesibilidad */}
          {error && <div className="alert alert-danger py-2" role="alert">{error}</div>}
          {status && <div className="alert alert-success py-2" role="alert">{status}</div>}

          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Enviar Mensaje
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contacto;