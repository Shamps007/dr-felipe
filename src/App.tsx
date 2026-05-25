import { Award, BookOpen, Building2, ChevronRight, MessageCircle, Stethoscope, Microscope, ArrowRight, Star } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/30 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-white/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-serif font-medium text-white tracking-wide">
            Smart <span className="font-bold text-accent">Medicine</span>
          </div>
          <div className="hidden md:flex items-center space-x-10 text-xs uppercase tracking-widest font-medium text-secondary">
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
            <a href="#formacao" className="hover:text-white transition-colors">Formação</a>
            <a href="#clinicas" className="hover:text-white transition-colors">Clínicas</a>
          </div>
          <a href="https://api.whatsapp.com/send/?phone=554831971700" target="_blank" rel="noreferrer" className="bg-surface border border-white/10 text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-widest hover:border-accent hover:text-accent transition-colors rounded-full">
            Agendar
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="pt-4">
            <div>
              <span className="block text-xs uppercase tracking-widest font-semibold text-accent mb-6">
                Medicina da Dor
              </span>
              <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.15]">
                Alívio da Dor <br />
                <span className="text-accent">com Precisão</span>
              </h1>
            </div>
            
            <p className="text-xl text-secondary font-light mt-6 tracking-wide">
              Recuperação funcional de longo prazo
            </p>
            
            <blockquote className="border-l-[2px] border-accent/70 pl-6 my-10 py-2">
              <p className="text-secondary italic leading-relaxed text-lg font-light">
                "Nosso objetivo não é apenas reduzir a dor temporariamente, mas restaurar função, qualidade de vida e capacidade física a longo prazo."
              </p>
            </blockquote>
            
            <div className="flex gap-4">
              <a href="https://api.whatsapp.com/send/?phone=554831971700" target="_blank" rel="noreferrer" className="bg-accent text-white px-8 py-4 inline-flex items-center justify-center space-x-3 hover:bg-blue-600 transition-colors group w-fit rounded-lg">
                <MessageCircle className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Agendar Consulta</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="w-full max-w-md mx-auto md:ml-auto">
            <div className="bg-surface p-10 border border-white/5 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
              <div className="mb-8 border-b border-white/10 pb-6">
                <h3 className="text-2xl font-serif text-white mb-3">Agende sua Avaliação</h3>
                <p className="text-sm text-secondary font-light leading-relaxed">
                  Preencha os dados e nossa equipe entrará em contato via WhatsApp.
                </p>
              </div>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-secondary mb-2">
                    Nome Completo
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-background border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors text-white rounded-lg"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-widest text-secondary mb-2">
                    WhatsApp
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full bg-background border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors text-white rounded-lg"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-secondary mb-2">
                    Principal Queixa
                  </label>
                  <textarea 
                    id="message"
                    rows={3}
                    className="w-full bg-background border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors text-white resize-none rounded-lg"
                    placeholder="Descreva brevemente..."
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full bg-surface border border-accent text-accent px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors mt-4 flex justify-center items-center space-x-2 rounded-lg">
                  <span>Solicitar Contato</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Oferecidos */}
      <section id="servicos" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-16">
            <div className="w-8 h-[2px] bg-accent mr-4"></div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-white">Serviços Oferecidos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Medicina Regenerativa Musculo-Esquelética",
              "Tratamento de Lesões Articulares",
              "Lesões Musculares e Tendíneas",
              "Tratamento de Dor Neuropática",
              "Manejo de Dor Crônica",
              "Procedimentos Guiados por Ultrassom",
              "Tratamento de Dor Pélvica",
              "Tratamento de Dor Cervical, Torácica e Lombar",
              "Tratamento de Dor Complexa Regional"
            ].map((service, index) => (
              <div key={index} className="bg-surface border border-white/5 p-8 rounded-xl hover:bg-white/5 transition-colors">
                <div className="w-2 h-2 rounded-full bg-accent mb-6"></div>
                <h4 className="text-white font-medium tracking-wide leading-relaxed">{service}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 px-6 border-t border-white/5 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-16">
            <div className="w-8 h-[2px] bg-accent mr-4"></div>
            <h2 className="text-sm font-bold tracking-widest uppercase text-white">Diferenciais</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface border border-white/5 p-8 rounded-xl flex items-start gap-4 hover:bg-white/5 transition-colors">
              <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-white font-light tracking-wide leading-relaxed">
                Abordagem minimamente invasiva com ultrassom de alta precisão
              </p>
            </div>
            <div className="bg-surface border border-white/5 p-8 rounded-xl flex items-start gap-4 hover:bg-white/5 transition-colors">
              <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-white font-light tracking-wide leading-relaxed">
                Foco em recuperação funcional e qualidade de vida a longo prazo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-[2px] bg-accent mr-4"></div>
                <h2 className="text-sm font-bold tracking-widest uppercase text-white">Conheça</h2>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white max-w-lg">
                Estrutura & <span className="italic text-secondary">Procedimentos</span>
              </h2>
            </div>
            <p className="text-secondary max-w-sm font-light text-sm leading-relaxed">
              Dedicação, técnica avançada e cuidado humanizado aplicados a cada paciente para o tratamento eficaz da dor e medicina regenerativa.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            <div className="overflow-hidden bg-surface border border-white/5 aspect-[4/5] rounded-xl">
              <img src="/img2.jpeg" alt="Dr. Felipe Lampa" className="w-full h-full object-cover object-[center_10%] transition-transform duration-700 hover:scale-105 opacity-90 hover:opacity-100" />
            </div>
            <div className="overflow-hidden bg-surface border border-white/5 aspect-[4/5] rounded-xl">
              <img src="/img3.jpeg" alt="Dr. Felipe atuando" className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105 opacity-90 hover:opacity-100" />
            </div>
            <div className="overflow-hidden bg-surface border border-white/5 aspect-[4/5] rounded-xl">
              <img src="/img4.jpeg" alt="Procedimento" className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105 opacity-90 hover:opacity-100" />
            </div>
            <div className="overflow-hidden bg-surface border border-white/5 aspect-[4/5] rounded-xl">
              <img src="/img6.jpeg" alt="Equipe cirúrgica" className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105 opacity-90 hover:opacity-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Excelência e Reconhecimento */}
      <section id="sobre" className="py-24 px-6 border-t border-white/5 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end border-b border-white/10 pb-8">
            <h2 className="text-4xl md:text-5xl font-serif text-white max-w-md">
              Excelência e <br /><span className="italic text-secondary">Reconhecimento</span>
            </h2>
            <p className="text-secondary max-w-sm mt-6 md:mt-0 font-light text-sm uppercase tracking-widest leading-relaxed">
              Certificações pelas principais instituições médicas
            </p>
          </div>

          <div className="grid md:grid-cols-[4fr_6fr] gap-12 md:gap-20 items-center">
            <div className="hidden md:block">
              <img src="/img1.jpeg" alt="Dr. Felipe Lampa" className="w-full aspect-[4/5] object-cover object-top rounded-2xl border border-white/5" />
            </div>
            
            <div className="space-y-12">
              <div className="flex gap-6 items-start group">
                <div className="mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-white mb-3 tracking-wide">CIPS-WIP</h3>
                  <p className="text-secondary font-light leading-relaxed">Título internacional em tratamento intervencionista guiado por ultrassom pela World Institute of Pain (Certified Interventional Pain Sonologist).</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start group">
                <div className="mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  <Stethoscope className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-white mb-3 tracking-wide">Especialista AMB</h3>
                  <p className="text-secondary font-light leading-relaxed">Título de especialista em dor pela Associação Médica Brasileira (AMB).</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start group">
                <div className="mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  <BookOpen className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-white mb-3 tracking-wide">Smart Regen</h3>
                  <p className="text-secondary font-light leading-relaxed">Coordenador do curso avançado de Terapias Intervencionistas com Ortobiológicos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formação Acadêmica e Pós-Graduações */}
      <section id="formacao" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-[2px] bg-accent mr-4"></div>
                <h2 className="text-sm font-bold tracking-widest uppercase text-white">Histórico</h2>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-8">
                Trajetória <br /><span className="italic text-secondary">Sólida</span>
              </h2>
              <p className="text-secondary text-lg font-light leading-relaxed">
                Uma base acadêmica extensa desenhada para oferecer precisão técnica em anestesiologia e o cuidado integral do paciente no tratamento da dor.
              </p>
            </div>
            <div className="pt-12 hidden lg:block">
              <img src="/img5.jpeg" alt="Dr. Felipe atuando" className="w-full aspect-[4/5] object-cover object-top rounded-2xl border border-white/5" />
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="space-y-0 border-t border-white/10">
              <TimelineItem 
                year="HC UFPR"
                title="Especialista em Anestesiologia"
                description="Hospital de Clínicas da Universidade Federal do Paraná."
              />
              <TimelineItem 
                year="CETRUS-SP"
                title="Tratamento Intervencionista da Dor"
                description="Pós-graduação especialista."
              />
              <TimelineItem 
                year="Instituto RegeneraDor"
                title="Medicina Regenerativa"
                description="Pós-graduação em São Paulo."
              />
              <TimelineItem 
                year="CETRUS-SP"
                title="Medicina do Exercício e do Esporte"
                description="Pós-graduação direcionada a performance e reabilitação."
              />
              <TimelineItem 
                year="PUC-PR"
                title="Graduação em Medicina"
                description="Formação médica base."
              />
              <TimelineItem 
                year="UFSC & USP"
                title="Ciências Sociais e Maestria"
                description="Mestrado em Sociologia (UFSC) e Graduação em Ciências Sociais (USP), garantindo uma perspectiva humanizada."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section className="py-24 px-6 border-t border-white/5 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-[2px] bg-accent mr-4"></div>
                <h2 className="text-sm font-bold tracking-widest uppercase text-white">Avaliações</h2>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
                O que dizem <span className="italic text-secondary">nossos pacientes</span>
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white">5,0</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-secondary text-sm ml-2">55 avaliações no Google</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ReviewCard
              name="Eliseu Cardoso"
              metadata="5 avaliações"
              date="2 meses atrás"
              content="Deixo aqui meu reconhecimento e agradecimento ao Dr. Felipe Lampa pelo trabalho excepcional realizado na lesão do joelho. Desde o início ficou evidente o alto nível de preparo e especialização."
            />
            <ReviewCard
              name="RH Elohim"
              metadata="1 avaliação"
              date="2 meses atrás"
              content="Tive a honra de ser atendido pelo Dr. Felipe Lampa e posso afirmar com convicção: é um profissional diferenciado. Especialista em dor, demonstra um conhecimento técnico profundo, segurança..."
            />
            <ReviewCard
              name="Peter Montibeller"
              metadata="1 avaliação"
              date="2 meses atrás"
              content="Sou muito grato ao Dr. Felipe Lampa e a smart. Treinando Jiu Jitsu, tive duas na tíbia e no joelho, além da lesão no LCA que rompeu por completo. Por conta do meu trabalho eu não poderia operar, foi aí que a smart me ajudou. Fizemos duas..."
            />
            <ReviewCard
              name="Loreni Maria de Oliveira"
              metadata="5 avaliações"
              date="3 meses atrás"
              content="Dr. Felipe Lampa é um médico muito competente tecnicamente atualizado e humanizado demonstrando empatia e boa comunicação. Sua competência e cuidado estão fazendo toda a diferença no meu tratamento."
            />
            <ReviewCard
              name="Luciano Bernert"
              metadata="21 avaliações"
              date="4 meses atrás"
              content="Tive uma experiência excelente na clínica do Dr. Felipe Lampa. Já indico vários atletas para ele há algum tempo, mas também fiz meu próprio tratamento de hérnia de disco, problema no quadril e aplicações na cervical e lombar."
            />
            <ReviewCard
              name="Dafne Cunha"
              metadata="1 avaliação"
              date="3 meses atrás"
              content="Gostaria de deixar meus agradecimentos ao Dr Felipe Lampa!!!Eu sofria a mais de um ano com uma dor crônica em meu pé esquerdo, Dr Felipe foi um anjo em vida além de um profissional de excelência..."
            />
          </div>
        </div>
      </section>

      {/* Empreendedorismo & Liderança */}
      <section id="clinicas" className="py-32 px-6 border-t border-white/5 bg-surface/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 border-b border-white/10 pb-12">
            <span className="block text-xs uppercase tracking-widest font-semibold text-accent mb-6">
               Gestão em Saúde
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Liderança em <span className="italic text-secondary">Instituições</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-10 border border-white/10 bg-surface rounded-2xl text-left hover:bg-white/5 transition-colors">
              <Building2 className="w-8 h-8 text-accent mb-8" />
              <h3 className="text-2xl font-serif text-white mb-4">CEO Clínica Smart Medicine</h3>
              <p className="text-secondary font-light mb-10 leading-relaxed">
                Clínica especializada em medicina avançada, integrando tecnologia e cuidado individualizado ao paciente com dor crônica e aguda.
              </p>
            </div>

            <div className="p-10 border border-white/10 bg-surface rounded-2xl text-left hover:bg-white/5 transition-colors">
              <Microscope className="w-8 h-8 text-accent mb-8" />
              <h3 className="text-2xl font-serif text-white mb-4">Sócio Smart Anestesia</h3>
              <p className="text-secondary font-light mb-10 leading-relaxed">
                Empresa focada em soluções ágeis e de excelência em anestesia ambulatorial, garantindo segurança e conforto nos procedimentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer styled identically to PDF layout */}
      <footer className="py-24 px-6 border-t border-accent bg-surface relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-accent/50"></div>
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">
            <div className="space-y-4 lg:col-span-1">
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent mb-6">Agende sua Consulta</h4>
              <p className="text-white text-lg font-serif leading-snug">Av. Eng. Max de Souza,<br/>906<br/>Coqueiros, Florianópolis</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-secondary mb-6">WhatsApp</h4>
              <div className="flex items-center gap-3 group">
                <a href="https://api.whatsapp.com/send/?phone=554831971700" target="_blank" rel="noreferrer" className="text-white hover:text-accent transition-colors font-serif text-lg">
                  (48) 3197-1700
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-secondary mb-6">Instagram Médico</h4>
              <a href="https://instagram.com/drfelipelampa" target="_blank" rel="noreferrer" className="text-white hover:text-accent transition-colors font-serif text-lg">
                @drfelipelampa
              </a>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-secondary mb-6">Clínica</h4>
              <a href="#" className="text-white hover:text-accent transition-colors font-serif text-lg">
                @clinica.smartmedicine
              </a>
            </div>
          </div>

          <div className="pt-10 flex flex-col md:flex-row items-center justify-between text-xs tracking-widest text-secondary font-medium gap-6 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <span>CRM-SC 34.688</span>
              <span className="text-white/20">|</span>
              <span>RQE 28561</span>
              <span className="text-white/20">|</span>
              <span>RQE 23642</span>
            </div>
            <p className="text-[10px]">© {new Date().getFullYear()} Smart Medicine.</p>
          </div>
          
        </div>
      </footer>
    </div>
  );
}

function TimelineItem({ year, title, description }: { year: string, title: string, description: string }) {
  return (
    <div className="py-8 border-b border-white/5 last:border-0 grid md:grid-cols-[10rem_1fr] gap-4 md:gap-8 items-start group">
      <div className="text-xs font-semibold uppercase tracking-widest text-secondary md:translate-y-1">
        {year}
      </div>
      <div>
        <h4 className="text-xl font-serif text-white mb-3 group-hover:text-accent transition-colors">{title}</h4>
        <p className="text-secondary font-light leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
}

function ReviewCard({ name, metadata, date, content }: { name: string, metadata: string, date: string, content: string }) {
  return (
    <div className="bg-surface border border-white/5 p-8 rounded-xl flex flex-col gap-4 hover:bg-white/5 transition-colors">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      <div>
        <h4 className="text-white font-medium mb-1">{name}</h4>
        <p className="text-secondary text-xs">
          {metadata} • {date}
        </p>
      </div>
      <p className="text-secondary font-light text-sm italic leading-relaxed">
        "{content}"
      </p>
    </div>
  );
}
