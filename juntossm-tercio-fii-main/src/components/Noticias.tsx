import { useEffect, useRef } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const news = [
  {
    slug: "informe-gestion-primer-trimestre-2025",
    tag: "Comunicado Oficial",
    tagColor: "blue",
    date: "15 Jun 2025",
    title: "Informe de gestión: primer trimestre 2025",
    desc: "Presentamos el primer reporte de actividades, avances en propuestas y estado de los compromisos asumidos ante la comunidad estudiantil de la FII.",
    readTime: "3 min de lectura",
  },
  {
    slug: "programa-tutorias-resultados",
    tag: "Académico",
    tagColor: "green",
    date: "28 May 2025",
    title: "Programa de tutorías: resultados y próximas inscripciones",
    desc: "45 tutores capacitados, más de 200 estudiantes atendidos en el primer ciclo del programa. Las inscripciones para el ciclo 2025-II ya están abiertas.",
    readTime: "4 min de lectura",
  },
  {
    slug: "actualizacion-laboratorios",
    tag: "Infraestructura",
    tagColor: "blue",
    date: "10 May 2025",
    title: "Actualización de laboratorios: aprobación oficial",
    desc: "El Decanato aprobó la renovación del laboratorio de cómputo. 30 nuevos equipos y software actualizado estarán disponibles para el próximo ciclo.",
    readTime: "2 min de lectura",
  },
  {
    slug: "convenio-salud-mental",
    tag: "Bienestar",
    tagColor: "green",
    date: "3 Abr 2025",
    title: "Convenio de salud mental para estudiantes de la FII",
    desc: "Firmamos acuerdo con el Departamento de Bienestar para garantizar atención psicológica gratuita y confidencial para todos los alumnos de la facultad.",
    readTime: "3 min de lectura",
  },
  {
    slug: "primera-sesion-gestion",
    tag: "Evento",
    tagColor: "blue",
    date: "20 Mar 2025",
    title: "Primera sesión de gestión: apertura oficial de mandato",
    desc: "Presentamos formalmente nuestro plan de trabajo ante las autoridades de la Facultad de Ingeniería Industrial y la comunidad estudiantil.",
    readTime: "5 min de lectura",
  },
  {
    slug: "representacion-mayoritaria",
    tag: "Logros",
    tagColor: "green",
    date: "15 Mar 2025",
    title: "Juntos SM obtiene representación mayoritaria en el Tercio",
    desc: "Con el respaldo mayoritario de los estudiantes, Juntos SM asume la representación oficial del Tercio Estudiantil de la FII para la gestión 2025.",
    readTime: "2 min de lectura",
  },
];

const tagColorMap = {
  blue: "bg-primary/10 text-primary",
  green: "bg-secondary/10 text-secondary",
};

const Noticias = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  const [featured, ...rest] = news;

  return (
    <section id="noticias" ref={sectionRef} className="py-24 lg:py-32 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="section-label mb-4 scroll-animate">Información oficial</p>
            <h2 className="font-display font-black text-foreground text-4xl md:text-5xl leading-tight scroll-animate scroll-animate-delay-1">
              Noticias y comunicados
            </h2>
          </div>
        </div>

        {/* Featured article */}
        <div
          onClick={() => navigate(`/noticia/${featured.slug}`)}
          className="scroll-animate mb-10 bg-card border border-border rounded-2xl overflow-hidden shadow-brand hover:shadow-brand-lg transition-shadow duration-300 group cursor-pointer"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 h-48 lg:h-auto min-h-[200px] gradient-primary flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 geo-pattern opacity-20" />
              <div className="relative z-10 text-center p-8">
                <p className="font-display font-black text-primary-foreground text-5xl opacity-20">01</p>
                <p className="font-display font-bold text-primary-foreground text-sm tracking-widest uppercase opacity-60">Destacado</p>
              </div>
            </div>
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-display font-bold px-3 py-1 rounded-full ${tagColorMap[featured.tagColor as keyof typeof tagColorMap]}`}>
                  {featured.tag}
                </span>
                <span className="text-muted-foreground text-xs flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {featured.date}
                </span>
              </div>
              <h3 className="font-display font-bold text-foreground text-2xl mb-3 group-hover:text-primary transition-colors">{featured.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-5">{featured.desc}</p>
              <div className="flex items-center gap-2 text-primary font-display font-semibold text-sm group-hover:gap-3 transition-all">
                Leer comunicado
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Rest of articles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article, i) => (
            <div
              key={article.title}
              onClick={() => navigate(`/noticia/${article.slug}`)}
              className={`scroll-animate scroll-animate-delay-${(i % 3) + 1} group bg-card border border-border rounded-2xl p-6 shadow-brand hover:shadow-brand-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-xs font-display font-bold px-2.5 py-1 rounded-full ${tagColorMap[article.tagColor as keyof typeof tagColorMap]}`}>
                  {article.tag}
                </span>
              </div>
              <h3 className="font-display font-bold text-foreground text-base mb-2 leading-snug group-hover:text-primary transition-colors">{article.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{article.desc}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.date}
                </span>
                <span>{article.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Noticias;
