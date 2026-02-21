import { Mail, Instagram, Facebook, Twitter, ExternalLink } from "lucide-react";
import juntoslogo from "@/assets/JUNTOS_LOGO.png";
const Footer = () => {
  return (
    <footer
      className="py-16"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="container max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-primary-foreground/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 object-contain">
                <span className="text-primary-foreground font-display font-black text-base"><img src={juntoslogo} alt="" /></span>
              </div>
              <div>
                <span className="font-display font-bold text-primary-foreground text-lg leading-none block">JUNTOS SM</span>
                <span className="text-primary-foreground/50 text-xs tracking-widest uppercase">Tercio Estudiantil · FII</span>
              </div>
            </div>
            <p className="font-body text-primary-foreground/60 text-sm leading-relaxed">
              Representación estudiantil responsable, organizada y comprometida con el desarrollo de la Facultad de Ingeniería Industrial.
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-5">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Mail, label: "Correo" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:text-primary-foreground hover:border-secondary hover:bg-secondary/10 transition-all duration-200"
                  title={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground text-sm tracking-widest uppercase mb-5">Secciones</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Quiénes Somos", href: "#quienes-somos" },
                { label: "Nuestras Propuestas", href: "#propuestas" },
                { label: "Equipo", href: "#equipo" },
                { label: "Logros y Gestión", href: "#logros" },
                { label: "Noticias", href: "#noticias" },
                { label: "Únete", href: "#contacto" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground text-sm tracking-widest uppercase mb-5">Contacto</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <div>
              <p className="font-body text-primary-foreground/80 text-sm">juntos.unmsm@gmail.com</p>
                  <p className="font-body text-primary-foreground/40 text-xs">Correo oficial de Juntos SM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ExternalLink className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                <div>
                  <p className="font-body text-primary-foreground/80 text-sm">Facultad de Ingeniería Industrial</p>
                  <p className="font-body text-primary-foreground/40 text-xs">Universidad Nacional Mayor de San Marcos</p>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <a
              href="https://forms.gle/ARWzC8jjueuATSyeA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 gradient-accent text-primary-foreground font-display font-semibold text-sm px-5 py-2.5 rounded-lg shadow-green hover:opacity-90 transition-opacity"
            >
              Únete al equipo
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-primary-foreground/40 text-xs">
            © 2025 Juntos SM – Tercio Estudiantil Mayoría FII. Todos los derechos reservados.
          </p>
          <p className="font-display font-bold text-primary-foreground/30 text-xs tracking-widest uppercase">
            La mayoría no se improvisa. Se construye.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
