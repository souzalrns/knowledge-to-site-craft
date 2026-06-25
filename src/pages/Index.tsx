import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Benefits } from '@/components/sections/Benefits';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { QuizBanner } from '@/components/ui/QuizBanner';
import { SchemaHomepage } from '@/components/seo/SchemaMarkup';

const Index = () => (
  <>
    <SchemaHomepage />
    <Helmet>
      <title>ViannaLegal — Cidadania Portuguesa para Brasileiros</title>
      <meta name="description" content="Assessoria especializada em cidadania portuguesa. Mais de 2.000 famílias atendidas. Processo 100% online, sem sair do Brasil." />
    </Helmet>
    <Header />
    <Hero />
    <QuizBanner />
    <Services />
    <About />
    <Benefits />
    <Process />
    <Testimonials />
    <FAQ />
    <Contact />
    <Footer />
  </>
);

export default Index;
