import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import proyectoContext from '../../context/proyectos/proyectoContext';
const Proyecto = ({ proyecto }) => {
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;
  return (
    <li>
      <button
        type='button'
        className='btn btn-blank'
        onClick={() => proyectoActual(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};
Proyecto.propTypes = {
  proyecto: PropTypes.any,
};

export default Proyecto;
