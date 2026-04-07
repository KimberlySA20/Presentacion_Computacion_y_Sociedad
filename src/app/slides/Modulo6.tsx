import { PieChart, DollarSign, Building, Wifi, Code, Laptop } from 'lucide-react';
import { PieChart as RechartsChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const budgetData = [
  { name: 'Planilla', value: 82.0, color: '#06b6d4' },
  { name: 'Equipos', value: 2.9, color: '#8b5cf6' },
  { name: 'Alquiler', value: 2.5, color: '#3b82f6' },
  { name: 'Software', value: 1.6, color: '#10b981' },
  { name: 'Internet', value: 0.8, color: '#f59e0b' },
  { name: 'Otros', value: 9.0, color: '#ec4899' },
];

export function Modulo6() {
  return (
    <div className="w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-8 text-white flex items-center gap-2 sm:gap-3">
          <DollarSign className="size-6 sm:size-8 lg:size-10 text-cyan-400 flex-shrink-0" />
          <span className="leading-tight">Módulo 6: Presupuesto Total</span>
        </h1>

        <div className="grid gap-4 sm:gap-6">
          {/* Tabla de presupuesto consolidado */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                <thead className="bg-blue-600/30">
                  <tr>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-left text-white text-sm sm:text-base">Categoría</th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-right text-white text-sm sm:text-base">Costo Mensual</th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-right text-white text-sm sm:text-base">Costo Anual</th>
                    <th className="px-3 sm:px-4 py-2 sm:py-3 text-right text-white text-sm sm:text-base">%</th>
                  </tr>
                </thead>
                <tbody className="text-slate-200">
                  <tr className="border-b border-white/10">
                    <td className="px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 text-sm sm:text-base">
                      <PieChart className="size-4 text-cyan-400 flex-shrink-0" />
                      Planilla (salarios + cargas + aguinaldo)
                    </td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-right text-sm sm:text-base">₡8,206,500</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-right text-white text-sm sm:text-base">₡98,477,996</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-right text-cyan-300 text-sm sm:text-base">82.0%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 text-sm sm:text-base">
                      <Building className="size-4 text-blue-400 flex-shrink-0" />
                      Alquiler de oficina
                    </td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-right text-sm sm:text-base">₡250,000</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-right text-white text-sm sm:text-base">₡3,000,000</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-right text-sm sm:text-base">2.5%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 text-sm sm:text-base">
                      <Wifi className="size-4 text-orange-400 flex-shrink-0" />
                      Conectividad (Internet)
                    </td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-right text-sm sm:text-base">₡80,000</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-right text-white text-sm sm:text-base">₡960,000</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-right text-sm sm:text-base">0.8%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 text-sm sm:text-base">
                      <Code className="size-4 text-green-400 flex-shrink-0" />
                      Licencias de Software
                    </td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-right text-sm sm:text-base">₡155,000</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-right text-white text-sm sm:text-base">₡1,860,000</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-right text-sm sm:text-base">1.6%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 text-sm sm:text-base">
                      <Laptop className="size-4 text-purple-400 flex-shrink-0" />
                      Equipos (amortización)
                    </td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-right text-sm sm:text-base">₡292,000</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-right text-white text-sm sm:text-base">₡3,504,000</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-right text-sm sm:text-base">2.9%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base">Otros gastos operativos (10% buffer)</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-right text-sm sm:text-base">₡898,350</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-right text-white text-sm sm:text-base">₡10,780,200</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-right text-sm sm:text-base">9.0%</td>
                  </tr>
                  <tr className="bg-blue-600/20">
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-white text-sm sm:text-base font-medium">PRESUPUESTO TOTAL</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-right text-white text-base sm:text-xl font-medium">₡10,006,850</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-right text-white text-base sm:text-xl font-medium">₡120,082,196</td>
                    <td className="px-3 sm:px-4 py-2 sm:py-3 text-right text-white text-base sm:text-xl font-medium">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Gráfico de distribución */}
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
              <h3 className="text-lg sm:text-xl text-cyan-300 mb-3 sm:mb-4 text-center">
                Distribución del Presupuesto
              </h3>
              <ResponsiveContainer width="100%" height={200} className="max-w-full">
                <RechartsChart>
                  <Pie
                    data={budgetData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={70}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {budgetData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </RechartsChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-cyan-400/40">
                <h3 className="text-base sm:text-lg text-white mb-2">Presupuesto Operativo Anual</h3>
                <div className="text-3xl sm:text-4xl text-cyan-300">₡120.1M</div>
                <p className="text-slate-200 text-sm mt-1">Costos recurrentes</p>
              </div>

              <div className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-purple-400/40">
                <h3 className="text-base sm:text-lg text-white mb-2">Inversión Inicial en Equipos</h3>
                <div className="text-3xl sm:text-4xl text-purple-300">₡15.2M</div>
                <p className="text-slate-200 text-sm mt-1">Año 1 (compra única)</p>
              </div>

              <div className="bg-gradient-to-br from-blue-600/30 to-green-600/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-blue-400/40">
                <h3 className="text-base sm:text-lg text-white mb-2">Inversión Total Primer Año</h3>
                <div className="text-3xl sm:text-4xl text-white">₡135.3M</div>
                <p className="text-slate-200 text-sm mt-1">Operativo + Equipos</p>
              </div>
            </div>
          </div>

          {/* Equipos tecnológicos */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
            <h3 className="text-lg sm:text-xl text-cyan-300 mb-3 sm:mb-4 flex items-center gap-2">
              <Laptop className="size-5 sm:size-6 flex-shrink-0" />
              Inversión en Equipos Tecnológicos (Año 1)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-slate-200">
              <div>
                <p className="text-white text-base sm:text-lg mb-1">9 Laptops</p>
                <p className="text-cyan-300 text-sm sm:text-base">₡10,800,000</p>
              </div>
              <div>
                <p className="text-white text-base sm:text-lg mb-1">6 Monitores</p>
                <p className="text-cyan-300 text-sm sm:text-base">₡1,500,000</p>
              </div>
              <div>
                <p className="text-white text-base sm:text-lg mb-1">Periféricos</p>
                <p className="text-cyan-300 text-sm sm:text-base">₡720,000</p>
              </div>
              <div>
                <p className="text-white text-base sm:text-lg mb-1">Mobiliario</p>
                <p className="text-cyan-300 text-sm sm:text-base">₡1,800,000</p>
              </div>
              <div>
                <p className="text-white text-base sm:text-lg mb-1">Red e Infraestructura</p>
                <p className="text-cyan-300 text-sm sm:text-base">₡350,000</p>
              </div>
              <div className="bg-blue-600/20 rounded-lg p-2 sm:p-3">
                <p className="text-white text-base sm:text-lg mb-1">TOTAL</p>
                <p className="text-cyan-300 text-lg sm:text-xl">₡15,170,000</p>
              </div>
            </div>
          </div>

          {/* Indicadores clave */}
          <div className="bg-gradient-to-r from-yellow-600/30 to-orange-600/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-yellow-400/40">
            <h3 className="text-lg sm:text-xl text-white mb-3 sm:mb-4">📊 Indicadores Financieros Clave</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-slate-200">
              <div>
                <p className="text-slate-300 text-xs sm:text-sm mb-1">Costo mensual promedio</p>
                <p className="text-white text-xl sm:text-2xl">₡10.0M</p>
              </div>
              <div>
                <p className="text-slate-300 text-xs sm:text-sm mb-1">Costo laboral del total</p>
                <p className="text-white text-xl sm:text-2xl">82.0%</p>
              </div>
              <div>
                <p className="text-slate-300 text-xs sm:text-sm mb-1">Amortización equipos</p>
                <p className="text-white text-xl sm:text-2xl">4-5 años</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
