"use client";

import React, { useState } from "react";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="z-50 sticky top-0 bg-azul-marino">
      <div className="w-full flex justify-between pt-4 px-8 pb-4 ">
        <div>
          <p
            className={`${playfairDisplay.className} text-marron-claro text-2xl hover:cursor-default`}
          >
            Matias Herrera
          </p>
        </div>

        {/*Menu Hamburguesa*/}
        <div className="lg:hidden">
          <button
            onClick={toogleMenu}
            className="text-marron-nuez hover:text-marron-claro focus-outline-none focus-text-white cursor-pointer"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12H16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        {/*Menu Desplegado*/}
        <div className="hidden lg:flex gap-5">
          <a
            href="#hero"
            className={`${playfairDisplay.className} text-xl text-white rounded-3xl transition delay-50 hover:bg-marron-cafe hover:text-[#F3E4C9] duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 py-1 px-2 cursor-pointer`}
          >
            Home
          </a>
          <a
            href="#projects"
            className={`${playfairDisplay.className} text-xl text-white rounded-3xl transition delay-50 hover:bg-marron-cafe hover:text-[#F3E4C9] duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 py-1 px-2 cursor-pointer`}
          >
            Proyectos
          </a>
          <a
            href="#formulario"
            className={`${playfairDisplay.className} text-xl text-white rounded-3xl transition delay-50 hover:bg-marron-cafe hover:text-[#F3E4C9] duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 py-1 px-2 cursor-pointer`}
          >
            Contactanos
          </a>
        </div>
      </div>

      {/*Menu visible en celular*/}
      {isOpen && (
        <div className="lg:hidden border-marron-nuez border-t">
          <ul className="space-y-4">
            <li className="pt-3 pl-3">
              <a
                href="#hero"
                className={`${playfairDisplay.className} text-xl text-white rounded-3xl transition delay-50 hover:text-marron-claro duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 py-1 px-2 cursor-pointer`}
              >
                Home
              </a>
            </li>
            <li className="pl-3">
              <a
                href="#projects"
                className={`${playfairDisplay.className} text-xl text-white rounded-3xl transition delay-50 hover:text-marron-claro duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 py-1 px-2 cursor-pointer`}
              >
                Proyectos
              </a>
            </li>
            <li className="pb-3 pl-3">
              <a
                href="#formulario"
                className={`${playfairDisplay.className} text-xl text-white rounded-3xl transition delay-50 hover:text-marron-claro duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 py-1 px-2 cursor-pointer`}
              >
                Contactanos
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
