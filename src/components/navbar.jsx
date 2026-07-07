import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '15px', background: '#222', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <div style={{ width: '180px', height: 'auto' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 120" width="150%" height="150%">
            <defs>
              <linearGradient id="gradienteMecanico" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#1e3c72', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#2a5298', stopOpacity: 1 }} />
              </linearGradient>
              <linearGradient id="gradienteDetalle" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#f12711', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#f5af19', stopOpacity: 1 }} />
              </linearGradient>
            </defs>

            <g transform="translate(10, 10)">
              <circle cx="50" cy="50" r="38" fill="url(#gradienteMecanico)" />
              <path d="M 45 2 L 55 2 L 57 15 L 43 15 Z" fill="url(#gradienteMecanico)" />
              <path d="M 45 98 L 55 98 L 57 85 L 43 85 Z" fill="url(#gradienteMecanico)" />
              <path d="M 2 45 L 2 55 L 15 57 L 15 43 Z" fill="url(#gradienteMecanico)" />
              <path d="M 98 45 L 98 55 L 85 57 L 85 43 Z" fill="url(#gradienteMecanico)" />
              <circle cx="50" cy="50" r="20" fill="#222222" /> {/* Cambiado a #222 para que combine con tu nav negro */}
              <line x1="38" y1="50" x2="62" y2="50" stroke="url(#gradienteDetalle)" strokeWidth="4" strokeLinecap="round" />
              <line x1="50" y1="38" x2="50" y2="62" stroke="url(#gradienteDetalle)" strokeWidth="4" strokeLinecap="round" />
            </g>

            <text x="130" y="65" fontFamily="'Montserrat', 'Segoe UI', sans-serif" fontSize="42" fontWeight="900" fill="#ffffff" letterSpacing="2">
              REPUESTERAS
            </text>
            <rect x="130" y="75" width="340" height="4" rx="2" fill="url(#gradienteDetalle)" />
            <text x="135" y="98" fontFamily="'Segoe UI', sans-serif" fontSize="16" fontWeight="600" fill="#a0a0a0" letterSpacing="4">
              CONEXIÓN AUTOMOTRIZ
            </text>
          </svg>
        </div>
      </Link>




      {/* Los enlaces del menú al lado derecho */}
      <div>
        <Link to="/" style={{ color: '#fff', marginRight: '20px', textDecoration: 'none' }}>Inicio</Link>
        <Link to="/contacto" style={{ color: '#fff', marginRight: '20px', textDecoration: 'none' }}>Contacto</Link>
        <Link to="/nosotros" style={{ color: '#fff', marginRight: '20px', textDecoration: 'none' }}>Nosotros</Link>
        <Link to="/inventario" style={{ color: '#fff', textDecoration: 'none' }}>Inventario</Link>
      </div>

    </nav>
  );
};

export default Navbar;