import React, { useState } from 'react';
import { CheckSquare, Square, HeartHandshake, ShieldCheck, HelpCircle, Phone, ArrowRight, BookOpen, AlertCircle } from 'lucide-react';

interface TradieHubPageProps {
  onNavigateToShop: () => void;
  onOpenSizeGuide: () => void;
}

export const TradieHubPage: React.FC<TradieHubPageProps> = ({
  onNavigateToShop,
  onOpenSizeGuide,
}) => {
  // Interactive checklist state for apprentices
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'c1': true,
    'c2': true,
    'c3': false,
    'c4': false,
    'c5': false,
    'c6': true,
  });

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const checklist = [
    { id: 'c1', title: 'AS/NZS 4602.1 Certified Work Shirt', desc: 'Compliant Day or Day/Night tape depending on your site induction requirements.' },
    { id: 'c2', title: 'Steel-Cap or Composite Toe Work Boots', desc: 'Compliant with AS 2210.3 with ankle support to avoid site turn-aways.' },
    { id: 'c3', title: 'TIACS Mental Health Number in Phone', desc: 'Save 0488 846 988 in your contacts right now before you step on site.' },
    { id: 'c4', title: 'Heavy Cotton Tradie Drill Work Pants', desc: 'Reinforced knee pads and cargo tool pockets for chisels, tape, and pencils.' },
    { id: 'c5', title: 'UPF 50+ Broad Brim Hat / Hard Hat Brim', desc: 'Protection against harsh Australian UV radiation on open-sky builds.' },
    { id: 'c6', title: 'White Card (General Construction Induction)', desc: 'Mandatory national certification required on any Australian commercial jobsite.' },
  ];

  const completedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
      {/* Hero Header */}
      <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div className="max-w-2xl relative z-10 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            For 1st–4th Year Apprentices & Experienced Tradies
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight leading-tight">
            Apprentice & Tradie Hub
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Everything you need to survive your first year on the tools, pick the right Australian workwear, protect your back, and master the art of looking out for your workmates.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onNavigateToShop}
              className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
            >
              Shop Apprentice Specials
            </button>
            <button
              onClick={onOpenSizeGuide}
              className="px-6 py-3 bg-stone-800 hover:bg-stone-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors border border-stone-700"
            >
              Tradie Sizing Guide
            </button>
          </div>
        </div>
      </div>

      {/* Guide 1: Choosing Your Workwear (Full-Button vs Half-Button & Site Standards) */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Guide 01</span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-stone-950 mt-1">
            How to Choose the Right Workwear for Your Trade
          </h2>
          <p className="text-stone-600 text-sm mt-1 max-w-3xl">
            Not all trades are the same. A sparkie crawling through a ceiling space has very different demands compared to a civil road crew in 40°C heat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Half Button */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-bold rounded-lg">
              Plumbers & Mechanics
            </div>
            <h3 className="font-display font-bold text-lg text-stone-950">Half-Button Popovers</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Why it matters: With only 3 or 4 top buttons and a solid lower torso, there are no exposed buttons to scratch against automotive paintwork, pipes, or building timber. It also stays cleanly tucked in when crouching.
            </p>
            <div className="text-xs text-stone-500 pt-2 border-t border-stone-100">
              <strong>Best TradeMutt pick:</strong> Billabong Ripple Half-Button
            </div>
          </div>

          {/* Full Button */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-lg">
              Chippies & Sparkies
            </div>
            <h3 className="font-display font-bold text-lg text-stone-950">Full-Button Vented Shirts</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Why it matters: Quick to unbutton over a singlet during lunch smoko, plus gives maximum underarm airflow with dual mesh ventilation eyelets. Fits comfortably under heavy tool belts and harnesses.
            </p>
            <div className="text-xs text-stone-500 pt-2 border-t border-stone-100">
              <strong>Best TradeMutt pick:</strong> The Sundowner Full-Button
            </div>
          </div>

          {/* Hi-Vis Certified */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
            <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-lg">
              Civil, Mining & Tier-1 Sites
            </div>
            <h3 className="font-display font-bold text-lg text-stone-950">AS/NZS Class D/N Taped</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Why it matters: Tier-1 principal contractors legally mandate Class D/N tape compliance (Australian Standard AS/NZS 4602.1:2011). TradeMutt combines certified fluoro upper blocks with mental health prints below.
            </p>
            <div className="text-xs text-stone-500 pt-2 border-t border-stone-100">
              <strong>Best TradeMutt pick:</strong> The Outbacker Hi-Vis
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Apprentice First-Day Checklist */}
      <section className="bg-stone-50 p-6 sm:p-8 rounded-3xl border border-stone-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
              Day One Ready
            </span>
            <h2 className="text-xl sm:text-2xl font-display font-black text-stone-950 mt-1">
              Apprentice Site Survival Checklist
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Tick these off before walking onto your first Australian job site:
            </p>
          </div>
          <div className="px-4 py-2 bg-white rounded-xl border border-stone-200 text-xs font-bold text-stone-800">
            Progress: {completedCount} of {checklist.length} Completed
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {checklist.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                checkedItems[item.id]
                  ? 'bg-white border-emerald-300 shadow-xs'
                  : 'bg-white/60 border-stone-200 hover:border-stone-300'
              }`}
            >
              <button
                type="button"
                className="mt-0.5 text-stone-400 focus:outline-none"
                aria-label={`Toggle ${item.title}`}
              >
                {checkedItems[item.id] ? (
                  <CheckSquare className="w-5 h-5 text-emerald-600" />
                ) : (
                  <Square className="w-5 h-5 text-stone-400" />
                )}
              </button>
              <div>
                <h4 className={`text-xs sm:text-sm font-bold ${checkedItems[item.id] ? 'text-stone-950' : 'text-stone-700'}`}>
                  {item.title}
                </h4>
                <p className="text-xs text-stone-500 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workplace Mental Health Playbook: Starting the Conversation */}
      <section className="bg-white p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-xs space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Workplace Culture Playbook
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-stone-950 mt-1">
            How to Start a Conversation When a Mate is Quiet
          </h2>
          <p className="text-stone-600 text-sm mt-2 leading-relaxed">
            Tradie culture historically praised "toughening up" and staying silent. TradeMutt was founded to kill that stigma. You don't need to be a psychologist to check on your workmate—you just need 5 simple steps:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-amber-400 text-stone-950 font-black text-xs flex items-center justify-center">
              1
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-stone-900">Spot the Shift</h4>
            <p className="text-xs text-stone-600">
              Have they stopped chatting at smoko? Seeming frustrated with simple tasks? Missing tools or arriving late?
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-amber-400 text-stone-950 font-black text-xs flex items-center justify-center">
              2
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-stone-900">Pick the Moment</h4>
            <p className="text-xs text-stone-600">
              Don't call them out in front of the whole crew. Ask while walking to the ute, grabbing coffee, or packing up.
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-amber-400 text-stone-950 font-black text-xs flex items-center justify-center">
              3
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-stone-900">Ask Directly</h4>
            <p className="text-xs text-stone-600">
              "Hey mate, you seemed a bit flat today. Everything going alright at home or on the tools?"
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-amber-400 text-stone-950 font-black text-xs flex items-center justify-center">
              4
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-stone-900">Shut Up & Listen</h4>
            <p className="text-xs text-stone-600">
              Don't rush to give advice or say "it could be worse". Just listen and let them get it off their chest.
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
            <span className="w-7 h-7 rounded-lg bg-rose-500 text-white font-black text-xs flex items-center justify-center">
              5
            </span>
            <h4 className="text-xs sm:text-sm font-bold text-stone-900">Give Them TIACS</h4>
            <p className="text-xs text-stone-600">
              Point to the QR code on your TradeMutt sleeve or text <strong>0488 846 988</strong> together.
            </p>
          </div>
        </div>

        {/* Dedicated TIACS box in Hub */}
        <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-stone-950 shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-stone-950 text-sm">TIACS Tradie Support Helpline</p>
              <p className="text-xs text-amber-900">
                Text or Call <span className="font-bold">0488 846 988</span> · Mon–Fri 8am–10pm AEST. Completely free, confidential mental health counselling.
              </p>
            </div>
          </div>
          <a
            href="tel:0488846988"
            className="px-5 py-2.5 bg-stone-950 hover:bg-stone-800 text-white font-bold text-xs rounded-xl transition-colors shrink-0"
          >
            Call 0488 846 988
          </a>
        </div>
      </section>
    </div>
  );
};
