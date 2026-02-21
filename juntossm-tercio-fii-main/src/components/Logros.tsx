import { useEffect, useRef } from "react";
import { CheckCircle2, Calendar, Users, Award, TrendingUp, FileCheck, ChevronRight } from "lucide-react";

const timeline = [
  {
    date: "May 2025",
    icon: Award,
    title: "Elecciones — Mayoría conseguida",
    desc: "Juntos SM obtiene la victoria y la representación mayoritaria en el Tercio Estudiantil de la FII con el respaldo de los estudiantes.",
    color: "green",
  },
  {
    date: "Abr 2025",
    icon: FileCheck,
    title: "Primera sesión de gestión",
    desc: "Presentación formal del plan de trabajo ante el Decanato. Aprobación de los primeros acuerdos de mejora académica.",
    color: "blue",
  },
  {
    date: "May 2025",
    icon: Users,
    title: "Programa de tutorías lanzado",
    desc: "Inicio del programa de mentorías entre pares con 45 estudiantes tutores capacitados en 8 cursos críticos.",
    color: "green",
  },
  {
    date: "Jun 2025",
    icon: TrendingUp,
    title: "Primer informe de gestión",
    desc: "Rendición pública de cuentas: 3 propuestas en ejecución, 2 compromisos cumplidos, 1 convenio empresarial firmado.",
    color: "blue",
  },
  {
    date: "Ago 2025",
    icon: CheckCircle2,
    title: "Mejoras de infraestructura aprobadas",
    desc: "Renovación del laboratorio de cómputo con 30 equipos nuevos y actualización de software especializado.",
    color: "green",
  },
  {
    date: "En curso",
    icon: Calendar,
    title: "Plan de trabajo activo",
    desc: "Continuamos ejecutando el plan comprometido. Seguimiento mensual disponible en nuestros canales oficiales.",
    color: "blue",
    active: true,
  },
];

const stats = [
  { value: "12+", label: "Propuestas en ejecución" },
  { value: "45", label: "Tutores capacitados" },
  { value: "3", label: "Convenios gestionados" },
  { value: "100%", label: "Informes publicados" },
];

const Logros = () => {
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
      id="logros"
      ref={sectionRef}
      className="py-24 lg:py-32"
      style={{ background: "hsl(218 30% 97%)" }}
    >
      <div className="container max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="section-label mb-4 scroll-animate">Gestión transparente</p>
          <h2 className="font-display font-black text-foreground text-4xl md:text-5xl leading-tight mb-6 scroll-animate scroll-animate-delay-1">
            Logros y resultados
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed scroll-animate scroll-animate-delay-2 mb-6">
            Lo que prometemos, lo cumplimos. Aquí está el registro de nuestra gestión,
            paso a paso, con fechas y resultados concretos.
          </p>
          <a
            href="/logros"
            className="inline-flex items-center gap-2 font-display font-semibold text-sm text-primary hover:text-secondary transition-colors scroll-animate scroll-animate-delay-2 group"
          >
            Ver línea de tiempo completa
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`scroll-animate scroll-animate-delay-${i + 1} bg-card border border-border rounded-2xl p-6 text-center shadow-brand hover:shadow-brand-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <p className="font-display font-black text-4xl md:text-5xl mb-2" style={{ color: "hsl(163 68% 32%)" }}>
                {stat.value}
              </p>
              <p className="font-body text-muted-foreground text-sm leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "linear-gradient(to bottom, hsl(163 68% 32% / 0.3), hsl(218 72% 22% / 0.3))" }}
          />

          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={item.title}
                  className={`scroll-animate scroll-animate-delay-${(i % 3) + 1} relative sm:flex ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"} items-center gap-8`}
                >
                  {/* Content card */}
                  <div className={`flex-1 ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
                    <div
                      className={`inline-block bg-card border rounded-2xl p-6 shadow-brand hover:shadow-brand-lg transition-shadow duration-300 text-left max-w-md ${
                        item.active ? "border-secondary/40" : "border-border"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`text-xs font-display font-bold px-3 py-1 rounded-full ${
                            item.color === "green"
                              ? "bg-secondary/10 text-secondary"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          {item.date}
                        </span>
                        {item.active && (
                          <span className="flex items-center gap-1 text-xs text-secondary font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                            Activo
                          </span>
                        )}
                      </div>
                      <h3 className="font-display font-bold text-foreground text-base mb-2">{item.title}</h3>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Center icon */}
                  <div
                    className={`shrink-0 w-12 h-12 rounded-full border-4 border-background flex items-center justify-center z-10 ${
                      item.color === "green" ? "gradient-accent shadow-green" : "gradient-primary"
                    }`}
                  >
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logros;
