import { Inter } from "next/font/google";
import { ArrowDown } from "lucide-react";
import Button from "../ui/Button";

const inter = Inter({
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <>
      <section id='hero'
        className={`${inter.className} flex flex-col min-h-screen justify-center items-center`}
      >
        <div className="flex items-center w-full justify-center">
          <p className="p-3 text-[1rem]">Matías Herrera</p>
          <span className="border rounded-sm px-3 py-1 text-[1rem]">
            Fullstack Developer & API Integration
          </span>
        </div>
        <h1 className="text-center text-[2.5rem] mb-12 mt-8 font-medium tracking-[0.015]">
          Desarrollo aplicaciones web y APIs
        </h1>
        <Button href="#formulario">
          Hablemos de tu proyecto <ArrowDown size={16} />
        </Button>
      </section>
    </>
  );
};

export default Hero;
