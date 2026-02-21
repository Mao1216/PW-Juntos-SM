import { CheckCircle2, Calendar, Users, Award, TrendingUp, FileCheck, ArrowLeft, Target, Briefcase, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const timeline = [
  {
    date: "May 2025",
    icon: Award,
    title: "Elecciones — Mayoría conseguida",
    desc: "Juntos SM obtiene la victoria y la representación mayoritaria en el Tercio Estudiantil de la FII con el respaldo de los estudiantes.",
    color: "green",
  },
  {
    date: "Mar 2025",
    icon: Target,
    title: "Conformación del equipo de gestión",
    desc: "Se estructura el equipo de trabajo con responsables por área: Académico, Bienestar, Infraestructura y Comunicaciones.",
    color: "blue",
  },
  {
    date: "Abr 2025",
    icon: FileCheck,
    title: "Primera sesión de gestión",
    desc: "Presentación formal del plan de trabajo ante el Decanato. Aprobación de los primeros acuerdos de mejora académica.",
    color: "green",
  },
  {
    date: "Abr 2025",
    icon: BookOpen,
    title: "Lanzamiento del banco de materiales digitales",
    desc: "Más de 50 recursos académicos organizados por curso disponibles para todos los estudiantes de la FII.",
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
    date: "May 2025",
    icon: Briefcase,
    title: "Convenio de salud mental firmado",
    desc: "Acuerdo con el Departamento de Bienestar para atención psicológica gratuita y confidencial para estudiantes de la FII.",
    color: "blue",
  },
  {
    date: "Jun 2025",
    icon: TrendingUp,
    title: "Primer informe de gestión",
    desc: "Rendición pública de cuentas: 3 propuestas en ejecución, 2 compromisos cumplidos, 1 convenio empresarial firmado.",
    color: "green",
  },
  {
    date: "Ago 2025",
    icon: CheckCircle2,
    title: "Mejoras de infraestructura aprobadas",
    desc: "Renovación del laboratorio de cómputo con 30 equipos nuevos y actualización de software especializado.",
    color: "blue",
  },
  {
    date: "En curso",
    icon: Calendar,
    title: "Plan de trabajo activo",
    desc: "Continuamos ejecutando el plan comprometido. Seguimiento mensual disponible en nuestros canales oficiales.",
    color: "green",
    active: true,
  },
];

const stats = [
  { value: "12+", label: "Propuestas en ejecución" },
  { value: "45", label: "Tutores capacitados" },
  { value: "3", label: "Convenios gestionados" },
  { value: "100%", label: "Informes publicados" },
];

const LogrosPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container max-w-5xl mx-auto px-6">
          <Link
            to="/#logros"
            className="inline-flex items-center gap-2 font-display font-semibold text-sm text-primary hover:text-secondary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>

          <p className="section-label mb-4">Gestión transparente</p>
          <h1 className="font-display font-black text-foreground text-4xl md:text-5xl leading-tight mb-6">
            Logros y resultados
          </h1>
          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-16 max-w-3xl">
            Lo que prometemos, lo cumplimos. Aquí está el registro completo de nuestra gestión,
            paso a paso, con fechas y resultados concretos.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-2xl p-6 text-center shadow-brand hover:shadow-brand-lg hover:-translate-y-1 transition-all duration-300"
              >
                <p className="font-display font-black text-4xl md:text-5xl mb-2" style={{ color: "hsl(163 68% 32%)" }}>
                  {stat.value}
                </p>
                <p className="font-body text-muted-foreground text-sm leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <h2 className="font-display font-bold text-foreground text-2xl mb-10">Línea de tiempo</h2>
          <div className="relative">
            <div
              className="absolute left-6 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, hsl(163 68% 32% / 0.3), hsl(218 72% 22% / 0.3))" }}
            />

            <div className="flex flex-col gap-8">
              {timeline.map((item) => (
                <div key={item.title} className="relative flex items-start gap-6 pl-0">
                  {/* Icon */}
                  <div
                    className={`shrink-0 w-12 h-12 rounded-full border-4 border-background flex items-center justify-center z-10 ${
                      item.color === "green" ? "gradient-accent shadow-green" : "gradient-primary"
                    }`}
                  >
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 bg-card border rounded-2xl p-6 shadow-brand hover:shadow-brand-lg transition-shadow duration-300 ${
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
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LogrosPage;
