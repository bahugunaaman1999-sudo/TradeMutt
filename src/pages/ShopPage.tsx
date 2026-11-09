import React, { useState, useMemo } from 'react';
import { Filter, SlidersHorizontal, RotateCcw, Star, ShoppingBag, Eye, HeartHandshake } from 'lucide-react';
import { Product, ProductCategory, HiVisStandard, FitType } from '../types';

interface ShopPageProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  products,
  onSelectProduct,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedHiVis, setSelectedHiVis] = useState<HiVisStandard | 'all'>('all');
  const [selectedGender, setSelectedGender] = useState<FitType | 'all'>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(100);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: 'All Gear' },
    { id: 'work-shirts', label: 'Work Shirts' },
    { id: 'hi-vis', label: 'AS/NZS Hi-Vis' },
    { id: 'womens', label: "Women's Workwear" },
    { id: 'polos', label: 'Polos' },
    { id: 'scrubs', label: 'Healthcare Scrubs' },
    { id: 'accessories', label: 'Accessories & Socks' },
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'];

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
        if (selectedHiVis !== 'all' && p.hiVisType !== selectedHiVis) return false;
        if (selectedGender !== 'all' && p.gender !== selectedGender && p.gender !== 'unisex') return false;
        if (selectedSize !== 'all' && !p.sizes.some((s) => s.includes(selectedSize))) return false;
        if (p.price > maxPrice) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
      });
  }, [products, selectedCategory, selectedHiVis, selectedGender, selectedSize, maxPrice, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedHiVis('all');
    setSelectedGender('all');
    setSelectedSize('all');
    setMaxPrice(100);
    setSortBy('featured');
  };

  const activeFilterCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    (selectedHiVis !== 'all' ? 1 : 0) +
    (selectedGender !== 'all' ? 1 : 0) +
    (selectedSize !== 'all' ? 1 : 0) +
    (maxPrice < 100 ? 1 : 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Category Header */}
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
          Australian Tradie Workwear Store
        </span>
        <h1 className="text-2xl sm:text-4xl font-display font-black text-stone-950 mt-1">
          Shop Conversation Starters
        </h1>
        <p className="text-stone-600 text-sm mt-1 max-w-2xl">
          Tough cotton drill shirts, Australian safety certified hi-vis, breathable polos, and women's tradie cuts. Every single purchase funds free mental health care with TIACS.
        </p>

        {/* Category Filter Pills (Functional button controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mt-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-stone-950 text-white shadow-sm'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid & Filters Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Desktop Filter Sidebar */}
        <div className="hidden lg:block space-y-6 bg-stone-50 p-6 rounded-2xl border border-stone-200 self-start">
          <div className="flex items-center justify-between pb-4 border-b border-stone-200">
            <div className="flex items-center gap-2 text-stone-900 font-display font-bold text-sm">
              <Filter className="w-4 h-4 text-amber-600" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 bg-amber-500 text-stone-950 text-[11px] font-bold rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </div>
            {activeFilterCount > 0 && (
              <button
                onClick={resetFilters}
                className="text-xs text-rose-600 hover:underline flex items-center gap-1 font-semibold"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Hi-Vis Compliance */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-stone-900 uppercase tracking-wide block">
              Site Safety Compliance
            </label>
            <div className="space-y-1.5 text-xs">
              {[
                { id: 'all', label: 'All (Any Compliance)' },
                { id: 'none', label: 'Non Hi-Vis (Funky Prints)' },
                { id: 'day', label: 'AS/NZS Class D (Day Only)' },
                { id: 'day-night', label: 'AS/NZS Class D/N (Day & Night Tape)' },
              ].map((item) => (
                <label key={item.id} className="flex items-center gap-2 cursor-pointer text-stone-700 hover:text-stone-950">
                  <input
                    type="radio"
                    name="hivis"
                    checked={selectedHiVis === item.id}
                    onChange={() => setSelectedHiVis(item.id as HiVisStandard | 'all')}
                    className="text-amber-600 focus:ring-amber-500"
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Gender / Fit */}
          <div className="space-y-2 pt-4 border-t border-stone-200">
            <label className="text-xs font-bold text-stone-900 uppercase tracking-wide block">
              Fit & Cut
            </label>
            <div className="space-y-1.5 text-xs">
              {[
                { id: 'all', label: 'All Fits' },
                { id: 'mens', label: "Men's Standard Tradie Fit" },
                { id: 'womens', label: "Women's Tailored Tradie Fit" },
                { id: 'unisex', label: 'Unisex Site Cut' },
              ].map((item) => (
                <label key={item.id} className="flex items-center gap-2 cursor-pointer text-stone-700 hover:text-stone-950">
                  <input
                    type="radio"
                    name="gender"
                    checked={selectedGender === item.id}
                    onChange={() => setSelectedGender(item.id as FitType | 'all')}
                    className="text-amber-600 focus:ring-amber-500"
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-2 pt-4 border-t border-stone-200">
            <label className="text-xs font-bold text-stone-900 uppercase tracking-wide block">
              Size
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                onClick={() => setSelectedSize('all')}
                className={`py-1.5 text-xs font-semibold rounded-lg border text-center transition-colors ${
                  selectedSize === 'all'
                    ? 'bg-stone-950 text-white border-stone-950'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                }`}
              >
                All
              </button>
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`py-1.5 text-xs font-semibold rounded-lg border text-center transition-colors ${
                    selectedSize === s
                      ? 'bg-stone-950 text-white border-stone-950'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Max Price Slider */}
          <div className="space-y-2 pt-4 border-t border-stone-200">
            <div className="flex justify-between items-center text-xs">
              <label className="font-bold text-stone-900 uppercase tracking-wide">Max Price</label>
              <span className="font-mono font-bold text-stone-800">${maxPrice} AUD</span>
            </div>
            <input
              type="range"
              min="15"
              max="100"
              step="5"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
            <div className="flex justify-between text-[11px] text-stone-500 font-mono">
              <span>$15</span>
              <span>$100 AUD</span>
            </div>
          </div>
        </div>

        {/* Product Grid Area */}
        <div className="lg:col-span-3 space-y-6">
          {/* Top Sort & Count Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-bold rounded-lg flex items-center gap-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters {activeFilterCount > 0 ? `(${activeFilterCount})` : ''}</span>
              </button>
              <span className="text-xs text-stone-500">
                Showing <strong className="text-stone-900 font-semibold">{filteredProducts.length}</strong> workwear items
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-stone-500 shrink-0">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-2.5 py-1.5 bg-white border border-stone-200 rounded-lg text-xs font-medium text-stone-800 focus:outline-none focus:border-amber-500"
              >
                <option value="featured">Featured Workwear</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Customer Rated</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="py-16 text-center bg-stone-50 rounded-2xl border border-stone-200 p-8 space-y-3">
              <p className="text-base font-bold text-stone-900">No workwear matches these filters</p>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                Try widening your price range or clearing compliance and size filters to see more gear.
              </p>
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-bold transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
                >
                  {/* Image container */}
                  <div
                    onClick={() => onSelectProduct(product)}
                    className="relative aspect-4/3 bg-stone-100 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top tags */}
                    <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
                      {product.badge && (
                        <span className="bg-stone-950 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                          {product.badge}
                        </span>
                      )}
                      {product.hiVisType !== 'none' && (
                        <span className="bg-amber-400 text-stone-950 text-[10px] font-black px-2 py-0.5 rounded shadow-xs">
                          {product.hiVisType === 'day-night' ? 'Hi-Vis D/N' : 'Hi-Vis Day'}
                        </span>
                      )}
                    </div>

                    {/* Quick view hover icon */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-stone-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                      aria-label="Quick preview"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      {/* Quiet unboxed metadata */}
                      <div className="flex items-center gap-1.5 text-[11px] text-stone-500 mb-1">
                        <span>{product.patternName}</span>
                        <span>·</span>
                        <span className="capitalize">{product.gender} cut</span>
                      </div>

                      <h3
                        onClick={() => onSelectProduct(product)}
                        className="font-display font-bold text-sm text-stone-950 hover:text-amber-700 cursor-pointer line-clamp-1"
                      >
                        {product.name}
                      </h3>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-baseline gap-2">
                          <span className="font-display font-black text-base text-stone-950 font-mono">
                            ${product.price.toFixed(2)} AUD
                          </span>
                          {product.compareAtPrice && (
                            <span className="text-xs font-mono text-stone-400 line-through">
                              ${product.compareAtPrice.toFixed(2)}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-1 text-[11px] font-bold text-amber-500">
                          <Star className="w-3 h-3 fill-current" />
                          <span className="text-stone-700">{product.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* TIACS Impact note */}
                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px]">
                      <span className="text-rose-600 font-semibold flex items-center gap-1">
                        <HeartHandshake className="w-3 h-3" />
                        <span>Funds {product.counsellingMinutesFunded}m TIACS</span>
                      </span>

                      <button
                        onClick={() => onAddToCart(product, product.sizes[0] || 'M', 1)}
                        className="px-3 py-1.5 bg-stone-950 hover:bg-amber-600 text-white font-bold rounded-lg text-xs transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs" onClick={() => setMobileFilterOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                  <h3 className="font-display font-bold text-base text-stone-900">Filters</h3>
                  <button onClick={() => setMobileFilterOpen(false)} className="text-stone-400 p-1">
                    ✕
                  </button>
                </div>

                {/* Categories */}
                <div>
                  <label className="text-xs font-bold text-stone-900 uppercase block mb-2">Category</label>
                  <div className="flex flex-wrap gap-1.5">
                    {categories.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedCategory(c.id)}
                        className={`px-3 py-1.5 text-xs rounded-lg font-semibold ${
                          selectedCategory === c.id ? 'bg-stone-950 text-white' : 'bg-stone-100 text-stone-700'
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Hi-Vis */}
                <div>
                  <label className="text-xs font-bold text-stone-900 uppercase block mb-2">Site Compliance</label>
                  <select
                    value={selectedHiVis}
                    onChange={(e) => setSelectedHiVis(e.target.value as any)}
                    className="w-full p-2 text-xs border border-stone-300 rounded-lg"
                  >
                    <option value="all">All Standards</option>
                    <option value="none">Non Hi-Vis</option>
                    <option value="day">AS/NZS Class D (Day)</option>
                    <option value="day-night">AS/NZS Class D/N (Day & Night)</option>
                  </select>
                </div>

                {/* Fit */}
                <div>
                  <label className="text-xs font-bold text-stone-900 uppercase block mb-2">Fit</label>
                  <select
                    value={selectedGender}
                    onChange={(e) => setSelectedGender(e.target.value as any)}
                    className="w-full p-2 text-xs border border-stone-300 rounded-lg"
                  >
                    <option value="all">All Fits</option>
                    <option value="mens">Men's Standard Tradie</option>
                    <option value="womens">Women's Tailored</option>
                    <option value="unisex">Unisex Site Cut</option>
                  </select>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-200 flex gap-2">
                <button
                  onClick={resetFilters}
                  className="flex-1 py-2.5 bg-stone-100 text-stone-800 text-xs font-bold rounded-lg"
                >
                  Reset
                </button>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="flex-1 py-2.5 bg-stone-950 text-white text-xs font-bold rounded-lg"
                >
                  Show Results
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
