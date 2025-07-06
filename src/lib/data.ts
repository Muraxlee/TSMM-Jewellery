import type { Product, Category, Testimonial } from './types';

export const categories: Category[] = [
  { id: 'rings', name: 'Rings', image: 'https://lh3.googleusercontent.com/p/AF1QipNRDQR_JU8jWIrfDFY3uYsTyxuuhLEQtFIse8Qm=s680-w680-h510-rw' },
  { id: 'necklaces', name: 'Necklaces', image: 'https://lh3.googleusercontent.com/p/AF1QipMAUa5Wyphzr7oRVouc2LO_cM9Ux772X6Oin9Ya=s680-w680-h510-rw' },
  { id: 'earrings', name: 'Earrings', image: 'https://lh3.googleusercontent.com/p/AF1QipM2Ur8PoqVUYFtw44Ze3VUVfLegoKPERJlkFz4v=s680-w680-h510-rw' },
  { id: 'bracelets', name: 'Bracelets', image: 'https://lh3.googleusercontent.com/p/AF1QipMWgra0ufxD4EFlyd3uZQD2NK-yLUnhOPa0pVhW=s680-w680-h510-rw' },
];

export const products: Product[] = [
  {
    id: '1',
    slug: 'solitaire-bliss-diamond-ring',
    name: 'Solitaire Bliss Diamond Ring',
    description: 'An exquisitely crafted solitaire diamond ring, representing a timeless bond of love and commitment. Perfect for engagements and special occasions.',
    images: ['https://lh3.googleusercontent.com/p/AF1QipNRDQR_JU8jWIrfDFY3uYsTyxuuhLEQtFIse8Qm=s680-w680-h510-rw'],
    price: 1250.00,
    category: 'rings',
    material: 'gold',
    rating: 4.9,
    reviewCount: 150,
    isFeatured: true,
  },
  {
    id: '2',
    slug: 'emerald-cut-eternity-band',
    name: 'Emerald-Cut Eternity Band',
    description: 'A stunning eternity band featuring brilliant emerald-cut diamonds set in a continuous circle. Symbolizes endless love and sophistication.',
    images: ['https://lh3.googleusercontent.com/p/AF1QipMAUa5Wyphzr7oRVouc2LO_cM9Ux772X6Oin9Ya=s680-w680-h510-rw'],
    price: 2400.00,
    category: 'rings',
    material: 'platinum',
    rating: 5.0,
    reviewCount: 85,
  },
  {
    id: '3',
    slug: 'celestial-pendant-necklace',
    name: 'Celestial Pendant Necklace',
    description: 'A delicate gold necklace with a celestial-inspired pendant, adorned with miniature diamonds. A piece of the starry night to wear.',
    images: ['https://lh3.googleusercontent.com/p/AF1QipM2Ur8PoqVUYFtw44Ze3VUVfLegoKPERJlkFz4v=s680-w680-h510-rw'],
    price: 890.00,
    category: 'necklaces',
    material: 'gold',
    rating: 4.8,
    reviewCount: 210,
    isFeatured: true,
  },
  {
    id: '4',
    slug: 'sapphire-drop-earrings',
    name: 'Sapphire Drop Earrings',
    description: 'Elegant drop earrings featuring deep blue sapphires surrounded by a halo of sparkling diamonds. Perfect for adding a touch of glamour.',
    images: ['https://lh3.googleusercontent.com/p/AF1QipMWgra0ufxD4EFlyd3uZQD2NK-yLUnhOPa0pVhW=s680-w680-h510-rw'],
    price: 1800.00,
    category: 'earrings',
    material: 'white-gold',
    rating: 4.9,
    reviewCount: 120,
    isFeatured: true,
  },
  {
    id: '5',
    slug: 'classic-tennis-bracelet',
    name: 'Classic Tennis Bracelet',
    description: 'A timeless tennis bracelet featuring a single row of round-cut diamonds. A staple piece for any jewelry collection, exuding elegance and grace.',
    images: ['https://lh3.googleusercontent.com/p/AF1QipPUlY37hFnvkipYAQuRA7MMGHwPqJPL-2z9VXGp=s680-w680-h510-rw'],
    price: 3500.00,
    category: 'bracelets',
    material: 'platinum',
    rating: 4.9,
    reviewCount: 95,
  },
  {
    id: '6',
    slug: 'pearl-strand-necklace',
    name: 'Pearl Strand Necklace',
    description: 'A classic single strand of lustrous Akoya pearls, hand-knotted on a silk thread. The epitome of classic style and grace.',
    images: ['https://lh3.googleusercontent.com/p/AF1QipNwINo1guCCgk4RWH64X054TqUpevCvqcDYSbuA=s680-w680-h510-rw'],
    price: 950.00,
    category: 'necklaces',
    material: 'pearl',
    rating: 4.8,
    reviewCount: 180,
  },
  {
    id: '7',
    slug: 'diamond-stud-earrings',
    name: 'Diamond Stud Earrings',
    description: 'Brilliant round-cut diamond stud earrings, a must-have for every woman. Versatile and timeless, they add a sparkle to any outfit.',
    images: ['https://images.jdmagicbox.com/quickquotes/images_main/peora-bubble-solitaire-ring-silver-164722570-44gza.jpg'],
    price: 750.00,
    category: 'earrings',
    material: 'gold',
    rating: 5.0,
    reviewCount: 300,
    isFeatured: true,
  },
  {
    id: '8',
    slug: 'rose-gold-bangle',
    name: 'Rose Gold Bangle',
    description: 'A sleek and modern bangle crafted from 18k rose gold. Can be worn alone for a minimalist look or stacked with other bracelets.',
    images: ['https://images.jdmagicbox.com/quickquotes/images_main/peora-the-keira-crossover-solitaire-ring-silver-164722764-3b5xd.jpg'],
    price: 600.00,
    category: 'bracelets',
    material: 'gold',
    rating: 4.7,
    reviewCount: 110,
  },
];

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Sathi',
        quote: 'Beautiful collection of silver jewellery and unique rings and chains.',
        avatar: 'https://placehold.co/100x100'
    },
    {
        id: '2',
        name: 'Sharmila Devi',
        quote: 'Designs very nice, best quality, very well, best experience.',
        avatar: 'https://placehold.co/100x100'
    },
    {
        id: '3',
        name: 'AISHWARYA',
        quote: 'Excellent collection and quality of silver is very good.',
        avatar: 'https://placehold.co/100x100'
    },
    {
        id: '4',
        name: 'User',
        quote: 'Nice collection and Excellent Supervisor.',
        avatar: 'https://placehold.co/100x100'
    },
    {
        id: '5',
        name: 'Sajitha',
        quote: "It's very nice. The design was very unique and lovable quality.",
        avatar: 'https://placehold.co/100x100'
    },
    {
        id: '6',
        name: 'Raghavan',
        quote: 'Correct price and good customer service.',
        avatar: 'https://placehold.co/100x100'
    },
    {
        id: '7',
        name: 'Vinod',
        quote: 'Exclusive showroom for silver from Head to Toe. Purity silver and elegant designs are their trademark. Customer-friendly staff and professional management.',
        avatar: 'https://placehold.co/100x100'
    },
    {
        id: '8',
        name: 'Vijaya Sridhar',
        quote: 'Huge range of silver items. Their jewellery section is the best. New trendy jewelry. All the best TSMM team.',
        avatar: 'https://placehold.co/100x100'
    },
    {
        id: '9',
        name: 'Jamela',
        quote: 'Collections are really beautiful and trendy. Quality of silver is extremely good and staff very friendly. Shopping at TSMM is a pleasant experience.',
        avatar: 'https://placehold.co/100x100'
    },
    {
        id: '10',
        name: 'RAJKUMAR MOHAN',
        quote: 'Customer service was remarkable. Wide range of traditional collections available. Highly recommend.',
        avatar: 'https://placehold.co/100x100'
    }
];
