import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Sistema CACPJ",
      description:
        "Un sistema de información para el Centro Agrícola Cantonal de Puntarenas que incluye un área informativa para los usuarios, gestión de trámites en línea y un panel de administración para el control de usuarios, créditos, ganadería y servicios ambientales.",
      image: "/cacpj.png",
      tags: ["React", "Node.js", "MySQL", "Vite"],
      githubUrl: "https://github.com/ItsChavesCR/FrontEnd-CACPJ",
      liveUrl: "https://www.cacpj.online/",
    },
    {
      title: "UNA Theater",
      description:
        "Plataforma para reservas de funciones teatrales que permite a los usuarios explorar obras, seleccionar asientos y reservar en línea. Incluye un formulario de contacto para atención personalizada y gestión de consultas.",
      image: "/theater.png",
      tags: ["React", "NextJS", "TailwindCSS"],
      githubUrl: "https://github.com/ItsChavesCR/una-theater",
      liveUrl: "https://una-theater.vercel.app/",
    },
    {
      title: "Tourist Treasures",
      description:
        "Tourist Treasures es una plataforma de reservas turísticas que permite a los usuarios explorar y reservar. Incluye un panel para administradores y guías donde pueden gestionar sus actividades.",
      image: "/TT.png",
      tags: ["React", "TailwindCSS", "Vite"],
      githubUrl: "https://github.com/ItsChavesCR/TouristTreasures",
      liveUrl: "#",
    },
  ];

  return (
    <div id="projects" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <Card
          key={index}
          className="bg-slate-900/60 border-slate-800 overflow-hidden"
        >
          <div className="relative h-48 w-full">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover hover transform transition-transform duration-300 hover:scale-105 rounded-md"
            />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2 text-teal-400">
              {project.title}
            </h3>
            <p className="text-slate-300 mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <Badge
                  key={tagIndex}
                  variant="secondary"
                  className="bg-slate-800 text-teal-400"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="border-slate-700 hover:border-teal-400 hover:bg-slate-800"
                >
                  <Github className="mr-2 h-4 w-4" /> Código
                </Button>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="bg-teal-500 hover:bg-teal-600">
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
