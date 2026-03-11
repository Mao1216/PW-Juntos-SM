import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
type NewsArticle = {
  slug: string
  tag: string
  tagColor: string
  date: string
  title: string
  desc: string
  content: string
  readTime: string
  image?: string
}

const news: NewsArticle[] = [
  {
    slug: "Ranking 2025",
    tag: "Comunicado Oficial",
    tagColor: "blue",
    date: "23 Feb 2026",
    title: "Ranking 2025",
    desc: "Presentamos el ranking de notas actualizado de cada escuela y base hasta el periodo 2025-2.",
    content: `Presentamos el ranking de notas actualizado de cada escuela y base hasta el periodo 2025-2.

Ya se encuentran disponibles los rankings por escuela y por base hasta el ciclo 2025-II.

En el siguiente Drive podrán visualizar los ranking perteneciente a cada escuela y base: https://drive.google.com/drive/folders/1JTdz2Lkv9R6FeLPv1T0YM3J9OfczyT7j?usp=sharing



Este ranking busca informar la situación académica de los estudiantes, y también motivarnos a seguir mejorando como comunidad. Felicitaciones a las bases y estudiantes que vienen liderando, a seguir esforzándonos por +


#SiempreJuntos💙💚`,
    readTime: "3 min de lectura",
  },
  {
    slug: "Horarios 2026-1",
    tag: "Académico",
    tagColor: "green",
    date: "11 Mar 2023",
    title: "Horarios de clases para el ciclo 2026",
    desc: "La escuelas profesionales han publicado los horarios correspondientes al periodo académico 2026-1, pueden revisarlos aquí.",
    content: `La escuelas profesionales han publicado los horarios correspondientes al periodo académico 2026-1, pueden revisarlos aquí.

**Horarios EPII:**

- Plan 2018: 
- Plan 2023: 

**Horarios EPITC:**

- Plan 2018: 
- Plan 2023: 

**Horarios EPISST:**

- Plan 2018: 
- Plan 2023: 

**Horarios EEGG:**

- Plan 2026: 

`,
    readTime: "4 min de lectura",
  },
  {
    slug: "Feliz día de la mujer",
    tag: "evento",
    tagColor: "blue",
    date: "08 Mar 2026",
    title: "Feliz día internacional de la mujer",
    desc: "Fuerza y honor son su vestidura; y se ríe de lo porvenir. Prov. 31:25",
    image: "/DiaMujer.jpg",
    content: `¡Feliz Día de la Mujer! 💜 Hoy no solo celebramos una fecha, celebramos la fuerza, la resiliencia y el legado de cada mujer que forma parte de nuestra comunidad.

Sigamos caminando juntos hacia un futuro más equitativo y justo, donde cada voz sea escuchada y cada sueño tenga espacio para crecer. ¡Gracias por inspirarnos día a día! 🌸✨
#SiempreJuntos 💜`,

    readTime: "2 min de lectura",
  },
  {
    slug: "Gas calidda",
    tag: "Nacional",
    tagColor: "green",
    date: "10 marz 2026",
    title: "COMUNICADO REGRESO A CLASES PRESENCIALES",
    desc: "Anuncio del gobierno de retomar la presencialidad desde el miércoles 11 de marzo en el contexto del desabastecimiento de gas en el país.",
    image: "/comGobClasP.jpeg",
    content: `El Gobierno anunció que las instituciones educativas podrán retomar las clases presenciales desde este miércoles 11 de marzo, luego de que las autoridades evaluaran una mejora en las condiciones que habían afectado el normal funcionamiento de las actividades en el país`,
    readTime: "3 min de lectura",
  },
];

const tagColorMap = {
  blue: "bg-primary/10 text-primary",
  green: "bg-secondary/10 text-secondary",
};

const NoticiaDetalle = () => {
  const { slug } = useParams();
  const article = news.find((n) => n.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-32 pb-24">
          <div className="container max-w-3xl mx-auto px-6 text-center">
            <h1 className="font-display font-black text-foreground text-3xl mb-4">Noticia no encontrada</h1>
      
            <p className="font-body text-muted-foreground mb-8">El comunicado que buscas no existe o ha sido removido.</p>
            <a href="/#noticias" className="inline-flex items-center gap-2 font-display font-semibold text-sm text-primary hover:text-secondary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Volver a noticias
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container max-w-3xl mx-auto px-6">
          <a href="/#noticias" className="inline-flex items-center gap-2 font-display font-semibold text-sm text-primary hover:text-secondary transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver a noticias
          </a>

          <div className="flex items-center gap-3 mb-6">
            <span className={`text-xs font-display font-bold px-3 py-1 rounded-full ${tagColorMap[article.tagColor as keyof typeof tagColorMap]}`}>
              {article.tag}
            </span>
            <span className="text-muted-foreground text-sm flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
            <span className="text-muted-foreground text-sm">{article.readTime}</span>
          </div>

          <h1 className="font-display font-black text-foreground text-3xl md:text-4xl leading-tight mb-8">
            {article.title}
          </h1>
{article.image && (
 <img
  src={article.image}
  alt={article.title}
  className="max-h-[400px] w-auto mx-auto rounded-xl mb-8 shadow-md"
/>
)}
          <div className="prose prose-lg max-w-none font-body text-muted-foreground leading-relaxed">
            {article.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("http")) {
  return (
    <a
      key={i}
      href={paragraph}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline"
      >
      
    </a>
  )
}
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return <h3 key={i} className="font-display font-bold text-foreground text-xl mt-8 mb-4">{paragraph.replace(/\*\*/g, "")}</h3>;
            
              }
              if (paragraph.includes("**")) {
                const parts = paragraph.split(/(\*\*.*?\*\*)/);
                return (
                  <p key={i} className="mb-4">
                    {parts.map((part, j) =>
                      part.startsWith("**") && part.endsWith("**")
                        ? <strong key={j} className="font-display font-bold text-foreground">{part.replace(/\*\*/g, "")}</strong>
                        : part.startsWith("- ")
                          ? <span key={j}>{part}</span>
                          : part
                    )}
                  </p>
                );
              }
              if (paragraph.startsWith("- ") || paragraph.startsWith("1. ")) {
                const items = paragraph.split("\n");
                return (
                  <ul key={i} className="list-disc list-inside mb-4 space-y-1">
                    {items.map((item, j) => (
                      <li key={j} className="text-muted-foreground">{item.replace(/^[-\d.]\s*/, "")}</li>
                    ))}
                  </ul>
                );
              }
              return (
  <p key={i} className="mb-4">
    {paragraph.split(/(https?:\/\/[^\s]+)/g).map((part, j) =>
      part.match(/https?:\/\/[^\s]+/) ? (
        <a
          key={j}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Abrir Drive
        </a>
      ) : (
        part
      )
    )}
  </p>
);
            
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NoticiaDetalle;
