import React from 'react';
import { ArrowRight, HeartHandshake, ShieldCheck, Sun, Users, Award, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';
import { IMPACT_METRICS, heroTradiesImg } from '../data/products';

interface HomePageProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onNavigate: (tab: string) => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  products,
  onSelectProduct,
  onNavigate,
  onAddToCart,
}) => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-stone-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Australian Social Enterprise Workwear</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-[1.08] text-balance">
                Make the invisible <span className="text-amber-400 underline decoration-rose-500 decoration-wavy decoration-2">impossible</span> to ignore.
              </h1>

              <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-xl">
                We design bold, vibrant, trade-ready workwear for Australian tradies and apprentices. Our eye-catching prints break the ice, normalize mental health conversations on the job site, and <strong className="text-amber-300">50% of our profits directly fund TIACS</strong> free counselling.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  onClick={() => onNavigate('shop')}
                  className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-stone-950 font-display font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <span>Shop Workwear</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('impact')}
                  className="px-8 py-4 bg-stone-800/90 hover:bg-stone-700 text-white font-display font-bold text-sm uppercase tracking-wider rounded-xl transition-all border border-stone-700 flex items-center justify-center gap-2"
                >
                  <HeartHandshake className="w-4 h-4 text-rose-400" />
                  <span>See Our Impact</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-stone-400 border-t border-stone-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>AS/NZS Certified Hi-Vis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>UPF 50+ Sun Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-indigo-400" />
                  <span>100,000+ Aussie Tradies</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-stone-800 aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 group">
                <img
                  src={heroTradiesImg}
                  alt="Australian tradies on jobsite wearing TradeMutt colourful conversation starter workwear"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-stone-950/80 backdrop-blur-md rounded-2xl border border-stone-800 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-white">This Is A Conversation Starter</p>
                    <p className="text-[11px] text-amber-400">YNWA (You'll Never Walk Alone)</p>
                  </div>
                  <span className="px-2.5 py-1 bg-rose-600 text-white font-black text-[10px] rounded uppercase tracking-wider">
                    50% to TIACS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Social Impact Ticker */}
        <div className="border-t border-stone-800 bg-stone-900/80 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-2xl sm:text-3xl font-display font-black text-amber-400 font-mono">
                  {IMPACT_METRICS.totalDonated}
                </p>
                <p className="text-xs text-stone-400 font-medium mt-1">Donated Directly to TIACS</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-black text-rose-400 font-mono">
                  {IMPACT_METRICS.counsellingHours}+
                </p>
                <p className="text-xs text-stone-400 font-medium mt-1">Free Counselling Hours Funded</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-black text-emerald-400 font-mono">
                  {IMPACT_METRICS.tradiesSupported}+
                </p>
                <p className="text-xs text-stone-400 font-medium mt-1">Tradies & Families Supported</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-black text-white font-mono">
                  50%
                </p>
                <p className="text-xs text-stone-400 font-medium mt-1">Guaranteed Profit Donation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Site Ready & Certified
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-stone-950 mt-1">
              Featured Conversation Starters
            </h2>
          </div>
          <button
            onClick={() => onNavigate('shop')}
            className="text-xs sm:text-sm font-bold text-stone-900 hover:text-amber-700 flex items-center gap-1.5 transition-colors group"
          >
            <span>View All 12 Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div
                onClick={() => onSelectProduct(product)}
                className="relative aspect-4/3 bg-stone-100 overflow-hidden cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-stone-950 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                    {product.badge}
                  </span>
                )}
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-white/90 backdrop-blur-xs rounded text-[10px] font-bold text-stone-800">
                  Funds {product.counsellingMinutesFunded}m TIACS
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-[11px] text-stone-500 uppercase font-semibold">
                    {product.patternName}
                  </div>
                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="font-display font-bold text-sm text-stone-950 hover:text-amber-700 cursor-pointer line-clamp-1 mt-0.5"
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="font-display font-bold text-base text-stone-950 font-mono">
                      ${product.price.toFixed(2)} AUD
                    </span>
                    {product.compareAtPrice && (
                      <span className="text-xs font-mono text-stone-400 line-through">
                        ${product.compareAtPrice.toFixed(2)} AUD
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center gap-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="flex-1 py-2 text-xs font-bold bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg transition-colors"
                  >
                    Quick View
                  </button>
                  <button
                    onClick={() => onAddToCart(product, product.sizes[0] || 'M', 1)}
                    className="px-3 py-2 text-xs font-bold bg-stone-950 hover:bg-amber-600 text-white rounded-lg transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why TradeMutt Works: 3 Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-100 rounded-3xl p-8 sm:p-12 border border-stone-200">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
              The TradeMutt Blueprint
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-stone-950 mt-1">
              Why Colourful Workwear Saves Lives
            </h2>
            <p className="text-stone-600 text-sm mt-2">
              Built by two Queensland carpenters who realized that suicide was claiming more tradie lives than workplace accidents. Here's how our shirts break the silence:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-display font-bold text-stone-950">The Ultimate Icebreaker</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Walking onto a construction site in a shirt that loud removes the tension. You can't take yourself too seriously, making it easy for blokes and sheilas to open up about how they're truly travelling.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-display font-bold text-stone-950">Tough Aussie Workwear</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Made for hard yakka. 100% pre-shrunk cotton drill, underarm vents, triple stitching, and Australian safety certified hi-vis compliant with AS/NZS 4602.1:2011 Class D/N.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-display font-bold text-stone-950">50% Profit Pledge</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Every purchase directly finances TIACS (This Is A Conversation Starter). Over $1.8M donated to fund free, immediate psychological care with zero waiting lists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apprentice & Tradie Hub Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-stone-900 to-stone-950 text-white rounded-3xl p-8 sm:p-12 border border-stone-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              For 1st to 4th Year Tradies
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white">
              Apprentice & Tradie Hub
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed">
              Starting out on the tools? Check our jobsite survival checklist, understand Australian hi-vis regulations, and learn how to ask "Are you really OK?" without the awkwardness.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-stone-300 pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Site Safety Guide
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Sizing & Fit Advisor
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Conversation Playbook
              </span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={() => onNavigate('hub')}
              className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold rounded-xl text-sm transition-colors text-center"
            >
              Explore Apprentice Hub
            </button>
            <button
              onClick={() => onNavigate('business')}
              className="px-6 py-3.5 bg-stone-800 hover:bg-stone-700 text-white font-bold rounded-xl text-sm transition-colors text-center border border-stone-700"
            >
              Corporate & Site Packs
            </button>
          </div>
        </div>
      </section>

      {/* Tradie Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Real Feedback from the Tools
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-stone-950 mt-1">
            Worn with Pride Across Australia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
              "First day as a 1st year apprentice electrician, I wore the Sundowner shirt. My foreman walked over, laughed, and said 'love it mate'. During smoko he told me about his own battle with anxiety. That shirt broke down all the barriers."
            </p>
            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
              <span className="font-bold text-stone-950">Liam K.</span>
              <span className="text-stone-500">1st Year Sparky, Brisbane</span>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
              "Finally, women's tradie shirts that aren't just scaled-down men's boxy cuts! The Gum Blossom shirt fits my shoulders, stays tucked in, and survives the tough commercial sites. Plus knowing it helps TIACS makes it 10x better."
            </p>
            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
              <span className="font-bold text-stone-950">Sarah T.</span>
              <span className="text-stone-500">Qualified Chippie, Melbourne</span>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
              "We ordered 80 TradeMutt hi-vis shirts for our civil road crews. Friday site morale skyrocketed. Two of our operators called TIACS after seeing the number on the collar. That alone made the order priceless."
            </p>
            <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
              <span className="font-bold text-stone-950">Dave R.</span>
              <span className="text-stone-500">Site Safety Director, Perth</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
