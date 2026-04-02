import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Dumbbell, 
  Target, 
  Users, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Instagram, 
  Mail, 
  MapPin,
  Star,
  Quote,
  Menu,
  X
} from "lucide-react";
import { useRef, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Método", href: "#metodo" },
    { name: "Sobre", href: "#sobre" },
    { name: "Resultados", href: "#depoimentos" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-24 md:h-24 flex items-center justify-between relative">
        <div className="h-20 md:h-16 flex items-center absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
          <img 
            src="https://i.ibb.co/cSq7sHGt/Sem-nome-60-x-90-px.png" 
            alt="João Santos Logo" 
            className="h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors">{link.name}</a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block bg-white text-black px-6 py-2.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300">
            Agendar Avaliação
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark border-b border-white/5 lg:hidden"
          >
            <nav className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-display font-bold uppercase tracking-widest text-white/70 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="sm:hidden bg-primary text-white px-6 py-4 rounded-full text-sm font-bold uppercase tracking-widest">
                Agendar Avaliação
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Personal Trainer"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-left w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl pt-20"
        >
          <span className="inline-block text-primary text-[10px] sm:text-sm font-bold uppercase tracking-[0.3em] mb-4 sm:mb-6">
            Elite Performance Training
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-display font-extrabold tracking-tighter leading-[1.1] mb-6 sm:mb-8">
            TRANSFORME SEU <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">CORPO EM ELITE</span>
          </h1>
          <p className="text-base sm:text-lg text-white/60 mb-8 sm:mb-10 leading-relaxed max-w-xl">
            Treinamento personalizado de alto nível para quem busca resultados extraordinários em emagrecimento, hipertrofia e força.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto group bg-primary text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)]"
            >
              Começar Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <button className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-white/80 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm sm:text-base">
              Ver Resultados
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-white"></div>
      </motion.div>
    </section>
  );
};

