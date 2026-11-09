import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Ruler, Droplets, Truck, RotateCcw, HelpCircle, ShieldCheck } from 'lucide-react';

export const ProductHelpPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mens' | 'womens'>('mens');
  const [unit, setUnit] = useState<'cm' | 'in'>('cm');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const mensSizes = [
    { size: 'XS', chestCm: '90-95', chestIn: '35-37', neckCm: '37', neckIn: '14.5', sleeveCm: '82', sleeveIn: '32' },
    { size: 'S', chestCm: '95-100', chestIn: '37-39', neckCm: '38', neckIn: '15.0', sleeveCm: '84', sleeveIn: '33' },
    { size: 'M', chestCm: '100-105', chestIn: '39-41', neckCm: '40', neckIn: '15.5', sleeveCm: '86', sleeveIn: '34' },
    { size: 'L', chestCm: '105-110', chestIn: '41-43', neckCm: '42', neckIn: '16.5', sleeveCm: '88', sleeveIn: '35' },
    { size: 'XL', chestCm: '110-115', chestIn: '43-45', neckCm: '44', neckIn: '17.5', sleeveCm: '90', sleeveIn: '35.5' },
    { size: '2XL', chestCm: '115-122', chestIn: '45-48', neckCm: '46', neckIn: '18.0', sleeveCm: '92', sleeveIn: '36' },
    { size: '3XL', chestCm: '122-130', chestIn: '48-51', neckCm: '48', neckIn: '19.0', sleeveCm: '94', sleeveIn: '37' },
    { size: '4XL', chestCm: '130-138', chestIn: '51-54', neckCm: '50', neckIn: '19.5', sleeveCm: '96', sleeveIn: '38' },
    { size: '5XL', chestCm: '138-146', chestIn: '54-57', neckCm: '52', neckIn: '20.5', sleeveCm: '98', sleeveIn: '38.5' },
  ];

  const womensSizes = [
    { size: '6 (XS)', bustCm: '82-86', bustIn: '32-34', waistCm: '66-70', waistIn: '26-27.5', hipCm: '92-96', hipIn: '36-38' },
    { size: '8 (S)', bustCm: '86-90', bustIn: '34-35.5', waistCm: '70-74', waistIn: '27.5-29', hipCm: '96-100', hipIn: '38-39.5' },
    { size: '10 (M)', bustCm: '90-95', bustIn: '35.5-37.5', waistCm: '74-79', waistIn: '29-31', hipCm: '100-105', hipIn: '39.5-41.5' },
    { size: '12 (L)', bustCm: '95-100', bustIn: '37.5-39.5', waistCm: '79-84', waistIn: '31-33', hipCm: '105-110', hipIn: '41.5-43.5' },
    { size: '14 (XL)', bustCm: '100-106', bustIn: '39.5-42', waistCm: '84-90', waistIn: '33-35.5', hipCm: '110-116', hipIn: '43.5-45.5' },
    { size: '16 (2XL)', bustCm: '106-112', bustIn: '42-44', waistCm: '90-96', waistIn: '35.5-38', hipCm: '116-122', hipIn: '45.5-48' },
    { size: '18 (3XL)', bustCm: '112-118', bustIn: '44-46.5', waistCm: '96-102', waistIn: '38-40', hipCm: '122-128', hipIn: '48-50.5' },
  ];

  const faqs = [
    {
      q: 'Are TradeMutt hi-vis shirts legal on Australian commercial job sites?',
      a: 'Yes, 100%. Our Hi-Vis Day/Night shirts are fully compliant with Australian Standard AS/NZS 4602.1:2011 Class D/N and high-visibility material standard AS/NZS 1906.4:2010. The fluorescent yellow or orange spans across the chest, shoulders and back with retro-reflective tape, while our colourful print occupies the non-critical lower torso.'
    },
    {
      q: 'How does TradeMutt sizing compare to standard Australian brands like Bisley or King Gee?',
      a: 'TradeMutt work shirts follow a relaxed, athletic Australian tradie fit. If you normally wear a Large in Bisley or Hard Yakka, order a Large in TradeMutt. If you plan to layer thick hoodies underneath in freezing Melbourne or Canberra winters, we recommend sizing up one size.'
    },
    {
      q: 'What is your 30-day exchange and returns policy?',
      a: 'We know buying workwear online can feel tricky. If your shirt arrives and doesn’t fit quite right, you can exchange it within 30 days of purchase free of charge. Items must be unwashed with original tags attached.'
    },
    {
      q: 'How does the 50% profit donation to TIACS actually work?',
      a: 'TradeMutt is structured as a social enterprise. 50% of all net company profits are donated directly to TIACS (This Is A Conversation Starter), a registered Australian mental health non-profit (ACNC registered). This directly finances qualified clinical counsellors, psychologist salaries, and free phone/text lines for workers.'
    },
    {
      q: 'Can our company add our own company logo to TradeMutt shirts?',
      a: 'Yes! Our B2B and business division provides co-branding, custom left-chest embroidery, and screen printing for orders of 20+ units. Your company logo goes on the left chest, keeping the TradeMutt brand on the right.'
    },
    {
      q: 'What are the delivery times across Australia?',
      a: 'We ship from Brisbane, QLD via Australia Post. Standard shipping takes 2-4 business days for east coast metro (Brisbane, Sydney, Melbourne) and 4-7 business days for regional and WA. Express shipping is usually 1-2 business days metro.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Page Title */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
          Customer & Sizing Support
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-stone-950 mt-1">
          Product Help & Tradie Sizing Guide
        </h1>
        <p className="text-stone-600 text-sm sm:text-base mt-2">
          Everything you need to know about TradeMutt fit, fabric specifications, washing instructions, and delivery.
        </p>
      </div>

      {/* Sizing Guide Table */}
      <section className="bg-white p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <Ruler className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-display font-bold text-stone-950">Official Sizing Chart</h2>
              <p className="text-xs text-stone-500">Measure around the fullest part of your chest or bust</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Gender Toggle */}
            <div className="flex bg-stone-100 p-1 rounded-xl text-xs font-bold">
              <button
                onClick={() => setActiveTab('mens')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'mens' ? 'bg-white text-stone-950 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Men's Fit
              </button>
              <button
                onClick={() => setActiveTab('womens')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'womens' ? 'bg-white text-stone-950 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Women's Fit
              </button>
            </div>

            {/* Unit Toggle */}
            <div className="flex bg-stone-100 p-1 rounded-xl text-xs font-bold">
              <button
                onClick={() => setUnit('cm')}
                className={`px-2.5 py-1.5 rounded-lg transition-colors ${
                  unit === 'cm' ? 'bg-white text-stone-950 shadow-xs' : 'text-stone-600'
                }`}
              >
                CM
              </button>
              <button
                onClick={() => setUnit('in')}
                className={`px-2.5 py-1.5 rounded-lg transition-colors ${
                  unit === 'in' ? 'bg-white text-stone-950 shadow-xs' : 'text-stone-600'
                }`}
              >
                IN
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          {activeTab === 'mens' ? (
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-bold">
                  <th className="p-3">Size</th>
                  <th className="p-3">Chest ({unit})</th>
                  <th className="p-3">Collar / Neck ({unit})</th>
                  <th className="p-3">Sleeve Length ({unit})</th>
                  <th className="p-3">Standard Aus Fit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 font-mono">
                {mensSizes.map((row) => (
                  <tr key={row.size} className="hover:bg-amber-50/40 transition-colors">
                    <td className="p-3 font-bold text-stone-950 font-sans">{row.size}</td>
                    <td className="p-3">{unit === 'cm' ? row.chestCm : row.chestIn}</td>
                    <td className="p-3">{unit === 'cm' ? row.neckCm : row.neckIn}</td>
                    <td className="p-3">{unit === 'cm' ? row.sleeveCm : row.sleeveIn}</td>
                    <td className="p-3 font-sans text-stone-600">Standard Roomy Tradie</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700 font-bold">
                  <th className="p-3">Size (AU)</th>
                  <th className="p-3">Bust ({unit})</th>
                  <th className="p-3">Waist ({unit})</th>
                  <th className="p-3">Hip ({unit})</th>
                  <th className="p-3">Tailored Cut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 font-mono">
                {womensSizes.map((row) => (
                  <tr key={row.size} className="hover:bg-amber-50/40 transition-colors">
                    <td className="p-3 font-bold text-stone-950 font-sans">{row.size}</td>
                    <td className="p-3">{unit === 'cm' ? row.bustCm : row.bustIn}</td>
                    <td className="p-3">{unit === 'cm' ? row.waistCm : row.waistIn}</td>
                    <td className="p-3">{unit === 'cm' ? row.hipCm : row.hipIn}</td>
                    <td className="p-3 font-sans text-stone-600">Tailored with Darts</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className="bg-stone-50 p-4 rounded-xl text-xs text-stone-600 flex items-start gap-2.5">
          <span className="font-bold text-stone-900 shrink-0">Tradie Pro-Tip:</span>
          <span>
            If your chest measurement sits between two sizes, choose the larger size if you prefer overhead mobility on ladders or scaffolding, or the smaller size if you wear your shirts tucked into work trousers.
          </span>
        </div>
      </section>

      {/* Fabric, Care & Delivery Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Fabric */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-base text-stone-950">Fabric & Durability</h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Crafted from 100% pre-shrunk cotton drill (150–190 GSM). Triple-needle stitched along the yoke and armholes to prevent tears under heavy tool friction. UPF 50+ Australian sun rating.
          </p>
        </div>

        {/* Washing */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
            <Droplets className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-base text-stone-950">Care & Washing</h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Cold machine wash with like colours. Turn shirts inside-out before washing to preserve the rich, vibrant colours. Line dry in shade; do not bleach or tumble dry on high heat.
          </p>
        </div>

        {/* Shipping & Returns */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <RotateCcw className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-base text-stone-950">30-Day Sizing Exchange</h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Free shipping on orders over $120 AUD. If your shirt doesn't fit like a glove, our 30-day exchange program lets you swap sizes quickly with zero stress.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-stone-50 p-6 sm:p-10 rounded-3xl border border-stone-200 space-y-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
            <HelpCircle className="w-4 h-4" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-stone-950 mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-display font-bold text-stone-900 text-sm sm:text-base flex items-center justify-between gap-4 hover:text-amber-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-stone-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-stone-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
