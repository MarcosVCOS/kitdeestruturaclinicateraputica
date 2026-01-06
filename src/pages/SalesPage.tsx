import { ArrowRight, Check, CheckCircle2, ChevronDown, ShieldCheck, Lock, Star, FileText, ClipboardList, BookOpen, PenTool, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import digitalKitMockup from "@assets/generated_images/digital_kit_mockup_for_therapists.png";
import productMockupSquare from "@assets/generated_images/mockup_do_kit_de_estrutura_clínica_terapêutica_em_português.png";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const CTAButton = ({ className = "", children = "Quero estruturar meus atendimentos" }: { className?: string, children?: React.ReactNode }) => (
  <Button size="lg" className={`w-full md:w-auto text-lg px-8 py-6 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground ${className}`}>
    {children}
  </Button>
);

const Section = ({ className = "", children, id }: { className?: string, children: React.ReactNode, id?: string }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="container max-w-5xl mx-auto px-4 md:px-6">
      {children}
    </div>
  </section>
);

export default function SalesPage() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const today = format(new Date(), "dd/MM/yyyy", { locale: ptBR });

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <style>{`#replit-pill { display: none !important; }`}</style>
      {/* BANNER DE OFERTA */}
      <div className="bg-primary text-white py-3 px-4 text-center text-sm md:text-base font-bold uppercase tracking-wide">
        OFERTA VÁLIDA SOMENTE HOJE: {today}
      </div>
      
      {/* BLOCO 1 — VENDA IMEDIATA (HERO) */}
      <header className="relative py-12 md:py-20 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary bg-primary/10 rounded-full">
              KIT DE ESTRUTURA CLÍNICA TERAPÊUTICA
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 text-slate-900 px-2">
              Pare de improvisar nas sessões. <br className="hidden md:block"/>
              <span className="text-primary italic">Tenha uma estrutura terapêutica pronta</span> para saber exatamente o que fazer.
            </h1>
            <p className="text-base md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed px-4">
              Se você sente insegurança na condução das sessões, este kit foi criado para te dar clareza, organização e tranquilidade antes, durante e após cada atendimento.
            </p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-10 max-w-sm mx-auto"
            >
              <img 
                src="https://i.ibb.co/spvSD5kk/caixateste01-1-1.webp" 
                alt="Kit de Estrutura Clínica Terapêutica" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </motion.div>
            <div onClick={scrollToPricing}>
              <CTAButton className="bg-primary text-white shadow-primary/25" />
            </div>
            <p className="mt-4 text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" /> Compra segura e acesso imediato
            </p>
          </motion.div>
        </div>
      </header>

      {/* BLOCO 2 — DEMONSTRATIVO */}
      <Section className="bg-slate-200 pt-8 pb-16 md:py-24">
        <div className="text-center mb-8 md:mb-12 px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 max-w-2xl mx-auto leading-tight">
            Veja, na prática, como funciona a estrutura <br className="hidden md:block" />
            que guia seus atendimentos.
          </h2>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {[
                "https://i.ibb.co/NdwKCghS/Captura-de-tela-2026-01-03-154559.webp",
                "https://i.ibb.co/3y7NBgtM/Captura-de-tela-2026-01-03-154755.webp",
                "https://i.ibb.co/D0L0jnd/Captura-de-tela-2026-01-03-154835.webp",
                "https://i.ibb.co/rKRRBV0n/Captura-de-tela-2026-01-03-154855.webp"
              ].map((img, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="aspect-[760/1075] md:aspect-[9/16] overflow-hidden rounded-2xl border border-border/50 shadow-lg bg-slate-50">
                    <img 
                      src={img} 
                      alt={`Produto ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </Section>

      {/* BLOCO 3 — BENEFÍCIOS */}
      <Section className="bg-secondary/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-12 leading-tight text-center max-w-[320px] md:max-w-none mx-auto">
            O que muda quando você tem uma estrutura clara para conduzir seus atendimentos:
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Segurança para conduzir", desc: "Deixe de improvisar. Tenha um caminho estruturado com início, meio e fim." },
              { title: "Clareza total", desc: "Nada de sair da sessão se perguntando se esqueceu algo importante." },
              { title: "Confiança no posicionamento", desc: "Transmita profissionalismo desde o primeiro contato com pacientes e famílias." },
              { title: "Organização clínica e emocional", desc: "Menos ansiedade, menos bagunça mental e mais controle do processo." },
              { title: "Redução do medo de errar", desc: "Saiba exatamente o que registrar, avaliar e acompanhar com respaldo." },
              { title: "Atendimentos mais tranquilos", desc: "A sensação de estar no controle substitui o medo constante." },
            ].map((item, i) => (
              <div 
                key={i}
                className="flex gap-4"
              >
                <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* BLOCO 4 — URGÊNCIA */}
      <Section className="bg-slate-900 text-white text-center py-20">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-white">
          Você não precisa continuar atendendo no improviso.
        </h2>
        <div onClick={scrollToPricing}>
          <CTAButton className="bg-white text-slate-900 hover:bg-white/90">
            Quero estruturar meus atendimentos
          </CTAButton>
        </div>
      </Section>

      {/* BLOCO 5 — IDEAL PARA VOCÊ */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Este kit é ideal para você que deseja:</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, title: "Ter segurança", desc: "Sentir confiança para conduzir cada sessão com clareza." },
            { icon: FileText, title: "Parar de improvisar", desc: "Ter uma estrutura pronta para seguir, sem depender de achismos." },
            { icon: Star, title: "Mais profissionalismo", desc: "Transmitir segurança para pacientes desde o primeiro contato." },
            { icon: ClipboardList, title: "Organizar a rotina", desc: "Saber o que registrar, avaliar e acompanhar em cada caso." },
            { icon: CheckCircle2, title: "Reduzir o medo", desc: "Atender com tranquilidade, sabendo que está seguindo uma estrutura." },
            { icon: ArrowRight, title: "Evoluir na carreira", desc: "Dar o próximo passo rumo a uma prática clínica de excelência." },
          ].map((item, i) => (
            <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow bg-secondary/10">
              <CardContent className="pt-6">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* BLOCO 6 — PROVA SOCIAL */}
      <Section className="bg-slate-200">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">O que outras terapeutas dizem:</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              quote: "Eu sabia a teoria, mas me sentia perdida na prática. Com o kit, passei a entrar nas sessões muito mais segura.", 
              author: "Mariana Souza", 
              role: "Terapeuta Clínica",
              image: "https://i.ibb.co/JjNNN9YW/depoimentoteraputa1.jpg"
            },
            { 
              quote: "O que mais me ajudou foi parar de improvisar. Hoje eu sigo uma estrutura e isso mudou totalmente minha confiança.", 
              author: "Camila Rodrigues", 
              role: "Terapeuta Autônoma",
              image: "https://i.ibb.co/Mkp8SP0s/depoimentoteraputa2.jpg"
            },
            { 
              quote: "Os materiais são claros, organizados e fáceis de adaptar. Me senti muito mais profissional.", 
              author: "Beatriz Oliveira", 
              role: "Terapeuta Integrativa",
              image: "https://i.ibb.co/rfbG5nyz/depoimentoteraputa3.jpg"
            }
          ].map((testimonial, i) => (
            <Card key={i} className="bg-white">
              <CardContent className="pt-8">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="italic text-muted-foreground mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/10"
                  />
                  <div>
                    <p className="font-semibold text-primary leading-tight">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* BLOCO 7 — O QUE COMPÕE O KIT */}
      <Section>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-6 max-w-[340px] md:max-w-none mx-auto">Tudo o que você vai receber para estruturar seus atendimentos com segurança:</h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {[
            { icon: MessageCircle, title: "Roteiros de Sessões", desc: "Estruturas práticas para saber o que conduzir e observar." },
            { icon: ClipboardList, title: "Fichas de Anamnese", desc: "Materiais organizados para coleta de dados e histórico." },
            { icon: PenTool, title: "Planejamento de Sessões", desc: "Organize objetivos, intervenções e próximos passos." },
            { icon: FileText, title: "Protocolos Terapêuticos", desc: "Estruturas que facilitam a organização independente da abordagem." },
            { icon: FileText, title: "Modelos de Relatórios", desc: "Para registrar atendimentos com linguagem profissional." },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-secondary/10 transition-colors">
              <div className="bg-primary/10 p-3 rounded-lg h-fit">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </Section>

      {/* BLOCO 8 — BÔNUS */}
      <Section className="bg-primary text-primary-foreground">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white max-w-2xl mx-auto leading-tight">Além do kit principal, você ainda recebe 6 Bônus Exclusivos:</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: "Guia Profissional do Terapeuta", 
              desc: "Fortaleça seu posicionamento profissional e confiança.",
              image: "https://i.ibb.co/zWSgh8jv/mockupbonus1.webp"
            },
            { 
              title: "Manual Prático do Atendimento Terapêutico", 
              desc: "Organize o raciocínio clínico para situações que geram insegurança.",
              image: "https://i.ibb.co/VYpFn69Z/mockupbonus2.webp"
            },
            { 
              title: "Instrumentos Essenciais para Avaliação Terapêutica", 
              desc: "Ferramentas práticas para apoiar avaliações iniciais.",
              image: "https://i.ibb.co/TqnNHysn/mockupbonus3.webp"
            },
            { 
              title: "Bloco de Registro Profissional para Observações e Evolução", 
              desc: "Para observações clínicas e evolução dos casos.",
              image: "https://i.ibb.co/XNRmX6B/mockupbonus4.webp"
            },
            { 
              title: "Modelos de Frases Profissionais para Situações Difíceis", 
              desc: "Modelos prontos para momentos delicados com pacientes.",
              image: "https://i.ibb.co/vvhgnTXv/mockupbonus5.webp"
            },
            { 
              title: "Checklist de Organização da Rotina Clínica", 
              desc: "Organize sua rotina de atendimentos e registros.",
              image: "https://i.ibb.co/60xZNKpg/mockupbonus6.webp"
            },
          ].map((bonus, i) => (
             <Card key={i} className="bg-white/10 border-white/20 text-white backdrop-blur-sm overflow-hidden">
               <CardHeader className="pb-2">
                 <span className="text-xs font-bold tracking-widest opacity-70 mb-2 block">BÔNUS #{i+1}</span>
                 {bonus.image && (
                   <div className="mb-4 flex justify-center">
                     <img 
                       src={bonus.image} 
                       alt={bonus.title} 
                       className="w-[65%] h-auto"
                     />
                   </div>
                 )}
                 <CardTitle className="text-2xl text-white font-serif">{bonus.title}</CardTitle>
               </CardHeader>
               <CardContent>
                 <p className="text-white/80 text-base md:text-lg">{bonus.desc}</p>
               </CardContent>
             </Card>
          ))}
        </div>
      </Section>

      {/* BLOCO 9 — OFERTA (PRICING) */}
      <Section id="pricing" className="bg-white overflow-hidden">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide">ESCOLHA A MELHOR OPÇÃO PARA VOCÊ:</h2>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-8 max-w-4xl mx-auto items-center px-4 md:px-0">
           {/* PLANO BÁSICO */}
           <Card className="w-full border-border hover:border-primary/50 transition-colors order-1">
             <CardHeader className="text-center">
               <CardTitle className="text-2xl md:text-3xl font-bold text-slate-700 uppercase">Plano Básico</CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
               <div className="flex justify-center mb-4">
                 <img 
                   src="https://i.ibb.co/spvSD5kk/caixateste01-1-1.webp" 
                   alt="Miniatura Kit" 
                   className="w-[14.4rem] h-auto drop-shadow-md"
                 />
               </div>
               <div className="flex items-start gap-2 text-base md:text-lg">
                 <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                 <span>Kit de Estrutura Clínica Terapêutica</span>
               </div>
             </CardContent>
             <CardFooter className="flex-col gap-4">
               <div className="text-center">
                 <p className="text-sm text-slate-500 mb-1">de <span className="text-red-600 line-through">R$ 97,00</span> por:</p>
                 <span className="text-[3.44rem] md:text-[4.3rem] font-bold text-[#15803d]">R$ 17,90</span>
               </div>
               <a href="https://pay.hotmart.com/Q103689871S?checkoutMode=10" target="_blank" rel="noopener noreferrer" className="w-full">
                 <Button size="lg" className="w-full text-lg h-14 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300">QUERO O PLANO BÁSICO</Button>
               </a>
               
               {/* ALERTA DE OFERTA MAIS VANTAJOSA */}
               <div className="mt-4 flex flex-col items-center text-center">
                 <p className="text-red-600 font-bold text-sm md:text-base leading-tight uppercase">
                   ATENÇÃO: <span className="text-slate-800 lowercase font-normal">Temos uma oferta</span> <span className="underline decoration-red-600">ainda mais VANTAJOSA</span> <span className="text-slate-800 lowercase font-normal">para você! Veja logo abaixo</span>
                 </p>
                 <div className="flex flex-col mt-2">
                   <ChevronDown className="w-6 h-6 text-red-600 -mb-3" />
                   <ChevronDown className="w-6 h-6 text-red-600" />
                 </div>
               </div>
             </CardFooter>
           </Card>

           {/* PLANO COMPLETO */}
           <div className="relative w-full order-2">
             <div className="absolute -top-4 left-0 right-0 flex justify-center z-20">
               <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Mais Escolhido</span>
             </div>
             <Card className="w-full border-primary shadow-2xl relative bg-white scale-100 md:scale-105 z-10">
              <CardHeader className="text-center bg-primary/5 pt-10 pb-6">
                <CardTitle className="text-2xl md:text-3xl font-bold text-primary uppercase">Plano Completo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 mt-6">
                <div className="flex justify-center mb-4">
                  <img 
                    src="https://i.ibb.co/DPSvXL3k/C-pia-de-caixateste01-1.webp" 
                    alt="Miniatura Kit Completo" 
                    className="w-[14.4rem] h-auto drop-shadow-md"
                  />
                </div>
                <div className="flex items-start gap-2 font-medium text-base md:text-lg">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>Kit de Estrutura Clínica Terapêutica</span>
                </div>
                {[
                  "Guia Profissional do Terapeuta",
                  "Manual Prático do Atendimento Terapêutico",
                  "Instrumentos Essenciais para Avaliação Terapêutica",
                  "Bloco de Registro Profissional para Observações e Evolução",
                  "Modelos de Frases Profissionais para Situações Difíceis",
                  "Checklist de Organização da Rotina Clínica"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-base md:text-lg text-slate-600">
                    <Check className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                    <span><strong className="text-primary">Bônus #{i+1}:</strong> {item}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex-col gap-4 pb-8">
                <div className="text-center">
                  <p className="text-sm text-slate-500 mb-1">de <span className="text-red-600 line-through">R$ 197,00</span> por:</p>
                  <span className="text-[3.44rem] md:text-[4.3rem] font-bold text-[#15803d]">R$ 27,90</span>
                </div>
                <a href="https://pay.hotmart.com/M103690007U?checkoutMode=10" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button size="lg" className="w-full text-lg h-14 rounded-full font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300">
                    QUERO O PLANO COMPLETO
                  </Button>
                </a>
              </CardFooter>
            </Card>
           </div>
        </div>
      </Section>

      {/* BLOCO 10 — GARANTIA */}
      <Section className="bg-slate-50">
         <div className="max-w-3xl mx-auto text-center bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border">
           <img 
             src="https://i.ibb.co/HT9xf359/garantia30d-removebg-preview.png" 
             alt="Garantia de 30 dias" 
             className="w-32 h-32 mx-auto mb-6 object-contain"
           />
           <h2 className="text-2xl md:text-3xl font-bold mb-4">Garantia Incondicional de 30 Dias</h2>
           <p className="text-muted-foreground mb-8 leading-relaxed">
             Você não precisa decidir com medo. Acesse todos os materiais, explore a estrutura e aplique na sua prática. 
             Se sentir que não é para você, devolvemos todo o seu investimento sem burocracia.
           </p>
           <p className="text-sm font-medium text-primary uppercase tracking-widest">Risco Zero</p>
         </div>
      </Section>

      {/* BLOCO 11 — FAQ */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "Esse kit é indicado para quem está começando?", a: "Sim. O kit foi criado exatamente para terapeutas que estão iniciando ou se estruturando, oferecendo um passo a passo claro." },
              { q: "Funciona para qualquer abordagem terapêutica?", a: "Sim. O material é 100% generalista e foca na estrutura do atendimento, não em técnicas específicas de uma única abordagem." },
              { q: "Os materiais são editáveis?", a: "Sim. Todos os materiais são editáveis e sem logomarca, permitindo personalização total." },
              { q: "Vou saber como usar os materiais?", a: "Sim. Os materiais são intuitivos e organizados de forma prática para facilitar a aplicação." },
              { q: "Esse kit substitui supervisão?", a: "Não. Ele funciona como uma estrutura de apoio e organização, mas não substitui a supervisão clínica." },
              { q: "Como recebo o acesso?", a: "Após a confirmação do pagamento, você recebe acesso imediato por email." },
              { q: "Por quanto tempo terei acesso?", a: "O acesso é vitalício, incluindo futuras atualizações." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-medium text-lg">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* BLOCO 12 — RODAPÉ */}
      <footer className="bg-slate-900 text-slate-400 py-16 text-sm text-center">
        <div className="container max-w-4xl mx-auto px-4 space-y-8">
          <p>
            Este material é destinado exclusivamente a terapeutas formados, como apoio à organização e estruturação do atendimento clínico. 
            O Kit não substitui formação, supervisão ou acompanhamento profissional.
          </p>
          <div className="h-px bg-slate-800 w-full max-w-xs mx-auto"></div>
          <p>
            &copy; {new Date().getFullYear()} Kit de Estrutura Clínica Terapêutica. Todos os direitos reservados.
          </p>
          <p className="text-xs opacity-50 max-w-2xl mx-auto">
            A reprodução não autorizada desta publicação constitui violação dos direitos autorais (Lei 9.610/98).
          </p>
        </div>
      </footer>

    </div>
  );
}
