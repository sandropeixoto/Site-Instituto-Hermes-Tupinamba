import { motion } from 'framer-motion';
import { BookOpen, Palette, Leaf, GraduationCap } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const services = [
  {
    title: 'Educação e Pesquisa',
    description: 'Promoção da pesquisa e inovação tecnológica como pilares essenciais para o desenvolvimento humano.',
    icon: <BookOpen className="text-brand-blue" strokeWidth={1.5} />,
  },
  {
    title: 'Cultura e Arte',
    description: 'Incentivo e valorização das diversas expressões culturais locais, fortalecendo a identidade paraense.',
    icon: <Palette className="text-brand-brown" strokeWidth={1.5} />,
  },
  {
    title: 'Meio Ambiente',
    description: 'Iniciativas focadas na preservação dos recursos naturais e desenvolvimento sustentável na Amazônia.',
    icon: <Leaf className="text-brand-blue" strokeWidth={1.5} />,
  },
  {
    title: 'Formação Profissional',
    description: 'Cursos, oficinas e treinamentos para ampliar horizontes e competências no mercado de trabalho.',
    icon: <GraduationCap className="text-brand-brown" strokeWidth={1.5} />,
  }
];

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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative bg-pastel-blue">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4"
          >
            O Que <span className="text-brand-blue">Fazemos</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Atuamos em três frentes fundamentais para a construção de uma sociedade mais justa e consciente.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard className="hover:scale-105 transition-transform duration-500 h-full">
                <div className="w-14 h-14 rounded-2xl bg-white/50 flex items-center justify-center mb-6 shadow-inner">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
