import { Footer } from "./components/sections/Footer";
import { Header } from "./components/sections/Header";
import Hero2 from "./components/sections/Hero2";
import { Formulario } from "./components/ui/Formulario";

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
