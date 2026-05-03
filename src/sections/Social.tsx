import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1577896851231-70ef14603e80?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544648313-2719f395322a?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522661060204-85a7cbc66a7f?q=80&w=2072&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
];

export default function Social() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-pastel-brown">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
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
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square rounded-2xl overflow-hidden glass group cursor-pointer"
            >
              <img
                src={img}
                alt="Feed Instagram"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-brand-blue/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white" strokeWidth={1.5} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
