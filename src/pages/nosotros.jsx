import React from 'react';
import imagenNosotros from '../assets/web/nosotros.avif';

const Nosotros = () => {
  return (
    //main el contenido de esta página
    <main className="container mt-5 mb-5">
      <section className="row align-items-center mb-5" aria-labelledby="titulo-nosotros">
        <div className="col-lg-6 mb-4 mb-lg-0">
          {/* Añadimos un id para mejorar la accesibilidad con el aria-labelledby */}
          <h2 id="titulo-nosotros" className="display-4 fw-bold mb-4">Sobre Repuesteras</h2>
          <p className="lead text-muted">
            Somos más que una tienda de repuestos. Somos el partner que tu auto necesita cuando las cosas se ponen difíciles.
          </p>
          <p>
            Nacimos en Santiago con una misión súper clara: hacer que encontrar la pieza exacta para tu nave deje de ser un dolor de cabeza. Sabemos lo frustrante que es dar vueltas buscando un repuesto y que nadie te dé una respuesta clara o que el código no calce.
          </p>
          <p>
            Por eso, decidimos mezclar nuestra pasión por el mundo tuerca con la tecnología para ofrecerte un catálogo ordenado, rápido y confiable. Ya sea que necesites pastillas de freno para tu Mazda, bujías para tu Fiat, o un amortiguador para tu Ford, en Repuesteras te conectamos con la solución al instante.
          </p>
        </div>
        
        <div className="col-lg-6">
          <img 
            src={imagenNosotros} 
            alt="Taller de repuestos Repuesteras" 
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </section>

      {/* Sección de Valores/Pilares */}
      <section className="row text-center mt-5 pt-4 border-top" aria-labelledby="titulo-pilares">
        <h3 id="titulo-pilares" className="fw-bold mb-4">Nuestros Pilares</h3>
        
        {/* Usamos <article> para cada pilar ya que son bloques de contenido independientes */}
        <div className="col-md-4 mb-4">
          <article className="p-4 bg-light rounded shadow-sm h-100 border-start border-primary border-4">
            {/* Ajustamos la jerarquía a h4 porque está dentro de una sección con h3 */}
            <h4 className="fw-bold text-dark mb-3">Calidad</h4>
            <p className="text-muted mb-0">Solo trabajamos con marcas reconocidas (Bosch, NGK, Brembo) para que tu auto rinda al 100% y viajes seguro.</p>
          </article>
        </div>
        
        <div className="col-md-4 mb-4">
          <article className="p-4 bg-light rounded shadow-sm h-100 border-start border-dark border-4">
            <h4 className="fw-bold text-dark mb-3">Tecnología</h4>
            <p className="text-muted mb-0">Sistemas de códigos exactos y un catálogo digital al grano. Optimizamos nuestra atención al máximo para no hacerte perder tiempo.</p>
          </article>
        </div>
        
        <div className="col-md-4 mb-4">
          <article className="p-4 bg-light rounded shadow-sm h-100 border-start border-primary border-4">
            <h4 className="fw-bold text-dark mb-3">Confianza</h4>
            <p className="text-muted mb-0">Transparencia total en nuestros procesos. Lo que pides con tu código es exactamente lo que recibes en tus manos.</p>
          </article>
        </div>
      </section>

    </main>
  );
};

export default Nosotros;