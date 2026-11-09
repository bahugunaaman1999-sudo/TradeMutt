import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard, HeartHandshake, Download, ArrowRight } from 'lucide-react';
import { CartItem, CheckoutForm } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  onOrderSuccess,
}) => {
  const [formData, setFormData] = useState<CheckoutForm>({
    firstName: 'Jack',
    lastName: 'Mitchell',
    email: 'jack.m@aussietradie.com.au',
    phone: '0412 345 678',
    company: 'Apex Electrical QLD',
    address: '42 Industrial Avenue',
    suburb: 'Morningside',
    state: 'QLD',
    postcode: '4170',
    shippingMethod: 'standard',
    paymentMethod: 'card',
    notes: 'Please leave near front workshop roller door if unattended.',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const rawSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shippingCost = formData.shippingMethod === 'express' ? 14.95 : rawSubtotal >= 120 ? 0 : 9.95;
  const grandTotal = rawSubtotal + shippingCost;
  const counsellingMinutes = cart.reduce((sum, item) => sum + item.product.counsellingMinutesFunded * item.quantity, 0);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `TM-${Math.floor(10000 + Math.random() * 90000)}`;
      setOrderNumber(generatedId);
      setIsSubmitting(false);
      setOrderComplete(true);
      onOrderSuccess();
    }, 1000);
  };

  const handleFinish = () => {
    setOrderComplete(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-stone-900/70 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-200">
          {/* Header */}
          <div className="px-6 py-4 bg-stone-950 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-rose-500 flex items-center justify-center text-xs font-black">
                TM
              </div>
              <div>
                <h3 className="font-display font-bold text-base">TradeMutt Fast Checkout</h3>
                <p className="text-[11px] text-amber-400">50% of profits directly fund TIACS counselling</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-stone-400 hover:text-white p-1 rounded-lg"
              aria-label="Close checkout"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {orderComplete ? (
            /* Order Success View */
            <div className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Order Confirmed
                </span>
                <h3 className="text-2xl font-display font-black text-stone-900 mt-2">
                  Legend! Your gear is locked in.
                </h3>
                <p className="text-sm text-stone-600 mt-1">
                  Order Number: <strong className="font-mono text-stone-900">{orderNumber}</strong>
                </p>
                <p className="text-xs text-stone-500">
                  Confirmation receipt and tracking updates sent to <span className="font-semibold text-stone-800">{formData.email}</span>
                </p>
              </div>

              {/* Impact Card */}
              <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl text-left flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-stone-950 shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    You just funded {counsellingMinutes} minutes of free counselling!
                  </h4>
                  <p className="text-xs text-amber-900 mt-0.5 leading-relaxed">
                    Because of your purchase today, an Australian tradie or apprentice who is doing it tough will get free, confidential mental health support through TIACS. You are officially part of the solution.
                  </p>
                  <p className="text-[11px] text-amber-800 font-bold mt-2">
                    TIACS Free Helpline: 0488 846 988 (Save it in your phone!)
                  </p>
                </div>
              </div>

              <div className="p-4 bg-stone-50 rounded-xl text-xs text-stone-500 border border-stone-200">
                <p className="font-semibold text-stone-800 mb-1">Demonstration Store Notice</p>
                <p>This was a simulated transaction. No credit card charges occurred. All workwear data and TIACS social impact metrics reflect TradeMutt's real-world social enterprise model.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleFinish}
                  className="flex-1 py-3 bg-stone-950 hover:bg-stone-800 text-white font-bold rounded-xl text-sm transition-colors"
                >
                  Back to Store
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form View */
            <form onSubmit={handleSubmitOrder} className="p-6 space-y-6">
              {/* Notice */}
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
                <span>🛡️ Demo Mode: Instant test order with realistic Australian delivery flow.</span>
                <span className="font-bold">AUD Currency</span>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  1. Tradie Contact Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">First Name</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Email (for tracking)</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Mobile (AU)</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Business / Trade Name <span className="text-stone-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500"
                      placeholder="e.g. Apex Electrical or Self-Employed Chippie"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="space-y-3 pt-2 border-t border-stone-200">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  2. Australian Jobsite / Residential Address
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-3">
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Street Address</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500"
                      placeholder="123 Smith St or Lot 4 Industrial Estate"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Suburb / Town</label>
                    <input
                      type="text"
                      required
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">State</label>
                    <select
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg bg-white focus:outline-none focus:border-amber-500"
                    >
                      <option value="QLD">QLD (Queensland)</option>
                      <option value="NSW">NSW (New South Wales)</option>
                      <option value="VIC">VIC (Victoria)</option>
                      <option value="WA">WA (Western Australia)</option>
                      <option value="SA">SA (South Australia)</option>
                      <option value="TAS">TAS (Tasmania)</option>
                      <option value="ACT">ACT (Canberra)</option>
                      <option value="NT">NT (Northern Territory)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Postcode</label>
                    <input
                      type="text"
                      required
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Delivery Notes / Site Instructions
                    </label>
                    <input
                      type="text"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500"
                      placeholder="e.g. Leave in ute bed or gate passcode"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Method */}
              <div className="space-y-3 pt-2 border-t border-stone-200">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  3. Shipping Method
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                      formData.shippingMethod === 'standard'
                        ? 'border-amber-500 bg-amber-50/50'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="standard"
                      checked={formData.shippingMethod === 'standard'}
                      onChange={() => setFormData({ ...formData, shippingMethod: 'standard' })}
                      className="mt-0.5 text-amber-600 focus:ring-amber-500"
                    />
                    <div>
                      <p className="text-xs font-bold text-stone-900">Australia Post Standard</p>
                      <p className="text-[11px] text-stone-500">3–5 business days</p>
                      <p className="text-xs font-semibold font-mono text-stone-800 mt-1">
                        {rawSubtotal >= 120 ? 'FREE (Over $120 AUD)' : '$9.95 AUD'}
                      </p>
                    </div>
                  </label>

                  <label
                    className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                      formData.shippingMethod === 'express'
                        ? 'border-amber-500 bg-amber-50/50'
                        : 'border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="express"
                      checked={formData.shippingMethod === 'express'}
                      onChange={() => setFormData({ ...formData, shippingMethod: 'express' })}
                      className="mt-0.5 text-amber-600 focus:ring-amber-500"
                    />
                    <div>
                      <p className="text-xs font-bold text-stone-900">Australia Post Express</p>
                      <p className="text-[11px] text-stone-500">1–2 business days metro</p>
                      <p className="text-xs font-semibold font-mono text-stone-800 mt-1">$14.95 AUD</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Payment Demo */}
              <div className="space-y-3 pt-2 border-t border-stone-200">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                  4. Payment Options (Demo)
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className={`p-2.5 rounded-xl border text-center transition-colors text-xs font-bold ${
                      formData.paymentMethod === 'card'
                        ? 'border-amber-500 bg-amber-50 text-stone-900'
                        : 'border-stone-200 text-stone-600'
                    }`}
                  >
                    Credit / Debit
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'afterpay' })}
                    className={`p-2.5 rounded-xl border text-center transition-colors text-xs font-bold ${
                      formData.paymentMethod === 'afterpay'
                        ? 'border-amber-500 bg-amber-50 text-stone-900'
                        : 'border-stone-200 text-stone-600'
                    }`}
                  >
                    Afterpay (4x ${(grandTotal / 4).toFixed(2)})
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'paypal' })}
                    className={`p-2.5 rounded-xl border text-center transition-colors text-xs font-bold ${
                      formData.paymentMethod === 'paypal'
                        ? 'border-amber-500 bg-amber-50 text-stone-900'
                        : 'border-stone-200 text-stone-600'
                    }`}
                  >
                    PayPal
                  </button>
                </div>
              </div>

              {/* Order Summary & Submit */}
              <div className="pt-4 border-t border-stone-200 space-y-3">
                <div className="flex justify-between items-center text-base font-bold text-stone-950">
                  <span>Grand Total (AUD)</span>
                  <span className="font-mono text-lg">${grandTotal.toFixed(2)} AUD</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-stone-950 hover:bg-amber-600 text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Securing Your Workwear...</span>
                  ) : (
                    <>
                      <span>Place Order & Fund TIACS</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
