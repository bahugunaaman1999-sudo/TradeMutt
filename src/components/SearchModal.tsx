import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.patternName.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (product: Product) => {
    onSelectProduct(product);
    onClose();
  };

  const popularSearches = ['Hi-Vis Class D/N', 'The Sundowner', 'Women’s Tailored', 'Apprentice', 'Bamboo Socks', 'Half Button'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-stone-900/70 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="flex min-h-full items-start justify-center p-4 pt-16 sm:pt-24">
        <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-200">
          {/* Search Bar Input */}
          <div className="p-4 border-b border-stone-200 flex items-center gap-3">
            <Search className="w-5 h-5 text-stone-400 shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search work shirts, hi-vis, socks, sizes, patterns..."
              className="flex-1 text-sm sm:text-base text-stone-900 placeholder-stone-400 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-stone-400 hover:text-stone-700 p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="text-xs font-bold text-stone-500 hover:text-stone-900 px-2 py-1 bg-stone-100 rounded-md"
            >
              ESC
            </button>
          </div>

          {/* Quick suggestions */}
          {!query && (
            <div className="p-5">
              <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block mb-2.5">
                Popular Workwear Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3 py-1.5 bg-stone-100 hover:bg-amber-100 text-stone-700 hover:text-stone-950 text-xs rounded-lg transition-colors font-medium"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          {query && (
            <div className="max-h-96 overflow-y-auto p-4 space-y-2">
              <div className="text-xs font-semibold text-stone-500 mb-2">
                Found {filtered.length} matching item{filtered.length === 1 ? '' : 's'}
              </div>
              {filtered.length === 0 ? (
                <div className="text-center py-8 text-stone-500 text-xs">
                  No workwear found for "{query}". Try searching "hi-vis", "sundowner", or "polo".
                </div>
              ) : (
                filtered.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleSelect(product)}
                    className="w-full flex items-center justify-between p-2.5 hover:bg-stone-50 rounded-xl transition-colors text-left border border-transparent hover:border-stone-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg bg-stone-100 shrink-0"
                      />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                          {product.name}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-stone-500 mt-0.5">
                          <span>{product.patternName}</span>
                          <span>·</span>
                          <span className="font-mono font-bold text-stone-800">${product.price.toFixed(2)} AUD</span>
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-stone-900 group-hover:translate-x-1 transition-all" />
                  </button>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
