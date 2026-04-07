import { Building2, Users, Target, Lightbulb } from 'lucide-react';

export function Modulo1() {
  return (
    <div className="w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-8 text-white flex items-center gap-2 sm:gap-3">
          <Building2 className="size-6 sm:size-8 lg:size-10 text-cyan-400 flex-shrink-0" />
          <span className="leading-tight">Módulo 1: Descripción de la Empresa</span>
        </h1>

        <div className="grid gap-4 sm:gap-6">
          {/* Nombre y Descripción */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
            <h2 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-cyan-300 flex items-center gap-2">
              <Building2 className="size-5 sm:size-6 flex-shrink-0" />
              Nombre y Descripción
            </h2>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
              <span className="text-white">TripFlow Costa Rica S.A.</span> es una empresa tecnológica orientada al desarrollo de una plataforma digital integral para la planificación, personalización y reserva de experiencias turísticas en Costa Rica.
            </p>
            <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
              La plataforma permite a los turistas ingresar sus preferencias de viaje y genera itinerarios personalizados mediante algoritmos de recomendación con IA. Integra sistema de reservas y pagos dentro de la misma plataforma, actuando como intermediario entre turistas y proveedores locales.
            </p>
          </div>

          {/* Sector */}
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-blue-400/30">
            <h2 className="text-xl sm:text-2xl mb-2 sm:mb-3 text-cyan-300">
              📊 Sector
            </h2>
            <p className="text-white text-base sm:text-lg">
              <span className="text-cyan-400">Turismo</span> — Subsector: <span className="text-blue-300">Tecnología aplicada al turismo (TravelTech)</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
            {/* Público Objetivo Primario */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
              <h2 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-cyan-300 flex items-center gap-2">
                <Users className="size-5 sm:size-6 flex-shrink-0" />
                Público Primario
              </h2>
              <ul className="text-slate-200 space-y-2 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                  <span>Turistas internacionales que visitan Costa Rica</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                  <span>Viajeros independientes entre 18 y 45 años</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                  <span>Usuarios digitales que prefieren autogestionar su experiencia</span>
                </li>
              </ul>
            </div>

            {/* Público Objetivo Secundario */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
              <h2 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-cyan-300 flex items-center gap-2">
                <Target className="size-5 sm:size-6 flex-shrink-0" />
                Público Secundario
              </h2>
              <ul className="text-slate-200 space-y-2 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                  <span>Empresas turísticas locales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                  <span>Guías independientes y operadores de tours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                  <span>Hoteles y alojamientos</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Propuesta de Valor */}
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-cyan-400/40">
            <h2 className="text-xl sm:text-2xl mb-3 sm:mb-4 text-white flex items-center gap-2">
              <Lightbulb className="size-5 sm:size-6 text-yellow-400 flex-shrink-0" />
              Propuesta de Valor
            </h2>
            <p className="text-slate-100 text-base sm:text-lg leading-relaxed">
              TripFlow ofrece una <span className="text-cyan-300">solución integral</span> que centraliza la planificación, organización y ejecución de viajes en una sola plataforma digital. Su propuesta se basa en la <span className="text-cyan-300">automatización de itinerarios personalizados</span> con IA y en la <span className="text-cyan-300">integración de reservas y pagos</span>, permitiendo completar todo el proceso —desde la planificación hasta la reserva— dentro de un mismo entorno digital.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
