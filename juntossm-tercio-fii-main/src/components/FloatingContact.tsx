import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Popup */}
      {open && (
        <div className="bg-card border border-border rounded-2xl shadow-brand-xl p-5 w-72 animate-fade-in-up">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-display font-bold text-foreground text-sm">Juntos SM</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="font-body text-muted-foreground text-sm mb-4 leading-relaxed">
            ¿Tienes alguna consulta? Escríbenos directamente.
          </p>
          <a
  href="https://whatsapp.com/channel/0029VbAs0mvEKyZJUS1SUO29"
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <button className="w-full gradient-accent text-primary-foreground font-display font-bold px-6 py-3 rounded-xl shadow-green hover:opacity-90 transition-all">
    Únete al canal de WhatsApp
  </button>
</a>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="block w-full text-center font-display font-semibold text-sm py-2.5 text-primary hover:text-secondary transition-colors mt-2"
          >
            Ir al formulario
          </a>
        </div>
      )}

      {/* FAB button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 gradient-accent text-primary-foreground rounded-full shadow-green hover:opacity-90 transition-all hover:scale-110 flex items-center justify-center shadow-xl"
        aria-label="Abrir contacto"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default FloatingContact;
