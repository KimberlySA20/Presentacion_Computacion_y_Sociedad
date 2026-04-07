import { Users, Code, Headphones, Calculator } from 'lucide-react';

export function Modulo4() {
  return (
    <div className="size-full overflow-auto p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl mb-8 text-white flex items-center gap-3">
          <Users className="size-10 text-cyan-400" />
          Módulo 4: Estructura Organizacional
        </h1>

        <p className="text-slate-200 text-lg mb-8">
          TripFlow Costa Rica S.A. está compuesta por <span className="text-cyan-300">9 empleados</span> distribuidos en <span className="text-cyan-300">4 roles operativos</span>
        </p>

        <div className="grid gap-6">
          {/* Gerente General */}
          <div className="bg-gradient-to-r from-purple-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/40">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-purple-500/30 p-3 rounded-lg">
                  <Users className="size-8 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-2xl text-white">Gerente General</h3>
                  <p className="text-slate-300">1 puesto</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl text-white">₡850,000</p>
                <p className="text-slate-300 text-sm">salario mensual</p>
              </div>
            </div>
            <p className="text-slate-200">
              <span className="text-cyan-300">Responsabilidades:</span> Liderazgo estratégico, gestión de recursos y presupuesto, relaciones con accionistas e inversores
            </p>
          </div>

          {/* Desarrolladores */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/30 p-3 rounded-lg">
                  <Code className="size-8 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-2xl text-white">Desarrolladores de Software</h3>
                  <p className="text-slate-300">3 puestos</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl text-white">₡700,000</p>
                <p className="text-slate-300 text-sm">salario mensual c/u</p>
              </div>
            </div>
            <p className="text-slate-200">
              <span className="text-cyan-300">Responsabilidades:</span> Desarrollo y mantenimiento de la plataforma, implementación de algoritmos de recomendación con IA, integración de pagos y reservas, testing y optimización
            </p>
          </div>

          {/* Soporte Técnico */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-green-500/30 p-3 rounded-lg">
                  <Headphones className="size-8 text-green-300" />
                </div>
                <div>
                  <h3 className="text-2xl text-white">Soporte Técnico / Atención al Cliente</h3>
                  <p className="text-slate-300">3 puestos</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl text-white">₡580,000</p>
                <p className="text-slate-300 text-sm">salario mensual c/u</p>
              </div>
            </div>
            <p className="text-slate-200">
              <span className="text-cyan-300">Responsabilidades:</span> Atención a turistas y proveedores, resolución de incidencias técnicas, recopilación de feedback para mejora de producto
            </p>
          </div>

          {/* Administrativo */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-cyan-500/30 p-3 rounded-lg">
                  <Calculator className="size-8 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-2xl text-white">Administrativo / Finanzas</h3>
                  <p className="text-slate-300">2 puestos</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl text-white">₡650,000</p>
                <p className="text-slate-300 text-sm">salario mensual c/u</p>
              </div>
            </div>
            <p className="text-slate-200">
              <span className="text-cyan-300">Responsabilidades:</span> Gestión administrativa, contabilidad, facturación, gestión de nómina y obligaciones fiscales, reportes financieros
            </p>
          </div>

          {/* Resumen Visual */}
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/40">
              <h3 className="text-xl text-white mb-3">Total de Empleados</h3>
              <div className="text-5xl text-cyan-300 mb-2">9</div>
              <p className="text-slate-200">Profesionales en 4 áreas clave</p>
            </div>

            <div className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/40">
              <h3 className="text-xl text-white mb-3">Salarios Base Mensuales</h3>
              <div className="text-5xl text-blue-300 mb-2">₡5.99M</div>
              <p className="text-slate-200">Total antes de cargas sociales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
