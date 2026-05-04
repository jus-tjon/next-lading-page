'use client';

import React from 'react';
import './Formulario.css';
import { useForm } from 'react-hook-form';
import { SendEmail } from '@/lib/resend';

export const Formulario = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    alert('Datos enviados');
    reset();
  });

  function handleClick(){
    SendEmail('maufierro1234@gmail.com','Hello World', '<p> TEST <p>' )
  }

  return (
    <div className="Formulario">
      <h1 className='titulo'>Contactanos</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="nombre"> 
          Nombre:
          <input 
            id="nombre"
            type="text" 
            placeholder="Ingrese su nombre" 
            {...register("nombre", {
              required: { value: true, message: 'Nombre es requerido' }, 
              minLength: { value: 3, message: 'El nombre debe tener al menos 3 caracteres' }, 
              maxLength: { value: 20, message: 'El nombre debe tener máximo 20 caracteres' }
            })} 
          />
        </label>
        {errors.nombre && <span>{String(errors.nombre.message)}</span>}
        
        <br />

        <label htmlFor="correo"> 
          E-Mail: 
          <input 
            id="correo"
            type="email" 
            placeholder="Ingrese su direccion de correo" 
            {...register("correo", {
              required: { value: true, message: 'Correo es requerido' },
              pattern: { 
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
                message: "Formato de correo no válido"
              }
            })} 
          />
        </label>
        {errors.correo && <span>{String(errors.correo.message)}</span>}
        
        <br />

        <label htmlFor="telefono"> 
          Telefono: 
          <input 
            id="telefono"
            type="text" 
            placeholder="Ingrese un telefono" 
            {...register("telefono", {
              required: { value: true, message: 'Telefono es requerido' }
            })} 
          />
        </label>
        {errors.telefono && <span>{String(errors.telefono.message)}</span>}
        
        <br />

        <label htmlFor="service">Servicio: 
          <select id="service" {...register("service")}>
            <option value="paginaweb">Pagina Web</option>
          </select>
        </label>

        <label htmlFor="texto">Hace tus preguntas:</label>
        <textarea 
          id="texto" 
          placeholder="Escribi aqui..." 
          {...register('texto')}
        ></textarea>

        <button id="submit" type="submit" onClick={handleClick}>Enviar</button>
      </form>
    </div>
  );
};