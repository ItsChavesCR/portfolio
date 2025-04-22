import { Code, Users, Briefcase, Rocket, Star, Coffee, Clock } from "lucide-react"

export default function Highlights() {
  return (
    <div className="grid grid-cols-4 gap-4 md:gap-6 auto-rows-[100px] md:auto-rows-[120px]">
      {/* Elemento grande - Proyectos completados */}
      <div className="col-span-2 row-span-2 bg-gradient-to-br from-teal-900/70 to-teal-700/40 rounded-xl p-6 flex flex-col justify-between border border-teal-800/50 hover:border-teal-400/50 transition-all group">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-teal-300">Proyectos Completados</h3>
          <Briefcase className="text-teal-400 w-6 h-6 group-hover:scale-110 transition-transform" />
        </div>
        <div className="flex items-end">
          <span className="text-4xl md:text-5xl font-bold text-white">3</span>
          <span className="text-teal-300 ml-2 mb-1">proyectos</span>
        </div>
      </div>

      {/* Elemento mediano - Años de experiencia */}
      <div className="col-span-2 bg-gradient-to-br from-slate-900/90 to-slate-800/50 rounded-xl p-4 flex flex-col justify-between border border-slate-700/50 hover:border-teal-400/50 transition-all group">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-slate-200">Experiencia universitaria</h3>
          <Clock className="text-teal-400 w-5 h-5 group-hover:scale-110 transition-transform" />
        </div>
        <div className="flex items-end">
          <span className="text-3xl font-bold text-white">4</span>
          <span className="text-slate-300 ml-2 mb-0.5">años</span>
        </div>
      </div>

      {/* Elemento mediano - Clientes satisfechos */}
      <div className="col-span-2 bg-gradient-to-br from-slate-900/90 to-slate-800/50 rounded-xl p-4 flex flex-col justify-between border border-slate-700/50 hover:border-teal-400/50 transition-all group">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-slate-200">Clientes Satisfechos</h3>
          <Users className="text-teal-400 w-5 h-5 group-hover:scale-110 transition-transform" />
        </div>
        <div className="flex items-end">
          <span className="text-3xl font-bold text-white">10</span>
          <span className="text-slate-300 ml-2 mb-0.5">clientes</span>
        </div>
      </div>

      {/* Elemento pequeño - Lenguajes */}
      <div className="col-span-1 bg-gradient-to-br from-slate-900/90 to-slate-800/50 rounded-xl p-3 flex flex-col justify-between border border-slate-700/50 hover:border-teal-400/50 transition-all group">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-bold text-slate-200">Lenguajes</h3>
          <Code className="text-teal-400 w-4 h-4 group-hover:scale-110 transition-transform" />
        </div>
        <div>
          <span className="text-2xl font-bold text-white">8+</span>
        </div>
      </div>

      {/* Elemento pequeño - Premios */}

      {/* Elemento pequeño - Café */}
      <div className="col-span-1 bg-gradient-to-br from-slate-900/90 to-slate-800/50 rounded-xl p-3 flex flex-col justify-between border border-slate-700/50 hover:border-teal-400/50 transition-all group">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-bold text-slate-200">Coffee</h3>
          <Coffee className="text-teal-400 w-4 h-4 group-hover:scale-110 transition-transform" />
        </div>
        <div>
          <span className="text-2xl font-bold text-white">∞</span>
        </div>
      </div>

      {/* Elemento pequeño - Rating */}
      <div className="col-span-2 bg-gradient-to-br from-slate-900/90 to-slate-800/50 rounded-xl p-3 flex flex-col justify-between border border-slate-700/50 hover:border-teal-400/50 transition-all group">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-bold text-slate-200">Rating</h3>
          <Star className="text-teal-400 w-4 h-4 group-hover:scale-110 transition-transform" />
        </div>
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white">4.9</span>
          <span className="text-xs text-slate-300 ml-1">/5</span>
        </div>
      </div>
      

      {/* Elemento mediano - Tecnologías */}
      <div className="col-span-4 bg-gradient-to-br from-teal-900/70 to-teal-700/40 rounded-xl p-4 flex flex-col justify-between border border-teal-800/50 hover:border-teal-400/50 transition-all group">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold text-teal-300">Tecnologías Favoritas</h3>
          <Rocket className="text-teal-400 w-5 h-5 group-hover:scale-110 transition-transform" />
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-teal-800/50 rounded-md text-sm text-teal-100">React</span>
          <span className="px-2 py-1 bg-teal-800/50 rounded-md text-sm text-teal-100">Next.js</span>
          <span className="px-2 py-1 bg-teal-800/50 rounded-md text-sm text-teal-100">TypeScript</span>
          <span className="px-2 py-1 bg-teal-800/50 rounded-md text-sm text-teal-100">Node.js</span>
          <span className="px-2 py-1 bg-teal-800/50 rounded-md text-sm text-teal-100">TailwindCSS</span>
        </div>
      </div>
    </div>
  )
}
