import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Phone, HeartHandshake } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  onOpenCart,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'shop', label: 'Shop Workwear' },
    { id: 'hub', label: 'Apprentice Hub' },
    { id: 'impact', label: 'Our Story & Impact' },
    { id: 'help', label: 'Product Help' },
    { id: 'business', label: 'For Businesses' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      {/* Top TIACS Mental Health Crisis / Support Bar (Direct, clearly separated) */}
      <div className="bg-amber-400 text-stone-950 px-4 py-2 text-xs md:text-sm font-medium border-b border-amber-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold tracking-wide uppercase px-2 py-0.5 bg-stone-950 text-white rounded text-[11px]">
              TIACS Support
            </span>
            <span className="truncate">
              Need a chat? Free & confidential mental health counselling for tradies, truckies & families.
            </span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="tel:0488846988"
              className="inline-flex items-center gap-1.5 font-bold hover:underline bg-white/80 hover:bg-white text-stone-900 px-2.5 py-0.5 rounded transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-stone-900" />
              <span>Call / Text 0488 846 988</span>
            </a>
            <span className="hidden md:inline text-stone-800 text-xs">
              Mon–Fri 8am–10pm AEST
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation - 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-8">
          {/* Zone 1: Brand title, one line */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left group flex items-center gap-2"
              aria-label="TradeMutt Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-rose-500 to-indigo-600 flex items-center justify-center shadow-sm">
                <span className="text-white font-extrabold text-lg tracking-tighter">TM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tight text-stone-950 leading-none group-hover:text-amber-600 transition-colors">
                  TradeMutt
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-rose-600 leading-tight">
                  This is a conversation starter
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Single-line clean nav links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-stone-700">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`whitespace-nowrap transition-colors py-1 relative ${
                  activeTab === link.id
                    ? 'text-stone-950 font-bold'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                {link.label}
                {activeTab === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: Actions (Search, Cart & Mobile Menu) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenSearch}
              aria-label="Search workwear"
              className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenCart}
              aria-label="Shopping Cart"
              className="relative p-2 text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center tabular-nums shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => handleNavClick('shop')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-stone-950 hover:bg-amber-600 rounded-lg transition-colors shadow-sm whitespace-nowrap"
            >
              Shop Workwear
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-600 hover:text-stone-900 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  activeTab === link.id
                    ? 'bg-amber-50 text-amber-900 font-bold'
                    : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-stone-200 flex flex-col gap-2.5">
            <button
              onClick={() => handleNavClick('shop')}
              className="w-full py-3 bg-stone-950 text-white text-center font-bold rounded-lg text-sm"
            >
              Explore Full Shop
            </button>
            <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
              <HeartHandshake className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">50% of Profits to TIACS</p>
                <p className="text-amber-800">Every piece of workwear funds free clinical counselling for Aussie tradies.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
