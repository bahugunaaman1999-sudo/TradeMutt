export type ProductCategory = 
  | 'all' 
  | 'work-shirts' 
  | 'hi-vis' 
  | 'polos' 
  | 'scrubs' 
  | 'womens' 
  | 'accessories';

export type HiVisStandard = 'none' | 'day' | 'day-night';

export type FitType = 'mens' | 'womens' | 'unisex';

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  compareAtPrice?: number;
  category: ProductCategory;
  hiVisType: HiVisStandard;
  gender: FitType;
  rating: number;
  reviewCount: number;
  badge?: string;
  patternName: string;
  description: string;
  features: string[];
  specs: {
    fabric: string;
    weight: string;
    sunProtection: string;
    compliance?: string;
    pockets: string;
  };
  sizes: string[];
  inStock: boolean;
  conversationStarterFact: string;
  counsellingMinutesFunded: number;
  image: string;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  quantity: number;
}

export interface FilterState {
  category: ProductCategory;
  hiVisType: HiVisStandard | 'all';
  gender: FitType | 'all';
  size: string | 'all';
  maxPrice: number;
  searchQuery: string;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating';
}

export interface CheckoutForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  address: string;
  suburb: string;
  state: string;
  postcode: string;
  shippingMethod: 'standard' | 'express';
  paymentMethod: 'card' | 'afterpay' | 'paypal';
  notes?: string;
}

export interface BusinessQuoteForm {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  quantity: number;
  productType: string;
  customEmbroidery: boolean;
  notes: string;
}
