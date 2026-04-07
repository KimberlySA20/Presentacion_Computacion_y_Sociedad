import { Scale, TrendingUp, Globe, Users2, CheckCircle } from 'lucide-react';

export function Modulo2() {
  return (
    <div className="size-full overflow-auto p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl mb-8 text-white flex items-center gap-3">
          <Scale className="size-10 text-cyan-400" />
          Módulo 2: Tipo de Sociedad
        </h1>

        {/* Tipo elegido */}
        <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/40 mb-8">
          <h2 className="text-3xl mb-3 text-white">
            Sociedad Anónima (S.A.)
          </h2>
          <p className="text-slate-200 text-lg">
            Figura legal elegida para la constitución de TripFlow Costa Rica
          </p>
        </div>

        {/* Justificación */}
        <h2 className="text-2xl mb-6 text-cyan-300">
          Justificación de la Elección
        </h2>

        <div className="grid gap-6">
          {/* 1. Crecimiento */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-start gap-4">
              <div className="bg-cyan-500/20 p-3 rounded-lg">
                <TrendingUp className="size-8 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl text-white mb-2">
                  1. Crecimiento y Proyección del Negocio
                </h3>
                <p className="text-slate-200 leading-relaxed">
                  Este tipo de empresa requiere una estructura que le permita expandirse, incorporar nuevos servicios y adaptarse a la demanda del mercado. La Sociedad Anónima facilita este proceso, ya que está pensada para empresas con proyección de crecimiento y mayor alcance.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Inversión */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <Users2 className="size-8 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl text-white mb-2">
                  2. Acceso a Inversión
                </h3>
                <p className="text-slate-200 leading-relaxed mb-3">
                  Una de las principales ventajas de la S.A. es que permite la participación de inversionistas mediante la compra de acciones. Esto resulta importante ya que en etapas futuras podría requerir financiamiento para:
                </p>
                <ul className="text-slate-200 space-y-1.5 ml-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-cyan-400" />
                    Mejorar la plataforma
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-cyan-400" />
                    Invertir en marketing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-cyan-400" />
                    Ampliar sus operaciones
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. Internacional */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-start gap-4">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <Globe className="size-8 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl text-white mb-2">
                  3. Enfoque Internacional
                </h3>
                <p className="text-slate-200 leading-relaxed">
                  TripFlow está orientada también a turistas internacionales, lo que implica trabajar con pagos digitales y servicios en diferentes ubicaciones. La S.A. permite manejar este tipo de operaciones de forma más adecuada, especialmente si en el futuro se desea expandir el negocio fuera de Costa Rica.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Organización */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-start gap-4">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <Scale className="size-8 text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl text-white mb-2">
                  4. Organización Administrativa
                </h3>
                <p className="text-slate-200 leading-relaxed">
                  Este tipo de sociedad permite establecer una estructura organizativa clara, con roles definidos como la Junta Directiva y la Gerencia. Esto facilita la toma de decisiones y el manejo eficiente de la empresa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
