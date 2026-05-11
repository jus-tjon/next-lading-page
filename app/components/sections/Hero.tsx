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

const Hero = () => {
  return (
    <section
      id="hero"
      className={`
        bg-zinc-100 relative flex flex-col px-6 pt-0 pb-16 tracking-tight  lg:min-h-screen
        lg:flex-row lg:items-start lg:mx-[10%] lg:px-0 lg:pb-0 md:mx-[10%] ${ptSerif.className}
      `}
    >
      {/* Imagen */}
      <div className="relative order-1 w-full h-105 lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[50%] lg:overflow-hidden">
        <div className="relative h-full w-full overflow-hidden rounded-b-[80px] lg:h-170 lg:rounded-b-[200px]">
          <Image
            src="/matias2.jpg"
            alt="Matías Herrera sonriendo"
            className="object-cover object-[center_60%] rounded-b-[80px] lg:rounded-b-[200px]"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="eager"
          />
        </div>
      </div>

      {/* Texto */}
      <div className="relative z-20 order-2 flex flex-col justify-center pt-10 lg:min-h-screen lg:w-[55%] lg:pt-0">
        <p className="text-xl tracking-[-0.03em] lg:text-2xl">
          Hola, soy Matías,
        </p>

        <h1
          className={`text-[52px] leading-[0.95] my-3 tracking-[-0.045em] font-extrabold sm:text-[68px] lg:text-[92px] lg:leading-21 ${inter.className}`}
        >
          Fullstack Dev <br />
          <span
            className={`${playfairDisplay.className} font-normal tracking-[-0.03em]`}
          >
            & API Integrator
          </span>
        </h1>

        <p
          className={`mb-6 text-base tracking-[-0.035em] sm:text-lg ${inter.className}`}
        >
          Desarrollo aplicaciones web y APIs enfocadas en rendimiento y
          escalabilidad. Ayudo a empresas a integrar sistemas y transformar
          ideas en soluciones confiables.
        </p>

        <div className="w-full">
          <ButtonIcon Icon={ArrowDown} href="#formulario">
            Hablemos de tu proyecto
          </ButtonIcon>
        </div>
      </div>
    </section>
  );
};

export default Hero;
