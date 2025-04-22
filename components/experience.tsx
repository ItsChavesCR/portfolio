import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      position: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Presente",
      description:
        "Desarrollo de aplicaciones web utilizando React, Next.js y TailwindCSS. Implementación de interfaces de usuario modernas y optimización de rendimiento.",
      technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    },
    {
      position: "Frontend Developer",
      company: "Digital Innovations",
      period: "2019 - 2021",
      description:
        "Desarrollo de interfaces de usuario utilizando React y frameworks CSS modernos. Implementación de diseños responsivos y accesibles.",
      technologies: ["React", "SASS", "JavaScript", "HTML/CSS"],
    },
    {
      position: "Web Developer",
      company: "Creative Agency",
      period: "2017 - 2019",
      description:
        "Desarrollo de sitios web responsivos para clientes de diversos sectores. Implementación de diseños personalizados y optimización SEO.",
      technologies: ["HTML/CSS", "JavaScript", "WordPress", "jQuery"],
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
