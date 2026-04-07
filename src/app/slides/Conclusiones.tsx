import { CheckCircle, TrendingUp, Lightbulb, Target } from 'lucide-react';

export function Conclusiones() {
  return (
    <div className="size-full overflow-auto p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl mb-8 text-white flex items-center gap-3">
          <CheckCircle className="size-10 text-green-400" />
          Conclusiones
        </h1>

        <div className="grid gap-6">
          {/* Mensaje principal */}
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/40">
            <p className="text-white text-2xl leading-relaxed">
              TripFlow Costa Rica S.A. se posiciona como una <span className="text-cyan-300">empresa de tecnología aplicada al turismo</span> con un modelo de negocio viable y una estructura organizativa diseñada para crecer.
            </p>
          </div>

          {/* Hallazgos clave */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl text-cyan-300 mb-6 flex items-center gap-2">
              <Target className="size-7" />
              Hallazgos Principales
            </h2>

            <div className="space-y-5">
              {/* 1. Inversión */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-2 rounded-lg mt-1">
                  <TrendingUp className="size-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-lg mb-2">Inversión Total Primer Año</h3>
                  <p className="text-slate-200 leading-relaxed">
                    La empresa requiere <span className="text-cyan-300">₡135,252,196</span> en su primer año de operación, compuesta por ₡120M de presupuesto operativo recurrente y ₡15.2M de inversión inicial en equipos y mobiliario.
                  </p>
                </div>
              </div>

              {/* 2. Capital Humano */}
              <div className="flex items-start gap-4">
                <div className="bg-green-500/20 p-2 rounded-lg mt-1">
                  <CheckCircle className="size-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-lg mb-2">Capital Humano como Prioridad</h3>
                  <p className="text-slate-200 leading-relaxed">
                    El componente más significativo del presupuesto es la planilla, que representa el <span className="text-cyan-300">82% del total</span>, consistente con el perfil de una empresa tecnológica intensiva en capital humano. El equipo inicial de 9 personas cubre las áreas críticas de desarrollo, soporte, administración y liderazgo.
                  </p>
                </div>
              </div>

              {/* 3. Marco legal */}
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/20 p-2 rounded-lg mt-1">
                  <CheckCircle className="size-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-lg mb-2">Marco Legal Adecuado</h3>
                  <p className="text-slate-200 leading-relaxed">
                    La constitución como <span className="text-cyan-300">Sociedad Anónima</span> proporciona el marco legal adecuado para el crecimiento, la captación de inversión y la operación internacional que el negocio requiere. El proceso de formalización garantiza el cumplimiento de todas las obligaciones legales, fiscales y laborales.
                  </p>
                </div>
              </div>

              {/* 4. Ventaja competitiva */}
              <div className="flex items-start gap-4">
                <div className="bg-pink-500/20 p-2 rounded-lg mt-1">
                  <Lightbulb className="size-6 text-pink-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-lg mb-2">Ventaja Competitiva con IA</h3>
                  <p className="text-slate-200 leading-relaxed">
                    La propuesta de valor de TripFlow se diferencia por la integración de <span className="text-cyan-300">Inteligencia Artificial como motor central del producto</span>, permitiendo la generación de itinerarios verdaderamente personalizados y una experiencia de usuario superior a las plataformas turísticas tradicionales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Resumen de indicadores */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-600/30 to-cyan-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/40 text-center">
              <div className="text-4xl text-cyan-300 mb-2">₡135.3M</div>
              <p className="text-slate-200">Inversión Total Año 1</p>
            </div>
            <div className="bg-gradient-to-br from-green-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-green-400/40 text-center">
              <div className="text-4xl text-green-300 mb-2">9</div>
              <p className="text-slate-200">Empleados Especializados</p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/40 text-center">
              <div className="text-4xl text-purple-300 mb-2">82%</div>
              <p className="text-slate-200">Inversión en Capital Humano</p>
            </div>
          </div>

          {/* Mensaje final */}
          <div className="bg-gradient-to-r from-yellow-600/30 to-orange-600/30 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/40">
            <h3 className="text-xl text-white mb-3 flex items-center gap-2">
              <Target className="size-6 text-yellow-400" />
              Próximos Pasos
            </h3>
            <p className="text-slate-200 leading-relaxed">
              Este documento constituye la base para la elaboración del <span className="text-yellow-300">plan financiero detallado</span>, el <span className="text-yellow-300">análisis de punto de equilibrio</span> y la <span className="text-yellow-300">estrategia de captación de clientes y proveedores</span> que determinarán el nivel mínimo de ingresos necesarios para sostener las operaciones de la empresa.
            </p>
          </div>

          {/* Mensaje de cierre */}
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🚀</div>
            <h2 className="text-3xl text-white mb-3">
              TripFlow Costa Rica S.A.
            </h2>
            <p className="text-xl text-cyan-300">
              Transformando el Turismo con Tecnología e Inteligencia Artificial
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
