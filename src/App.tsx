import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAnalytics } from "@/hooks/useAnalytics";

// Carregamento imediato — rota principal
import Index from "./pages/Index";

// Lazy loading — só carrega quando o utilizador navega para a rota
const CidadaniaPortuguesa = lazy(() => import("./pages/CidadaniaPortuguesa"));
const BuscaDocumentos      = lazy(() => import("./pages/BuscaDocumentos"));
const ServicePage          = lazy(() => import("./pages/ServicePage"));
const Blog                 = lazy(() => import("./pages/Blog"));
const BlogPost             = lazy(() => import("./pages/BlogPost"));
const Quiz                 = lazy(() => import("./pages/Quiz"));
const PoliticaPrivacidade  = lazy(() => import("./pages/PoliticaPrivacidade"));
const TermosUso            = lazy(() => import("./pages/TermosUso"));
const NotFound             = lazy(() => import("./pages/NotFound"));


// Tracking de page views em SPA (GA4 não detecta navegação automática em React Router)
function RouteTracker() {
  const location = useLocation();
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView(location.pathname, document.title);
  }, [location.pathname]);

  return null;
}

// Skeleton mínimo enquanto o chunk carrega
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 rounded-full border-2 border-gold border-t-transparent animate-spin" aria-label="A carregar..." />
  </div>
);


// Error Boundary para capturar erros de runtime
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', fontFamily: 'monospace', background: '#fff' }}>
          <h1 style={{ color: 'red' }}>Erro ao carregar</h1>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: '12px' }}>
            {this.state.error?.message}
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutos
      gcTime:    1000 * 60 * 10,
    },
  },
});

const App = () => (
  <ErrorBoundary>
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteTracker />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/"                        element={<Index />} />
              <Route path="/cidadania-portuguesa"    element={<CidadaniaPortuguesa />} />
              <Route path="/cidadania-portuguesa/:slug" element={<ServicePage />} />
              <Route path="/busca-documentos"        element={<BuscaDocumentos />} />
              <Route path="/blog"                    element={<Blog />} />
              <Route path="/blog/:slug"              element={<BlogPost />} />
              <Route path="/quiz"                    element={<Quiz />} />
              <Route path="/politica-privacidade"    element={<PoliticaPrivacidade />} />
              <Route path="/termos-uso"              element={<TermosUso />} />
              <Route path="*"                        element={<NotFound />} />
            </Routes>
          </Suspense>
          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
  </ErrorBoundary>
);

export default App;
