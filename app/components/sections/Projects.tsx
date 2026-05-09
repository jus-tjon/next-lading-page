import ImagePlaceholder from "../ui/ImagePlaceholder";
import Button from "../ui/Button";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const Projects = () => {
  return (
    <>
      <section
        className="
        grid grid-cols-3 auto-rows-[85px]
        gap-4
        mx-[15%]
        my-[15%]
        h-screen"
      >
        <div className={`row-span-2 ${inter.className}`}>
          <h2 className="text-[1.875rem] font-bold mb-4 leading-8">
            Proyectos Fullstack Destacados
          </h2>
          <p className="leading-6 text-[1rem]">
            Proyectos seleccionados enfocados en experiencias web modernas,
            sistemas backend escalables e integraciones de APIs entre distintas
            plataformas.
          </p>
        </div>
        <ImagePlaceholder className="row-span-4" />
        <ImagePlaceholder className="row-span-7" />
        <ImagePlaceholder className="row-span-6" />
        <ImagePlaceholder className="row-span-4" />
        <div className="row-span-1 flex items-center justify-center">
          <Button className="w-full rounded-3xl justify-center bg-azul-marino px-auto">
            Ver Más Proyectos
          </Button>
        </div>
      </section>
    </>
  );
};

export default Projects;
