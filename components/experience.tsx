import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      position: "Desarrollador Full Stack",
      company: "Centro Agrícola Cantonal de Puntarenas.",
      period: "2024 - Presente",
      description:
        "Desarrollo de un sistema de gestión para afiliados, ganadería y PSA con landing page, usando React, TailwindCSS, TypeScript, y colaboración en backend con NestJS y APIs REST bajo la metodología ágil Azure DevOps.",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "NestJS", "MySQL"],
    },
   
  ]

  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <Card key={index} className="bg-slate-900/60 border-slate-800">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-teal-400">{exp.position}</CardTitle>
                <CardDescription className="text-slate-300">{exp.company}</CardDescription>
              </div>
              <Badge variant="outline" className="border-teal-500 text-teal-400">
                {exp.period}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <Badge key={techIndex} variant="secondary" className="bg-slate-800 text-slate-300">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
