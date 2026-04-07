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
    <div className="size-full overflow-auto p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl mb-8 text-white flex items-center gap-3">
          <DollarSign className="size-10 text-cyan-400" />
          Módulo 6: Presupuesto Total
        </h1>

        <div className="grid gap-6">
          {/* Tabla de presupuesto consolidado */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600/30">
                  <tr>
                    <th className="px-4 py-3 text-left text-white">Categoría</th>
                    <th className="px-4 py-3 text-right text-white">Costo Mensual</th>
                    <th className="px-4 py-3 text-right text-white">Costo Anual</th>
                    <th className="px-4 py-3 text-right text-white">%</th>
                  </tr>
                </thead>
                <tbody className="text-slate-200">
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 flex items-center gap-2">
                      <PieChart className="size-4 text-cyan-400" />
                      Planilla (salarios + cargas + aguinaldo)
                    </td>
                    <td className="px-4 py-3 text-right">₡8,206,500</td>
                    <td className="px-4 py-3 text-right text-white">₡98,477,996</td>
                    <td className="px-4 py-3 text-right text-cyan-300">82.0%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 flex items-center gap-2">
                      <Building className="size-4 text-blue-400" />
                      Alquiler de oficina
                    </td>
                    <td className="px-4 py-3 text-right">₡250,000</td>
                    <td className="px-4 py-3 text-right text-white">₡3,000,000</td>
                    <td className="px-4 py-3 text-right">2.5%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 flex items-center gap-2">
                      <Wifi className="size-4 text-orange-400" />
                      Conectividad (Internet)
                    </td>
                    <td className="px-4 py-3 text-right">₡80,000</td>
                    <td className="px-4 py-3 text-right text-white">₡960,000</td>
                    <td className="px-4 py-3 text-right">0.8%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 flex items-center gap-2">
                      <Code className="size-4 text-green-400" />
                      Licencias de Software
                    </td>
                    <td className="px-4 py-3 text-right">₡155,000</td>
                    <td className="px-4 py-3 text-right text-white">₡1,860,000</td>
                    <td className="px-4 py-3 text-right">1.6%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3 flex items-center gap-2">
                      <Laptop className="size-4 text-purple-400" />
                      Equipos (amortización)
                    </td>
                    <td className="px-4 py-3 text-right">₡292,000</td>
                    <td className="px-4 py-3 text-right text-white">₡3,504,000</td>
                    <td className="px-4 py-3 text-right">2.9%</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3">Otros gastos operativos (10% buffer)</td>
                    <td className="px-4 py-3 text-right">₡898,350</td>
                    <td className="px-4 py-3 text-right text-white">₡10,780,200</td>
                    <td className="px-4 py-3 text-right">9.0%</td>
                  </tr>
                  <tr className="bg-blue-600/20">
                    <td className="px-4 py-3 text-white">PRESUPUESTO TOTAL</td>
                    <td className="px-4 py-3 text-right text-white text-xl">₡10,006,850</td>
                    <td className="px-4 py-3 text-right text-white text-xl">₡120,082,196</td>
                    <td className="px-4 py-3 text-right text-white text-xl">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Gráfico de distribución */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl text-cyan-300 mb-4 text-center">
                Distribución del Presupuesto
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <RechartsChart>
                  <Pie
                    data={budgetData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
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

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/40">
                <h3 className="text-lg text-white mb-2">Presupuesto Operativo Anual</h3>
                <div className="text-4xl text-cyan-300">₡120.1M</div>
                <p className="text-slate-200 text-sm mt-1">Costos recurrentes</p>
              </div>

              <div className="bg-gradient-to-br from-purple-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/40">
                <h3 className="text-lg text-white mb-2">Inversión Inicial en Equipos</h3>
                <div className="text-4xl text-purple-300">₡15.2M</div>
                <p className="text-slate-200 text-sm mt-1">Año 1 (compra única)</p>
              </div>

              <div className="bg-gradient-to-br from-blue-600/30 to-green-600/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/40">
                <h3 className="text-lg text-white mb-2">Inversión Total Primer Año</h3>
                <div className="text-4xl text-white">₡135.3M</div>
                <p className="text-slate-200 text-sm mt-1">Operativo + Equipos</p>
              </div>
            </div>
          </div>

          {/* Equipos tecnológicos */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl text-cyan-300 mb-4 flex items-center gap-2">
              <Laptop className="size-6" />
              Inversión en Equipos Tecnológicos (Año 1)
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-slate-200">
              <div>
                <p className="text-white text-lg mb-1">9 Laptops</p>
                <p className="text-cyan-300">₡10,800,000</p>
              </div>
              <div>
                <p className="text-white text-lg mb-1">6 Monitores</p>
                <p className="text-cyan-300">₡1,500,000</p>
              </div>
              <div>
                <p className="text-white text-lg mb-1">Periféricos</p>
                <p className="text-cyan-300">₡720,000</p>
              </div>
              <div>
                <p className="text-white text-lg mb-1">Mobiliario</p>
                <p className="text-cyan-300">₡1,800,000</p>
              </div>
              <div>
                <p className="text-white text-lg mb-1">Red e Infraestructura</p>
                <p className="text-cyan-300">₡350,000</p>
              </div>
              <div className="bg-blue-600/20 rounded-lg p-3">
                <p className="text-white text-lg mb-1">TOTAL</p>
                <p className="text-cyan-300 text-xl">₡15,170,000</p>
              </div>
            </div>
          </div>

          {/* Indicadores clave */}
          <div className="bg-gradient-to-r from-yellow-600/30 to-orange-600/30 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/40">
            <h3 className="text-xl text-white mb-4">📊 Indicadores Financieros Clave</h3>
            <div className="grid md:grid-cols-3 gap-4 text-slate-200">
              <div>
                <p className="text-slate-300 text-sm mb-1">Costo mensual promedio</p>
                <p className="text-white text-2xl">₡10.0M</p>
              </div>
              <div>
                <p className="text-slate-300 text-sm mb-1">Costo laboral del total</p>
                <p className="text-white text-2xl">82.0%</p>
              </div>
              <div>
                <p className="text-slate-300 text-sm mb-1">Amortización equipos</p>
                <p className="text-white text-2xl">4-5 años</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
