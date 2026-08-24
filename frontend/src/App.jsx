import FAQ from './components/faq';
import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';
import FormContacto from './components/contacto';
import FormInscripcion from './components/inscripcion';
import Planes from './components/planes';
import Testimonios from './components/testimonios';
import Sucursales from './components/sucursales';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Planes />
      <Testimonios />
      <Sucursales />
      <FormInscripcion />
      <FAQ />
      <FormContacto />
      <Footer />
    </>
  );
}

export default App