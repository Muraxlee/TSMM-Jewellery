"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0]
    });
  }

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <Card className="overflow-hidden transition-all duration-300 group-hover:shadow-xl">
        <CardContent className="p-0">
          <div className="relative aspect-square">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint="jewelry"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button size="icon" variant="secondary" onClick={handleAddToCart} className="rounded-full h-12 w-12 shadow-lg">
                    <Plus className="h-6 w-6"/>
                </Button>
            </div>
          </div>
          <div className="p-4 text-center">
            <h3 className="font-headline text-lg font-semibold truncate">{product.name}</h3>
            <p className="text-muted-foreground font-body mt-1">Rs{product.price.toFixed(2)}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
