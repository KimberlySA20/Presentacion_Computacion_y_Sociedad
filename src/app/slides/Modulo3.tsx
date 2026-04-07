import { FileText, Clock, DollarSign } from 'lucide-react';

export function Modulo3() {
  return (
    <div className="w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-8 text-white flex items-center gap-2 sm:gap-3">
          <FileText className="size-6 sm:size-8 lg:size-10 text-cyan-400 flex-shrink-0" />
          <span className="leading-tight">Módulo 3: Formalización de la Empresa</span>
        </h1>

        <div className="grid gap-4 sm:gap-6">
          {/* 1. Registro Nacional */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
            <h3 className="text-lg sm:text-xl text-cyan-300 mb-3">
              1. Inscripción en el Registro Nacional
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-slate-200">
              <div className="min-w-0">
                <p className="text-slate-400 text-xs sm:text-sm mb-1">Entidad</p>
                <p className="text-white text-sm sm:text-base">Registro Nacional de Costa Rica</p>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <Clock className="size-4 sm:size-5 text-blue-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-slate-400 text-xs sm:text-sm">Plazo</p>
                  <p className="text-white text-sm">5-10 días hábiles</p>
                </div>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <DollarSign className="size-4 sm:size-5 text-green-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-slate-400 text-xs sm:text-sm">Costo</p>
                  <p className="text-white text-sm">₡200,000 - ₡350,000</p>
                </div>
              </div>
            </div>
            <div className="mt-3 sm:mt-4 p-3 bg-blue-500/10 rounded-lg border border-blue-400/30">
              <p className="text-slate-200 text-xs sm:text-sm">
                <span className="text-cyan-300">Resultado:</span> Cédula jurídica y sociedad legalmente constituida
              </p>
            </div>
          </div>

          {/* 2. Hacienda */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
            <h3 className="text-lg sm:text-xl text-cyan-300 mb-3">
              2. Inscripción en Hacienda (ATV)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-slate-200">
              <div className="min-w-0">
                <p className="text-slate-400 text-xs sm:text-sm mb-1">Entidad</p>
                <p className="text-white text-sm sm:text-base">Ministerio de Hacienda</p>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <Clock className="size-4 sm:size-5 text-blue-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-slate-400 text-xs sm:text-sm">Plazo</p>
                  <p className="text-white text-sm">Inmediato (en línea)</p>
                </div>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <DollarSign className="size-4 sm:size-5 text-green-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-slate-400 text-xs sm:text-sm">Costo</p>
                  <p className="text-white text-sm">Gratuito</p>
                </div>
              </div>
            </div>
            <div className="mt-3 sm:mt-4 p-3 bg-blue-500/10 rounded-lg border border-blue-400/30">
              <p className="text-slate-200 text-xs sm:text-sm">
                <span className="text-cyan-300">Resultado:</span> Registro como contribuyente y autorización para emitir facturas electrónicas
              </p>
            </div>
          </div>

          {/* 3. CCSS */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
            <h3 className="text-lg sm:text-xl text-cyan-300 mb-3">
              3. Inscripción en la CCSS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-slate-200">
              <div className="min-w-0">
                <p className="text-slate-400 text-xs sm:text-sm mb-1">Entidad</p>
                <p className="text-white text-sm sm:text-base">Caja Costarricense de Seguro Social</p>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <Clock className="size-4 sm:size-5 text-blue-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-slate-400 text-xs sm:text-sm">Plazo</p>
                  <p className="text-white text-sm">5-10 días hábiles</p>
                </div>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <DollarSign className="size-4 sm:size-5 text-green-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-slate-400 text-xs sm:text-sm">Costo</p>
                  <p className="text-white text-sm">Gratuito (registro)</p>
                </div>
              </div>
            </div>
            <div className="mt-3 sm:mt-4 p-3 bg-blue-500/10 rounded-lg border border-blue-400/30">
              <p className="text-slate-200 text-xs sm:text-sm">
                <span className="text-cyan-300">Cargas sociales posteriores:</span> ≈ 26.67% de la planilla
              </p>
            </div>
          </div>

          {/* 4. INS */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
            <h3 className="text-lg sm:text-xl text-cyan-300 mb-3">
              4. Inscripción en el INS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-slate-200">
              <div className="min-w-0">
                <p className="text-slate-400 text-xs sm:text-sm mb-1">Entidad</p>
                <p className="text-white text-sm sm:text-base">Instituto Nacional de Seguros</p>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <Clock className="size-4 sm:size-5 text-blue-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-slate-400 text-xs sm:text-sm">Plazo</p>
                  <p className="text-white text-sm">5-10 días hábiles</p>
                </div>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <DollarSign className="size-4 sm:size-5 text-green-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-slate-400 text-xs sm:text-sm">Costo anual</p>
                  <p className="text-white text-sm">₡1.2M - ₡1.6M</p>
                </div>
              </div>
            </div>
            <div className="mt-3 sm:mt-4 p-3 bg-blue-500/10 rounded-lg border border-blue-400/30">
              <p className="text-slate-200 text-xs sm:text-sm">
                <span className="text-cyan-300">Seguro:</span> Riesgos del Trabajo (1-3% de la planilla anual)
              </p>
            </div>
          </div>

          {/* 5. Patente */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
            <h3 className="text-lg sm:text-xl text-cyan-300 mb-3">
              5. Patente Municipal
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-slate-200">
              <div className="min-w-0">
                <p className="text-slate-400 text-xs sm:text-sm mb-1">Entidad</p>
                <p className="text-white text-sm sm:text-base">Municipalidad (según ubicación)</p>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <Clock className="size-4 sm:size-5 text-blue-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-slate-400 text-xs sm:text-sm">Plazo</p>
                  <p className="text-white text-sm">5-15 días hábiles</p>
                </div>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <DollarSign className="size-4 sm:size-5 text-green-400 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-slate-400 text-xs sm:text-sm">Costo</p>
                  <p className="text-white text-sm">₡50,000 - ₡150,000</p>
                </div>
              </div>
            </div>
            <div className="mt-3 sm:mt-4 p-3 bg-blue-500/10 rounded-lg border border-blue-400/30">
              <p className="text-slate-200 text-xs sm:text-sm">
                <span className="text-cyan-300">Renovación:</span> Anual
              </p>
            </div>
          </div>

          {/* Resumen Total */}
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-cyan-400/40">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4 flex items-center gap-2">
              <DollarSign className="size-5 sm:size-7 text-green-400 flex-shrink-0" />
              Resumen de Costos de Formalización
            </h3>
            <div className="text-2xl sm:text-3xl text-white mb-2">
              ₡1,450,000 - ₡2,100,000
            </div>
            <p className="text-slate-200 text-sm sm:text-base">
              Inversión inicial aproximada (costos legales + seguros obligatorios + permisos)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
