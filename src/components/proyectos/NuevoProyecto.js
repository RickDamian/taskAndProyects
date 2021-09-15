import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {
  //obtener state de formulario
  const proyectosContext = useContext(proyectoContext);
  const { formulario, mostrarFormulario } = proyectosContext;
  //state proyercto
  const [proyecto, guardarProyecto] = useState({
    nombre: '',
  });
  const { nombre } = proyecto;
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitProyecto = (e) => {
    e.prevenDefault();

    //validar proyecto

    //agregar state

    //reiniciar form
  };

  //Mostrar fomulario

  const onClikFormulario = () => {
    mostrarFormulario();
  };
  return (
    <Fragment>
      <button
        type='button'
        className='btn btn-block btn-primario'
        onClick={onClikFormulario}
      >
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form className='formulario-nuevo-proyecto' onSubmit={onSubmitProyecto}>
          <input
            type='text'
            className='input-text'
            placeholder='Nombre proyecto'
            name='nombre'
            value={nombre}
            onChange={onChangeProyecto}
          />

          <input
            type='submit'
            className='btn btn-primario btn-block'
            value='Agregar Proyecto'
          />
        </form>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
