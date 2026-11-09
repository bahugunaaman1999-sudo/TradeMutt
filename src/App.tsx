/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { SearchModal } from './components/SearchModal';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { TradieHubPage } from './pages/TradieHubPage';
import { ImpactPage } from './pages/ImpactPage';
import { ProductHelpPage } from './pages/ProductHelpPage';
import { BusinessPage } from './pages/BusinessPage';
import { ContactPage } from './pages/ContactPage';
import { PRODUCTS } from './data/products';
import { CartItem, Product } from './types';
import { Phone, HeartHandshake } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('trademutt_cart');
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    // Seed initial cart with 1 best-seller for realistic demo
    return [
      {
        product: PRODUCTS[0],
        selectedSize: 'L',
        quantity: 1,
      },
    ];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('trademutt_cart', JSON.stringify(cart));
    } catch {
      // Ignore
    }
  }, [cart]);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product: Product, size: string, quantity: number) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === size
      );
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += quantity;
        return copy;
      }
      return [...prev, { product, selectedSize: size, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, size: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.selectedSize === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string, size: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.selectedSize === size))
    );
  };

  const handleOrderSuccess = () => {
    setCart([]);
  };

  const handleOpenSizeGuide = () => {
    setDetailProduct(null);
    setActiveTab('help');
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 font-sans">
      {/* Main Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            products={PRODUCTS}
            onSelectProduct={(p) => setDetailProduct(p)}
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onAddToCart={handleAddToCart}
          />
        )}

        {activeTab === 'shop' && (
          <ShopPage
            products={PRODUCTS}
            onSelectProduct={(p) => setDetailProduct(p)}
            onAddToCart={handleAddToCart}
          />
        )}

        {activeTab === 'hub' && (
          <TradieHubPage
            onNavigateToShop={() => {
              setActiveTab('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenSizeGuide={handleOpenSizeGuide}
          />
        )}

        {activeTab === 'impact' && (
          <ImpactPage
            onNavigateToShop={() => {
              setActiveTab('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'help' && <ProductHelpPage />}

        {activeTab === 'business' && <BusinessPage />}

        {activeTab === 'contact' && <ContactPage />}
      </main>

      {/* Persistent Floating TIACS Call Button (Mobile quick tap) */}
      <div className="fixed bottom-4 right-4 z-30 lg:hidden">
        <a
          href="tel:0488846988"
          className="flex items-center gap-2 px-3.5 py-2.5 bg-amber-400 text-stone-950 font-bold text-xs rounded-full shadow-xl border border-amber-500 hover:scale-105 active:scale-95 transition-all"
          aria-label="Call TIACS helpline"
        >
          <Phone className="w-4 h-4 fill-stone-950" />
          <span>TIACS 0488 846 988</span>
        </a>
      </div>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={detailProduct}
        onClose={() => setDetailProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenSizeGuide={handleOpenSizeGuide}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => setDetailProduct(p)}
      />
    </div>
  );
}
