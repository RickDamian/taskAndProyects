/* eslint-disable react/prop-types */
import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS } from '../../types';

const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: 'tienda virtual' },
    { id: 2, nombre: 'Intranet' },
    { id: 3, nombre: 'Diseño de Sitio' },
    { id: 4, nombre: 'MERN' },
  ];
  const initialState = {
    proyectos: [],
    formulario: false,
  };

  //Dispatch para ejecutar acciones
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  //Serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  //obtener proyectos
  const obtenerProyectos = () => {
    dispatch({ type: OBTENER_PROYECTOS, payload: proyectos });
  };
  return (
    <proyectoContext.Provider
      value={{
        formulario: state.formulario,
        proyectos: state.proyectos,
        mostrarFormulario,
        obtenerProyectos,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
