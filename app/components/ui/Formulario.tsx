"use client";

import React from "react";
import "./Formulario.css";
import { useForm } from "react-hook-form";
import { SendEmail } from "@/lib/resend";

export const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const emailBody = `
    <h1>Nuevo mensaje de contacto</h1>
    <p><strong>Nombre del cliente:</strong> ${data.nombre}</p>
    <p><strong>Correo del cliente:</strong> ${data.correo}</p>
    <p><strong>Telefono de contacto:</strong> ${data.telefono}</p>
    <p>${data.texto}</p>
  `;

    try {
      await SendEmail(
        "maufierro1234@gmail.com",
        `Nueva consulta: ${data.service}`,
        emailBody,
      );

      alert("¡Mail enviado con éxito!");
      reset();
    } catch (err) {
      console.error("Error al enviar:", err);
      alert("Hubo un problema al enviar el mail.");
    }
  });

  return (
    <div className="Formulario" id="formulario">
      <h1 className="titulo">Contactanos</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="nombre">
          Nombre:
          <input
            id="nombre"
            type="text"
            placeholder="Ingrese su nombre"
            {...register("nombre", {
              required: { value: true, message: "Nombre es requerido" },
              minLength: {
                value: 3,
                message: "El nombre debe tener al menos 3 caracteres",
              },
              maxLength: {
                value: 20,
                message: "El nombre debe tener máximo 20 caracteres",
              },
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
              required: { value: true, message: "Correo es requerido" },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Formato de correo no válido",
              },
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
              required: { value: true, message: "Telefono es requerido" },
            })}
          />
        </label>
        {errors.telefono && <span>{String(errors.telefono.message)}</span>}

        <br />

        <label htmlFor="service">
          Servicio:
          <select id="service" {...register("service")}>
            <option value="paginaweb">Pagina Web</option>
          </select>
        </label>

        <label htmlFor="texto">Hace tus preguntas:</label>
        <textarea
          id="texto"
          placeholder="Escribi aqui..."
          {...register("texto")}
        ></textarea>

        <button id="submit" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};
