import { useEffect, useRef, useState } from "react";
import { Send, User, Mail, MessageSquare, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import CheckAnimado from "./checkanimado";

const Contacto = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
const [form, setForm] = useState({
  nombre: "",
  codigo: "",
  escuela: "",
  correo: "",
  asunto: "",
  mensaje: "",
});

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

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const templateParams = {
    nombre: form.nombre,
    codigo: form.codigo,
    correo: form.correo,
    escuela: form.escuela,
    asunto: form.asunto,
    mensaje: form.mensaje,
  };

  emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  templateParams,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
    .then(
      () => {
        setSubmitted(true);
        setForm({
          nombre: "",
          codigo: "",
          correo: "",
          escuela: "",
          asunto: "",
          mensaje: "",
        });
      },
      (error) => {
        console.error("Error:", error);
        alert("Ocurrió un error al enviar el mensaje.");
      }
    );
};

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-24 lg:py-32"
      style={{ background: "hsl(218 30% 97%)" }}
    >
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side */}
          <div>
            <p className="section-label mb-4 scroll-animate">Escríbenos</p>
            <h2 className="font-display font-black text-foreground text-4xl md:text-5xl leading-tight mb-6 scroll-animate scroll-animate-delay-1">
              Contáctanos
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-10 scroll-animate scroll-animate-delay-2">
              ¿Tienes alguna consulta, sugerencia o quieres conocer más sobre nuestra gestión?
              No dudes en escribirnos. Estamos para representarte.
            </p>

            {/* Key points */}
            <div className="flex flex-col gap-5 scroll-animate scroll-animate-delay-3">
              {[
                { title: "Respuesta rápida", desc: "Nos comprometemos a responder en un plazo máximo de 2 horas." },
                { title: "Canal directo", desc: "Tu mensaje llega directamente al equipo de Juntos SM." },
                { title: "Transparencia total", desc: "Toda consulta será atendida con información clara y veraz." },
              ].map((point) => (
                <div key={point.title} className="flex gap-4">
                  <div className="shrink-0 w-6 h-6 rounded-full gradient-accent flex items-center justify-center mt-0.5 shadow-green">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground text-sm">{point.title}</p>
                    <p className="font-body text-muted-foreground text-sm">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="mt-12 p-6 rounded-2xl border-l-4 border-secondary bg-card shadow-brand scroll-animate">
              <p className="font-display font-bold text-foreground text-lg leading-snug">
                📧 juntos.unmsm@gmail.com
              </p>
              <p className="font-body text-muted-foreground text-sm mt-2">
                Correo oficial de Juntos SM · Tercio FII
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="scroll-animate scroll-animate-delay-2">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-brand-lg">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-5 shadow-green">
                    <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-2xl mb-3">¡Mensaje enviado!</h3>
                  <p className="font-body text-muted-foreground">
                    Tu mensaje será enviado a nuestro correo. Nos pondremos en contacto contigo pronto.
                  </p>
                  <button
                    className="mt-6 font-display font-semibold text-sm text-secondary hover:underline"
                   onClick={() => { 
  setSubmitted(false); 
  setForm({
    nombre: "",
    codigo: "",
    correo: "",
    escuela: "",
    asunto: "",
    mensaje: "",
  });
}}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display font-bold text-foreground text-xl mb-6">Envíanos tu mensaje</h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Nombre */}
                    <div>
                      <label className="font-display font-semibold text-foreground text-sm mb-2 block">
                        Nombre completo *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="text"
                          required
                          placeholder="Tu nombre completo"
                          value={form.nombre}
                          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background font-body text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors"
                        />
                      </div>
                    </div>

               {/* Código de estudiante */}
<div>
  <label className="font-display font-semibold text-foreground text-sm mb-2 block">
    Código de estudiante *
  </label>
  <div className="relative">
    <input
      type="text"
      required
      placeholder="Ej: 20231234"
      value={form.codigo}
      onChange={(e) => setForm({ ...form, codigo: e.target.value })}
      className="w-full pl-4 pr-4 py-3 rounded-xl border border-border bg-background font-body text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors"
    />
  </div>
</div>

{/* Correo */} <div> <label className="font-display font-semibold text-foreground text-sm mb-2 block"> Correo electrónico * </label> <div className="relative"> <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" /> <input type="email" required placeholder="tucorreo@ejemplo.com" value={form.correo} onChange={(e) => setForm({ ...form, correo: e.target.value })} className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background font-body text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors" /> </div> </div>

{/* Escuela */}
<div>
  <label className="font-display font-semibold text-foreground text-sm mb-2 block">
    Escuela *
  </label>
  <select
    required
    value={form.escuela}
    onChange={(e) => setForm({ ...form, escuela: e.target.value })}
    className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors"
  >
    <option value="">Selecciona tu escuela</option>
    <option value="EPII">EPII</option>
    <option value="EPITC">EPITC</option>
    <option value="EPISST">EPISST</option>
    <option value="EPILCSD">EPILCSD</option>
    <option value="EPITSF">EPITSF</option>
  </select>
</div>

{/* Asunto */}
<div>
  <label className="font-display font-semibold text-foreground text-sm mb-2 block">
    Asunto *
  </label>
  <select
    required
    value={form.asunto}
    onChange={(e) => setForm({ ...form, asunto: e.target.value })}
    className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors"
  >
    <option value="">Selecciona un asunto</option>
    <option value="Consulta académica">Consulta académica</option>
    <option value="Sugerencia a la gestión">Sugerencia a la gestión</option>
    <option value="Problema académico">Problema académico</option>
    <option value="Problema administrativo">Problema administrativo</option>
  </select>
</div>


                    {/* Mensaje */}
                    <div>
                      <label className="font-display font-semibold text-foreground text-sm mb-2 block">
                        Mensaje *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-muted-foreground" />
                        <textarea
                          rows={5}
                          required
                          placeholder="Escribe tu consulta, sugerencia o comentario..."
                          value={form.mensaje}
                          onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background font-body text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary transition-colors resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="flex items-center justify-center gap-3 gradient-accent text-primary-foreground font-display font-bold text-base px-8 py-4 rounded-xl shadow-green hover:opacity-90 transition-all hover:scale-[1.02] group mt-2"
                    >
                      <Send className="w-5 h-5" />
                      Enviar mensaje
                    </button>
                    <CheckAnimado />
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
