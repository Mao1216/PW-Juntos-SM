import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const news = [
  {
    slug: "informe-gestion-primer-trimestre-2025",
    tag: "Comunicado Oficial",
    tagColor: "blue",
    date: "15 Jun 2025",
    title: "Informe de gestión: primer trimestre 2025",
    desc: "Presentamos el primer reporte de actividades, avances en propuestas y estado de los compromisos asumidos ante la comunidad estudiantil de la FII.",
    content: `Presentamos el primer reporte de actividades, avances en propuestas y estado de los compromisos asumidos ante la comunidad estudiantil de la FII.

Durante el primer trimestre del 2025, el Tercio Estudiantil Juntos SM ha trabajado en las siguientes áreas:

**Académico:**
- Implementación del banco de materiales digitales con más de 50 recursos disponibles.
- Inicio del programa de tutorías entre pares con 45 tutores capacitados.

**Bienestar Estudiantil:**
- Gestión del convenio de salud mental con el Departamento de Bienestar.
- Coordinación de actividades de integración estudiantil.

**Infraestructura:**
- Presentación de la propuesta de renovación del laboratorio de cómputo ante el Decanato.
- Evaluación de espacios de estudio para solicitar mejoras.

**Transparencia:**
- Publicación de este primer informe de gestión.
- Mantenimiento de canales de comunicación activos con la comunidad estudiantil.

Este informe refleja nuestro compromiso con la transparencia y la rendición de cuentas ante la comunidad estudiantil de la FII.`,
    readTime: "3 min de lectura",
  },
  {
    slug: "programa-tutorias-resultados",
    tag: "Académico",
    tagColor: "green",
    date: "28 May 2025",
    title: "Programa de tutorías: resultados y próximas inscripciones",
    desc: "45 tutores capacitados, más de 200 estudiantes atendidos en el primer ciclo del programa. Las inscripciones para el ciclo 2025-II ya están abiertas.",
    content: `45 tutores capacitados, más de 200 estudiantes atendidos en el primer ciclo del programa. Las inscripciones para el ciclo 2025-II ya están abiertas.

**Resultados del primer ciclo:**
- 45 tutores capacitados en metodologías de enseñanza entre pares.
- Más de 200 estudiantes atendidos en diversas materias.
- Cursos con mayor demanda: Cálculo II, Física I, Programación I.
- Tasa de aprobación de estudiantes tutorados: 85%.

**Próximas inscripciones:**
Las inscripciones para el ciclo 2025-II ya están abiertas. Si deseas ser tutor o recibir tutoría, puedes inscribirte a través de nuestros canales oficiales.

**Requisitos para ser tutor:**
- Haber aprobado el curso con nota mínima de 14.
- Disponibilidad de al menos 2 horas semanales.
- Compromiso con el programa durante todo el ciclo.

El programa de tutorías es una de nuestras propuestas más exitosas y seguiremos fortaleciéndolo en los próximos ciclos.`,
    readTime: "4 min de lectura",
  },
  {
    slug: "actualizacion-laboratorios",
    tag: "Infraestructura",
    tagColor: "blue",
    date: "10 May 2025",
    title: "Actualización de laboratorios: aprobación oficial",
    desc: "El Decanato aprobó la renovación del laboratorio de cómputo. 30 nuevos equipos y software actualizado estarán disponibles para el próximo ciclo.",
    content: `El Decanato aprobó la renovación del laboratorio de cómputo. 30 nuevos equipos y software actualizado estarán disponibles para el próximo ciclo.

**Detalles de la renovación:**
- 30 computadoras nuevas con procesadores de última generación.
- Software actualizado: MATLAB, AutoCAD, SAP, Python, entre otros.
- Mejora del sistema de ventilación y climatización del laboratorio.
- Instalación de proyector de alta resolución.

**Cronograma:**
- Julio 2025: Inicio de instalación de equipos.
- Agosto 2025: Pruebas y configuración de software.
- Septiembre 2025: Laboratorio operativo para el ciclo 2025-II.

Esta renovación fue posible gracias a la gestión directa del Tercio Estudiantil ante las autoridades de la facultad, presentando un informe detallado de las necesidades y el impacto en la formación académica de los estudiantes.`,
    readTime: "2 min de lectura",
  },
  {
    slug: "convenio-salud-mental",
    tag: "Bienestar",
    tagColor: "green",
    date: "3 Abr 2025",
    title: "Convenio de salud mental para estudiantes de la FII",
    desc: "Firmamos acuerdo con el Departamento de Bienestar para garantizar atención psicológica gratuita y confidencial para todos los alumnos de la facultad.",
    content: `Firmamos acuerdo con el Departamento de Bienestar para garantizar atención psicológica gratuita y confidencial para todos los alumnos de la facultad.

**Beneficios del convenio:**
- Atención psicológica gratuita para todos los estudiantes de la FII.
- Confidencialidad total en las sesiones.
- Horarios flexibles adaptados al calendario académico.
- Talleres grupales de manejo de estrés y ansiedad.

**Cómo acceder al servicio:**
1. Acercarse a la oficina del Departamento de Bienestar.
2. Solicitar una cita indicando que eres estudiante de la FII.
3. Las citas se programan dentro de las 48 horas siguientes.

**Importancia:**
La salud mental es fundamental para el rendimiento académico y el bienestar integral de nuestros estudiantes. Este convenio representa un paso importante en nuestra gestión por el bienestar de la comunidad estudiantil.`,
    readTime: "3 min de lectura",
  },
  {
    slug: "primera-sesion-gestion",
    tag: "Evento",
    tagColor: "blue",
    date: "20 Mar 2025",
    title: "Primera sesión de gestión: apertura oficial de mandato",
    desc: "Presentamos formalmente nuestro plan de trabajo ante las autoridades de la Facultad de Ingeniería Industrial y la comunidad estudiantil.",
    content: `Presentamos formalmente nuestro plan de trabajo ante las autoridades de la Facultad de Ingeniería Industrial y la comunidad estudiantil.

**Agenda de la sesión:**
1. Presentación del equipo del Tercio Estudiantil Juntos SM.
2. Exposición del plan de trabajo 2025.
3. Detalle de propuestas por área: Académico, Bienestar, Infraestructura y Transparencia.
4. Sesión de preguntas y respuestas con la comunidad estudiantil.

**Compromisos asumidos:**
- Informes trimestrales de gestión.
- Canal de comunicación abierto y permanente.
- Representación activa en todos los órganos de gobierno de la facultad.
- Ejecución de propuestas con cronograma definido.

La sesión contó con la presencia del Decano, representantes docentes y más de 150 estudiantes de la FII.`,
    readTime: "5 min de lectura",
  },
  {
    slug: "representacion-mayoritaria",
    tag: "Logros",
    tagColor: "green",
    date: "15 Mar 2025",
    title: "Juntos SM obtiene representación mayoritaria en el Tercio",
    desc: "Con el respaldo mayoritario de los estudiantes, Juntos SM asume la representación oficial del Tercio Estudiantil de la FII para la gestión 2025.",
    content: `Con el respaldo mayoritario de los estudiantes, Juntos SM asume la representación oficial del Tercio Estudiantil de la FII para la gestión 2025.

**Resultados electorales:**
- Juntos SM obtuvo la mayoría de votos en las elecciones del Tercio Estudiantil.
- Participación estudiantil histórica en el proceso electoral.
- Representación en todas las instancias de gobierno de la facultad.

**Significado:**
Este resultado refleja la confianza de la comunidad estudiantil en nuestra propuesta de gestión responsable, transparente y comprometida con el desarrollo de la FII.

**Compromiso:**
Asumimos esta responsabilidad con humildad y determinación. Cada voto representa un compromiso que honraremos con trabajo, resultados y rendición de cuentas.

La mayoría no se improvisa. Se construye.`,
    readTime: "2 min de lectura",
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

          <div className="prose prose-lg max-w-none font-body text-muted-foreground leading-relaxed">
            {article.content.split("\n\n").map((paragraph, i) => {
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
              return <p key={i} className="mb-4">{paragraph}</p>;
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NoticiaDetalle;
