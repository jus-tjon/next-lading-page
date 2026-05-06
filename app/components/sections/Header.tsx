import React from 'react'
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const Header = () => {
  return (
    <div className={`${inter.className} sticky top-0`}>
        <header className='w-full flex justify-end-safe gap-5 pt-4 px-8'>
            <a href="#hero" className='rounded-3xl transition delay-50 hover:bg-blue-600 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 py-1 px-2 cursor-pointer'>
                Home</a>
            <a className='rounded-3xl transition delay-50 hover:bg-blue-600 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 py-1 px-2 cursor-pointer'>
                Sobre Mi</a>
            <a href="#formulario" className='rounded-3xl transition delay-50 hover:bg-blue-600 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 py-1 px-2 cursor-pointer'>
                Contactanos</a> 
        </header>
    </div>
  )
}
