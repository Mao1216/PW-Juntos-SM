import { CheckCircle2, Calendar, Users, Award, TrendingUp, FileCheck, ArrowLeft, Target, Briefcase, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const timeline = [
  {
    date: "May 2025",
    icon: Award,
    title: "Elecciones ganadas!!",
    desc: "En sus primeros meses, Juntos SM obtiene la victoria en las elecciones y la representación mayoritaria en el Tercio Estudiantil de la FII con el respaldo de los estudiantes.",
    color: "green",
  },
  {
    icon: FileCheck,
    title: "laboratorios libres",
    desc: "Por 1ra vez en la FII se logra establecer horarios libres para el ingreso de estudiantes de la FII a los laboratorios de informática, permitiendo el avance y desarrollo académico.",
    color: "blue",
  },
  {

       icon: TrendingUp,
    title: "Implementación de Tomacorrientes",
    desc: "Gracias a nuestra gestión se logró implementar, en una primera etapa, tomacorrientes en los exteriores de la sala de lectura de la biblioteca. En una segunda etapa se implementará en las mesas de la sala de lectura.",
    color: "green",
  },
  {

    icon: BookOpen,
    title: "Banco de apuntes y cursos",
    desc: "1er drive de acceso libre a los estudiantes de la FII con contenido académico de los cursos impartidos desde el 2023",
    color: "bluee",
  },
  {
   
    icon: Users,
    title: "Banco de formatos y documentación",
    desc: "1ra vez en la FII que se crea un drive con los formatos y documentación necesaria para los distintos trámites en nuestra facultad.",
    color: "green",
  },
  {
   
    icon: Briefcase,
    title: "Instructivos para procedimientos",
    desc: "1ra vez en la FII que se crea instructivos claros y completos para cada procedimiento de trámites o acciones como matrícula, rectificación, aplazados, etc.",
    color: "blue",
  },
  {
 
    icon: TrendingUp,
    title: "Mejor biblioteca + wifi",
    desc: "Mejoramiento de la conectividades de la biblioteca de la facultad incrementando el ancho de banda y ampliando la capacidad de usuarios conectados.",
    color: "green",
  },
  {
   
    icon: CheckCircle2,
    title: "Biblioteca Oyón",
    desc: "Apoyo de marketing, difusión, logística y recepción de libros para donarlos e implementar la biblioteca de las sedes de la UNMSM en Oyón.",
    color: "blue",
  },
  {
  
    icon: BookOpen,
    title: "Plan de estudios 2026",
    desc: "Participación constante de nuestros estudiantes representantes antes los comités de gestión de las escuelas profesionales para el mejoramiento de los planes curriculares en miras del plan 2026.",
    color: "green",
  
  },
  {
  
    icon: TrendingUp,
    title: "Jabón líquido",
    desc: "Gracias a nuestra gestión se ha logrado un incremento en el abastecimiento de jabón líquido en los baños de la facultad, mejorando la higiene y salud de los estudiantes.",
    color: "blue",
    
  },
    {
   
    icon: CheckCircle2,
    title: "Asesoria y acompañamiento Beca Permanencia 2025",
    desc: "Por 1ra vez se hace asesorias, formatos y acompañamiento de inicio a fin a los estudiantes de la FII postulantes a la beca permanencia 2025.",
    color: "green",
  },
    {
    
    icon: Calendar,
    title: "Semana FII 2025",
    desc: "1ra Olimpiadas FII, gracias a nuestra gestión se logró institucionalizar las 1ra Olimpiadas FII en un formato inicial que incluyó deportes como Fútbol masculino, fútbol femenino, voley mixto, Basquet, ajedrez, maratón y ginkana. Buscaremos implementar para las 2da Olimpiadas FII los deportes de carrera de bicicletas, natación, atletismo y balón mano.",
    color: "blue",

  },
    {
    
    icon: Users,
    title: "Burrito CONEII PIURA 2025",
    desc: "Por 1ra vez en nuestra facultad se gestiona el apoyo para que +45 estudiantes puedan ir a costo económico al Congreso Nacional de estudiantes de Ingeniería Industrial, logrando una representación grande de estudiantes.",
    color: "green",
  },
    {
    
    icon: TrendingUp,
    title: "Mejores Luminarias",
    desc: "Gracias a nuestra gestión, se dio el mantenimiento respectivo a todas las luminarias de los ambientes de estudio (aulas y laboratorios), mejorando así la calidad académica y el ambiente de estudio para los estudiantes y docentes. (Acción que fue reconocida y celebrada por distintos docentes de la facultad)",
    color: "blue",

  },
    {
    
    icon: Users,
    title: "Navidad FII",
    desc: "Se gestionó una chocolatada FII que benefició a más de 500 estudiantes de nuestra facultad. Además, se contó con un sorteo de canastas en vivo en el evento. Se armó un arbol de navidad en el pabellón de aulas de nuestra facultad.",
    color: "green",

  },
    {
    
    icon: CheckCircle2,
    title: " - gasto en extensión universitaria",
    desc: "Gracias a nuestra intervención en consejo de facultad, se logró modificar un inciso de los lineamientos del dictado de clases 2025-II. De esta forma se estableció exhortar a los docentes a no incurrir a los estudiantes en gastos mayores para los trabajos de extensión universitaria, logrando que los alumnos se vean menos perjudicados en sus finanzas y beneficiando a más de 1000 estudiantes. Una situación que perjudicó a estudiantes ciclo tras ciclo, fue mejorada.",
    color: "blue",
  
  },
    {

    icon: Calendar,
    title: "Entrega de notas",
    desc: "Gracias a nuestra intervención en consejo de facultad, se logró crear un inciso en los lineamientos del dictado de clases 2025-II. De esta forma se estableció un primer cronograma de entrega de notas para que los docentes otorgen, obligatoriamente, las notas a los estudiantes en fechas oportunas. Este era un problema muy recurrente en la facultad que perjudicaba directamente a los estudiantes al no saber su situación académica hasta finalizado el curso",
    color: "green",
 
  },
    {
  
    icon: CheckCircle2,
    title: "NO MÁS ABUSOS",
    desc: "Gestionamos, apoyamos y dimos seguimiento a las quejas de los estudiantes y a lograr verdaderas soluciones ante docentes que tenian un trato abusivo o malo a los estudiantes, estuvimos juntos en esto, sin miedo y logrando lo impensable.",
    color: "blue",
  
  },
    {
   
    icon: Users,
    title: "Juntos en la matrícula y rectificación",
    desc: "Apoyo constante y orientación a +900 estudiantes de las 3 escuelas en los procesos de matrícula y rectificación. Se logró aperturar cursos e incrementar vacantes en el ciclo regular, apoyando a los estudiantes de todas las bases.",
    color: "green",
    
  },

    {
   
    icon: TrendingUp,
    title: "Academia de Ingenieros de Excelencia China - Perú",
    desc: "Apoyo de marketing y creación del logo de la Academia de Ingenieros de Excelencia China - Perú.",
    color: "blue",
  
  },


    {
   
    icon: Calendar,
    title: "Cursos de verano 2025",
    desc: "Apoyo constante durante la matrícula y apertura de cursos en el verano 2025. Se dio un seguimiento y apoyo constante a +400 estudiantes diariamente, estando siempre junto a ellos hasta el final. Se aperturó 10 cursos y +10 secciones para los estudiantes de las 3 escuelas y todas las bases, nadie se quedó afuera!",
    color: "green",
  
  },
     {
  
    icon: BookOpen,
    title: "Mínimo verano 2025",
    desc: "Se logró reducir durante el proceso de matrícula de verano 2025-0, el mínimo de estudiantes para que una sección siga aperturada (de 30 a 25), logrando que se reduzca el número de secciones cerradas y permitiendo a +300 estudiantes puedan seguir en con su avance académico.",
    color: "blue",
  
  },
      {
   
    icon: CheckCircle2,
    title: "VOZ CLARA",
    desc: "Pronunciamiento en comunicados ante diferentes situaciones sociales de nuestro país y nuestra universidad.",
    color: "green",
    active: true,
  },
      {
   
    icon: TrendingUp,
    title: "Deporte FII",
    desc: "Apoyo concurrente en la difusión de convocatorias para representar a la facultad en distintas disciplinas deportivas, así como apoyo para brindar bebidas a nuestros deportistas.",
    color: "blue",
    active: true,
  },
      {
   
    icon: Users,
    title: "Seguridad ante todo",
    desc: "Solicitamos y gestionamos constante y oportunamente la programación de actividades virtuales para estudiantes, docentes y personal administrativo de la facultad ante los peligros que amenazan la integridad y seguridad de la comunidad FII ocacionados por las problemáticas sociales como paros de transportistas, protestas contra el gobierno, marchas sociales, etc.",
    color: "green",
    active: true,
  },
 
    {
    date: "En curso",
    icon: CheckCircle2,
    title: "Todos con matrícula!",
    desc: "1ra vez que gracias a nuestra gestión, se logra matricular en verano a los estudiantes que dieron examen de aplazados en ciclo regular, beneficiando y apoyando a +50 estudiantes. Recuerden, no están solos, estamos SiempreJuntos",
    color: "blue",
    active: true,
  },
    {
    date: "En curso",
    icon: BookOpen,
    title: "Inglés para egresados",
    desc: "Se apoyó y gestionó el dictado de inglés intermedio para los egresados de nuestra facultad y de esta forma mejorar sus competencias laborales ya académicas. Siempre Juntos, hasta de egresados.",
    color: "green",
    active: true,
  },
     {
    date: "En curso",
    icon: TrendingUp,
    title: "Convenio SENATI - FII UNMSM",
    desc: "Se ha iniciado las conversaciones con las autoridades para reactivar el convenio de apoyo interinstitucional entre SENATI y la FII, permitiendo beneficiarnos del uso de laboratorios modernos en las instalaciones de SENATI, entre otros beneficios.",
    color: "blue",
    active: true,
  },
      {
    date: "En curso",
    icon: TrendingUp,
    title: "Laboratorio de textiles",
    desc: "Se ha iniciado con la rehabilitación del laboratorio de telares de la escuela de ingeniería textil, después de muchos años de abandono.",
    color: "green",
    active: true,
  },
        {
    date: "En curso",
    icon: TrendingUp,
    title: "Mantenimiento Laboratorio de textiles",
    desc: "Se ha iniciado gracias a la gestión del ing. Vidal y nuestra consejera Diana Silva, el mantenimiento de los equipos de los laboratorios después de muchos años de abandono.",
    color: "blue",
    active: true,
  },

];

const stats = [
  { value: "+20", label: "Propuestas ejecutadas" },
  { value: "+50", label: "Miembros" },
  { value: "1", label: "Convenios gestionados" },
  { value: "100%", label: "Siempre Juntos" },
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

          <p className="section-label mb-4">Gestión verdadera</p>
          <h1 className="font-display font-black text-foreground text-4xl md:text-5xl leading-tight mb-6">
            Logros y resultados
          </h1>
          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-16 max-w-3xl">
            Lo que prometemos, lo cumplimos. Aquí está el registro completo de nuestra gestión y resultados concretos.
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
          <h2 className="font-display font-bold text-foreground text-2xl mb-10">todos los logros</h2>
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
