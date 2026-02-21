import { useEffect, useRef } from "react";
import { BookOpen, Heart, Building2, BarChart3, ChevronRight } from "lucide-react";

const categories = [
  {
    icon: BookOpen,
    label: "Académico",
    color: "blue",
    proposals: [
      { title: "Banco de materiales digitales", desc: "Repositorio centralizado de sílabos, guías y apuntes por ciclo y curso." },
      { title: "Tutorías entre pares", desc: "Programa estructurado de apoyo académico." },
      { title: "Pasantías y convenios", desc: "Gestionar acuerdos con empresas del sector industrial para prácticas tempranas." },
      { title: "Malla curricular actualizada", desc: "Propuesta de revisión con enfoque en competencias del siglo XXI." },
    ],
  },
  {
    icon: Heart,
    label: "Bienestar Estudiantil",
    color: "green",
    proposals: [
      { title: "Fondo de emergencia estudiantil", desc: "Apoyo económico rápido para estudiantes en situación crítica." },
      { title: "Salud mental accesible", desc: "Gestión de atención psicológica gratuita y sin estigma para todos." },
      { title: "Espacios de descanso", desc: "Implementación de zonas de esparcimiento en la facultad." },
      { title: "Descuentos y beneficios", desc: "Convenios con servicios locales para reducir costos estudiantiles." },
    ],
  },
  {
    icon: Building2,
    label: "Infraestructura",
    color: "blue",
    proposals: [
      { title: "Laboratorios modernizados", desc: "Equipamiento y software actualizado en laboratorios de cómputo." },
      { title: "Conectividad WiFi estable", desc: "Cobertura confiable en todas las áreas de la facultad." },
      { title: "Aulas mejor equipadas", desc: "Proyectores, iluminación y mobiliario ergonómico en todas las aulas." },
      { title: "Biblioteca ampliada", desc: "Mayor horario de atención y acceso a bases de datos académicas." },
    ],
  },
  {
    icon: BarChart3,
    label: "Transparencia y Gestión",
    color: "green",
    proposals: [
      { title: "Rendición de cuentas mensual", desc: "Informes públicos de actividades, presupuesto y resultados." },
      { title: "Canal de quejas y sugerencias", desc: "Sistema anónimo y efectivo para reportar problemas." },
      { title: "Participación estudiantil activa", desc: "Mecanismos de consulta antes de tomar decisiones relevantes." },
      { title: "Seguimiento de compromisos", desc: "Dashboard público con el estado de cada propuesta de la gestión." },
    ],
  },
];

const colorMap = {
  blue: {
    badge: "bg-primary text-primary-foreground",
    icon: "gradient-primary",
    dot: "bg-primary",
    border: "border-primary/20",
    hover: "hover:border-primary/40",
  },
  green: {
    badge: "bg-secondary text-secondary-foreground",
    icon: "gradient-accent shadow-green",
    dot: "bg-secondary",
    border: "border-secondary/20",
    hover: "hover:border-secondary/40",
  },
};

const Propuestas = () => {
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
    <section
      id="propuestas"
      ref={sectionRef}
      className="py-24 lg:py-32"
      style={{ background: "hsl(218 30% 97%)" }}
    >
      <div className="container max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="section-label mb-4 scroll-animate">Plan de trabajo</p>
          <h2 className="font-display font-black text-foreground text-4xl md:text-5xl leading-tight mb-6 scroll-animate scroll-animate-delay-1">
            Nuestras propuestas
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed scroll-animate scroll-animate-delay-2">
            Propuestas concretas, ejecutables y con impacto medible en la comunidad estudiantil de la FII.
            Sin promesas vacías — con compromisos reales.
          </p>
        </div>

        {/* Categories */}
        <div className="grid lg:grid-cols-2 gap-10">
          {categories.map((cat, ci) => {
            const colors = colorMap[cat.color as keyof typeof colorMap];
            return (
              <div
                key={cat.label}
                className={`scroll-animate scroll-animate-delay-${(ci % 3) + 1} bg-card rounded-2xl border ${colors.border} ${colors.hover} transition-all duration-300 overflow-hidden shadow-brand hover:shadow-brand-lg`}
              >
                {/* Category header */}
                <div className="p-6 pb-5 flex items-center gap-4 border-b border-border">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${colors.icon}`}>
                    <cat.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-xl">{cat.label}</h3>
                  <span className={`ml-auto text-xs font-semibold px-3 py-1 rounded-full ${colors.badge}`}>
                    {cat.proposals.length} propuestas
                  </span>
                </div>

                {/* Proposals list */}
                <div className="p-6 flex flex-col gap-4">
                  {cat.proposals.map((prop) => (
                    <div key={prop.title} className="flex gap-3 group/item">
                      <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${colors.dot}`} />
                      <div>
                        <p className="font-display font-semibold text-foreground text-sm mb-0.5">{prop.title}</p>
                        <p className="font-body text-muted-foreground text-sm leading-relaxed">{prop.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center scroll-animate">
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 gradient-accent text-primary-foreground font-display font-bold px-8 py-4 rounded-xl shadow-green hover:opacity-90 transition-all hover:scale-105 group"
          >
            Apoya estas propuestas
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Propuestas;
