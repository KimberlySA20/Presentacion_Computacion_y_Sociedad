import { useState } from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Portada } from '../slides/Portada';
import { Modulo1 } from '../slides/Modulo1';
import { Modulo2 } from '../slides/Modulo2';
import { Modulo3 } from '../slides/Modulo3';
import { Modulo4 } from '../slides/Modulo4';
import { Modulo5 } from '../slides/Modulo5';
import { Modulo6 } from '../slides/Modulo6';
import { Modulo7 } from '../slides/Modulo7';
import { Conclusiones } from '../slides/Conclusiones';

const slides = [
  { component: Portada, title: 'Portada' },
  { component: Modulo1, title: 'Módulo 1: Empresa' },
  { component: Modulo2, title: 'Módulo 2: Tipo de Sociedad' },
  { component: Modulo3, title: 'Módulo 3: Formalización' },
  { component: Modulo4, title: 'Módulo 4: Estructura Organizacional' },
  { component: Modulo5, title: 'Módulo 5: Cálculo de Planilla' },
  { component: Modulo6, title: 'Módulo 6: Presupuesto Total' },
  { component: Modulo7, title: 'Módulo 7: Tecnología' },
  { component: Conclusiones, title: 'Conclusiones' },
];

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col overflow-hidden">
      {/* Progress Bar */}
      <div className="h-1.5 bg-slate-800 flex-shrink-0">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 relative overflow-hidden min-h-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-700 px-4 sm:px-6 py-3 sm:py-4 flex-shrink-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-800 hover:bg-slate-700 disabled:bg-slate-800/50 disabled:cursor-not-allowed rounded-lg transition-colors disabled:opacity-50 text-white text-sm sm:text-base"
          >
            <ChevronLeft className="size-4 sm:size-5" />
            <span className="hidden sm:inline">Anterior</span>
          </button>

          {/* Slide Indicators */}
          <div className="flex items-center gap-1 sm:gap-2 flex-1 justify-center overflow-x-auto px-2">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`min-w-1.5 h-1.5 sm:min-w-2 sm:h-2 rounded-full transition-all flex-shrink-0 ${
                  index === currentSlide
                    ? 'bg-blue-500 w-4 sm:w-8'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                title={slide.title}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-800/50 disabled:cursor-not-allowed rounded-lg transition-colors disabled:opacity-50 text-white text-sm sm:text-base"
          >
            <span className="hidden sm:inline">Siguiente</span>
            <ChevronRight className="size-4 sm:size-5" />
          </button>
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-1 sm:mt-2">
          <span className="text-slate-400 text-xs sm:text-sm">
            {currentSlide + 1} / {slides.length} — <span className="hidden sm:inline">{slides[currentSlide].title}</span><span className="sm:hidden">Slide {currentSlide + 1}</span>
          </span>
        </div>
      </div>
    </div>
  );
}