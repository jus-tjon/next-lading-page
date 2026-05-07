import React from 'react'
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const Header = () => {
  return (
    <div className={`${inter.className} z-50 sticky top-0 bg-azul-marino`}>
        <header className='w-full flex justify-end-safe gap-5 pt-4 px-8 pb-4 '>
            <a href="#hero" className='bg-marron-cafe text-white rounded-3xl transition delay-50 hover:bg-marron-nuez duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 py-1 px-2 cursor-pointer'>
                Home</a>
            <a className='bg-marron-cafe text-white rounded-3xl transition delay-50 hover:bg-marron-nuez duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 py-1 px-2 cursor-pointer'>
                Sobre Mi</a>
            <a href="#formulario" className='bg-marron-cafe text-white rounded-3xl transition delay-50 hover:bg-marron-nuez duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 py-1 px-2 cursor-pointer'>
                Contactanos</a> 
        </header>
    </div>
  )
}
