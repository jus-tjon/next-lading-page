import { Footer } from "./components/sections/Footer";
import { Header } from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import { Formulario } from "./components/ui/Formulario";

const Home = () => {
  return (
    <div>
      <main>
        <Header></Header>
        <Hero></Hero>
        <Formulario></Formulario>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default Home;
