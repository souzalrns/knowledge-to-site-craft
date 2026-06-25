import { motion } from 'framer-motion';
import { Shield, Clock, Award, Users, ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import consultantImage from '@/assets/consultant.jpg';
import consultantImageWebp from '@/assets/consultant.webp';
import { SITE_CONFIG, waUrl } from '@/config/site';

const features = [
  {
    icon: Shield,
    title: 'Segurança jurídica total',
    description: 'Cada processo é montado para não ter diligências. Documentação certa na primeira vez.',
  },
  {
    icon: Clock,
    title: 'Sem perder posição na fila',
    description: 'Protocolamos rápido para você entrar na fila do IRN o quanto antes. Cada mês importa.',
  },
  {
    icon: Award,
    title: 'Especialistas, não generalistas',
    description: '+10 anos dedicados exclusivamente à cidadania portuguesa. Conhecemos o IRN por dentro.',
  },
  {
    icon: Users,
    title: 'Atendimento real, do início ao fim',
    description: 'Um especialista acompanha o seu caso — não um chatbot, não uma fila de atendimento.',
  },
];

export function About() {
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
                  alt="Kathia Vianna — Advogada especialista em Nacionalidade Portuguesa"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Floating Card */}
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
              Quem Somos
            </span>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Um investimento que{' '}
              <span className="text-primary">os seus filhos vão agradecer</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              Quando um pai obtém a cidadania portuguesa, ele não está a fazer só um documento.
              Está a abrir uma porta para os filhos estudarem na Europa sem pagar fortuna,
              trabalharem em qualquer país da UE sem visto, viverem onde quiserem — e passarem
              esse direito para os netos, e os netos para os bisnetos.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ninguém sabe que portas vão aparecer no futuro. Mas quem tem o passaporte vai ter
              a liberdade de escolher. É esse o valor real da dupla cidadania — não o documento,
              mas as possibilidades que ele representa.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
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
                      <h3 className="font-semibold text-foreground mb-1 text-base">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Button
              variant="gold"
              size="lg"
              onClick={() =>
                window.open(
                  waUrl(SITE_CONFIG.whatsappMessages.about),
                  '_blank',
                  'noopener,noreferrer'
                )
              }
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
