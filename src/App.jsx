import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Nosotros from './pages/nosotros';
import Inventario from './pages/inventario';
import Footer from './components/Footer';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Inventario" element={<Inventario />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;