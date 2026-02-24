import { useEffect, useRef } from "react";
import { BookOpen, Heart, Building2, BarChart3, ChevronRight } from "lucide-react";

const categories = [
  {
    icon: BookOpen,
    label: "Académico",
    color: "blue",
    proposals: [
      { title: "Laboratorios libres", desc: "Uso libre, gradual y supervisado de los laboratorios de informática de nuestra facultad." },
      { title: "Banco de materiales digitales", desc: "Repositorio centralizado de sílabos, guías y apuntes por ciclo y curso." },
      { title: "Defensa al estudiante", desc: "Seguimiento y defenza al estudiante en la evaluación docente, así como del trato docente - alumno." },
      { title: "Visitas técnicas", desc: "Gestionar y apoyar visitas técnicas para reforzar el aprendizaje teórico en aulas." },
      { title: "Cursos a bajo costo", desc: "Gestionar implementación de cursos como excel, Sql, Power BI, etc a bajo costo para estudiantes de la FII." },
    ],
  },
  {
    icon: Heart,
    label: "Investigación e innovación",
    color: "green",
    proposals: [
      { title: "Charlas que inspiran", desc: "Charlas y asesorias de becarios, ex becarios y egresados." },
      { title: "Investigación docentes . alumnos", desc: "Incentivar la participación en concursos de investigación entre docentes y alumnos de la facultad." },
      { title: "StarUP FII", desc: "Incubadora de ideas emprendedoras." },
      { title: "Hackaton", desc: "Hackatones interbases." },
    ],
  },
  {
    icon: Heart,
    label: "Extensión y proyección social",
    color: "green",
    proposals: [
      { title: "Danza, música y deporte", desc: "Apoyar y brindar recursos a los grupos de danza, música y deporte de nuestra facultad." },
      { title: "Ingeniería ciudadana", desc: "Los estudiantes aprenderán con el servicio real a la comunidad, como reciclaje textil, ergonomía en puestos reales de trabajo o mejoras de la productividad en MYPES." },
      { title: "RTV FII", desc: "Canal de Tik tok o you tube, donde los estudiantes subiran contenido educativo, noticias relevantes de la facultad, así como promoción de concursos, eventos y becas." },
    ],
  },
  {
    icon: Building2,
    label: "Modernización de la gestión",
    color: "blue",
    proposals: [
      { title: "Mejor wifi", desc: "Expansión y mejoramiento de la cobertura wifi." },
      { title: "Aire acondicionado", desc: "Proponer la implementación de aire acondicionado." },
      { title: "Zonas de descanso", desc: "Gestionar y encaminar zonas de descanso para estudiantes." },
      { title: "Rectificación de matrícula", desc: "Proponer mejoras para la rectificación de matrícula." },
      { title: "Casilleros", desc: "Dar mantenimiento a los casilleros y por ende, poneqqqqr más a disposición de los estudiantes." },
    ],
  },
  {
    icon: BarChart3,
    label: "Gestión de riesgos y cambio climático",
    color: "green",
    proposals: [
      { title: "Campañas de reciclaje", desc: "Campañas de reciclaje para financiar iniciativas de mejora en la facultad." },
      { title: "OGRAC UNMSM", desc: "Gestionar cursos y capacitaciones por parte de la OGRAC UNMSM." },
      { title: "Brigadas de emergencia por bases." },
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
          <p className="section-label mb-4 scroll-animate">Plan de trabajo 2025 - 2026</p>
          <h2 className="font-display font-black text-foreground text-4xl md:text-5xl leading-tight mb-6 scroll-animate scroll-animate-delay-1">
            Nuestras propuestas
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed scroll-animate scroll-animate-delay-2">
            Les presentamos nuestras propuestas de campaña 2025, propuestas concretas, ejecutables y con impacto medible en la comunidad estudiantil de la FII.
            Sin promesas vacías, con compromisos reales. Propuestas siendo ejecutadas y cumplidas!!
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
