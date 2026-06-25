import { AlertCircle, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="bg-gradient-to-r from-portugal-green to-portugal-red text-white py-3 px-4 relative"
    >
      <div className="container-width flex items-center justify-center gap-3 text-center">
        <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
        <p className="text-sm md:text-base font-medium">
          <span className="font-bold">ATUALIZAÇÃO 2026:</span>{' '}
          <span className="hidden sm:inline">
            Lei Orgânica 1/2026 em vigor: novos prazos para residência e via inédita para bisnetos.{' '}
          </span>
          <span className="sm:hidden">Lei 1/2026: novidades para bisnetos e residência. </span>
          <Link
            to="/quiz"
            className="underline hover:no-underline font-semibold"
          >
            Descubra seu direito no quiz →
          </Link>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Fechar banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
