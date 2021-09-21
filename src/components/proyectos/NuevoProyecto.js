import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {
  //obtener state de formulario
  const proyectosContext = useContext(proyectoContext);
  const {
    formulario,
    errorformulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;
  //state proyercto
  const [proyecto, guardarProyecto] = useState({
    nombre: '',
  });
  //extraer nombre proyecto
  const { nombre } = proyecto;
  //Lee los contenidos de input
  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitProyecto = (e) => {
    e.preventDefault();

    //validar proyecto
    if (nombre === '') {
      mostrarError();
      return;
    }
    //agregar state
    agregarProyecto(proyecto);
    //reiniciar form
    guardarProyecto({
      nombre: '',
    });
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
      {errorformulario ? (
        <p className='mostrar error'>El proyecto es obligatorio</p>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
