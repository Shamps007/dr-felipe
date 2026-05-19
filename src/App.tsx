/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award, BookOpen, Building2, ChevronRight, MessageCircle, Stethoscope, Microscope } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 selection:bg-teal-100 selection:text-teal-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-stone-200 px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl font-serif font-medium text-stone-900">
            Dr. Felipe <span className="font-bold">Lampa</span>
          </div>
          <div className="hidden md:flex items-center space-x-10 text-xs uppercase tracking-widest font-medium text-stone-500">
            <a href="#sobre" className="hover:text-stone-900 transition-colors">Sobre</a>
            <a href="#formacao" className="hover:text-stone-900 transition-colors">Formação</a>
            <a href="#clinicas" className="hover:text-stone-900 transition-colors">Clínicas</a>
          </div>
          <a href="https://api.whatsapp.com/send/?phone=554831971700" target="_blank" rel="noreferrer" className="bg-stone-900 text-white px-6 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-stone-800 transition-colors">
            Agendar
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-10 pt-4">
            <div>
              <span className="block text-xs uppercase tracking-widest font-semibold text-teal-700 mb-6">
                Medicina Regenerativa e da Dor
              </span>
              <h1 className="text-5xl md:text-6xl font-serif text-stone-900 leading-tight">
                Tratamento Avançado <br />
                <span className="text-stone-400 italic">& Atenção Plena</span>
              </h1>
            </div>
            
            <p className="text-lg text-stone-600 max-w-lg font-light leading-relaxed">
              Especialista no diagnóstico e tratamento de síndromes dolorosas complexas, unindo medicina regenerativa, ortobiológicos e procedimentos guiados por ultrassom.
            </p>
            
            <div className="flex gap-4">
              <a href="https://api.whatsapp.com/send/?phone=554831971700" target="_blank" rel="noreferrer" className="bg-stone-900 text-white px-8 py-4 inline-flex items-center justify-center space-x-3 hover:bg-stone-800 transition-colors group w-fit">
                <MessageCircle className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Agendar Consulta</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="w-full max-w-md mx-auto md:ml-auto">
            <div className="bg-white p-10 border border-stone-200">
              <div className="mb-8 border-b border-stone-200 pb-6">
                <h3 className="text-2xl font-serif text-stone-900 mb-3">Agende sua Avaliação</h3>
                <p className="text-sm text-stone-500 font-light leading-relaxed">
                  Preencha os dados e nossa equipe entrará em contato via WhatsApp.
                </p>
              </div>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2">
                    Nome Completo
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-stone-50 border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-700 focus:bg-white transition-colors text-stone-900"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2">
                    WhatsApp
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full bg-stone-50 border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-700 focus:bg-white transition-colors text-stone-900"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-stone-500 mb-2">
                    Principal Queixa
                  </label>
                  <textarea 
                    id="message"
                    rows={3}
                    className="w-full bg-stone-50 border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-teal-700 focus:bg-white transition-colors text-stone-900 resize-none"
                    placeholder="Descreva brevemente..."
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full bg-teal-700 text-white px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-teal-800 transition-colors mt-4 flex justify-center items-center space-x-2">
                  <span>Solicitar Contato</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Dr. Felipe Section / Galeria */}
      <section className="py-24 px-6 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 border-b border-stone-200 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <span className="block text-xs uppercase tracking-widest font-semibold text-teal-700 mb-6">
                Conheça
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 max-w-lg">
                Dr. Felipe <span className="italic text-stone-400">Lampa</span>
              </h2>
            </div>
            <p className="text-stone-500 max-w-sm font-light text-sm leading-relaxed">
              Dedicação, técnica avançada e cuidado humanizado aplicados a cada paciente para o tratamento eficaz da dor e medicina regenerativa.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            <div className="overflow-hidden bg-stone-100 aspect-[4/5] rounded-xl">
              <img src="/img2.jpeg" alt="Dr. Felipe Lampa" className="w-full h-full object-cover object-[center_10%] transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="overflow-hidden bg-stone-100 aspect-[4/5] rounded-xl">
              <img src="/img3.jpeg" alt="Dr. Felipe atuando" className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="overflow-hidden bg-stone-100 aspect-[4/5] rounded-xl">
              <img src="/img4.jpeg" alt="Procedimento" className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="overflow-hidden bg-stone-100 aspect-[4/5] rounded-xl">
              <img src="/img6.jpeg" alt="Equipe cirúrgica" className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Titulações Internacionais e Nacionais */}
      <section id="sobre" className="py-24 px-6 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end border-b border-stone-200 pb-8">
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 max-w-md">
              Excelência e <br /><span className="italic text-stone-400">Reconhecimento</span>
            </h2>
            <p className="text-stone-500 max-w-sm mt-6 md:mt-0 font-light text-sm uppercase tracking-widest leading-relaxed">
              Certificações pelas principais instituições médicas
            </p>
          </div>

          <div className="grid md:grid-cols-[4fr_6fr] gap-12 md:gap-20 items-center">
            <div className="hidden md:block">
              <img src="/img1.jpeg" alt="Dr. Felipe Lampa" className="w-full aspect-[4/5] object-cover object-top" />
            </div>
            
            <div className="space-y-12">
              <div className="flex gap-6 items-start group">
                <div className="mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  <Award className="w-8 h-8 text-teal-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-stone-900 mb-3">CIPS-WIP</h3>
                  <p className="text-stone-600 font-light leading-relaxed">Especialista em terapias intervencionistas pelo World Institute of Pain (Certified Interventional Pain Sonologist).</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start group">
                <div className="mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  <Stethoscope className="w-8 h-8 text-teal-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-stone-900 mb-3">Especialista AMB</h3>
                  <p className="text-stone-600 font-light leading-relaxed">Título de especialista em dor pela Associação Médica Brasileira (AMB).</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start group">
                <div className="mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  <BookOpen className="w-8 h-8 text-teal-700" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-stone-900 mb-3">Smart Regen</h3>
                  <p className="text-stone-600 font-light leading-relaxed">Coordenador do curso avançado de Terapias Intervencionistas com Ortobiológicos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formação Acadêmica e Pós-Graduações */}
      <section id="formacao" className="py-24 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-8">
             <span className="block text-xs uppercase tracking-widest font-semibold text-teal-700 mb-6">
                Histórico
              </span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
              Trajetória <br /><span className="italic text-stone-400">Sólida</span>
            </h2>
            <p className="text-stone-600 text-lg font-light leading-relaxed">
              Uma base acadêmica extensa desenhada para oferecer precisão técnica em anestesiologia e o cuidado integral do paciente no tratamento da dor.
            </p>
            <div className="pt-8 hidden lg:block">
              <img src="/img5.jpeg" alt="Dr. Felipe atuando" className="w-full aspect-[4/5] object-cover object-top bg-stone-200" />
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="space-y-0 border-t border-stone-200">
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

      {/* Empreendedorismo & Liderança */}
      <section id="clinicas" className="py-32 px-6 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 border-b border-stone-800 pb-12">
            <span className="block text-xs uppercase tracking-widest font-semibold text-teal-500 mb-6">
               Gestão em Saúde
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Liderança em <span className="italic text-stone-400">Instituições</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="p-8 border border-stone-800 bg-stone-900/50 text-left">
              <Building2 className="w-8 h-8 text-teal-500 mb-8" />
              <h3 className="text-2xl font-serif mb-4">CEO Clínica Smart Medicine</h3>
              <p className="text-stone-400 font-light mb-10 leading-relaxed">
                Clínica especializada em medicina avançada, integrando tecnologia e cuidado individualizado ao paciente com dor crônica e aguda.
              </p>
            </div>

            <div className="p-8 border border-stone-800 bg-stone-900/50 text-left">
              <Microscope className="w-8 h-8 text-teal-500 mb-8" />
              <h3 className="text-2xl font-serif mb-4">Sócio Smart Anestesia</h3>
              <p className="text-stone-400 font-light mb-10 leading-relaxed">
                Empresa focada em soluções ágeis e de excelência em anestesia ambulatorial, garantindo segurança e conforto nos procedimentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-24 px-6 bg-white border-t border-stone-200 text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Em busca de uma vida sem limitações?</h2>
          <p className="text-stone-600 font-light text-lg">Agende uma avaliação detalhada e descubra como a medicina intervencionista pode mudar sua rotina.</p>
          <div className="pt-6">
            <a href="https://api.whatsapp.com/send/?phone=554831971700" target="_blank" rel="noreferrer" className="bg-teal-700 text-white px-10 py-5 w-fit mx-auto inline-flex items-center space-x-3 hover:bg-teal-800 transition-colors uppercase tracking-widest text-xs font-bold">
              <MessageCircle className="w-5 h-5" />
              <span>Contato Agendamento</span>
            </a>
          </div>
        </div>
        
        <div className="mt-32 pt-10 border-t border-stone-200 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-widest text-stone-500 font-semibold gap-6">
          <p>© {new Date().getFullYear()} Dr. Felipe Lampa. Todos os direitos reservados.</p>
          <div className="flex space-x-8 items-center">
            <span className="text-stone-900">RQE 28561</span>
            <a href="https://instagram.com/drfelipelampa" target="_blank" rel="noreferrer" className="hover:text-stone-900 transition-colors">Instagram</a>
            <a href="#" className="hover:text-stone-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function TimelineItem({ year, title, description }: { year: string, title: string, description: string }) {
  return (
    <div className="py-8 border-b border-stone-200 last:border-0 grid md:grid-cols-[10rem_1fr] gap-4 md:gap-8 items-start">
      <div className="text-xs font-semibold uppercase tracking-widest text-stone-400 md:translate-y-1">
        {year}
      </div>
      <div>
        <h4 className="text-xl font-serif text-stone-900 mb-3">{title}</h4>
        <p className="text-stone-600 font-light leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
}

