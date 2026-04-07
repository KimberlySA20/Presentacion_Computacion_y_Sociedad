import { Calculator, TrendingUp, Shield, Gift } from 'lucide-react';

export function Modulo5() {
  return (
    <div className="size-full overflow-auto p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl mb-8 text-white flex items-center gap-3">
          <Calculator className="size-10 text-cyan-400" />
          Módulo 5: Cálculo de Planilla
        </h1>

        <p className="text-slate-200 text-lg mb-8">
          Incluye salarios base, cargas sociales obligatorias (CCSS 26.67%), seguro de riesgos (INS 2%) y aguinaldo
        </p>

        <div className="grid gap-6">
          {/* Tabla de costos por puesto */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600/30">
                  <tr>
                    <th className="px-4 py-3 text-left text-white">Posición</th>
                    <th className="px-4 py-3 text-center text-white">Cant.</th>
                    <th className="px-4 py-3 text-right text-white">Salario Mensual</th>
                    <th className="px-4 py-3 text-right text-white">Costo Total Anual</th>
                  </tr>
                </thead>
                <tbody className="text-slate-200">
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3">Gerente General</td>
                    <td className="px-4 py-3 text-center">1</td>
                    <td className="px-4 py-3 text-right text-cyan-300">₡850,000</td>
                    <td className="px-4 py-3 text-right text-white">₡13,974,340</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3">Desarrolladores de Software</td>
                    <td className="px-4 py-3 text-center">3</td>
                    <td className="px-4 py-3 text-right text-cyan-300">₡700,000</td>
                    <td className="px-4 py-3 text-right text-white">₡34,524,840</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3">Soporte Técnico / Atención Cliente</td>
                    <td className="px-4 py-3 text-center">3</td>
                    <td className="px-4 py-3 text-right text-cyan-300">₡580,000</td>
                    <td className="px-4 py-3 text-right text-white">₡28,606,296</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="px-4 py-3">Administrativo / Finanzas</td>
                    <td className="px-4 py-3 text-center">2</td>
                    <td className="px-4 py-3 text-right text-cyan-300">₡650,000</td>
                    <td className="px-4 py-3 text-right text-white">₡21,372,520</td>
                  </tr>
                  <tr className="bg-blue-600/20">
                    <td className="px-4 py-3 text-white">TOTAL</td>
                    <td className="px-4 py-3 text-center text-white">9</td>
                    <td className="px-4 py-3 text-right text-cyan-300">₡5,990,000</td>
                    <td className="px-4 py-3 text-right text-white text-xl">₡98,477,996</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Desglose de conceptos */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl text-cyan-300 mb-4 flex items-center gap-2">
                <TrendingUp className="size-6" />
                Desglose de Conceptos Anuales
              </h3>
              <div className="space-y-3 text-slate-200">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span>Salarios totales (12 meses)</span>
                  <span className="text-white">₡71,880,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <Shield className="size-4 text-blue-400" />
                    CCSS (26.67%)
                  </span>
                  <span className="text-white">₡19,170,396</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <Shield className="size-4 text-green-400" />
                    INS (2%)
                  </span>
                  <span className="text-white">₡1,437,600</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="flex items-center gap-2">
                    <Gift className="size-4 text-yellow-400" />
                    Aguinaldo
                  </span>
                  <span className="text-white">₡5,990,000</span>
                </div>
                <div className="flex justify-between items-center pt-2 text-lg">
                  <span className="text-cyan-300">TOTAL</span>
                  <span className="text-white">₡98,477,996</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl text-cyan-300 mb-4">
                Costos Mensuales Promedio
              </h3>
              <div className="space-y-3 text-slate-200">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span>Salarios (9 empleados)</span>
                  <span className="text-white">₡5,990,000</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span>CCSS mensual</span>
                  <span className="text-white">₡1,597,533</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span>Diciembre (+ aguinaldo)</span>
                  <span className="text-yellow-300">₡13,577,533</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span>INS (pago anual)</span>
                  <span className="text-white">₡1,437,600</span>
                </div>
                <div className="flex justify-between items-center pt-2 text-lg">
                  <span className="text-cyan-300">Promedio mensual</span>
                  <span className="text-white">₡8,206,500</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fondo de contingencia */}
          <div className="bg-gradient-to-br from-yellow-600/30 to-orange-600/30 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/40">
            <h3 className="text-xl text-white mb-3 flex items-center gap-2">
              <Shield className="size-6 text-yellow-400" />
              Fondo de Contingencia Laboral
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-slate-200">
              <div>
                <p className="text-slate-300 mb-1">Reserva mensual</p>
                <p className="text-2xl text-white">₡125,000</p>
                <p className="text-sm text-slate-300">Para maternidad e incapacidades</p>
              </div>
              <div>
                <p className="text-slate-300 mb-1">Reserva anual</p>
                <p className="text-2xl text-white">₡1,500,000</p>
                <p className="text-sm text-slate-300">Costos operativos e indirectos</p>
              </div>
            </div>
          </div>

          {/* Total destacado */}
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-400/40 text-center">
            <h3 className="text-2xl text-white mb-4">Costo Total de Planilla Anual</h3>
            <div className="text-6xl text-cyan-300 mb-3">₡98.5M</div>
            <p className="text-slate-200 text-lg">Aproximadamente ₡8.2M mensuales</p>
            <p className="text-slate-300 text-sm mt-2">Representa el 82% del presupuesto operativo total</p>
          </div>
        </div>
      </div>
    </div>
  );
}
