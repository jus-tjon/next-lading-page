import React from "react";
import Image from "next/image";
import ButtonIcon from "../ui/ButtonIcon";
import { ArrowDown } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import { Inter } from "next/font/google";
import { PT_Serif } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Hero2 = () => {
  return (
    <>
      {/* Izquierda */}
      <section
        className={`flex relative min-h-screen items-start mx-[15%] tracking-tight ${ptSerif.className}`}
      >
        <div className="flex flex-col z-20 justify-center min-h-screen">
          <p className="text-2xl tracking-[-0.03em]">Hola, soy Matías,</p>
          <h1
            className={`text-[92px] my-2.5 tracking-[-0.045em] font-extrabold leading-21 ${inter.className}`}
          >
            Fullstack Dev <br />{" "}
            <span
              className={`${playfairDisplay.className} font-normal tracking-[-0.03em]`}
            >
              & API Integrator
            </span>
          </h1>
          <p className={`mb-4 text-lg ${inter.className} tracking-[-0.035em]`}>
            Desarrollo aplicaciones web y APIs enfocadas en <br />
            rendimiento y escalabilidad. Ayudo a empresas a integrar <br />
            sistemas y transformar ideas en soluciones confiables.
          </p>
          <ButtonIcon Icon={ArrowDown} href="#formulario">
            Hablemos de tu proyecto
          </ButtonIcon>
        </div>
        {/* Derecha relative w-100 h-125 flex justify-center overflow-hidden */}
        <div className="absolute z-0 right-0 top-0 h-full w-[50%] overflow-hidden">
          <div className="relative w-full h-full overflow-hidden rounded-b-[200px]">
            <Image
              src="/matias2.jpg"
              alt="Matías Herrera sonriendo"
              className="object-cover rounded-b-[200px] object-bottom"
              fill
              loading="eager"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero2;
