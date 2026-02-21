import { useEffect, useRef } from "react";
import { User, LinkedinIcon } from "lucide-react";

const team = [
  {
    name: "Manuel Olin",
    role: "Líder y fundador / Consejero de Facultad FII",
    desc: "Liderazgo estudiantil con enfoque en gestión académica y bienestar.",
    initials: "AS",
    color: "blue",
  },
  {
    name: "Diana Silva",
    role: "Consejera de Facultad FII",
    desc: "Coordinación institucional y comunicación con autoridades de la facultad.",
    initials: "CM",
    color: "green",
  },
  {
    name: "Jordan Tapullima",
    role: "Consejero de Facultad FII",
    desc: "Seguimiento a propuestas curriculares y programas de apoyo estudiantil.",
    initials: "VT",
    color: "blue",
  },
  {
    name: "Maykol Tucto",
    role: "Co líder",
    desc: "Atención a necesidades del estudiante y gestión de recursos de apoyo.",
    initials: "DQ",
    color: "green",
  },
  {
    name: "Rogger Villegas",
    role: "Co líder",
    desc: "Estrategia de información, redes y visibilidad del tercio estudiantil.",
    initials: "LP",
    color: "blue",
  },
  {
    name: "Manuel Rivas",
    role: "Infraestructura",
    desc: "Gestión de solicitudes de mejoras en laboratorios y espacios académicos.",
    initials: "MR",
    color: "green",
  },
  {
    name: "Manuel Rivas",
    role: "Infraestructura",
    desc: "Gestión de solicitudes de mejoras en laboratorios y espacios académicos.",
    initials: "MR",
    color: "green",
  },
  {
    name: "Manuel Rivas",
    role: "Infraestructura",
    desc: "Gestión de solicitudes de mejoras en laboratorios y espacios académicos.",
    initials: "MR",
    color: "green",
  },
  {
    name: "Manuel Rivas",
    role: "Infraestructura",
    desc: "Gestión de solicitudes de mejoras en laboratorios y espacios académicos.",
    initials: "MR",
    color: "green",
  },
  {
    name: "Manuel Rivas",
    role: "Infraestructura",
    desc: "Gestión de solicitudes de mejoras en laboratorios y espacios académicos.",
    initials: "MR",
    color: "green",
  },
];

const Equipo = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".scroll-animate").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="equipo" ref={sectionRef} className="py-24 lg:py-32 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="section-label mb-4 scroll-animate">Las personas detrás</p>
          <h2 className="font-display font-black text-foreground text-4xl md:text-5xl leading-tight mb-6 scroll-animate scroll-animate-delay-1">
            Nuestro equipo
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed scroll-animate scroll-animate-delay-2">
            Un equipo multidisciplinario, comprometido y preparado para representar con responsabilidad
            a cada estudiante de la Facultad de Ingeniería Industrial.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`scroll-animate scroll-animate-delay-${(i % 4) + 1} group bg-card rounded-2xl border border-border hover:border-secondary/40 hover:shadow-brand-lg transition-all duration-300 overflow-hidden shadow-brand`}
            >
              {/* Card top accent bar */}
              <div
                className={`h-1 w-full ${member.color === "green" ? "gradient-accent" : "gradient-primary"}`}
              />

              <div className="p-7">
                {/* Avatar */}
                <div className="mb-5 flex items-start justify-between">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center font-display font-black text-xl text-primary-foreground group-hover:scale-105 transition-transform duration-300 ${
                      member.color === "green" ? "gradient-accent shadow-green" : "gradient-primary"
                    }`}
                  >
                    {member.initials}
                  </div>
                  <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors cursor-pointer">
                    <User className="w-4 h-4" />
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-display font-bold text-foreground text-lg mb-1">{member.name}</h3>
                <p
                  className={`font-display font-semibold text-sm mb-3 ${
                    member.color === "green" ? "text-secondary" : "text-primary"
                  }`}
                >
                  {member.role}
                </p>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Join CTA */}
        <div className="mt-16 text-center scroll-animate">
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-2xl p-6 shadow-brand">
            <div className="w-10 h-10 gradient-accent rounded-xl flex items-center justify-center shadow-green shrink-0">
              <User className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="text-left">
              <p className="font-display font-bold text-foreground text-sm">¿Quieres contactarnos?</p>
              <p className="font-body text-muted-foreground text-xs">Siempre juntos, escríbenos.</p>
            </div>
            <a href="#contacto" className="ml-4 gradient-accent text-primary-foreground font-display font-semibold text-sm px-5 py-2.5 rounded-lg shadow-green hover:opacity-90 transition-opacity shrink-0">
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipo;