const Marquee = () => {
  return (
    <div className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-16 px-8">
            <span className="text-4xl md:text-6xl font-display font-black text-white/10 uppercase italic">Emagrecimento</span>
            <span className="text-4xl md:text-6xl font-display font-black text-primary/20 uppercase italic">Hipertrofia</span>
            <span className="text-4xl md:text-6xl font-display font-black text-white/10 uppercase italic">Força</span>
            <span className="text-4xl md:text-6xl font-display font-black text-primary/20 uppercase italic">Performance</span>
            <span className="text-4xl md:text-6xl font-display font-black text-white/10 uppercase italic">Elite</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const BentoGrid = () => {
  const containerRef = useRef(null);

  return (
    <section id="metodo" className="py-20 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold tracking-tighter mb-4 sm:mb-6">
          MÉTODO <span className="text-primary">EXCLUSIVO</span>
        </h2>
        <p className="text-white/50 max-w-xl mx-auto text-sm sm:text-base">
          Uma abordagem científica e personalizada para garantir que cada gota de suor se transforme em resultado real.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
        {/* Main Card */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="md:col-span-2 bg-card border border-white/5 rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
              <Target className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-3xl font-display font-bold mb-4">Treinamento Personalizado</h3>
            <p className="text-white/60 max-w-md">
              Cada treino é desenhado especificamente para sua biomecânica, objetivos e rotina. Sem fichas genéricas, apenas o que funciona para você.
            </p>
          </div>
          <div className="relative z-10 flex items-center gap-4 mt-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-card overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Client" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-white/40">+200 alunos transformados</span>
          </div>
        </motion.div>

        {/* Small Card 1 */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-white/5 rounded-3xl p-10 flex flex-col items-center text-center group"
        >
          <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
            <Calendar className="text-white group-hover:text-primary w-8 h-8 transition-colors" />
          </div>
          <h3 className="text-2xl font-display font-bold mb-4">Acompanhamento 24/7</h3>
          <p className="text-white/60 text-sm">
            Suporte contínuo via WhatsApp para ajustes de dieta, dúvidas e motivação constante.
          </p>
        </motion.div>

        {/* Small Card 2 */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-white/5 rounded-3xl p-10 flex flex-col items-center text-center group"
        >
          <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
            <Users className="text-white group-hover:text-primary w-8 h-8 transition-colors" />
          </div>
          <h3 className="text-2xl font-display font-bold mb-4">Consultoria Online</h3>
          <p className="text-white/60 text-sm">
            Treine onde estiver com a mesma qualidade do presencial através do nosso app exclusivo.
          </p>
        </motion.div>

        {/* Wide Card */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 bg-gradient-to-r from-primary to-[#166534] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-white">
            <h3 className="text-3xl font-display font-bold mb-4">Pronto para o próximo nível?</h3>
            <p className="text-white/80 max-w-sm">
              Agende sua avaliação física completa e descubra seu verdadeiro potencial.
            </p>
          </div>
          <button className="bg-white text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-dark hover:text-white transition-all">
            Agendar Agora
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          viewport={{ once: true }}
          className="relative px-4 sm:px-0"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
              alt="João Santos"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-primary p-6 md:p-8 rounded-3xl">
            <div className="text-2xl md:text-4xl font-display font-black mb-1">10+</div>
            <div className="text-[8px] md:text-xs uppercase tracking-widest font-bold opacity-80">Anos de Experiência</div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <span className="text-primary text-xs sm:text-sm font-bold uppercase tracking-widest mb-4 sm:mb-6 block">O Especialista</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold tracking-tighter mb-6 sm:mb-8">
            JOÃO SANTOS
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
            Com mais de uma década dedicada à transformação física, meu foco não é apenas o exercício, mas a mudança de mentalidade e estilo de vida. Especialista em fisiologia do exercício e nutrição esportiva.
          </p>
          <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            {[
              "Certificação Internacional em Personal Training",
              "Especialista em Biomecânica Avançada",
              "Consultoria para Atletas de Alta Performance",
              "Metodologia Própria de Emagrecimento Acelerado"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white/80 text-sm sm:text-base">
                <CheckCircle2 className="text-primary w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full sm:w-auto border border-white/20 hover:border-primary hover:text-primary px-8 sm:px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all text-sm sm:text-base">
            Conhecer Trajetória
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ricardo Mendes",
      role: "Empresário",
      text: "Em 6 meses com o João, perdi 15kg e ganhei uma disposição que nunca tive aos 40 anos. O atendimento é realmente diferenciado.",
      image: "https://i.pravatar.cc/150?u=ricardo"
    },
    {
      name: "Ana Beatriz",
      role: "Advogada",
      text: "A consultoria online superou minhas expectativas. Os treinos são intensos e o suporte é impecável. Melhor investimento que fiz.",
      image: "https://i.pravatar.cc/150?u=ana"
    },
    {
      name: "Carlos Silva",
      role: "Atleta Amador",
      text: "Buscava performance e encontrei a ciência por trás do treino. João é um mestre em biomecânica.",
      image: "https://i.pravatar.cc/150?u=carlos"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 md:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold tracking-tighter mb-4">
              PROVA <span className="text-primary">REAL</span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base">O que dizem aqueles que aceitaram o desafio.</p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex text-primary">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />)}
            </div>
            <span className="font-bold text-sm sm:text-base">4.9/5.0</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-white/5 p-8 md:p-10 rounded-3xl relative"
            >
              <Quote className="absolute top-6 right-6 md:top-8 md:right-8 text-white/5 w-10 h-10 md:w-12 md:h-12" />
              <p className="text-white/70 italic mb-6 md:mb-8 relative z-10 text-sm sm:text-base leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-sm sm:text-base">{t.name}</h4>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 md:py-20 border-t border-white/5 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12 md:mb-20">
          <div className="sm:col-span-2">
            <div className="h-32 md:h-24 flex items-center justify-center md:justify-start mb-6 md:mb-8">
              <img 
                src="https://i.ibb.co/cSq7sHGt/Sem-nome-60-x-90-px.png" 
                alt="João Santos Logo" 
                className="h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-white/40 max-w-sm mb-8 text-sm sm:text-base">
              Elevando o padrão do treinamento personalizado. Resultados reais através de ciência e dedicação extrema.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold uppercase tracking-widest mb-6 text-sm">Contato</h4>
            <ul className="space-y-4 text-white/50 text-xs sm:text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                São Paulo, SP - Jardins
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                contato@joaosantos.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase tracking-widest mb-6 text-sm">Links</h4>
            <ul className="space-y-4 text-white/50 text-xs sm:text-sm">
              <li><a href="#inicio" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#metodo" className="hover:text-primary transition-colors">Método</a></li>
              <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] sm:text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold text-center md:text-left">
          <div>© 2026 JOÃO SANTOS | PERSONAL TRAINER</div>
          <div className="flex gap-6 sm:gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <main className="bg-dark text-white selection:bg-primary selection:text-white">
      <Header />
      <Hero />
      <Marquee />
      <BentoGrid />
      <About />
      <Testimonials />
      <Footer />
      
      {/* Custom Styles for Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </main>
  );
}
