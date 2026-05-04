import Hero from "./components/sections/Hero";
import { Formulario } from "./components/ui/Formulario";

const Home = () => {
  return (
    <div>
      <main>
        <header>
          <h1>Aca vamos a empezar</h1>
          <p>Primer parrafo del mundo</p>
        </header>
        <Formulario></Formulario>
      </main>
      Home
      <Hero></Hero>
    </div>
  );
};

export default Home;
