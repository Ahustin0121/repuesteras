import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/web/hero.png';

const Inicio = () => {
  const IconoCheck = () => (
    <div className="mb-3 d-flex justify-content-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#1e3c72" opacity="0.1" />
        <circle cx="12" cy="12" r="9" stroke="#1e3c72" strokeWidth="2" />
        <path d="M8 12L11 15L16 9" stroke="#f12711" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );

  return (
    <div className="container-fluid p-0">

      {/* El header contiene el banner principal y la navegación adaptable*/}
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">Repuesteras</Link>
            {/* Botón de hamburguesa para móviles si lo necesitas */}
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/inventario">Inventario</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/*Banner */}
        <div className="bg-dark text-white py-5 px-4 d-flex align-items-center" style={{ minHeight: '500px' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="display-3 fw-bold mb-4">Repuestos de calidad, al alcance de tu mano.</h1>
                <p className="lead mb-4">Encuentra el repuesto exacto que tu auto necesita con nuestro sistema de búsqueda por código. Rápido, simple y sin errores.</p>
                <Link to="/inventario" className="btn btn-danger btn-lg px-4 me-md-2 fw-bold">Ver Catálogo</Link>
              </div>
              <div className="col-lg-6 text-center">
                <img src={heroImage} alt="Banner Repuesteras" className="img-fluid rounded shadow-lg mt-4" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main contenido principal de la página */}
      <main>
        <section className="container my-5 py-5">
          <div className="row text-center">
            <h2 className="mb-5 fw-bold">¿Por qué comprar en Repuesteras?</h2>

            <div className="col-md-4 mb-4">
              <article className="p-4 bg-light rounded shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
                <IconoCheck />
                <h3 className="h4 fw-bold mt-2">Búsqueda Precisa</h3>
                <p className="text-muted mb-0">Olvídate de las dudas. Usa nuestros códigos únicos para asegurar la pieza perfecta.</p>
              </article>
            </div>

            <div className="col-md-4 mb-4">
              <article className="p-4 bg-light rounded shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
                <IconoCheck />
                <h3 className="h4 fw-bold mt-2">Comunicación clara</h3>
                <p className="text-muted mb-0">La comunicación entre nosotros y usted es: simple - rápida - clara. Ya sea queja, consulta o mandar un saludo.</p>
              </article>
            </div>

            <div className="col-md-4 mb-4">
              <article className="p-4 bg-light rounded shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
                <IconoCheck />
                <h3 className="h4 fw-bold mt-2">Garantía Total</h3>
                <p className="text-muted mb-0">Calidad certificada en cada repuesto que vendemos. Compras con total tranquilidad.</p>
              </article>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Inicio;