import React, { useState } from 'react';
import { HeartHandshake, Phone, ShieldCheck, CheckCircle2, Calculator, Users, Clock, DollarSign } from 'lucide-react';
import { IMPACT_METRICS } from '../data/products';

interface ImpactPageProps {
  onNavigateToShop: () => void;
}

export const ImpactPage: React.FC<ImpactPageProps> = ({ onNavigateToShop }) => {
  const [shirtCount, setShirtCount] = useState<number>(50);

  // Calculate impact: 1 shirt ≈ 20 minutes of free counselling
  const counsellingMinutes = shirtCount * 20;
  const counsellingHours = (counsellingMinutes / 60).toFixed(1);
  const tradiesReached = Math.round(shirtCount * 0.85);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Hero Impact Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider">
          <HeartHandshake className="w-4 h-4 text-rose-600" />
          <span>Social Enterprise Mission</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-stone-950 tracking-tight leading-tight">
          How Workwear Funds Free Mental Health Support
        </h1>
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
          TradeMutt is not just another clothing brand. We are a social enterprise founded by two carpenters on a mission to make mental health an everyday conversation on Australian job sites.
        </p>
      </div>

      {/* 50% Profit Pledge Big Banner */}
      <div className="bg-stone-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-stone-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="px-3 py-1 bg-amber-400 text-stone-950 font-black text-xs uppercase tracking-wider rounded-md inline-block">
              Guaranteed Commitment
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-black text-white">
              50% of Every Cent of Profit Goes Directly to TIACS
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed">
              When you buy TradeMutt, you are directly paying for registered mental health clinicians to provide free, phone and text-based counselling for Australian tradies, truckies, and their loved ones.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-stone-300">
              <span className="flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Free for Tradies
              </span>
              <span className="flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> No GP Mental Health Plan Needed
              </span>
              <span className="flex items-center gap-1.5 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Direct Text or Call Access
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-stone-900/90 border border-stone-800 rounded-2xl p-6 text-center space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Total TIACS Impact to Date</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
                <p className="text-2xl font-display font-black text-white font-mono">{IMPACT_METRICS.totalDonated}</p>
                <p className="text-[11px] text-stone-400 mt-0.5">Donated from Sales</p>
              </div>
              <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
                <p className="text-2xl font-display font-black text-rose-400 font-mono">{IMPACT_METRICS.counsellingHours}</p>
                <p className="text-[11px] text-stone-400 mt-0.5">Clinical Hours</p>
              </div>
            </div>
            <p className="text-[11px] text-stone-400">
              Independent financial audits ensure our 50% profit pledge is strictly honoured every fiscal year.
            </p>
          </div>
        </div>
      </div>

      {/* The Origin Story */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">The Story</span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-stone-950">
            From Heartbreak to a Nationwide Movement
          </h2>
          <div className="text-stone-600 text-sm leading-relaxed space-y-3">
            <p>
              In 2015, two Queensland carpenters, Dan Allen and Ed Ross, lost their close mate Dan to suicide. Like so many men in the construction industry, he suffered in silence because admitting you weren't okay was seen as weak.
            </p>
            <p>
              Devastated and frustrated by the epidemic of suicide in Australian blue-collar industries, Dan and Ed knew they couldn't just tell tradies to "open up". They needed a tool that forced the conversation naturally.
            </p>
            <p>
              They started sewing wild, vibrant, unapologetically funky work shirts made from heavy-duty Australian cotton drill. When a tradie walked on site in one, it was impossible to ignore. It sparked laughter, broke the ice, and opened the door to honest conversations.
            </p>
            <p className="font-semibold text-stone-900">
              In 2020, Dan and Ed co-founded TIACS (This Is A Conversation Starter) so that whenever anyone did reach out, professional, barrier-free help was waiting on the other end of the line.
            </p>
          </div>
        </div>

        {/* Story Milestones */}
        <div className="bg-stone-50 p-6 sm:p-8 rounded-3xl border border-stone-200 space-y-6">
          <h3 className="font-display font-bold text-lg text-stone-950">Milestones of Change</h3>
          <div className="space-y-5">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-400 text-stone-950 font-black text-xs flex items-center justify-center shrink-0">
                18
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-stone-900">2018: First Shirt Drops</h4>
                <p className="text-xs text-stone-600">Ed & Dan sew the first batch of loud shirts from their Brisbane shed.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-400 text-stone-950 font-black text-xs flex items-center justify-center shrink-0">
                20
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-stone-900">2020: TIACS Helpline Founded</h4>
                <p className="text-xs text-stone-600">Launched dedicated text & call mental health clinic for tradies.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-amber-400 text-stone-950 font-black text-xs flex items-center justify-center shrink-0">
                23
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-stone-900">2023: $1 Million Milestone</h4>
                <p className="text-xs text-stone-600">Cumulative donations from TradeMutt workwear surpass $1,000,000.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-rose-500 text-white font-black text-xs flex items-center justify-center shrink-0">
                26
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-stone-900">Today: 28,000+ Hours Funded</h4>
                <p className="text-xs text-stone-600">Over 100,000 shirts worn on jobsites from Darwin to Hobart.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Impact Calculator */}
      <section className="bg-stone-100 p-8 sm:p-12 rounded-3xl border border-stone-200 space-y-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
            <Calculator className="w-4 h-4" />
            <span>Interactive Tool</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-stone-950 mt-1">
            Calculate Your Jobsite or Crew Impact
          </h2>
          <p className="text-stone-600 text-sm mt-1">
            Slide the control below to see how many free counselling hours your team, workplace or apprentice kit generates:
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-stone-900">
                Number of TradeMutt Work Shirts:
              </label>
              <span className="text-xl font-display font-black text-stone-950 font-mono bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
                {shirtCount} Shirts
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="250"
              step="1"
              value={shirtCount}
              onChange={(e) => setShirtCount(Number(e.target.value))}
              className="w-full accent-amber-500 h-2 bg-stone-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-xs text-stone-400 font-mono">
              <span>1 shirt (individual tradie)</span>
              <span>100 shirts (medium contractor)</span>
              <span>250+ (tier-1 site package)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-100 text-center">
            <div className="p-4 bg-stone-50 rounded-xl">
              <Clock className="w-5 h-5 text-amber-600 mx-auto mb-1" />
              <p className="text-2xl font-display font-black text-stone-900 font-mono">
                {counsellingHours} Hours
              </p>
              <p className="text-xs text-stone-500 mt-0.5">Free Clinical Counselling</p>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl">
              <Users className="w-5 h-5 text-rose-600 mx-auto mb-1" />
              <p className="text-2xl font-display font-black text-stone-900 font-mono">
                ~{tradiesReached} Tradies
              </p>
              <p className="text-xs text-stone-500 mt-0.5">Directly Supported</p>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl">
              <DollarSign className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
              <p className="text-2xl font-display font-black text-stone-900 font-mono">
                ${(shirtCount * 18.5).toFixed(0)} AUD
              </p>
              <p className="text-xs text-stone-500 mt-0.5">Estimated TIACS Contribution</p>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={onNavigateToShop}
              className="px-6 py-3 bg-stone-950 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
            >
              Order Workwear for Your Crew
            </button>
          </div>
        </div>
      </section>

      {/* Direct TIACS Helpline Action Box */}
      <section className="bg-amber-400 text-stone-950 p-8 sm:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-stone-950 text-white text-[11px] font-bold px-2.5 py-0.5 rounded uppercase">
            TIACS 24/7 Access Link
          </div>
          <h3 className="text-2xl font-display font-black">
            Are you or someone on your crew having a tough trot?
          </h3>
          <p className="text-stone-900 text-xs sm:text-sm max-w-xl">
            You don't need a TradeMutt shirt to reach out. TIACS is 100% free for all Australian tradespeople, truck drivers, rural workers, and their families.
          </p>
        </div>

        <a
          href="tel:0488846988"
          className="px-6 py-3.5 bg-stone-950 hover:bg-stone-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2 shrink-0 shadow-lg"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call / Text 0488 846 988</span>
        </a>
      </section>
    </div>
  );
};
