import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuienesSomos from "@/components/QuienesSomos";
import Propuestas from "@/components/Propuestas";
import Equipo from "@/components/Equipo";
import Logros from "@/components/Logros";
import Noticias from "@/components/Noticias";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <QuienesSomos />
        <Propuestas />
        <Equipo />
        <Logros />
        <Noticias />
        <Contacto />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
