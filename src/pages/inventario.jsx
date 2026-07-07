import React, { useState } from 'react';

// Exportar todas las imágenes de la carpeta
const imagenes = import.meta.glob('../assets/inventario/*.{png,jpg,jpeg,webp}', { eager: true });

const Catalogo = () => {
  const inventario = [
    { id: 1, codigo: 'MZ3-FRN-01', nombre: 'Pastillas de Freno', categoria: 'Frenos', marca: 'Mazda (Modelo 3)' },
    { id: 2, codigo: 'FORD-MTR-02', nombre: 'Filtro de Aceite Original', categoria: 'Motor', marca: 'Ford' },
    { id: 3, codigo: 'AUDI-FRN-03', nombre: 'Disco de Freno Ventilado', categoria: 'Frenos', marca: 'Audi' },
    { id: 4, codigo: 'FIAT-MTR-04', nombre: 'Juego de Bujías', categoria: 'Motor', marca: 'Fiat' },
    { id: 5, codigo: 'CHEV-SUS-05', nombre: 'Amortiguador Delantero', categoria: 'Suspensión', marca: 'Chevrolet' },
    { id: 6, codigo: 'TYT-SUS-06', merge: 'Bandeja de Suspensión', categoria: 'Suspensión', marca: 'Toyota' },
  ];

  const [filtro, setFiltro] = useState('Todos');
  const [copiado, setCopiado] = useState(null);

  const repuestosFiltrados = filtro === 'Todos' 
    ? inventario 
    : inventario.filter(item => item.categoria === filtro);

  const copiarCodigo = (codigo, id) => {
    navigator.clipboard.writeText(codigo);
    setCopiado(id);
    setTimeout(() => setCopiado(null), 2000);
  };

  return (
    <main className="container mt-5">
      <h2 className="text-center mb-4" id="titulo-catalogo">Catálogo de Repuestos</h2>
      
      <nav className="d-flex justify-content-center gap-2 mb-5 flex-wrap" aria-label="Filtros de catálogo">
        <button className={`btn ${filtro === 'Todos' ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => setFiltro('Todos')}>Todos</button>
        <button className={`btn ${filtro === 'Motor' ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => setFiltro('Motor')}>Motor</button>
        <button className={`btn ${filtro === 'Frenos' ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => setFiltro('Frenos')}>Frenos</button>
        <button className={`btn ${filtro === 'Suspensión' ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => setFiltro('Suspensión')}>Suspensión</button>
      </nav>

      {/*section para agrupar el listado de productos resultantes */}
      <section className="row" aria-labelledby="titulo-catalogo">
        {repuestosFiltrados.map((repuesto) => {
          const imgPath = `../assets/inventario/${repuesto.codigo}.png`;
          const srcImagen = imagenes[imgPath]?.default;

          if (!srcImagen) return null;

          return (
            <div key={repuesto.id} className="col-md-4 mb-4">
              {/* Cada repuesto es un objeto independiente, por ende es un <article> */}
              <article className="card shadow-sm h-100 border-0 bg-light">
                <img 
                  src={srcImagen} 
                  className="card-img-top border border-1 border-dark rounded shadow-sm" 
                  alt={repuesto.nombre} 
                  style={{ height: '200px', objectFit: 'cover' }} 
                />
                                
                <div className="card-body d-flex flex-column">
                  {/* Subimos el título a h3 para respetar la jerarquía (venimos de un h2) */}
                  <h3 className="card-title h5 fw-bold">{repuesto.nombre}</h3>
                  <h4 className="card-subtitle h6 mb-3 text-muted">Marca: {repuesto.marca}</h4>
                  
                  <div className="mb-3">
                    <span className="badge bg-primary px-3 py-2">{repuesto.categoria}</span>
                  </div>

                  <div className="mt-auto pt-3 border-top d-flex justify-content-between align-items-center">
                    <span className="text-muted small">Cód: <strong className="text-dark">{repuesto.codigo}</strong></span>
                    <button 
                      className={`btn btn-sm ${copiado === repuesto.id ? 'btn-success' : 'btn-outline-secondary'}`}
                      onClick={() => copiarCodigo(repuesto.codigo, repuesto.id)}
                      aria-label={`Copiar código ${repuesto.codigo}`}
                    >
                      {copiado === repuesto.id ? '¡Copiado!' : 'Copiar'}
                    </button>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Catalogo;