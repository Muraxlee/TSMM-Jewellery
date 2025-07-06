"use client";

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';

const CartIcon = () => {
  const { cartCount } = useCart();

  return (
    <Button asChild variant="ghost" size="icon" aria-label="Open cart" className="relative">
      <Link href="/cart">
        <ShoppingCart className="h-5 w-5" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
            {cartCount}
          </span>
        )}
      </Link>
    </Button>
  );
};

export default CartIcon;
