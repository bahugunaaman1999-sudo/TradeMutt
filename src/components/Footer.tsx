import React, { useState } from 'react';
import { Phone, HeartHandshake, ShieldCheck, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const navigateTo = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      {/* Prominent TIACS Mental Health Crisis & Support Hotline Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 p-[2px] rounded-2xl shadow-xl">
          <div className="bg-stone-950 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <HeartHandshake className="w-4 h-4 text-rose-400" />
                <span>Dedicated Free Tradie Mental Health Helpline</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Struggling or know a mate who is?
              </h3>
              <p className="text-stone-300 text-sm max-w-2xl">
                TIACS provides free, confidential, professional mental health support to Australian tradies, truckies, rural workers, and their families. No doctor referral or GP mental health plan needed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="tel:0488846988"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold rounded-xl transition-all shadow-lg hover:scale-[1.02] text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call or Text 0488 846 988</span>
              </a>
              <div className="text-center sm:text-left text-xs text-stone-400">
                <p className="text-stone-300 font-semibold">Immediate crisis? Call Lifeline: 13 11 14</p>
                <p>Emergency: 000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center text-white font-extrabold">
                TM
              </div>
              <span className="font-display font-black text-2xl text-white tracking-tight">TradeMutt</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              TradeMutt is an Australian social enterprise creating loud, vibrant workwear engineered to make the invisible impossible to ignore. We don’t just build tough work shirts; we start life-saving conversations on job sites across Australia.
            </p>
            <div className="flex items-center gap-3 text-xs text-stone-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>50% of TradeMutt profits directly fund TIACS clinical counselling.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <p className="text-white font-bold text-sm tracking-wide uppercase">Shop Workwear</p>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-amber-400 transition-colors">
                  Work Shirts (Full & Half)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-amber-400 transition-colors">
                  AS/NZS Hi-Vis Safety
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-amber-400 transition-colors">
                  Women’s Tradie Fit
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-amber-400 transition-colors">
                  Polos & Scrubs
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('shop')} className="hover:text-amber-400 transition-colors">
                  Accessories & Socks
                </button>
              </li>
            </ul>
          </div>

          {/* Tradie & Business Links */}
          <div className="space-y-3">
            <p className="text-white font-bold text-sm tracking-wide uppercase">Tradies & Sites</p>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button onClick={() => navigateTo('hub')} className="hover:text-amber-400 transition-colors">
                  Apprentice Starter Hub
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('hub')} className="hover:text-amber-400 transition-colors">
                  How to Start Conversations
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('business')} className="hover:text-amber-400 transition-colors">
                  Bulk & Custom Embroidery
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('business')} className="hover:text-amber-400 transition-colors">
                  Funky Friday Site Packs
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('help')} className="hover:text-amber-400 transition-colors">
                  Size Guide & Care Tips
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Tradie Community */}
          <div className="space-y-3">
            <p className="text-white font-bold text-sm tracking-wide uppercase">Tradie Smoke Break</p>
            <p className="text-xs text-stone-400">
              Get new pattern drops, apprentice tips, and mental health resources sent to your inbox.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-stone-800 text-emerald-400 rounded-lg text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Good on ya! You’re on the list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-3 pr-10 py-2.5 bg-stone-800 border border-stone-700 rounded-lg text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-400"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-2 bg-amber-400 hover:bg-amber-300 text-stone-950 rounded flex items-center justify-center transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[11px] text-stone-500 block">No spam, just solid gear and mate check-ins.</span>
              </form>
            )}
          </div>
        </div>

        {/* Traditional Custodians Acknowledgment */}
        <div className="py-6 border-b border-stone-800 text-xs text-stone-500 leading-relaxed text-center max-w-4xl mx-auto">
          TradeMutt acknowledges the Traditional Owners of Country throughout Australia and recognizes their continuing connection to land, waters and community. We pay our respects to them and their cultures, and to Elders past and present.
        </div>

        {/* Bottom bar & Demonstration Notice */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span>© {new Date().getFullYear()} TradeMutt Pty Ltd. All rights reserved.</span>
            <span>·</span>
            <button onClick={() => navigateTo('help')} className="hover:text-stone-300">
              Privacy Policy
            </button>
            <span>·</span>
            <button onClick={() => navigateTo('help')} className="hover:text-stone-300">
              Terms of Service
            </button>
            <span>·</span>
            <button onClick={() => navigateTo('contact')} className="hover:text-stone-300">
              Support
            </button>
          </div>

          <div className="text-center md:text-right text-[11px] text-amber-500/80 bg-stone-800/60 px-3 py-1 rounded-full border border-stone-800">
            Demo Store: Realistic product & pricing data for demonstration and portfolio use.
          </div>
        </div>
      </div>
    </footer>
  );
};
