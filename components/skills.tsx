import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiSass,
    SiNodedotjs,
    SiExpress,
    SiNextdotjs,
    SiMongodb,
    SiMysql,
    SiGit,
    SiGithub,
    SiDocker,
    SiFigma,
  } from "react-icons/si"
  import { Code } from "lucide-react"
  
  export default function Skills() {
    const skillCategories = [
      {
        title: "Frontend",
        skills: [
          { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
          { name: "CSS", icon: SiCss3, color: "text-blue-500" },
          { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
          { name: "React", icon: SiReact, color: "text-cyan-400" },
          { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-500" },
          { name: "SASS", icon: SiSass, color: "text-pink-500" },
        ],
      },
      {
        title: "Backend",
        skills: [
          { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
          { name: "Express", icon: SiExpress, color: "text-gray-400" },
          { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
          { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
          { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
        ],
      },
      {
        title: "Herramientas",
        skills: [
          { name: "Git", icon: SiGit, color: "text-orange-600" },
          { name: "GitHub", icon: SiGithub, color: "text-white" },
          { name: "VS Code", icon: Code, color: "text-blue-500" },
          { name: "Docker", icon: SiDocker, color: "text-blue-500" },
          { name: "Figma", icon: SiFigma, color: "text-purple-400" },
        ],
      },
    ]
  
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-slate-900/60 p-6 rounded-xl border border-slate-800">
            <h3 className="text-xl font-bold mb-6 text-teal-400">{category.title}</h3>
            <div className="grid grid-cols-3 gap-6">
              {category.skills.map((skill, skillIndex) => {
                const Icon = skill.icon
                return (
                  <div key={skillIndex} className="flex flex-col items-center gap-2">
                    <Icon className={`text-4xl ${skill.color} hover transform transition-transform duration-300 hover:scale-125 max-w-xs mx-auto`} />
                    <span className="text-sm text-slate-300">{skill.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    )
  }
  