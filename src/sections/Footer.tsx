import { Instagram, Linkedin, Facebook, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 pb-12 px-6 relative overflow-hidden bg-brand-blue text-slate-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white border border-brand-brown rounded-xl flex items-center justify-center overflow-hidden p-1">
                <img src="/logo-simbolo-IHT.png" alt="Logo Instituto Hermes Tupinambá" className="w-full h-full object-contain" />
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
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Navegação</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">O que fazemos</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Institucional</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Transparência</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Editais</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Relatórios Anuais</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Parceiros</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Newsletter</h4>
            <p className="text-xs mb-4 text-slate-400">Receba atualizações sobre nossas iniciativas.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="bg-white/10 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-brand-brown outline-none text-white placeholder-white/50"
              />
              <button className="bg-brand-brown text-white p-2 rounded-lg hover:bg-[#a67340] transition-colors">
                <Heart size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col items-center gap-8">
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
        </div>
      </div>
    </footer>
  );
}
