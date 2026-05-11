import ImagePlaceholder from "../ui/ImagePlaceholder";
import Button from "../ui/Button";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        grid
        grid-cols-1
        gap-4

        py-16
        mx-4
        lg:mx-[10%]
        
        md:mx-[10%]

        lg:grid-cols-3
        lg:auto-rows-[130px]
        lg:py-[10%]
        lg:min-h-screen
      "
    >
      <div
        className={`
          mb-2
          lg:row-span-1
          ${inter.className}
        `}
      >
        <h2
          className="
            text-3xl
            tracking-tight
            font-extrabold
            mb-3
            leading-9
          "
        >
          Proyectos Fullstack
        </h2>

        <p className="leading-5 text-[15px] text-black">
          Proyectos seleccionados enfocados en web modernas, sistemas backend
          escalables e integraciones de APIs.
        </p>
      </div>

      <ImagePlaceholder
        img="/project1.jpg"
        alt="Proyecto 1"
        className="
          h-80

          lg:h-auto

          lg:row-span-3
        "
        text="Dashboard Analítica Empresarial"
        badge="FullStack"
        badge2="Next.js"
        badge3="PostgreSQL"
      />

      <ImagePlaceholder
        img="/project2.jpg"
        alt="Proyecto 2"
        className="
          h-105

          lg:h-auto
          lg:row-span-6
        "
        text="Sistema de Integración de Pagos"
        badge="API Integration"
        badge2="Node.js"
        badge3="Stripe API"
      />

      <ImagePlaceholder
        img="/project3.jpg"
        alt="Proyecto 3"
        className="
          h-90

          lg:h-auto
          lg:row-span-6
        "
        text="Plataforma de Gestión de Clientes"
        badge="FullStack SaaS"
        badge2="React"
        badge3="Next.js"
      />

      <ImagePlaceholder
        img="/project4.jpg"
        alt="Proyecto 4"
        className="
          h-80

          lg:h-auto
          lg:row-span-4
        "
        text="Automatización Emails y Notificaciones"
        badge="Automation API"
        badge2="Resend"
        badge3="Webhooks"
      />

      <div
        className="
          w-full
          items-center
          flex
          lg:row-span-1
        "
      >
        <Button
          className="
            flex
            w-full
            rounded-3xl
            justify-center
          "
        >
          Ver Más Proyectos
        </Button>
      </div>
    </section>
  );
};

export default Projects;
