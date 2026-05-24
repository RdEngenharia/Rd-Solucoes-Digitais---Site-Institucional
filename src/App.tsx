/**
 * Landing Page RD Soluções Digitais
 * Foco: Venda de Sites Profissionais (R$ 600,00)
 * Estilo: Dark Mode / Tech / Alta Conversão
 */

import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Database, 
  Layout, 
  MessageCircle, 
  MousePointer2, 
  Rocket, 
  ShieldCheck, 
  Smartphone, 
  Zap,
  Globe,
  Monitor,
  Shield
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  // Variantes de animação para reutilização
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Número de WhatsApp configurado (73) 99131-7853
  const whatsappNumber = "5573991317853";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá! Vim pelo site da RD Soluções e gostaria de um orçamento para meu site.`;

  // CAMINHO DA SUA LOGO PERSONALIZADA:
  // Agora está configurado por padrão! 
  // Basta salvar seu arquivo de logotipo com o nome "logo.png" na pasta "public/assets/".
  // Se o arquivo existir, o site usará ele automaticamente. Caso contrário, usará o ícone moderno em gradiente CSS!
  const logoImageUrl = "/assets/logo.png"; 

  // Lista de projetos reais para o portfólio (subdomínios)
  const portfolioProjects = [
    { id: 1, title: "Check-In Online", type: "Sistema Web / SaaS", link: "https://checkin.rdhomologacao.com.br", image: "/assets/p-checkin.jpg" },
    { id: 2, title: "RD Engenharia - Homologação", type: "Portal Institucional", link: "https://www.rdhomologacao.com.br/", image: "/assets/p-engenharia.jpg" },
    { id: 3, title: "Agenda & Calendário", type: "Plataforma de Agendamentos", link: "https://calendario.rdhomologacao.com.br/", image: "/assets/p-agenda.jpg" },
    { id: 4, title: "Energia Solar Inteligente", type: "Aceleração & Leads", link: "https://solar.rdsolucoes.com.br", image: "/assets/p-solar.jpg" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-emerald-500/30 selection:text-white">
      {/* Efeito de profundidade radial */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-glow-radial" />
      </div>

      {/* Navbar Minimalista */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {(logoImageUrl && !logoError) ? (
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src={logoImageUrl} 
                alt="RD Logo" 
                onError={() => setLogoError(true)}
                className="h-12 md:h-14 w-auto object-contain rounded-lg"
              />
            ) : (
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                <span className="text-slate-900 font-black text-xl">RD</span>
              </motion.div>
            )}
            <span className="font-bold text-xl tracking-tight hidden sm:block">RD Soluções <span className="text-cyan-400">Digitais</span></span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#beneficios" className="text-sm font-medium text-white/60 hover:text-cyan-400 transition-colors">Benefícios</a>
            <a href="#portfolio-real" className="text-sm font-medium text-white/60 hover:text-cyan-400 transition-colors">Portfólio</a>
            <a href="#solucoes" className="text-sm font-medium text-white/60 hover:text-cyan-400 transition-colors">Soluções</a>
            <a href="#processo" className="text-sm font-medium text-white/60 hover:text-cyan-400 transition-colors">Processo</a>
            <button 
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="bg-emerald-500 text-slate-950 px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all active:scale-95 emerald-glow"
            >
              Falar com Especialista
            </button>
          </div>

          <button 
            className="md:hidden p-2 text-white/70"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
           <Layout className="w-6 h-6 hover:text-cyan-400 transition-colors" />
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl pt-24 px-6 md:hidden flex flex-col gap-8 text-2xl font-bold"
        >
          <a href="#beneficios" onClick={() => setIsMenuOpen(false)}>Benefícios</a>
          <a href="#portfolio-real" onClick={() => setIsMenuOpen(false)}>Portfólio</a>
          <a href="#solucoes" onClick={() => setIsMenuOpen(false)}>Soluções</a>
          <a href="#processo" onClick={() => setIsMenuOpen(false)}>Processo</a>
          <button 
            onClick={() => window.open(whatsappUrl, '_blank')}
            className="bg-emerald-500 text-slate-950 py-5 rounded-2xl shadow-lg shadow-emerald-500/20 font-black"
          >
            Falar com Especialista
          </button>
        </motion.div>
      )}

      {/* Hero Section: A Dor e a Proposta de Valor */}
      <section className="relative pt-48 pb-32 px-6 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <ShieldCheck className="w-4 h-4" /> Presença Digital Profissional
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-[1.05] mb-8 text-white">
              Pare de perder clientes para a concorrência por <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">não ter um site profissional.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Tire a sua empresa do invisível. Criamos a sua Landing Page ou Site Institucional de alta velocidade, totalmente otimizado para o celular e pronto para atrair novos clientes pelo WhatsApp. <span className="text-white">Pronto em tempo recorde.</span>
            </p>

            <div className="flex flex-col items-center lg:items-start gap-6">
              <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-3xl flex items-center gap-4 group hover:bg-white/10 transition-colors">
                <div className="text-3xl font-black text-emerald-400">R$ 600</div>
                <div className="h-10 w-px bg-white/10" />
                <div className="text-left">
                  <div className="text-xs uppercase tracking-widest text-white/40">Investimento Único</div>
                  <div className="text-sm font-bold text-white/80 italic">Seu site profissional hoje</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <button 
                  onClick={() => window.open(whatsappUrl, '_blank')}
                  className="bg-emerald-500 text-slate-950 px-10 py-5 rounded-full font-black text-xl flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all emerald-glow group"
                >
                  <Globe className="w-6 h-6" />  🌐 Criar Meu Site Agora 
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex-1 relative hidden lg:block"
          >
            <div className="glass-card rounded-[3rem] p-4 shadow-2xl relative">
              {/* IMAGEM HERO PRINCIPAL: Sugestão de nome -> public/assets/hero-bg.jpg */}
              <img 
                src="/assets/hero-bg.jpg" 
                alt="Digital Presence" 
                className="rounded-[2.5rem] opacity-80 group-hover:opacity-100 transition-all duration-700 w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent rounded-[2.5rem]" />
              <div className="absolute bottom-12 left-12 right-12">
                <div className="glass-card p-6 rounded-3xl border-cyan-500/30">
                  <div className="flex items-center gap-4 mb-3">
                    <Zap className="w-6 h-6 text-cyan-400" />
                    <div className="font-bold text-lg text-white">Velocidade RD Homologação</div>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "98%" }}
                      transition={{ duration: 2, delay: 1 }}
                      className="h-full bg-cyan-400"
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] uppercase tracking-tighter text-white/40 font-mono">
                    <span>Performance: 98/100</span>
                    <span>Load: 0.8s</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção Portfólio Real (Subdomínios) */}
      <section id="portfolio-real" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Projetos <span className="text-emerald-400">Homologados</span></h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed">
              Clique nos cards abaixo para visualizar exemplos reais de sites e sistemas desenvolvidos com nosso padrão de qualidade.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, idx) => (
              <motion.div 
                key={project.id}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="glass-card rounded-[2.5rem] overflow-hidden group hover:border-cyan-500/30 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  {/* IMAGENS PORTFÓLIO: Salvar em public/assets/p-advocacia.jpg, p-agendamento.jpg, etc */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-cyan-400 border border-white/5">
                    {project.type}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <button 
                    onClick={() => window.open(project.link, '_blank')}
                    className="w-full bg-white/5 border border-white/10 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 transition-all flex items-center justify-center gap-2"
                  >
                    Ver Projeto <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Benefícios: A Dor do Cliente */}
      <section id="beneficios" className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Por que você <span className="text-cyan-400">precisa</span> de um site?</h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg">A falta de uma presença profissional não é apenas um detalhe, é prejuízo direto no seu bolso.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Passar Confiança",
                desc: "Páginas amadoras ou a falta de um site afastam o cliente. Um site próprio transmite autoridade e seriedade imediata para o seu negócio.",
                icon: <Shield className="w-8 h-8" />,
                color: "text-blue-400"
              },
              {
                title: "Vendas 24 Horas",
                desc: "Seu negócio aberto e recebendo contatos de clientes em potencial mesmo quando você estiver descansando ou focado em outras tarefas.",
                icon: <Clock className="w-8 h-8" />,
                color: "text-emerald-400"
              },
              {
                title: "Foco no Celular",
                desc: "Mais de 80% dos clientes buscam serviços pelo smartphone. Nossos layouts são ultra leves, rápidos e perfeitos para telas pequenas.",
                icon: <Smartphone className="w-8 h-8" />,
                color: "text-cyan-400"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.2 }}
                className="glass-card p-10 rounded-[2.5rem] hover:bg-white/5 hover:border-cyan-500/20 transition-all group"
              >
                <div className={`mb-8 ${item.color} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Soluções: Portfólio & Além */}
      <section id="solucoes" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">Muito além de um <br /> <span className="text-cyan-400">site institucional.</span></h2>
              <p className="text-white/40 text-lg">Criamos soluções que automatizam suas vendas e eliminam gargalos operacionais.</p>
            </div>
            <div className="hidden lg:block text-white/20 font-mono text-sm tracking-widest uppercase">
              RD // TECH SOLUTIONS
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              {...fadeInUp}
              className="glass-card p-10 rounded-[3rem] group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-cyan-500/10 p-4 rounded-2xl text-cyan-400">
                  <Monitor className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-white">Landing Pages</h3>
              </div>
              <p className="text-white/40 text-lg mb-8 leading-relaxed">
                Páginas focadas 100% em conversão. Ideais para campanhas de tráfego pago (Google e Meta Ads) com carregamento instantâneo.
              </p>
              <div className="w-full h-48 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden transition-all">
                 {/* IMAGEM SOLUÇÃO LP: Sugestão de nome -> public/assets/lp-solution.jpg */}
                 <img 
                  src="/assets/lp-solution.jpg" 
                  alt="LP Design" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="glass-card p-10 rounded-[3rem] group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full" />
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-emerald-500/10 p-4 rounded-2xl text-emerald-400">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-white">Sistemas Web</h3>
              </div>
              <p className="text-white/40 text-lg mb-8 leading-relaxed">
                Precisa de algo mais avançado? Desenvolvemos geradores de orçamentos automáticos, painéis comerciais e soluções que matam suas planilhas manuais.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 rounded-2xl text-center border-white/5">
                  <div className="text-emerald-400 font-bold mb-1">Check-in</div>
                  <div className="text-[10px] text-white/30 uppercase tracking-widest">Automação</div>
                </div>
                <div className="glass-card p-6 rounded-2xl text-center border-white/5">
                  <div className="text-cyan-400 font-bold mb-1">Orçamentos</div>
                  <div className="text-[10px] text-white/30 uppercase tracking-widest">Painéis</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção Como Trabalhamos: Segurança e Garantia */}
      <section id="processo" className="py-32 px-6 bg-emerald-500/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20 text-center lg:text-left mx-auto lg:mx-0">
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-white">Transparência <br /> <span className="text-emerald-400">do início ao fim.</span></h2>
            <p className="text-white/40 text-lg">Na RD Soluções, eliminamos o seu risco. Pagamento justo e focado na sua satisfação total.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Alinhamento Estratégico",
                desc: "Entendemos seu público, sua necessidade e o objetivo principal do seu negócio para criar algo que converte."
              },
              {
                step: "02",
                title: "Homologação (Teste)",
                desc: "Nós construímos o site e te enviamos um link exclusivo de testes para você mexer e avaliar direto do seu celular antes de ir ao ar."
              },
              {
                step: "03",
                title: "Aprovação e Entrega",
                desc: "Você só realiza o pagamento FINAL quando o projeto estiver 100% aprovado por você. Sem pegadinhas, sem riscos."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 glass-card rounded-[2.5rem] border-white/5">
                <div className="text-4xl font-black text-white/10 mb-6 font-mono tracking-tighter">{item.step}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-white/40 leading-relaxed text-sm">{item.desc}</p>
                {idx < 2 && (
                  <div className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 text-cyan-500">
                    <ArrowRight className="w-8 h-8 opacity-20" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-2xl border-emerald-500/20">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-bold text-white/50">Garantia RD: Satisfação ou seu dinheiro de volta.</span>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-16 md:p-24 rounded-[4rem] bg-gradient-to-br from-white/5 to-white/[0.01] border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <h2 className="text-4xl md:text-7xl font-black mb-10 text-white">Agilidade. Confiança. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Resultados.</span></h2>
            <p className="text-xl text-white/40 mb-16 max-w-xl mx-auto">
              Tenha seu site profissional rodando e trazendo clientes por apenas R$ 600. Vamos começar?
            </p>
            <button 
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="bg-emerald-500 text-slate-950 px-12 py-6 rounded-full font-black text-xl hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-all active:scale-95 duration-500 inline-flex items-center gap-4 emerald-glow"
            >
              <MessageCircle className="w-7 h-7" />  🌐 Criar Meu Site Agora 
            </button>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="py-16 border-t border-white/5 relative z-10 bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            {(logoImageUrl && !logoError) ? (
              <img 
                src={logoImageUrl} 
                alt="RD Logo" 
                onError={() => setLogoError(true)}
                className="h-10 md:h-12 w-auto object-contain rounded-lg"
              />
            ) : (
              <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center text-slate-900 font-black text-lg">RD</div>
            )}
            <div className="flex flex-col items-start leading-none">
              <span className="font-bold text-white text-lg">RD Soluções</span>
              <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-black">Digitais</span>
            </div>
          </div>
          
          <div className="flex gap-10 text-xs font-bold text-white/30 uppercase tracking-widest">
            <a href="#beneficios" className="hover:text-cyan-400">Benefícios</a>
            <a href="#portfolio-real" className="hover:text-cyan-400">Portfólio</a>
            <a onClick={() => window.open(whatsappUrl, '_blank')} className="hover:text-cyan-400 cursor-pointer">WhatsApp</a>
          </div>

          <div className="text-[10px] text-white/20 font-mono">
            © {new Date().getFullYear()} RD SOLUCOES // CNPJ: 44.367.932/0001-42
          </div>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <motion.a 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        className="fixed bottom-10 right-10 z-50 bg-emerald-500 text-slate-950 p-5 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.4)] group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-5 bg-white text-slate-950 px-5 py-3 rounded-2xl text-xs font-black shadow-2xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap">
          Falar com RODRIGUES (RD)
        </span>
      </motion.a>
    </div>
  );
}

