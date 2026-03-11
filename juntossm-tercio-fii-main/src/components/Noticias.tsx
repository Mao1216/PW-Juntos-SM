import { useEffect, useRef } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const news = [
  {
    slug: "Horarios 2026-1",
    tag: "Académico",
    tagColor: "green",
    date: "11 Mar 2026",
    title: "Horarios de clases para el ciclo 2026",
    desc: "La escuelas profesionales han publicado los horarios correspondientes al periodo académico 2026-1, pueden revisarlos aquí.",
    readTime: "4 min de lectura",
  },
    {
    slug: "Ranking 2025",
    tag: "Académico",
    tagColor: "blue",
    date: "23 Feb 2026",
    title: "Ranking 2025",
    desc: "Presentamos el ranking de notas actualizado de cada escuela y base hasta el periodo 2025-2.",
    readTime: "3 min de lectura",
  },
  {
    slug: "Feliz día de la mujer",
    tag: "Evento",
    tagColor: "blue",
    date: "08 Mar 2026",
    title: "Feliz día internacional de la mujer",
    desc: "Fuerza y honor son su vestidura; y se ríe de lo porvenir. Prov. 31:25",
    readTime: "3 min de lectura",
  },
  {
    slug: "Gas calidda",
    tag: "Nacional",
    tagColor: "green",
    date: "10 Mar 2026",
    title: "COMUNICADO REGRESO A CLASES PRESENCIALES",
    desc: "Anuncio del gobierno de retomar la presencialidad desde el miércoles 11 de marzo en el contexto del desabastecimiento de gas en el país.",
    readTime: "3 min de lectura",
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
