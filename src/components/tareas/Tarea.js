import React from 'react';
import PropTypes from 'prop-types';

const Tarea = ({ tarea }) => {
  return (
    <li className='tarea sombra'>
      <p>{tarea.nombre}</p>
      <div className='estado'>
        {tarea.estado ? (
          <button type='button' className='completo'>
            Completo
          </button>
        ) : (
          <button type='button' className='incompleto'>
            Incompleto
          </button>
        )}
      </div>
      <div className='acciones'>
        <button type='button' className='btn btn-primario'>
          Editar
        </button>
        <button type='button' className='btn btn-secundario'>
          Eliminar
        </button>
      </div>
    </li>
  );
};

Tarea.propTypes = {
  tarea: PropTypes.object.isRequired,
};

export default Tarea;
