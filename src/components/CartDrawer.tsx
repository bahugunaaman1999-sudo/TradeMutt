import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 120;
  const rawSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discount = promoApplied ? rawSubtotal * 0.1 : 0;
  const subtotal = rawSubtotal - discount;
  const freeShippingProgress = Math.min(100, (rawSubtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - rawSubtotal);

  const totalCounsellingMinutes = cart.reduce(
    (sum, item) => sum + item.product.counsellingMinutesFunded * item.quantity,
    0
  );

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'TRADIE10' || promoCode.trim().toUpperCase() === 'TIACS') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Try code TRADIE10 for 10% off');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="px-5 py-4 border-b border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-stone-900" />
              <h2 className="text-lg font-display font-bold text-stone-900">Your Workwear Cart</h2>
              <span className="text-xs font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full">
                {cart.reduce((count, item) => count + item.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-lg transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="px-5 py-3 bg-stone-50 border-b border-stone-200">
            <div className="flex justify-between text-xs font-medium mb-1.5">
              <span>
                {rawSubtotal >= FREE_SHIPPING_THRESHOLD ? (
                  <span className="text-emerald-700 font-bold">🎉 Free Australia-wide shipping unlocked!</span>
                ) : (
                  <span>
                    Add <strong className="text-stone-900">${amountToFreeShipping.toFixed(2)} AUD</strong> for Free Shipping
                  </span>
                )}
              </span>
              <span className="text-stone-500 font-mono text-[11px]">
                ${rawSubtotal.toFixed(2)} / ${FREE_SHIPPING_THRESHOLD}
              </span>
            </div>
            <div className="w-full bg-stone-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-amber-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Social Impact Callout */}
          {cart.length > 0 && totalCounsellingMinutes > 0 && (
            <div className="mx-5 mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center gap-2.5">
              <HeartHandshake className="w-5 h-5 text-rose-600 shrink-0" />
              <div>
                <span className="font-bold">Social Impact with this order:</span>
                <p className="text-amber-800">
                  This order funds <strong className="text-rose-600 font-extrabold">{totalCounsellingMinutes} minutes</strong> of free mental health counselling for Aussie tradies via TIACS.
                </p>
              </div>
            </div>
          )}

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-stone-900">Your toolbag is empty</h3>
                  <p className="text-xs text-stone-500 mt-1 max-w-xs">
                    Get geared up in conversation-starting Australian workwear that looks good and saves lives.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-bold transition-colors"
                >
                  Browse Work Shirts
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="flex gap-3.5 pb-4 border-b border-stone-100"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg bg-stone-100 shrink-0 border border-stone-200"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="text-xs sm:text-sm font-semibold text-stone-900 line-clamp-1">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.product.id, item.selectedSize)}
                        className="text-stone-400 hover:text-rose-600 transition-colors p-0.5"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-xs text-stone-500 mt-0.5">
                      <span>Size: <strong className="text-stone-700">{item.selectedSize}</strong></span>
                      {item.product.hiVisType !== 'none' && (
                        <span className="ml-2 text-amber-700 font-medium">· AS/NZS Hi-Vis</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden bg-stone-50">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, -1)}
                          className="px-2 py-1 text-stone-600 hover:bg-stone-200 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold font-mono tabular-nums text-stone-900 min-w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedSize, 1)}
                          className="px-2 py-1 text-stone-600 hover:bg-stone-200 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-bold font-mono text-stone-900">
                          ${(item.product.price * item.quantity).toFixed(2)} AUD
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Module */}
          {cart.length > 0 && (
            <div className="px-5 py-4 border-t border-stone-200 bg-stone-50 space-y-3">
              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Discount code (e.g. TRADIE10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3 py-1.5 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:border-amber-500 uppercase font-mono"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-semibold rounded-lg transition-colors"
                >
                  Apply
                </button>
              </form>
              {promoApplied && (
                <p className="text-[11px] text-emerald-600 font-semibold">
                  ✓ TRADIE10 applied (10% discount)
                </p>
              )}
              {promoError && (
                <p className="text-[11px] text-rose-500 font-medium">
                  {promoError}
                </p>
              )}

              {/* Subtotals */}
              <div className="space-y-1.5 text-xs text-stone-600 pt-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono">${rawSubtotal.toFixed(2)} AUD</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Tradie Discount</span>
                    <span className="font-mono">-${discount.toFixed(2)} AUD</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-mono">
                    {rawSubtotal >= FREE_SHIPPING_THRESHOLD ? (
                      <span className="text-emerald-600 font-semibold">FREE</span>
                    ) : (
                      '$9.95 AUD'
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-stone-950 pt-2 border-t border-stone-200">
                  <span>Total</span>
                  <span className="font-mono">
                    ${(subtotal + (rawSubtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 9.95)).toFixed(2)} AUD
                  </span>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={onCheckout}
                className="w-full py-3.5 px-4 bg-stone-950 hover:bg-amber-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md text-sm"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>30-Day Hassle-Free Size Exchanges & Returns</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
