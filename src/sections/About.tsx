import { motion } from 'framer-motion';

const stats = [
  { label: 'Fundação', value: '2022' },
  { label: 'Projetos', value: '12+' },
  { label: 'Cidades', value: 'Belém/PA' },
  { label: 'Impacto', value: 'Regional' }
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-20 h-2 bg-brand-blue rounded-full mb-8" />
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
            Legado e Compromisso com o <span className="text-brand-blue">Desenvolvimento Social.</span>
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Fundado em 2022, o Instituto Hermes Tupinambá homenageia o legado do jurista e professor Hermes Tupinambá, cuja trajetória foi marcada pela excelência acadêmica e compromisso social.
            </p>
            <p>
              Idealizado por seu filho, Nelson Tupinambá, o Instituto atua na Amazônia promovendo a educação de qualidade, a valorização cultural e a sustentabilidade como valores inarredáveis.
            </p>
            <p>
              Nosso propósito é conectar saberes e impulsionar iniciativas que transformam realidades e geram novas oportunidades para o povo paraense.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl font-black text-brand-blue mb-1">{stat.value}</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative lg:h-[600px]"
        >
          <div className="glass rounded-[2rem] h-full overflow-hidden shadow-2xl relative z-10">
             <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" 
              alt="Sobre o Instituto"
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
            />
          </div>
          {/* Decorative shapes */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-brown/10 rounded-full blur-3xl" />
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
