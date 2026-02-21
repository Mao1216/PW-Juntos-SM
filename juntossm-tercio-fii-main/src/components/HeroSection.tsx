import { ChevronDown, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          opacity: 0.18,
        }}
      />

      {/* Geometric decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-24 right-12 w-64 h-64 rounded-full opacity-5 animate-pulse-slow"
          style={{ background: "hsl(163 68% 42%)" }}
        />
        <div
          className="absolute bottom-32 left-8 w-48 h-48 rounded-full opacity-5 animate-pulse-slow"
          style={{ background: "hsl(218 72% 50%)", animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 left-1/4 w-1 h-32 opacity-20"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(163 68% 42%), transparent)" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-1 h-20 opacity-15"
          style={{ background: "linear-gradient(to bottom, transparent, hsl(163 68% 42%), transparent)" }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 geo-pattern opacity-30" />
      </div>

      <div className="relative z-10 container max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 border border-secondary/30 rounded-full px-5 py-2 mb-10 animate-fade-in"
          style={{ background: "hsl(163 68% 32% / 0.15)" }}>
          <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          <span className="text-secondary text-xs font-display font-semibold tracking-[0.18em] uppercase">
            Tercio Estudiantil Mayoría · FII
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-display font-black text-primary-foreground text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-6 animate-fade-in-up text-balance">
          Mayoría que{" "}
          <span
            className="relative inline-block"
            style={{ WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text", backgroundClip: "text", backgroundImage: "var(--gradient-accent)" }}
          >
            representa.
          </span>
          <br />
          <span className="text-primary-foreground">Juntos que</span>{" "}
          <span
            className="relative inline-block"
            style={{ WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text", backgroundClip: "text", backgroundImage: "var(--gradient-accent)" }}
          >
            transforman.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          La representación estudiantil no se improvisa. Se construye con propuestas reales,
          gestión eficiente y el compromiso de toda la facultad.
          
          #SiempreJuntos.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#propuestas"
            className="group flex items-center gap-3 gradient-accent text-primary-foreground font-display font-bold text-base px-8 py-4 rounded-xl shadow-green hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Conoce nuestras propuestas
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="https://forms.gle/ARWzC8jjueuATSyeA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border-2 border-primary-foreground/30 text-primary-foreground font-display font-semibold text-base px-8 py-4 rounded-xl hover:bg-primary-foreground/10 transition-all duration-300 backdrop-blur-sm"
          >
            Únete al equipo
          </a>
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-primary-foreground/10 pt-10 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          {[
            { value: "FII", label: "Facultad de Ingeniería Industrial" },
            { value: "100%", label: "Representación estudiantil" },
            { value: "2025", label: "Gestión activa en curso" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display font-black text-primary-foreground text-2xl md:text-3xl">{stat.value}</p>
              <p className="font-body text-primary-foreground/50 text-xs mt-1 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center animate-float">
          <a href="#quienes-somos" className="flex flex-col items-center gap-2 text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors group">
            <span className="text-xs font-body tracking-widest uppercase">Explorar</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
