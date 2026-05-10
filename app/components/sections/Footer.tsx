'use client';

import React, {useState} from "react";

export const Footer = () => {
  
  return (
    <div className="flex justify-center w-full">
      {/*footer en celu*/}
      <footer className='lg:hidden bg-azul-marino flex flex-col w-full pb-4 pt-2 border-t'>
        <div className="flex justify-center w-full pb-4">
        <p className='text-white px-4'>matiasherrera@gmail.com - matiasherrera.github.com</p>
        </div>

        <p className="px-3 text-white text-center font-medium">11-4536-7891</p>
      </footer>

      {/*footer grande*/}
      <footer className="hidden bg-azul-marino lg:flex items-center w-full flex justify-center pb-4 pt-2 border-t">
        <p className="px-4 text-white">matiasherrera@gmail.com</p>
        <p className="border-l border-r border-white/20 px-3 text-white">11-4536-7891</p>
        <p className="px-4 text-white">matiasherrera.github.com</p>
      </footer>
    </div>
  );
};
