import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {
  //Extraer proyectos de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;
  //obtener proyectos cuando carga el componente
  useEffect(() => {
    obtenerProyectos();
  }, []);
  //revisar si proyectos tiene contenido
  if (proyectos.length === 0)
    return <h2>No hay proyectos comienza creando uno</h2>;

  return (
    <div>
      <ul className='listado-proyectos'>
        {proyectos.map((proyecto) => (
          <Proyecto key={proyecto.nombre} proyecto={proyecto} />
        ))}
      </ul>
    </div>
  );
};

export default ListadoProyectos;
