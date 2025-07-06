"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Trash2 } from "lucide-react";

const CartView = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

  if (cartCount === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-headline">Your cart is empty</h2>
        <p className="text-muted-foreground mt-2 mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild>
          <Link href="/products">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
      <div className="lg:col-span-2 space-y-4">
        {cartItems.map(item => (
          <Card key={item.id} className="flex items-center p-4">
            <div className="relative h-24 w-24 rounded-md overflow-hidden">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="font-semibold font-headline">{item.name}</h3>
              <p className="text-sm text-muted-foreground">Rs{item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-4">
              <Input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="w-16 h-10 text-center"
              />
              <p className="w-20 text-right font-semibold">Rs{(item.price * item.quantity).toFixed(2)}</p>
              <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                <Trash2 className="h-5 w-5 text-muted-foreground" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
      <div className="lg:col-span-1 sticky top-24">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-headline">Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>Rs{cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>Rs{cartTotal.toFixed(2)}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild size="lg" className="w-full">
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CartView;
