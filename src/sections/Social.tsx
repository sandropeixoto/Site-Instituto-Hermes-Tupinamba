import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const images = [
  "./Img-insta01.jpg",
  "./Img-insta02.jpg"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Social() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-pastel-brown">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6"
        >
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-2">Siga no Instagram</h2>
            <p className="text-slate-600">Acompanhe nossas ações e eventos em tempo real.</p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-brand-blue font-bold group"
          >
            <span>@inst.hermestupinamba</span>
            <Instagram size={20} className="group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
          </a>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 gap-4 max-w-2xl mx-auto"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="aspect-square rounded-2xl overflow-hidden glass group cursor-pointer"
            >
              <img
                src={img}
                alt="Feed Instagram"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 brightness-90 group-hover:brightness-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-blue/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white" strokeWidth={1.5} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
