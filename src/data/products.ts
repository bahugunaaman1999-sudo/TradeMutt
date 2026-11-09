import heroTradiesImg from '../assets/images/trademutt_hero_tradies_1794212874795.jpg';
import sundownerImg from '../assets/images/workshirt_sundowner_pattern_1794212875957.jpg';
import hiVisSafetyImg from '../assets/images/workshirt_hivis_safety_1794212876981.jpg';
import womensTailoredImg from '../assets/images/workshirt_womens_tailored_1794212877553.jpg';
import { Product } from '../types';

export { heroTradiesImg, sundownerImg, hiVisSafetyImg, womensTailoredImg };

export const PRODUCTS: Product[] = [
  {
    id: 'tm-001',
    name: 'The Sundowner Full-Button Work Shirt',
    slug: 'the-sundowner-full-button',
    price: 89.95,
    compareAtPrice: 99.95,
    category: 'work-shirts',
    hiVisType: 'none',
    gender: 'mens',
    rating: 4.9,
    reviewCount: 348,
    badge: 'Best Seller',
    patternName: 'Sundowner Native Flora',
    description: 'The shirt that started a nationwide jobsite movement. Designed with vibrant Australian botanical artwork, contrast navy collar and double buttoned chest pockets. Engineered from 100% breathable pre-shrunk cotton drill with underarm air vents so you stay cool on the hottest Aussie building sites.',
    features: [
      '100% pre-shrunk cotton drill (155 GSM)',
      'Underarm air eyelets for tropical ventilation',
      'Dual reinforced button-down chest pockets with pen slot',
      'Triple-needle stitching along stress seams',
      'YNWA (You’ll Never Walk Alone) monogram on cuff',
      'Right breast QR code linking to TIACS counselling'
    ],
    specs: {
      fabric: '100% Lightweight Cotton Drill',
      weight: '155 GSM Summer Weight',
      sunProtection: 'UPF 50+ Excellent Protection',
      pockets: 'Twin chest pockets with button flaps'
    },
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'],
    inStock: true,
    conversationStarterFact: 'Over 85% of tradies wearing this shirt report having at least one genuine mental health conversation with a co-worker within the first week.',
    counsellingMinutesFunded: 20,
    image: sundownerImg
  },
  {
    id: 'tm-002',
    name: 'The Outbacker Hi-Vis Day/Night Safety Shirt',
    slug: 'the-outbacker-hi-vis-safety-shirt',
    price: 94.95,
    category: 'hi-vis',
    hiVisType: 'day-night',
    gender: 'unisex',
    rating: 4.95,
    reviewCount: 412,
    badge: 'Site Certified',
    patternName: 'Outback Dreamtime & Fluoro Yellow',
    description: 'Fully compliant with Australian/New Zealand safety standard AS/NZS 4602.1:2011 Class D/N for high-risk day and night civil and commercial job sites. Fluorescent yellow upper with heavy-duty hoop reflective tape, fused with an energetic conversation-starting pattern across the torso.',
    features: [
      'AS/NZS 4602.1:2011 Class D/N Day & Night Certified',
      'AS/NZS 1906.4:2010 High-Visibility Material Approved',
      '50mm retro-reflective tape around body and sleeves',
      '190 GSM heavy-duty cotton drill withstands site wear',
      'Gusseted cuffs for easy roll-up during heavy manual labour',
      'Funds 22 minutes of free TIACS counselling per shirt'
    ],
    specs: {
      fabric: '100% Heavy-Duty Cotton Drill',
      weight: '190 GSM Tradie Grade',
      sunProtection: 'UPF 50+ Sun Barrier',
      compliance: 'AS/NZS 4602.1:2011 Class D/N',
      pockets: 'Dual flap pockets with flap pencil partitions'
    },
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'],
    inStock: true,
    conversationStarterFact: 'Civil infrastructure and mining sites across Queensland and NSW endorse this shirt for Funky Fridays to break down workplace stigma.',
    counsellingMinutesFunded: 22,
    image: hiVisSafetyImg
  },
  {
    id: 'tm-003',
    name: 'Gum Blossom Women’s Tailored Work Shirt',
    slug: 'gum-blossom-womens-tailored-shirt',
    price: 89.95,
    category: 'womens',
    hiVisType: 'none',
    gender: 'womens',
    rating: 5.0,
    reviewCount: 219,
    badge: 'Tailored Cut',
    patternName: 'Deep Teal Native Gum Blossom',
    description: 'Specifically engineered for female tradies, sparkies, chippies, and apprentices. Tailored darts prevent boxy bunching under toolbelts while maintaining complete shoulder mobility. Made from ultra-soft 150 GSM cotton drill with buttoned sleeve tabs for easy secure roll-up.',
    features: [
      'Contoured feminine silhouette tailored by female tradeswomen',
      'Extended curved hem stays tucked inside work pants',
      'Underarm ventilation eyelets for humid workdays',
      'Hidden sunglasses loop on front placket',
      'Reinforced elbow patches for increased durability',
      'Funds 20 minutes of free mental health care'
    ],
    specs: {
      fabric: '100% Breathable Peached Cotton Drill',
      weight: '150 GSM Feather-Durable',
      sunProtection: 'UPF 50+ Australian Standard',
      pockets: 'Twin chest utility pockets with secure button closure'
    },
    sizes: ['6 (XS)', '8 (S)', '10 (M)', '12 (L)', '14 (XL)', '16 (2XL)', '18 (3XL)'],
    inStock: true,
    conversationStarterFact: 'Designed in consultation with the National Association of Women in Construction (NAWIC) to provide fit, comfort and safety without compromise.',
    counsellingMinutesFunded: 20,
    image: womensTailoredImg
  },
  {
    id: 'tm-004',
    name: 'Billabong Ripple Half-Button Work Shirt',
    slug: 'billabong-ripple-half-button',
    price: 84.95,
    category: 'work-shirts',
    hiVisType: 'none',
    gender: 'mens',
    rating: 4.85,
    reviewCount: 184,
    patternName: 'Billabong Aquatic Waves',
    description: 'The traditional Australian half-button popover design trusted by rural and industrial tradies. With no lower buttons to catch on lumber or machinery, this pullover work shirt combines maximum ruggedness with energetic blue and turquoise swirls.',
    features: [
      'Classic half-button pullover style prevents snagging',
      'Wide cut armholes engineered for maximum tool swing',
      'Pre-shrunk cotton drill holds colour through 200+ site washes',
      'Double layered back yoke for sun and friction protection',
      'Iconic "This Is A Conversation Starter" pocket tag'
    ],
    specs: {
      fabric: '100% Cotton Drill',
      weight: '160 GSM Tough All-Rounder',
      sunProtection: 'UPF 50+',
      pockets: 'Double oversized chest pockets'
    },
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    inStock: true,
    conversationStarterFact: 'Popular among plumbers and roofers where prone working postures make full buttons prone to snapping.',
    counsellingMinutesFunded: 18,
    image: sundownerImg
  },
  {
    id: 'tm-005',
    name: 'Night Shift Sparky Class D/N Hi-Vis Shirt',
    slug: 'night-shift-sparky-hi-vis',
    price: 94.95,
    category: 'hi-vis',
    hiVisType: 'day-night',
    gender: 'unisex',
    rating: 4.9,
    reviewCount: 167,
    badge: 'Mining Spec',
    patternName: 'Electric Neon & Fluoro Orange',
    description: 'Built for sparkies, tunnel workers, and road crews. Features high-vis Day/Night fluorescent safety orange upper block with double hoop reflective tape, seamlessly transitioning to deep navy electric circuitry patterns.',
    features: [
      'AS/NZS 4602.1:2011 Class D/N Compliant',
      'High-performance 3M Scotchlite reflective tape',
      'Anti-static cotton drill formulation suitable for electrical work',
      'Vented underarms and vertical back cape vent',
      'Funds 22 minutes of confidential TIACS counselling'
    ],
    specs: {
      fabric: '100% Cotton Drill Anti-Static Treated',
      weight: '190 GSM Mining Spec',
      sunProtection: 'UPF 50+ Sun Tested',
      compliance: 'AS/NZS 4602.1:2011 Class D/N',
      pockets: 'Two button flap pockets with gas monitor clip loops'
    },
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'],
    inStock: true,
    conversationStarterFact: 'Over 40 Tier-1 electrical contractors standardise on TradeMutt for night shut-downs to foster mental wellbeing.',
    counsellingMinutesFunded: 22,
    image: hiVisSafetyImg
  },
  {
    id: 'tm-006',
    name: 'Wattle Bloom Heavy-Duty Tradie Polo',
    slug: 'wattle-bloom-tradie-polo',
    price: 64.95,
    category: 'polos',
    hiVisType: 'none',
    gender: 'unisex',
    rating: 4.8,
    reviewCount: 142,
    badge: 'Breathable Piqué',
    patternName: 'Golden Wattle & Charcoal Geometric',
    description: 'When you need to look smart for client quotes, site meetings, or running estimating jobs. Breathable poly-cotton piqué knit that wicks sweat instantly with vibrant Australian golden wattle side panels and ribbed anti-curl collar.',
    features: [
      'Moisture-wicking breathable cotton/poly blend',
      'Anti-curl knitted collar with 3-button placket',
      'Reinforced side split hems for unrestricted movement',
      'Stain-resistant fabric wash treatment',
      'Subtle chest embroidery pocket'
    ],
    specs: {
      fabric: '65% Cotton, 35% Quick-Dry Polyester Piqué',
      weight: '210 GSM Heavy Polo Knit',
      sunProtection: 'UPF 40+ Good Sun Shield',
      pockets: 'Single left chest pocket'
    },
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    inStock: true,
    conversationStarterFact: 'The ideal corporate shirt for project managers and estimators meeting homeowners and developers.',
    counsellingMinutesFunded: 15,
    image: sundownerImg
  },
  {
    id: 'tm-007',
    name: 'Healthcare & Vet Tradie Vented Scrubs Top',
    slug: 'healthcare-vet-vented-scrubs',
    price: 69.95,
    category: 'scrubs',
    hiVisType: 'none',
    gender: 'unisex',
    rating: 4.95,
    reviewCount: 96,
    badge: 'Clinical Grade',
    patternName: 'Flora & Fauna Botanical Harmony',
    description: 'Healthcare workers, vet nurses, and physios are tradespeople of the human body. These antimicrobial, 4-way stretch scrubs bring joy to hospital wards and clinic consultation rooms while supporting mental health.',
    features: [
      'Antimicrobial and bleach-resistant stretch fabric',
      '4-way stretch weave (72% Poly, 21% Rayon, 7% Spandex)',
      'Triple utility pockets including dedicated stethoscope loop',
      'Wrinkle-free quick wash wash-and-wear care',
      'Side slit vents for unhindered mobility'
    ],
    specs: {
      fabric: 'Poly-Rayon Spandex Clinical Weave',
      weight: '175 GSM Fluid Repellent',
      sunProtection: 'UPF 35+',
      pockets: 'Double front patch pockets + hidden zip pocket'
    },
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    inStock: true,
    conversationStarterFact: 'Brings genuine smiles and relieves patient anxiety in emergency departments and veterinary clinics.',
    counsellingMinutesFunded: 16,
    image: womensTailoredImg
  },
  {
    id: 'tm-008',
    name: 'Bush Tucker Cushioned Bamboo Tradie Socks (3-Pack)',
    slug: 'bush-tucker-bamboo-socks-3-pack',
    price: 34.95,
    category: 'accessories',
    hiVisType: 'none',
    gender: 'unisex',
    rating: 4.9,
    reviewCount: 520,
    badge: 'Pack of 3',
    patternName: 'Colourful Kangaroo & Gum Nut Knits',
    description: 'Say goodbye to smelly steel-cap work boots. Made from naturally antibacterial, thermo-regulating organic bamboo fiber with reinforced heel and toe cushioning. Features the YNWA motto stitched across the toes.',
    features: [
      'Naturally antibacterial and odour-resistant organic bamboo',
      'Dense Terry loop footbed cushioning absorbs job site shock',
      'Stay-up ribbed calf band prevents sagging into work boots',
      'Flat-lock toe seam prevents friction blisters',
      '3 distinct colourful TradeMutt designs in each pack'
    ],
    specs: {
      fabric: '80% Bamboo, 15% Nylon, 5% Elastane',
      weight: 'Heavy Terry Cushion',
      sunProtection: 'N/A',
      pockets: 'None'
    },
    sizes: ['Standard (US 6-10 / AU 6-10)', 'King (US 11-14 / AU 11-14)'],
    inStock: true,
    conversationStarterFact: 'One of the easiest ways for quiet apprentices to spark a conversation during smoko breaks.',
    counsellingMinutesFunded: 8,
    image: sundownerImg
  },
  {
    id: 'tm-009',
    name: 'Aussie Sun Reversible Tradie Bucket Hat',
    slug: 'aussie-sun-reversible-bucket-hat',
    price: 39.95,
    category: 'accessories',
    hiVisType: 'none',
    gender: 'unisex',
    rating: 4.8,
    reviewCount: 288,
    patternName: 'Reversible: Vibrant Outback / Solid Navy',
    description: 'Beat the scorching Australian sun with broad brim UPF 50+ protection. Reversible design lets you sport the loud TradeMutt party print on the outside or flip to classic navy with colourful brim trim for conservative site inductions.',
    features: [
      'Broad 7.5cm sun brim complies with Cancer Council guidelines',
      '100% heavy cotton canvas construction',
      'Adjustable paracord chin strap with safety breakaway toggle',
      'Metal breathable side eyelets',
      'Fully machine washable'
    ],
    specs: {
      fabric: '100% Heavy Cotton Twill Canvas',
      weight: '240 GSM Sun-Proof Canvas',
      sunProtection: 'UPF 50+ Maximum Australian Protection',
      pockets: 'Internal stash pocket'
    },
    sizes: ['S/M (57cm)', 'L/XL (60cm)', '2XL (62cm)'],
    inStock: true,
    conversationStarterFact: 'Approved by Australian workplace sun safety officers for outdoor trade teams and road workers.',
    counsellingMinutesFunded: 10,
    image: womensTailoredImg
  },
  {
    id: 'tm-010',
    name: 'YNWA Heavy-Duty Neoprene Stubby Cooler & Tool Tag',
    slug: 'ynwa-stubby-cooler-tool-tag',
    price: 18.95,
    category: 'accessories',
    hiVisType: 'none',
    gender: 'unisex',
    rating: 4.95,
    reviewCount: 430,
    patternName: 'Signature YNWA Bold Print',
    description: 'Keep your drink ice-cold after knock-off and keep mental health top-of-mind. Made from 5mm thick commercial neoprene with reinforced stitched base, packaged with a heavy-duty carabiner tool tag for your tool bag or ute keys.',
    features: [
      '5mm thick insulating waterproof neoprene',
      'Non-slip stitched rubber base prevents spills on the tailgate',
      'Includes brass carabiner and laser-engraved TIACS helpline tag',
      'Fits standard 375ml cans, stubbies, and water bottles',
      '100% of profits from this accessory fund TIACS'
    ],
    specs: {
      fabric: '5mm Insulating High-Density Neoprene',
      weight: 'Heavy Duty',
      sunProtection: 'N/A',
      pockets: 'None'
    },
    sizes: ['One Size Fits All Cans & Stubbies'],
    inStock: true,
    conversationStarterFact: 'A staple knock-off companion across Australian worksites from Pilbara to the Gold Coast.',
    counsellingMinutesFunded: 5,
    image: hiVisSafetyImg
  },
  {
    id: 'tm-011',
    name: 'Dusty Red Women’s Class D Day Hi-Vis Shirt',
    slug: 'dusty-red-womens-hivis-shirt',
    price: 89.95,
    category: 'womens',
    hiVisType: 'day',
    gender: 'womens',
    rating: 4.88,
    reviewCount: 140,
    patternName: 'Red Earth & Fluoro Yellow Day Compliance',
    description: 'A dedicated women’s fit Day-Only certified hi-vis work shirt. Features fluorescent safety yellow upper body with rich red earth Australian ochre artwork on the lower body, tailored with extra bust room and back pleating for freedom of movement.',
    features: [
      'AS/NZS 4602.1:2011 Class D (Day-Only High Visibility)',
      '155 GSM breathable lightweight cotton drill',
      'Contoured waistline avoiding the typical baggy box cut',
      'Twin button chest pockets with interior pencil slots',
      'Underarm air eyelets for tropical humidity'
    ],
    specs: {
      fabric: '100% Lightweight Cotton Drill',
      weight: '155 GSM Summer Weight',
      sunProtection: 'UPF 50+ Sun Tested',
      compliance: 'AS/NZS 4602.1:2011 Class D',
      pockets: 'Two button flap pockets'
    },
    sizes: ['6 (XS)', '8 (S)', '10 (M)', '12 (L)', '14 (XL)', '16 (2XL)'],
    inStock: true,
    conversationStarterFact: 'Female apprentices frequently praise this design for finally delivering workwear that feels made for them.',
    counsellingMinutesFunded: 20,
    image: womensTailoredImg
  },
  {
    id: 'tm-012',
    name: 'The Tropical Monsoon Apprentice Starter Work Shirt',
    slug: 'tropical-monsoon-apprentice-starter',
    price: 79.95,
    compareAtPrice: 89.95,
    category: 'work-shirts',
    hiVisType: 'none',
    gender: 'unisex',
    rating: 4.9,
    reviewCount: 260,
    badge: 'Apprentice Special',
    patternName: 'Tropical Monsoon Palm & Rain Pattern',
    description: 'Subsidised pricing for 1st to 4th year Australian apprentices taking their first steps in the building and construction industry. Built with heavy-duty triple stitching to endure apprenticeships, carrying the message that you are never alone on the tools.',
    features: [
      'Subsidised apprentice pricing to help young tradies start right',
      'Ultra-durable 165 GSM pre-shrunk cotton drill',
      'Deep front pockets fit phones and job ticket notebooks',
      'Underarm breathable mesh inserts',
      'TIACS QR code patch on arm for quick access to support'
    ],
    specs: {
      fabric: '100% Tough Cotton Drill',
      weight: '165 GSM Workhorse',
      sunProtection: 'UPF 50+',
      pockets: 'Dual deep chest utility pockets'
    },
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL'],
    inStock: true,
    conversationStarterFact: 'Over 12,000 Australian apprentices have worn TradeMutt on their very first day on site.',
    counsellingMinutesFunded: 18,
    image: sundownerImg
  }
];

export const IMPACT_METRICS = {
  totalDonated: '$1,874,500',
  counsellingHours: '28,450',
  tradiesSupported: '24,200',
  profitSharePercentage: 50,
  averageWaitTime: '< 30 seconds'
};
