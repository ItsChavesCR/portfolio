import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FileText,
  ArrowLeft,
  GraduationCap,
  Award,
  Heart,
  Globe,
  Code,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  // Datos de educación
  const education = [
    {
      degree: "Bachillerato en Educación Media ",
      institution: "Colegio Técnico Profesional de Corralillo",
      period: "2016 - 2021",
      description:
        "Graduado con honores. Enfocado en Técnico Medio en Secretariado Ejecutivo",
    },
    {
      degree: "Diplomado en Programación de Aplicaciones Informaticas",
      institution: "Universidad Nacional de Costa Rica",
      period: "2022 - 2024",
      description:
        "Especialización en Programación de Aplicaciones Informaticas",
    },
  ];

  // Datos de certificaciones
  const certifications = [
    {
      name: "React y Avanzado",
      issuer: "Udemy",
      year: "2023",
    },
    {
      name: "Automatización robótica de procesos RPA",
      issuer: "Universidad Nacional de Costa Rica",
      year: "2024",
    },
    {
      name: "Next.js: El framework de React para producción",
      issuer: "Dev Talles",
      year: "2025",
    },
  ];

  // Intereses personales
  const interests = [
    { name: "Fotografía", icon: "📷" },
    { name: "Fútbol", icon: "⚽" },
    { name: "Gimnasio", icon: "💪" },
    { name: "Viajes", icon: "✈️" },
    { name: "Música", icon: "🎵" },
    { name: "Videojuegos", icon: "🎮" },
  ];

  // Idiomas
  const languages = [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Básico" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-800 dark:text-slate-100">
      {/* Encabezado con botón de regreso */}
      <header className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Button
              variant="ghost"
              className="flex items-center text-slate-700 dark:text-slate-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-teal-600 dark:text-teal-400">
            Sobre Mí
          </h1>
        </div>
      </header>

      <main className="container mx-auto py-10 px-4">
        {/* Sección hero */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden border-4 border-teal-400">
                <Image
                  src="/about.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">
                Hola, soy{" "}
                <span className="text-teal-600 dark:text-teal-400">
                  Aaron Chaves
                </span>
              </h2>
              <h3 className="text-xl text-slate-600 dark:text-slate-300 mb-6">
                Desarrollador Front End
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                Soy estudiante del cuarto y último año de la carrera
                universitaria, con un diplomado en Programación de Aplicaciones
                Informáticas. A lo largo de mi formación, he desarrollado una
                fuerte pasión por el desarrollo Front End, enfocándome en crear
                interfaces intuitivas y experiencias digitales centradas en el
                usuario. Me gusta escribir código limpio y eficiente, y he
                tenido la oportunidad de aplicar mis conocimientos en proyectos
                académicos y personales que me han permitido consolidar mis
                habilidades técnicas.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-8">
                Creo firmemente en el aprendizaje continuo y en el trabajo
                colaborativo como claves para el crecimiento profesional. Me
                mantengo al tanto de las tendencias y tecnologías del desarrollo
                web, especialmente en el uso de herramientas como React y
                Next.js. Mi objetivo es seguir desarrollándome como profesional,
                aportando soluciones innovadoras que generen un impacto positivo
                a través del uso de la tecnología.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600">
                  <a href="/cv.pdf" className="flex items-center">
                    <FileText className="mr-2 h-4 w-4" /> Descargar CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trayectoria profesional */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-slate-200 dark:border-slate-800">
            <span className="text-teal-600 dark:text-teal-400">
              Trayectoria
            </span>{" "}
            Universitaria
          </h2>
          <div className="space-y-6">
            <p className="text-slate-700 dark:text-slate-300">
              Soy estudiante de cuarto y último año de la carrera universitaria,
              y a lo largo de este camino académico descubrí mi pasión por el
              desarrollo web. Lo que comenzó como una simple curiosidad por
              entender cómo funcionaban las páginas web, se transformó en un
              verdadero interés por crear experiencias digitales atractivas y
              funcionales.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              Durante mi formación, he tenido la oportunidad de profundizar en
              tecnologías front-end y principios de diseño, complementando mis
              estudios con un diplomado en Programación de Aplicaciones
              Informáticas. Esta experiencia adicional me ha permitido adquirir
              una base sólida en el desarrollo de soluciones tecnológicas
              aplicables en diversos contextos.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              A lo largo de mi trayectoria universitaria, me he especializado en
              el uso de frameworks como React y Next.js, enfocándome en
              construir aplicaciones web eficientes, accesibles y responsivas.
              Disfruto enfrentar nuevos desafíos y buscar soluciones que
              realmente agreguen valor a los usuarios.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              Estoy en constante aprendizaje, motivado por el deseo de seguir
              creciendo profesionalmente y aportar con mis habilidades al
              desarrollo de proyectos digitales que generen un impacto positivo.
            </p>
          </div>
        </section>

        {/* Habilidades y Experiencia */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-slate-200 dark:border-slate-800">
            <span className="text-teal-600 dark:text-teal-400">
              Habilidades
            </span>{" "}
            y Experiencia
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                Habilidades Técnicas
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 text-slate-700 dark:text-slate-300">
                    Desarrollo Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      HTML5
                    </Badge>
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      CSS3
                    </Badge>
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      JavaScript
                    </Badge>
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      TypeScript
                    </Badge>
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      React
                    </Badge>
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      Next.js
                    </Badge>
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      Vite
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-slate-700 dark:text-slate-300">
                    UI/UX & Diseño
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      Figma
                    </Badge>
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      Diseño Responsivo
                    </Badge>
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      Wireframing
                    </Badge>
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      Prototipado
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-slate-700 dark:text-slate-300">
                    Backend & Herramientas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      Node.js
                    </Badge>
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      MySQL
                    </Badge>
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      MongoDB
                    </Badge>
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      Git
                    </Badge>
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      Docker
                    </Badge>
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      AWS
                    </Badge>
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      Vercel
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">
                Habilidades Blandas
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  <span>Fuerte capacidad de resolución de problemas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  <span>Excelentes habilidades de comunicación</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  <span>Colaboración en equipo y liderazgo</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  <span>Atención al detalle</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  <span>Gestión del tiempo y organización</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  <span>Adaptabilidad y aprendizaje rápido</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  <span>Gestión de relaciones con clientes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  <span>Pensamiento creativo e innovación</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Educación y Certificaciones */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-slate-200 dark:border-slate-800">
            <span className="text-teal-600 dark:text-teal-400">Educación</span>{" "}
            y Certificaciones
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center text-slate-800 dark:text-slate-200">
                <GraduationCap className="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />{" "}
                Educación
              </h3>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-teal-500 pl-4 pb-2"
                  >
                    <h4 className="text-lg font-medium text-teal-600 dark:text-teal-400">
                      {item.degree}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300">
                      {item.institution}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {item.period}
                    </p>
                    <p className="mt-2 text-slate-700 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center text-slate-800 dark:text-slate-200">
                <Award className="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />{" "}
                Certificaciones
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm"
                  >
                    <h4 className="font-medium text-teal-600 dark:text-teal-400">
                      {cert.name}
                    </h4>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-slate-700 dark:text-slate-300">
                        {cert.issuer}
                      </p>
                      <Badge
                        variant="outline"
                        className="text-slate-600 dark:text-slate-400"
                      >
                        {cert.year}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sección Personal */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 pb-2 border-b border-slate-200 dark:border-slate-800">
            <span className="text-teal-600 dark:text-teal-400">Lado</span>{" "}
            Personal
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center text-slate-800 dark:text-slate-200">
                <Heart className="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />{" "}
                Intereses y Pasatiempos
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm flex items-center gap-3"
                  >
                    <span className="text-2xl">{interest.icon}</span>
                    <span className="text-slate-700 dark:text-slate-300">
                      {interest.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center text-slate-800 dark:text-slate-200">
                <Globe className="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />{" "}
                Idiomas
              </h3>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-slate-700 dark:text-slate-300">
                      {lang.name}
                    </span>
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
                      {lang.level}
                    </Badge>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-slate-800 dark:text-slate-200">
                  <Code className="mr-2 h-5 w-5 text-teal-600 dark:text-teal-400" />{" "}
                  Filosofía de Programación
                </h3>
                <blockquote className="italic border-l-4 border-teal-500 pl-4 py-2 text-slate-700 dark:text-slate-300">
                  Creo que el código limpio y bien estructurado es tan
                  importante como el producto final. Escribir código mantenible
                  no se trata solo de seguir las mejores prácticas, sino de
                  tener empatía por los futuros desarrolladores (incluido tu
                  futuro yo) que trabajarán con tu código.
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Llamada a la acción */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-600 dark:to-teal-700 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              ¿Interesado en trabajar juntos?
            </h2>
            <p className="mb-6">
              Siempre estoy abierto a discutir nuevos proyectos, ideas creativas
              u oportunidades para ser parte de tu visión.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact">
                <Button className="bg-white text-teal-600 hover:bg-slate-100">
                  Contáctame
                </Button>
              </Link>
              <Link href="/#projects">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-teal-600"
                >
                  Ver Mi Trabajo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-slate-950 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} DevPortfolio. Todos los derechos
            reservados.
          </p>
          <Link href="/">
            <Button
              variant="link"
              className="text-teal-600 dark:text-teal-400 mt-2"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
            </Button>
          </Link>
        </div>
      </footer>
    </div>
  );
}
