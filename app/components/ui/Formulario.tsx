"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { SendEmail } from "@/lib/resend";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
});

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
<section className='flex justify-center items-center min-h-screen w-full scroll-mt-[20px] mt-[100px] mb-[50px] md:mb-[0px] md:mt-[160px]' 
                    id="formulario">
  <div className="flex flex-col items-center justify-center w-[95%] md:w-[80%] lg:w-[1050px] p-6 md: bg-[#7D6D62] rounded-xl shadow-2xl">
    <h1 className={`${playfairDisplay.className} text-white pb-8 block text-3xl font-bold`}>Contactanos</h1>
    
    <form onSubmit={onSubmit} className="w-full">
      
      {/* Nombre */}
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 mb-6">
        <label className={`${inter.className} text-white font-medium min-w-[100px]`} htmlFor="nombre">Nombre:</label>
        <div className="flex-grow">
          <input className="bg-marron-nuez border-[3px] border-marron-claro rounded-[8px] p-[10px] outline-none w-full text-white
           placeholder:text-white/50"
            id="nombre"
            type="text"
            placeholder="Ingrese su nombre"
            {...register("nombre", {
              required: { value: true, message: "Nombre es requerido" },
            })}
          />
          {errors.nombre && <span className="text-[tomato] text-[x-small] block mt-1">{String(errors.nombre.message)}</span>}
        </div>
      </div>

      {/* E-Mail */}
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 mb-6">
        <label className={`${inter.className} text-white font-medium min-w-[100px]`} htmlFor="correo">E-Mail:</label>
        <div className="flex-grow">
          <input className="bg-marron-nuez border-[3px] border-marron-claro rounded-[8px] p-[10px] outline-none w-full text-white 
          placeholder:text-white/50"
            id="correo"
            type="email"
            placeholder="Tu email"
            {...register("correo", {
              required: { value: true, message: "Correo es requerido" },
            })}
          />
          {errors.correo && <span className="text-[tomato] text-[x-small] block mt-1">{String(errors.correo.message)}</span>}
        </div>
      </div>

      {/* Telefono */}
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 mb-6">
        <label className={`${inter.className} text-white font-medium min-w-[100px]`} htmlFor="telefono">Teléfono:</label>
        <div className="flex-grow">
          <input className="bg-marron-nuez border-[3px] border-marron-claro rounded-[8px] p-[10px] outline-none w-full text-white 
          placeholder:text-white/50"
            id="telefono"
            type="text"
            placeholder="Tu teléfono"
            {...register("telefono", { required: "Requerido" })}
          />
          {errors.telefono && <span className="text-[tomato] text-[x-small] block mt-1">{String(errors.telefono.message)}</span>}
        </div>
      </div>

      {/* Servicio */}
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 mb-6">
        <label className={`${inter.className} text-white font-medium min-w-[100px]`} htmlFor="service">Servicio:</label>
        <select className="bg-marron-nuez border-[3px] border-marron-claro rounded-[8px] px-[10px] py-[10px] flex-grow text-white outline-none" id="service" {...register("service")}>
          <option value="paginaweb">Página Web</option>
          <option value="api">Integración de API</option>
          <option value="fullstack">Desarrollo Fullstack</option>
        </select>
      </div>

      {/* Textarea */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-8 mb-4">
        <label className={`${inter.className} text-white font-medium min-w-[100px] pt-2`} htmlFor="texto">Mensaje:</label>
        <textarea className="bg-marron-nuez h-[120px] flex-grow p-3 resize-none rounded-[5px] border-[3px] border-marron-claro text-white outline-none placeholder:text-white/50"
          id="texto"
          placeholder="Escribí tus dudas aquí..."
          {...register("texto")}
        ></textarea>
      </div>

      <div className="w-full flex justify-end">
        <button className='w-full md:w-auto px-12 py-3 rounded-lg bg-marron-cafe text-white font-bold cursor-pointer transition-all 
           transition delay-5 duration-300 ease-in-out hover:-translate-y-1 hover:border-marron-cafe hover:bg-marron-claro hover:text-black 
           border-2 border-marron-claro' 
           id="submit" type="submit">
          Enviar
        </button>
      </div>
    </form>
  </div>
</section>
  );
};
