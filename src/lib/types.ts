export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  category: string;
  material: string;
  rating: number;
  reviewCount: number;
  isFeatured?: boolean;
};

export type Category = {
  id: string;
  name: string;
  image: string;
};

export type Testimonial = {
  id: string;
  name: string;
  quote: string;
  avatar: string;
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

export type User = {
  name: string;
  email: string;
};
