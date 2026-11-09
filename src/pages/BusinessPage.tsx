import React, { useState } from 'react';
import { Building2, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, HeartHandshake, Mail, Phone } from 'lucide-react';
import { BusinessQuoteForm } from '../types';

export const BusinessPage: React.FC = () => {
  const [formData, setFormData] = useState<BusinessQuoteForm>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    quantity: 50,
    productType: 'The Outbacker Hi-Vis Day/Night',
    customEmbroidery: true,
    notes: 'Interested in implementing Funky Friday work shirts for our civil road crews.',
  });

  const [submitted, setSubmitted] = useState(false);

  // Volume pricing calculation
  const basePrice = formData.productType.includes('Hi-Vis') ? 94.95 : 89.95;
  let discountRate = 0;
  if (formData.quantity >= 100) discountRate = 0.20;
  else if (formData.quantity >= 50) discountRate = 0.15;
  else if (formData.quantity >= 20) discountRate = 0.10;

  const embroideryCost = formData.customEmbroidery ? 6.50 : 0;
  const unitPrice = (basePrice * (1 - discountRate)) + embroideryCost;
  const totalEstimatedCost = unitPrice * formData.quantity;
  const clinicalHoursFunded = Math.round((formData.quantity * 20) / 60);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Hero Header */}
      <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div className="max-w-2xl relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wide">
            <Building2 className="w-4 h-4" />
            <span>Workplace Wellbeing & B2B Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight leading-tight">
            TradeMutt for Business & Job Sites
          </h1>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            Equip your workforce in Australian safety-certified workwear that transforms jobsite culture. Co-brand with your company logo, launch a Funky Friday initiative, and build an open culture of care.
          </p>
        </div>
      </div>

      {/* 3 B2B Benefits */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
            01
          </div>
          <h3 className="font-display font-bold text-base text-stone-950">Volume Tiered Discounts</h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Equip 20 to 1,000+ tradies with tiered wholesale savings (up to 20% off), flexible staggered deliveries across project phases, and consolidated invoicing.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold">
            02
          </div>
          <h3 className="font-display font-bold text-base text-stone-950">Custom Left-Chest Embroidery</h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Position your company badge with pride on the left breast, keeping the TradeMutt conversation-starter mark on the right chest and TIACS QR code on the sleeve.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold">
            03
          </div>
          <h3 className="font-display font-bold text-base text-stone-950">Tangible ESG Social Impact</h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Every business order includes an official Social Enterprise Certificate detailing the exact number of free counselling hours your organization funded with TIACS.
          </p>
        </div>
      </section>

      {/* Interactive Bulk Quote Builder & Inquiry Form */}
      <section className="bg-stone-50 p-6 sm:p-10 rounded-3xl border border-stone-200 space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Instant Estimate & Quote Request
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-stone-950 mt-1">
            Build Your Corporate Package
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1">
            Select your preferred workwear model, quantity, and branding options to preview pricing and mental health impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Quote Configuration Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-5">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-bold text-stone-900">
                  Quote Request Received!
                </h3>
                <p className="text-xs text-stone-600 max-w-sm mx-auto">
                  Thanks {formData.contactName || 'mate'}. Our Brisbane corporate team will review your specifications and email you a full digital mock-up and formal quote within 1 business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-stone-900 text-white text-xs font-bold rounded-lg"
                >
                  Configure Another Order
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Civil QLD"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">Contact Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mark Roberts"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="mark@apexcivil.com.au"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="0400 123 456"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                {/* Product Type */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Workwear Style</label>
                  <select
                    value={formData.productType}
                    onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="The Outbacker Hi-Vis Day/Night">The Outbacker AS/NZS Class D/N Hi-Vis Shirt ($94.95 base)</option>
                    <option value="The Sundowner Full-Button">The Sundowner Full-Button Cotton Drill ($89.95 base)</option>
                    <option value="Gum Blossom Women’s Tailored">Gum Blossom Women’s Tailored Tradie Shirt ($89.95 base)</option>
                    <option value="Wattle Bloom Tradie Polo">Wattle Bloom Heavy-Duty Tradie Polo ($64.95 base)</option>
                  </select>
                </div>

                {/* Quantity */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold text-stone-700">Estimated Quantity of Shirts</label>
                    <span className="text-xs font-bold font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      {formData.quantity} Units ({(discountRate * 100)}% Volume Discount)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="500"
                    step="10"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                    className="w-full accent-amber-500"
                  />
                  <div className="flex justify-between text-[11px] text-stone-400 font-mono mt-1">
                    <span>20 (10% off)</span>
                    <span>50 (15% off)</span>
                    <span>100+ (20% off)</span>
                    <span>500+</span>
                  </div>
                </div>

                {/* Custom Embroidery Checkbox */}
                <label className="flex items-center gap-2.5 p-3 rounded-xl border border-stone-200 cursor-pointer bg-stone-50 hover:bg-stone-100">
                  <input
                    type="checkbox"
                    checked={formData.customEmbroidery}
                    onChange={(e) => setFormData({ ...formData, customEmbroidery: e.target.checked })}
                    className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-stone-900 block">Include Custom Company Logo Embroidery</span>
                    <span className="text-stone-500">+$6.50 AUD per unit (Free digitizing setup on orders over 50 units)</span>
                  </div>
                </label>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Project Details or Deadlines</label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-stone-950 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <span>Submit Business Quote Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Real-time Pricing & Impact Preview */}
          <div className="lg:col-span-5 bg-stone-950 text-white p-6 sm:p-8 rounded-2xl border border-stone-800 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Live Pricing Estimate
              </span>
              <h3 className="text-xl font-display font-black text-white mt-1">
                Estimate Breakdown
              </h3>
            </div>

            <div className="space-y-3 text-xs border-y border-stone-800 py-4 font-mono">
              <div className="flex justify-between text-stone-300">
                <span>Product Base Price:</span>
                <span>${basePrice.toFixed(2)} AUD</span>
              </div>
              <div className="flex justify-between text-amber-400">
                <span>Volume Discount ({(discountRate * 100)}%):</span>
                <span>-${(basePrice * discountRate).toFixed(2)} AUD</span>
              </div>
              {formData.customEmbroidery && (
                <div className="flex justify-between text-stone-300">
                  <span>Custom Left-Chest Embroidery:</span>
                  <span>+${embroideryCost.toFixed(2)} AUD</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-white pt-2 border-t border-stone-800 text-sm">
                <span>Estimated Unit Price:</span>
                <span>${unitPrice.toFixed(2)} AUD</span>
              </div>
              <div className="flex justify-between font-bold text-amber-400 text-base pt-1">
                <span>Total Estimated (ex GST):</span>
                <span>${totalEstimatedCost.toFixed(2)} AUD</span>
              </div>
            </div>

            {/* Social Impact with this order */}
            <div className="p-4 bg-stone-900 rounded-xl border border-stone-800 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs">
                <HeartHandshake className="w-4 h-4" />
                <span>Your Company’s Social Impact</span>
              </div>
              <p className="text-xs text-stone-300">
                Ordering {formData.quantity} shirts directly funds approx.{' '}
                <strong className="text-white font-bold">{clinicalHoursFunded} hours</strong> of free psychological care through TIACS for Australian tradies.
              </p>
            </div>

            <div className="text-[11px] text-stone-400">
              * Official quotes include formal digitizing proofs, size breakdown spreadsheets, and shipping timetable.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
