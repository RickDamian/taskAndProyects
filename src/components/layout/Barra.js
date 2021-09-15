import React from 'react';

const Barra = () => {
  return (
    <div>
      <header className='app-header'>
        <p className='nombre-usuario'>
          Hola <span>Ricardo</span>
        </p>
        <nav className='nav-principal'>
          <a href='#!'>Cerrar Sesión</a>
        </nav>
      </header>
    </div>
  );
};

export default Barra;
