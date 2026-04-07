import { Cpu, Brain, Database, Cloud, Shield, Zap } from 'lucide-react';

export function Modulo7() {
  return (
    <div className="w-full h-full overflow-auto p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 sm:mb-8 text-white flex items-center gap-2 sm:gap-3">
          <Cpu className="size-6 sm:size-8 lg:size-10 text-cyan-400 flex-shrink-0" />
          <span className="leading-tight">Módulo 7: Tecnología e IA</span>
        </h1>

        <p className="text-slate-200 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
          TripFlow es, por definición, una <span className="text-cyan-300">empresa tecnológica</span>. La tecnología es tanto el producto como la columna vertebral de su operación.
        </p>

        <div className="grid gap-4 sm:gap-6">
          {/* IA como diferenciador */}
          <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/40">
            <h2 className="text-2xl text-white mb-4 flex items-center gap-2">
              <Brain className="size-8 text-pink-400" />
              Inteligencia Artificial como Diferenciador Competitivo
            </h2>
            <p className="text-slate-200 text-lg mb-4">
              A diferencia de plataformas tradicionales que simplemente listan opciones, TripFlow utiliza IA para generar experiencias verdaderamente personalizadas.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="text-cyan-300 mb-2">✨ Motor de Personalización</h3>
                <p className="text-slate-200 text-sm">Itinerarios optimizados con OpenAI GPT-4o / Claude API según preferencias del usuario</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="text-cyan-300 mb-2">🎯 Recomendaciones Inteligentes</h3>
                <p className="text-slate-200 text-sm">Filtrado colaborativo + embeddings basado en historial y comportamiento</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="text-cyan-300 mb-2">🔍 Búsqueda Semántica</h3>
                <p className="text-slate-200 text-sm">pgvector (Supabase) para búsquedas en lenguaje natural sobre actividades</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="text-cyan-300 mb-2">💬 Asistente Conversacional</h3>
                <p className="text-slate-200 text-sm">Chatbot con contexto para preguntas, modificaciones e itinerarios</p>
              </div>
            </div>
          </div>

          {/* Stack tecnológico */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl text-cyan-300 mb-4 flex items-center gap-2">
              <Database className="size-7" />
              Infraestructura Tecnológica de la Plataforma
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-blue-600/10 rounded-lg">
                <Cpu className="size-6 text-blue-400 mt-1" />
                <div className="flex-1">
                  <h4 className="text-white mb-1">Frontend</h4>
                  <p className="text-slate-300 text-sm">Next.js (React) + TypeScript — Interfaz web mobile-first</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-cyan-600/10 rounded-lg">
                <Database className="size-6 text-cyan-400 mt-1" />
                <div className="flex-1">
                  <h4 className="text-white mb-1">Backend / API</h4>
                  <p className="text-slate-300 text-sm">Node.js + Supabase (PostgreSQL) — Lógica de negocio, autenticación, BD</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-purple-600/10 rounded-lg">
                <Brain className="size-6 text-purple-400 mt-1" />
                <div className="flex-1">
                  <h4 className="text-white mb-1">IA / LLM</h4>
                  <p className="text-slate-300 text-sm">OpenAI API / Anthropic API — Motor de personalización e itinerarios</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-green-600/10 rounded-lg">
                <Cloud className="size-6 text-green-400 mt-1" />
                <div className="flex-1">
                  <h4 className="text-white mb-1">Hosting</h4>
                  <p className="text-slate-300 text-sm">Vercel + Supabase Cloud — Deploy y base de datos en la nube</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-orange-600/10 rounded-lg">
                <Shield className="size-6 text-orange-400 mt-1" />
                <div className="flex-1">
                  <h4 className="text-white mb-1">CDN / Seguridad</h4>
                  <p className="text-slate-300 text-sm">Cloudflare Pro — Distribución global, SSL, protección DDoS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Licencias de software */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
            <div className="bg-blue-600/20 px-6 py-3">
              <h3 className="text-xl text-white flex items-center gap-2">
                <Zap className="size-6 text-yellow-400" />
                Licencias de Software — Detalle de Costos
              </h3>
            </div>
            <div className="p-6">
              <div className="grid gap-3 text-slate-200 mb-6">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <div>
                    <p className="text-white">Supabase Pro</p>
                    <p className="text-sm text-slate-400">Backend, DB, auth, storage</p>
                  </div>
                  <div className="text-right">
                    <p className="text-cyan-300 text-lg">₡300,000/año</p>
                    <p className="text-sm text-slate-400">₡25,000/mes</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <div>
                    <p className="text-white">Vercel Pro</p>
                    <p className="text-sm text-slate-400">Deploy y CI/CD frontend</p>
                  </div>
                  <div className="text-right">
                    <p className="text-cyan-300 text-lg">₡216,000/año</p>
                    <p className="text-sm text-slate-400">₡18,000/mes</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <div>
                    <p className="text-white">Microsoft 365 Business</p>
                    <p className="text-sm text-slate-400">9 usuarios — Correo, Office, Teams</p>
                  </div>
                  <div className="text-right">
                    <p className="text-cyan-300 text-lg">₡540,000/año</p>
                    <p className="text-sm text-slate-400">₡45,000/mes</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <div>
                    <p className="text-white">GitHub Teams</p>
                    <p className="text-sm text-slate-400">3 desarrolladores — Control de versiones</p>
                  </div>
                  <div className="text-right">
                    <p className="text-cyan-300 text-lg">₡180,000/año</p>
                    <p className="text-sm text-slate-400">₡15,000/mes</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <div>
                    <p className="text-white">Pasarela de Pagos</p>
                    <p className="text-sm text-slate-400">Stripe — Procesamiento de reservas</p>
                  </div>
                  <div className="text-right">
                    <p className="text-cyan-300 text-lg">₡240,000/año</p>
                    <p className="text-sm text-slate-400">₡20,000/mes</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <div>
                    <p className="text-white">Figma + Jira</p>
                    <p className="text-sm text-slate-400">UX/UI y gestión ágil de proyectos</p>
                  </div>
                  <div className="text-right">
                    <p className="text-cyan-300 text-lg">₡240,000/año</p>
                    <p className="text-sm text-slate-400">₡20,000/mes</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <div>
                    <p className="text-white">Cloudflare Pro + SSL</p>
                    <p className="text-sm text-slate-400">CDN, seguridad, protección DDoS</p>
                  </div>
                  <div className="text-right">
                    <p className="text-cyan-300 text-lg">₡144,000/año</p>
                    <p className="text-sm text-slate-400">₡12,000/mes</p>
                  </div>
                </div>
              </div>
              
              {/* Total */}
              <div className="bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-lg p-4 border border-cyan-400/40">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white text-xl">TOTAL LICENCIAS DE SOFTWARE</p>
                    <p className="text-slate-300 text-sm">Inversión en herramientas tecnológicas</p>
                  </div>
                  <div className="text-right">
                    <p className="text-cyan-300 text-3xl">₡1,860,000</p>
                    <p className="text-slate-300">₡155,000/mes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IA en operaciones internas */}
          <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/40">
            <h2 className="text-xl text-white mb-4 flex items-center gap-2">
              <Brain className="size-6 text-cyan-400" />
              IA en Operaciones Internas
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-slate-200">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <div>
                    <span className="text-white">Desarrollo:</span> GitHub Copilot / Cursor AI para asistencia en código
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <div>
                    <span className="text-white">Atención al cliente:</span> Respuestas automáticas y clasificación de tickets
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <div>
                    <span className="text-white">Análisis de datos:</span> Reportes de desempeño y tendencias
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <div>
                    <span className="text-white">Marketing:</span> Descripciones turísticas y traducción ES/EN
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Herramientas de gestión */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <h3 className="text-cyan-300 mb-2">📊 ERP</h3>
              <p className="text-slate-200 text-sm">Zoho Books / QuickBooks para gestión administrativa y financiera</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <h3 className="text-cyan-300 mb-2">👥 CRM</h3>
              <p className="text-slate-200 text-sm">HubSpot CRM para gestión de turistas y proveedores</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <h3 className="text-cyan-300 mb-2">💬 Comunicación</h3>
              <p className="text-slate-200 text-sm">Microsoft Teams + Slack + Notion para colaboración</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}