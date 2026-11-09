import React, { useState } from 'react';
import { X, Star, HeartHandshake, ShieldCheck, Truck, RotateCcw, Check, ShoppingBag, Info } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
  onOpenSizeGuide: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenSizeGuide,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [quantity, setQuantity] = useState<number>(1);
  const [addedToast, setAddedToast] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, quantity);
    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-stone-900/70 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-4 md:p-6">
        <div className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-stone-200 animate-in fade-in zoom-in-95 duration-200">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/90 hover:bg-white text-stone-700 hover:text-stone-950 rounded-full flex items-center justify-center shadow-md transition-colors"
            aria-label="Close product view"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Gallery Column */}
            <div className="bg-stone-100 p-6 sm:p-8 flex flex-col justify-between relative border-b md:border-b-0 md:border-r border-stone-200">
              <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-stone-200 shadow-inner group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-stone-950 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                    {product.badge}
                  </span>
                )}
                {product.hiVisType !== 'none' && (
                  <span className="absolute bottom-3 left-3 bg-amber-400 text-stone-950 text-xs font-extrabold px-2.5 py-1 rounded-md shadow-sm">
                    {product.hiVisType === 'day-night' ? 'AS/NZS 4602.1 Day/Night' : 'AS/NZS 4602.1 Class D'}
                  </span>
                )}
              </div>

              {/* Pattern Info Tag */}
              <div className="mt-4 p-3 bg-white/80 rounded-xl border border-stone-200/80 text-xs text-stone-700">
                <span className="font-bold text-stone-900 block">Artwork Pattern: {product.patternName}</span>
                <span className="text-[11px] text-stone-500">
                  Engineered with YNWA motto & TIACS QR code to start mental health conversations.
                </span>
              </div>
            </div>

            {/* Product Purchase Module */}
            <div className="p-6 sm:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
              <div className="space-y-4">
                {/* Category & Rating */}
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <span className="uppercase font-bold tracking-wider text-amber-700">
                    {product.category.replace('-', ' ')}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="text-stone-800">{product.rating}</span>
                    <span className="text-stone-400">({product.reviewCount} tradie reviews)</span>
                  </div>
                </div>

                {/* Title & Price */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-black text-stone-950 leading-tight">
                    {product.name}
                  </h2>
                  <div className="flex items-baseline gap-2.5 mt-2">
                    <span className="text-2xl font-display font-black text-stone-950 font-mono">
                      ${product.price.toFixed(2)} AUD
                    </span>
                    {product.compareAtPrice && (
                      <span className="text-sm font-mono text-stone-400 line-through">
                        ${product.compareAtPrice.toFixed(2)} AUD
                      </span>
                    )}
                  </div>
                </div>

                {/* TIACS Impact Highlight */}
                <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3">
                  <HeartHandshake className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-stone-900">Direct Social Impact:</span>
                    <p className="text-amber-900 mt-0.5">
                      50% of TradeMutt profits directly fund TIACS. This specific shirt funds{' '}
                      <strong className="text-rose-600 font-bold">{product.counsellingMinutesFunded} minutes</strong> of free mental health care.
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Size Selector */}
                <div className="space-y-2 pt-2 border-t border-stone-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-stone-900">Select Size</span>
                    <button
                      onClick={onOpenSizeGuide}
                      className="text-xs text-amber-700 hover:text-amber-800 font-semibold underline flex items-center gap-1"
                    >
                      <Info className="w-3 h-3" />
                      <span>Size Guide & Measurements</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                          selectedSize === size
                            ? 'bg-stone-950 text-white border-stone-950 shadow-sm'
                            : 'bg-white text-stone-800 border-stone-300 hover:border-stone-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Specs Pill List */}
                <div className="grid grid-cols-2 gap-2 text-xs text-stone-600 pt-2 border-t border-stone-100">
                  <div className="p-2 bg-stone-50 rounded-lg">
                    <span className="text-[10px] text-stone-400 uppercase font-bold block">Fabric</span>
                    <span className="font-medium text-stone-800">{product.specs.fabric}</span>
                  </div>
                  <div className="p-2 bg-stone-50 rounded-lg">
                    <span className="text-[10px] text-stone-400 uppercase font-bold block">Sun Protection</span>
                    <span className="font-medium text-stone-800">{product.specs.sunProtection}</span>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-6 border-t border-stone-200 mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-stone-300 rounded-xl overflow-hidden bg-stone-50 h-12">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3.5 h-full text-stone-600 hover:bg-stone-200 transition-colors font-bold"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-3 text-sm font-bold font-mono text-stone-900 min-w-8 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3.5 h-full text-stone-600 hover:bg-stone-200 transition-colors font-bold"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  {/* Add To Cart */}
                  <button
                    onClick={handleAdd}
                    disabled={addedToast}
                    className={`flex-1 h-12 rounded-xl font-bold flex items-center justify-center gap-2 text-sm transition-all shadow-md ${
                      addedToast
                        ? 'bg-emerald-600 text-white'
                        : 'bg-stone-950 hover:bg-amber-600 text-white'
                    }`}
                  >
                    {addedToast ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span>Added to Cart!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-5 h-5" />
                        <span>Add {quantity > 1 ? `(${quantity})` : ''} to Cart · ${(product.price * quantity).toFixed(2)} AUD</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-stone-500 pt-2 px-1">
                  <div className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-stone-700" />
                    <span>Free shipping on orders over $120 AUD</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <RotateCcw className="w-3.5 h-3.5 text-stone-700" />
                    <span>30-day sizing exchange</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
