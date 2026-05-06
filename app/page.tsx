import { Footer } from "./components/sections/Footer";
import { Header } from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Hero2 from "./components/sections/Hero2";
import ButtonIcon from "./components/ui/ButtonIcon";
import { Formulario } from "./components/ui/Formulario";
import { ArrowDown } from "lucide-react";

const Home = () => {
  return (
    <div>
      <main>
        <Header></Header>
        <Hero2 />
        <Formulario></Formulario>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default Home;
