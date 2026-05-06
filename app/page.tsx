import Hero from "./components/sections/Hero";
import Hero2 from "./components/sections/Hero2";
import ButtonIcon from "./components/ui/ButtonIcon";
import { Formulario } from "./components/ui/Formulario";
import { ArrowDown } from "lucide-react";

const Home = () => {
  return (
    <div>
      <main>
        <Hero2 />
        <Formulario></Formulario>
      </main>
      Home
    </div>
  );
};

export default Home;
