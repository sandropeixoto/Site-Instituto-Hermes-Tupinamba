import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/20 blur-[120px] rounded-full animate-mesh" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-brown/20 blur-[120px] rounded-full animate-mesh" style={{ animationDelay: '-5s' }} />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-sm font-bold mb-6 border border-brand-blue/20">
            <Sparkles size={16} strokeWidth={1.5} />
            <span>Transformando Realidades no Pará</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
            Inovação, Cultura e <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-brown">Educação.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
            O Instituto Hermes Tupinambá fomenta oportunidades para jovens e adultos, 
            promovendo o desenvolvimento humano e a consciência socioambiental no coração da Amazônia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="px-8 py-4 bg-brand-blue text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-brand-blue/20 hover:bg-brand-blue/90 hover:scale-105 active:scale-95 transition-all"
            >
              Nossos Projetos
              <ArrowRight size={20} strokeWidth={1.5} />
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-white/50 backdrop-blur-sm border border-white/50 text-slate-900 rounded-2xl font-bold text-lg flex items-center justify-center hover:bg-white transition-all shadow-lg"
            >
              Conheça o Instituto
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative z-10 glass rounded-3xl p-4 md:p-8 aspect-square flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-brown/20 mix-blend-overlay" />
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
              alt="Educação e Futuro"
              className="w-full h-full object-cover rounded-2xl shadow-inner"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Decorative Floating Cards */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 md:-right-2 lg:-right-6 glass p-4 rounded-2xl shadow-2xl hidden md:block z-30"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-brown/10 rounded-full flex items-center justify-center text-brand-brown">
                <Sparkles size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500">Impacto Social</p>
                <p className="text-sm font-black text-slate-900">+500 Vidas</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-16 md:-left-2 lg:-left-6 glass p-4 rounded-2xl shadow-2xl hidden md:block z-30"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue">
                <Sparkles size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500">Educação</p>
                <p className="text-sm font-black text-slate-900">Pesquisa & Inovação</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
