import { lazy, Suspense } from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Footer } from '@/components/sections/Footer';

// Carregar tudo de forma lazy para não bloquear
const About        = lazy(() => import('@/components/sections/About').then(m => ({ default: m.About })));
const Process      = lazy(() => import('@/components/sections/Process').then(m => ({ default: m.Process })));
const Testimonials = lazy(() => import('@/components/sections/Testimonials').then(m => ({ default: m.Testimonials })));
const FAQ          = lazy(() => import('@/components/sections/FAQ').then(m => ({ default: m.FAQ })));
const Contact      = lazy(() => import('@/components/sections/Contact').then(m => ({ default: m.Contact })));

const Index = () => (
  <>
    <Header />
    <Hero />
    <Suspense fallback={<div className="h-32 bg-background" />}>
      <About />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
    </Suspense>
    <Footer />
  </>
);

export default Index;
