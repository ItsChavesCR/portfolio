"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <Button
        variant="outline"
        className="w-full border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center"
        onClick={toggleMenu}
      >
        <Menu className="h-5 w-5 mr-2" />
        Menú
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <div className="bg-white dark:bg-slate-900 w-4/5 h-full shadow-lg p-6 animate-in slide-in-from-right">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-teal-600 dark:text-teal-400">Navegación</h2>
              <Button variant="ghost" size="icon" onClick={toggleMenu} className="rounded-full">
                <X className="h-6 w-6" />
              </Button>
            </div>

            <nav className="flex flex-col space-y-4">
              <Link
                href="#home"
                className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2 border-b border-slate-200 dark:border-slate-800"
                onClick={toggleMenu}
              >
                Inicio
              </Link>
              <Link
                href="#about"
                className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2 border-b border-slate-200 dark:border-slate-800"
                onClick={toggleMenu}
              >
                Sobre Mí
              </Link>
              <Link
                href="#projects"
                className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2 border-b border-slate-200 dark:border-slate-800"
                onClick={toggleMenu}
              >
                Proyectos
              </Link>
              <Link
                href="#experience"
                className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2 border-b border-slate-200 dark:border-slate-800"
                onClick={toggleMenu}
              >
                Experiencia
              </Link>
              <Link
                href="#skills"
                className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2 border-b border-slate-200 dark:border-slate-800"
                onClick={toggleMenu}
              >
                Habilidades
              </Link>
              <Link
                href="#contact"
                className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2 border-b border-slate-200 dark:border-slate-800"
                onClick={toggleMenu}
              >
                Contacto
              </Link>
            </nav>

            <div className="mt-8">
              <Button className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white">
                Descargar CV
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
