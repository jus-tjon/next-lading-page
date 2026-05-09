import { Footer } from "./components/sections/Footer";
import { Header } from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import { Formulario } from "./components/ui/Formulario";

const Home = () => {
  return (
    <div>
      <main className="bg-[#FFE8DB]">
        <Header></Header>
        <Hero />
        <Projects />
        <Formulario></Formulario>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default Home;
