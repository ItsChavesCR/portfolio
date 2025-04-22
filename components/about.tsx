import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="order-2 md:order-1">
        <h3 className="text-2xl font-bold mb-4">
          ¡Hola! Soy <span className="text-teal-400">Desarrollador Front End</span>
        </h3>
        <p className="text-slate-300 mb-4">
        Soy desarrollador web y actualmente curso el último año de la universidad. 
        Me enfoco en crear interfaces modernas, responsivas y funcionales utilizando 
        tecnologías como React, Next.js y TailwindCSS.
        </p>
        <p className="text-slate-300 mb-6">
        Me apasiona el desarrollo frontend y disfruto construir experiencias de usuario 
        que sean tanto intuitivas como visualmente atractivas. Siempre estoy aprendiendo 
        nuevas herramientas y buenas prácticas para mantenerme actualizado en este campo en constante evolución.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button  className="bg-teal-500 hover:bg-teal-600">
            <a href="/cv.pdf" className="flex items-center">
            <FileText className="mr-2 h-4 w-4" /> Descargar CV
            </a>
          </Button>
          <Link href="/about">
            <Button
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-500 dark:text-teal-400 dark:hover:bg-teal-950"
            >
              Más sobre mí
            </Button>
          </Link>
        </div>
      </div>
      <div className="order-1 md:order-2 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-400">
          <Image src="/avatar.svg" alt="Profile" fill className="object-cover" />
        </div>
      </div>
    </div>
  )
}
