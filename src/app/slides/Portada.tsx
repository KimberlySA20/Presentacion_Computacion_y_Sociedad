import { Plane, MapPin } from 'lucide-react';

export function Portada() {
  return (
    <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 text-white font-bold leading-tight">
          TripFlow
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 text-cyan-300 font-semibold">
          Costa Rica S.A.
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-200 leading-relaxed max-w-4xl mx-auto px-2">
          Plataforma Digital Integral para la Planificación y Reserva de Experiencias Turísticas
        </p>
      </div>
    </div>
  );
}