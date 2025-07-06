"use client";

import type { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Star, Share2, Heart, Twitter, Facebook, Instagram } from "lucide-react";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0]
    });
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold font-headline">{product.name}</h1>
      <div className="flex items-center gap-4">
        <p className="text-3xl text-primary font-bold font-body">Rs{product.price.toFixed(2)}</p>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < Math.round(product.rating) ? 'text-primary fill-primary' : 'text-muted-foreground'}`} />
          ))}
          <span className="text-muted-foreground ml-2">({product.reviewCount} reviews)</span>
        </div>
      </div>
      <p className="text-muted-foreground font-body text-lg">{product.description}</p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" onClick={handleAddToCart} className="flex-1">Add to Cart</Button>
        <Button size="lg" variant="outline" className="flex-1">Buy Now</Button>
      </div>
      
      <div className="flex items-center gap-4 pt-4 border-t">
        <Button variant="ghost" size="icon">
          <Heart className="h-5 w-5" />
          <span className="sr-only">Add to Wishlist</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Share2 className="h-5 w-5" />
          <span className="sr-only">Share</span>
        </Button>
        <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
                <a href="#"><Twitter className="h-5 w-5 text-muted-foreground" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href="#"><Facebook className="h-5 w-5 text-muted-foreground" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href="#"><Instagram className="h-5 w-5 text-muted-foreground" /></a>
            </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
