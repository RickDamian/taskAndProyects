import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [usuario, guardarUsuario] = useState({
    email: '',
    password: '',
  });
  const { email, password } = usuario;
  const onChange = (e) => {
    guardarUsuario({
      ...usuario,

      [e.target.name]: e.target.value,
    });
  };
  //cuando el usuario quiere inicia sesión
  const onSubmit = (e) => {
    e.preventDefault();
    //validar que no haya campos vacios

    //pasar al action
  };
  return (
    <div className='form-usuario'>
      <div className='contenedor-form sombra-dark'>
        <h1>Inicias Sesión</h1>
        <form onSubmit={onSubmit}>
          <div className='campo-form'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              placeholder='Tu email'
              onChange={onChange}
            />
          </div>
          <div className='campo-form'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              value={password}
              placeholder='Tu password'
              onChange={onChange}
            />
          </div>

          <div className='campo-form'>
            <input
              type='submit'
              className='btn btn-primario btn-block'
              value='Iniciar Sesion'
            ></input>
          </div>
        </form>
        <Link to={'./nueva-cuenta'} className='enlace-cuenta'>
          Obtener Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
