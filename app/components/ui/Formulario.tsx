"use client";

import React from "react";
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
    <section
      className="flex justify-center items-center min-h-screen w-full scroll-mt-3.75 mb-[200px] mt-[200px]"
      id="formulario"
    >
      <div className="flex flex-col items-center justify-center self-center text-center m-[7%] w-[1050px] pb-[30px] bg-[#7D6D62]">
        <h1 className="text-white pb-5 block text-[24px]">Contactanos</h1>
        <form onSubmit={onSubmit}>
          <label
            className="text-white flex justify-between items-center gap-5 mb-2.5"
            htmlFor="nombre"
          >
            Nombre:
            <input
              className="bg-marron-nuez border-[3px] border-marron-claro rounded-lg p-2.5 outline-none w-200"
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
          {errors.nombre && (
            <span className="block text-[tomato] text-[x-small]">
              {String(errors.nombre.message)}
            </span>
          )}

          <br />

          <label
            className="text-white flex justify-between items-center gap-[20px] mb-[10px]"
            htmlFor="correo"
          >
            E-Mail:
            <input
              className="bg-marron-nuez border-[3px] border-marron-claro rounded-[8px] p-[10px] outline-none w-200"
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
          {errors.correo && (
            <span className="block text-[tomato] text-[x-small]">
              {String(errors.correo.message)}
            </span>
          )}

          <br />

          <label
            className="text-white flex justify-between items-center gap-[20px] mb-[10px]"
            htmlFor="telefono"
          >
            Telefono:
            <input
              className="bg-marron-nuez border-[3px] border-marron-claro rounded-[8px] p-[10px] outline-none w-200"
              id="telefono"
              type="text"
              placeholder="Ingrese un telefono"
              {...register("telefono", {
                required: { value: true, message: "Telefono es requerido" },
              })}
            />
          </label>
          {errors.telefono && (
            <span className="block text-[tomato] text-[x-small]">
              {String(errors.telefono.message)}
            </span>
          )}

          <br />

          <label
            className="text-white flex items-center justify-between gap-[px] mb-[10px] w-full pb-[10px]"
            htmlFor="service"
          >
            Servicio:
            <select
              className="bg-marron-nuez border-[3px] border-marron-claro rounded-[8px] pl-[5px] py-[5px]"
              id="service"
              {...register("service")}
            >
              <option value="paginaweb">Pagina Web</option>
            </select>
          </label>

          <label className="text-white flex gap-[20px]" htmlFor="texto">
            Hace tus preguntas:
            <textarea
              className="bg-marron-nuez block h-[100px] w-200 pt-0 resize-none rounded-[5px] border-[3px] border-marron-claro"
              id="texto"
              placeholder="Escribi aqui..."
              {...register("texto")}
            ></textarea>
          </label>

          <button
            className="mt-[10px] px-[15px] py-[10px] rounded-[5px] bg-marron-cafe text-white cursor-pointer transition-colors hover:bg-marron-claro"
            id="submit"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};
