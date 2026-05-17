import { motion } from 'framer-motion';
import { Instagram, MapPin, Mail, Phone } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import GlassCard from '../components/GlassCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Vamos <span className="text-brand-blue">Conversar</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Dúvidas, sugestões ou parcerias? Entre em contato e faça parte do nosso projeto.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-12"
        >
          <motion.div variants={fadeUpVariants} className="lg:col-span-1 space-y-8">
            <GlassCard className="h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Informações</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Localização</p>
                    <p className="text-slate-600">Belém, Pará - Brasil</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-brown/10 flex items-center justify-center text-brand-brown shrink-0">
                    <Mail size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">E-mail</p>
                    <p className="text-slate-600">contato@iht.ong</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue/80 shrink-0">
                    <Phone size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Telefone</p>
                    <p className="text-slate-600">(91) 98116-0626</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-xs">Redes Sociais</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-600 hover:text-brand-blue transition-all hover:scale-110">
                    <Instagram size={20} strokeWidth={1.5} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-600 hover:text-brand-blue transition-all hover:scale-110">
                    <span className="font-bold">in</span>
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div variants={fadeUpVariants} className="lg:col-span-2">
            <GlassCard>
              <ContactForm />
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
