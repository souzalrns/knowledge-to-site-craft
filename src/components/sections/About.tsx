import { motion } from 'framer-motion';
import { Shield, Clock, Award, Users, ArrowRight, Heart, GraduationCap, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import consultantImage from '@/assets/consultant.jpg';
import consultantImageWebp from '@/assets/consultant.webp';
import { SITE_CONFIG, waUrl } from '@/config/site';
import { useAnalytics } from '@/hooks/useAnalytics';

const credentials = [
  {
    icon: GraduationCap,
    title: 'Licenciada pela Universidade de Lisboa',
    description: 'Com formação especializada em Registos e Notariado pela Universidade Portucalense.',
  },
  {
    icon: Scale,
    title: 'Ordem dos Advogados de Portugal',
    description: 'Inscrição ativa na OA. Actuação em Tribunais Judiciais, Conservatórias e função Notarial.',
  },
  {
    icon: Clock,
    title: '20+ anos de experiência',
    description: 'Em Departamentos Jurídicos, revisão e negociação de contratos e gestão de documentação complexa.',
  },
  {
    icon: Users,
    title: 'Atendimento dedicado, do início ao fim',
    description: 'A Kathia acompanha pessoalmente cada processo — não um assistente, não um chatbot.',
  },
];

export function About() {
  const { trackWhatsAppClick } = useAnalytics();

  return (
    <section id="quem-somos" className="section-padding">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <picture>
                <source srcSet={consultantImageWebp} type="image/webp" />
                <img
                  src={consultantImage}
                  alt="Kathia Vianna — Advogada, Ordem dos Advogados de Portugal"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              {/* Nome sobre a foto */}
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-display text-2xl font-bold">Kathia Vianna</p>
                <p className="text-sm text-white/80">Advogada · Ordem dos Advogados de Portugal</p>
              </div>
            </div>

            {/* Floating Card — credencial verificável */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-elevated border border-border max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-foreground">2.000+</div>
                  <div className="text-sm text-muted-foreground">famílias. Uma herança cada.</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
              Quem está por trás do processo
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Um investimento que{' '}
              <span className="text-primary">os seus filhos vão agradecer</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              Quando um pai obtém a cidadania portuguesa, não está apenas a tratar de um
              documento. Está a abrir uma porta para os filhos estudarem na Europa, trabalharem
              em qualquer país da UE, viverem onde quiserem — e passarem esse direito para os
              netos, e os netos para os bisnetos.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ninguém sabe que portas vão aparecer no futuro. Mas quem tem o passaporte
              vai ter a liberdade de escolher. É esse o valor real da dupla cidadania —
              não o documento, mas as possibilidades que ele representa para a família.
            </p>

            {/* Credenciais reais */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {credentials.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 text-sm leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Button
              variant="gold"
              size="lg"
              onClick={() => {
                trackWhatsAppClick('about');
                window.open(
                  waUrl(SITE_CONFIG.whatsappMessages.about),
                  '_blank',
                  'noopener,noreferrer'
                );
              }}
            >
              Começar a construir essa herança
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
