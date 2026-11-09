import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, HeartHandshake, CheckCircle2, Send, AlertTriangle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'sizing',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Page Title */}
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
          We’re Here to Help
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-stone-950 mt-1">
          Contact TradeMutt
        </h1>
        <p className="text-stone-600 text-sm sm:text-base mt-2">
          Have a question about sizing, delivery, order exchanges, or want to say g'day to the team? Get in touch below.
        </p>
      </div>

      {/* Prominent & Clearly Separated TIACS Crisis Helpline Notice */}
      <section className="bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 p-[2px] rounded-3xl shadow-lg">
        <div className="bg-stone-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
              <HeartHandshake className="w-4 h-4 text-rose-400" />
              <span>Seeking Mental Health Support?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-black text-white">
              Direct TIACS Helpline: Free & Confidential
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm max-w-2xl">
              If you or a mate are doing it tough, please do not use the general customer support form. Contact TIACS directly—a dedicated free service for Australian blue-collar workers and tradies.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-stone-400 pt-1">
              <span>TIACS: <strong>0488 846 988</strong></span>
              <span>·</span>
              <span>Lifeline 24/7: <strong>13 11 14</strong></span>
              <span>·</span>
              <span>MensLine: <strong>1300 78 99 78</strong></span>
            </div>
          </div>

          <a
            href="tel:0488846988"
            className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shrink-0 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call / Text TIACS: 0488 846 988</span>
          </a>
        </div>
      </section>

      {/* Main Grid: Form + Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-xs">
          <h2 className="text-xl font-display font-bold text-stone-950 mb-4">
            Send an Enquiry
          </h2>

          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-bold text-stone-900">Message Received!</h3>
              <p className="text-xs text-stone-600 max-w-sm mx-auto">
                Thanks for reaching out! Our Brisbane customer care crew will get back to you within 24 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2.5 bg-stone-900 text-white text-xs font-bold rounded-lg"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mitch Taylor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="mitch@tradie.com.au"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Phone (Optional)</label>
                  <input
                    type="tel"
                    placeholder="0400 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">Inquiry Topic</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="sizing">Sizing & Fit Advice</option>
                    <option value="order">Order Tracking & Returns</option>
                    <option value="b2b">Bulk Orders & Corporate Co-Branding</option>
                    <option value="tiacs">TIACS Partnership Question</option>
                    <option value="general">General Feedback</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Your Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="How can we help you out?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-stone-950 hover:bg-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>

        {/* Direct Contact Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-stone-50 p-6 sm:p-8 rounded-3xl border border-stone-200 space-y-6">
            <h3 className="text-lg font-display font-bold text-stone-950">
              TradeMutt Headquarters
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-stone-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">Brisbane Warehouse & Office:</strong>
                  <span>Unit 4, 180 Commercial Road, Teneriffe QLD 4005 Australia</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">Phone Support:</strong>
                  <span>1300 872 336 (1300 TRADEMUTT)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">Email:</strong>
                  <span>support@trademutt.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-900 block">Opening Hours:</strong>
                  <span>Monday – Friday: 8:30am – 4:30pm AEST</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-stone-200 text-xs text-stone-500">
              <span className="font-bold text-stone-800 block mb-1">Local Pickups Available:</span>
              Brisbane customers can select "Warehouse Pickup" during checkout to grab shirts directly from our Teneriffe HQ!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
