import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import juntoslogo from "@/assets/JUNTOS_LOGO.png";
const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Quiénes Somos", href: "/#quienes-somos" },
  { label: "Propuestas", href: "/#propuestas" },
  { label: "Equipo", href: "/#equipo" },
  { label: "Logros", href: "/#logros" },
  { label: "Noticias", href: "/#noticias" },
  { label: "Banco de Cursos", href: "https://drive.google.com/drive/folders/1Mzi8XjZ3uaigcnlakLILQAM95C78kiRT?usp=sharing", external: true },
  { label: "Formatos y Documentación", href: "https://drive.google.com/drive/folders/1Xt2ITAVQ255TasfY0xgcORvC4k95rKma?usp=sharing", external: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary shadow-brand-lg py-3"
          : "bg-primary/80 backdrop-blur-md py-4"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/#inicio" className="flex items-center gap-3 group">
          <div className="flex items-center gap-1.5">
            <div className="w-12 h-12 object-contain">
              <span className="text-primary-foreground font-display font-black text-sm leading-none"><img src={juntoslogo} alt="" /></span>
            </div>
            <div className="w-1 h-8 bg-secondary/40 rounded-full" />
          </div>
          <div>
            <span className="font-display font-bold text-primary-foreground text-lg leading-none block">JUNTOS SM</span>
            <span className="text-primary-foreground/60 text-xs tracking-widest uppercase">Tercio Estudiantil · FII</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-primary-foreground/80 hover:text-primary-foreground font-body text-sm font-medium transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://forms.gle/ARWzC8jjueuATSyeA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 gradient-accent text-primary-foreground font-display font-semibold text-sm px-5 py-2.5 rounded-lg shadow-green hover:opacity-90 transition-all duration-200 hover:shadow-lg group"
          >
            Únete al Equipo
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-primary-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-primary-foreground/80 hover:text-primary-foreground font-body text-sm font-medium py-1.5 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://forms.gle/ARWzC8jjueuATSyeA"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-accent text-primary-foreground font-display font-semibold text-sm px-5 py-2.5 rounded-lg text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Únete al Equipo
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
