import { useEffect, useRef } from "react";
import { Target, Eye, Shield, Users, TrendingUp, Lightbulb } from "lucide-react";

const valores = [
  {
    icon: Users,
    title: "Representación",
    desc: "Cada estudiante de la FII tiene voz en nuestro tercio. Actuamos como mandato, no como favor.",
  },
  {
    icon: Shield,
    title: "Transparencia",
    desc: "Gestión abierta, rendición de cuentas periódica y acceso a información sin intermediarios.",
  },
  {
    icon: Users,
    title: "Unidad",
    desc: "Construimos consensos, integramos distintas visiones y operamos como un equipo cohesionado.",
  },
  {
    icon: TrendingUp,
    title: "Gestión Eficiente",
    desc: "Cada propuesta tiene un plan de acción, plazos reales y métricas de cumplimiento.",
  },
  {
    icon: Target,
    title: "Compromiso",
    desc: "Asumimos responsabilidades concretas y las sostenemos hasta su cumplimiento efectivo.",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    desc: "Buscamos soluciones modernas para los retos académicos y administrativos de la facultad.",
  },
];

const QuienesSomos = () => {
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
    <section id="quienes-somos" ref={sectionRef} className="py-24 lg:py-32 bg-background">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="section-label mb-4 scroll-animate">Nuestra identidad</p>
          <h2 className="font-display font-black text-foreground text-4xl md:text-5xl leading-tight mb-6 scroll-animate scroll-animate-delay-1">
            ¿Quiénes somos?
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed scroll-animate scroll-animate-delay-2">
            <strong className="text-foreground">Juntos SM</strong> es el Tercio Estudiantil Mayoría de la Facultad de Ingeniería Industrial. Nacemos a partir de la necesidad de construir una representación organizada, propositiva y verdaderamente cercana a las realidades del estudiante universitario.

Iniciamos nuestra salida pública a inicios del año 2025. En abril de ese mismo año marcamos el comienzo de nuestra primera participación electoral y, el 27 de mayo, obtuvimos la victoria en las elecciones estudiantiles.

Recibimos la confianza de cientos de estudiantes, asumiendo con responsabilidad y firmeza el compromiso de representarlos, apoyarlos y trabajar siempre a su lado.
          </p>
        </div>

        {/* Mission / Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[
            {
              icon: Target,
              label: "Misión",
              text: "Representar con eficiencia y ética a los estudiantes de la FII, siendo el puente entre la comunidad estudiantil y las autoridades académicas, promoviendo el bienestar, la calidad educativa y el desarrollo integral de cada alumno.",
              color: "secondary",
            },
            {
              icon: Eye,
              label: "Visión",
              text: "Ser el tercio estudiantil referente de la universidad: reconocido por su gestión transparente, sus logros medibles y su capacidad de transformar la experiencia universitaria de cada estudiante de Ingeniería Industrial.",
              color: "primary",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="scroll-animate rounded-2xl p-8 border border-border shadow-brand hover:shadow-brand-lg transition-shadow duration-300 gradient-card"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  item.color === "secondary" ? "gradient-accent shadow-green" : "gradient-primary"
                }`}
              >
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-foreground text-xl mb-3">{item.label}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div>
          <p className="section-label mb-8 scroll-animate">Nuestros valores</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((valor, i) => (
              <div
                key={valor.title}
                className={`scroll-animate scroll-animate-delay-${(i % 4) + 1} group flex gap-4 p-6 rounded-xl border border-border hover:border-secondary/40 bg-card hover:shadow-brand transition-all duration-300`}
              >
                <div className="shrink-0 w-10 h-10 rounded-lg gradient-accent shadow-green flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <valor.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground text-base mb-1">{valor.title}</h4>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{valor.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
