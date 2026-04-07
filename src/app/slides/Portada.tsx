import { Plane, MapPin } from 'lucide-react';

export function Portada() {
  return (
    <div className="size-full relative flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 className="text-7xl md:text-8xl mb-6 text-white">
          TripFlow
        </h1>
        <h2 className="text-3xl md:text-4xl mb-8 text-cyan-300">
          Costa Rica S.A.
        </h2>
        <p className="text-2xl md:text-3xl text-slate-200 leading-relaxed max-w-4xl mx-auto">
          Plataforma Digital Integral para la Planificación y Reserva de Experiencias Turísticas
        </p>
      </div>
    </div>
  );
}