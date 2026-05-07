import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 pb-12 px-6 relative overflow-hidden bg-brand-blue text-slate-300">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white border border-brand-brown rounded-xl flex items-center justify-center overflow-hidden p-1">
                <img src="./logo-simbolo-IHT.png" alt="Logo Instituto Hermes Tupinambá" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat font-bold text-[10px] tracking-[0.2em] text-white/70 uppercase leading-none mb-1">
                  Instituto
                </span>
                <span className="font-cinzel font-bold text-lg text-white uppercase leading-none tracking-wide">
                  <span className="text-[22px]">H</span>ermes <span className="text-[22px]">T</span>upinambá
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Transformando o futuro através da educação, cultura e consciência socioambiental no Estado do Pará.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-brown transition-colors text-white">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-brown transition-colors text-white">
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-brown transition-colors text-white">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Navegação</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">O que fazemos</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="border-t border-white/10 pt-12 flex flex-col items-center gap-8"
        >
          <p className="text-xs text-slate-500 text-center">
            &copy; {currentYear} Instituto Hermes Tupinambá. Todos os direitos reservados. CNPJ: 00.000.000/0001-00
          </p>
          
          {/* ASSINATURA OBRIGATÓRIA */}
          <div className="flex justify-center">
            <a 
              href="https://nano.net.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center"
            >
              <span className="font-bold tracking-wider text-sm transition-all duration-300 text-brand-brown group-hover:text-[#b3804d] group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(153,102,51,0.5)]">
                Desenvolvido por NANO
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
