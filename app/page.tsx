import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react";

import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import About from "@/components/about";
import Highlights from "@/components/highlights";
import { ThemeToggle } from "@/components/theme-toggle";
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/mobile-menu";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-800 dark:text-slate-100">
      {/* Header/Navigation */}
      <header className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/avatar.svg"
              alt="Profile"
              width={48}
              height={48}
              className="rounded-full border-2 border-teal-400"
            />
            <span className="font-bold text-xl text-teal-600 dark:text-teal-400">
              DevPortfolio
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#home"
              className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="https://github.com/ItsChavesCR"
              target="_blank"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aaron-chaves-baltodano-47695a2bb/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button - Podría expandirse con un menú móvil completo */}
        <div className="mt-4">
          <MobileMenu />
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-teal-600 dark:text-teal-400">
              Desarrollador Front End
            </span>{" "}
            con pasión por crear experiencias digitales
          </h1>
          <p className="text-xl text-slate-700 dark:text-slate-300 mb-8">
            Especializado en crear aplicaciones web modernas y responsivas con
            las últimas tecnologías
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white">
              <a href="#projects">Ver Proyectos</a>
            </Button>
            <Button
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-500 dark:text-teal-400 dark:hover:bg-teal-950"
            >
              <a href="#contact" className="flex items-center">
                <Mail className="mr-2 h-4 w-4" /> Contacto
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section with Bento Grid */}
      <section id="highlights" className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          <span className="text-teal-600 dark:text-teal-400">Mis</span>{" "}
          Destacados
        </h2>
        <Highlights />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-slate-950/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-teal-600 dark:text-teal-400">About</span> Me
          </h2>
          <About />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-teal-600 dark:text-teal-400">My</span>{" "}
            Projects
          </h2>
          <Projects />
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 bg-gray-50 dark:bg-slate-950/50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-teal-600 dark:text-teal-400">Work</span>{" "}
            Experience
          </h2>
          <Experience />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-teal-600 dark:text-teal-400">My</span> Skills
          </h2>
          <Skills />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-950/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-teal-600 dark:text-teal-400">Contact</span> Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-4 text-teal-600 dark:text-teal-400">
                  ¡Hablemos!
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  ¿Tienes un proyecto en mente o simplemente quieres conectar?
                  Completa el formulario y me pondré en contacto contigo lo
                  antes posible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-3" />
                    <span className="text-slate-700 dark:text-slate-300">
                      achaba03x@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-3" />
                    <span className="text-slate-700 dark:text-slate-300">
                      linkedin.com/aaron-chaves-baltodano
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Github className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-3" />
                    <span className="text-slate-700 dark:text-slate-300">
                      github.com/ItsChavesCR
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-slate-950 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <Link
              href="https://github.com/ItsChavesCR"
              target="_blank"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aaron-chaves-baltodano-47695a2bb/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors" />
            </Link>
            <Link href="achaba03x@gmail.com" aria-label="Email">
              <Mail className="w-6 h-6 text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors" />
            </Link>
            <Link
              href="https://www.facebook.com/share/16DLKwsrnb/?mibextid=LQQJ4d"
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors" />
            </Link>
            <Link
              href="https://www.instagram.com/its_chaves29?igsh=MXIzaWhuendyNTN1Mg%3D%3D&utm_source=qr"
              target="_blank"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-slate-500 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors" />
            </Link>
          </div>
          <p className="text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} DevPortfolio. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
