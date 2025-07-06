"use client";

import Image from "next/image";
import { useCart } from "@/hooks/use-cart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const OrderSummary = () => {
    const { cartItems, cartTotal } = useCart();

    return (
        <Card className="sticky top-24">
            <CardHeader>
                <CardTitle className="text-2xl font-headline">Your Order</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {cartItems.map(item => (
                        <div key={item.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="relative h-16 w-16 rounded-md overflow-hidden border">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">{item.quantity}</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold">{item.name}</h4>
                                    <p className="text-sm text-muted-foreground">Price: Rs{item.price.toFixed(2)}</p>
                                </div>
                            </div>
                            <p className="font-semibold">Rs{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                </div>
                <Separator className="my-6" />
                <div className="space-y-2">
                    <div className="flex justify-between text-muted-foreground">
                        <span>Subtotal</span>
                        <span>Rs{cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-bold text-xl">
                        <span>Total</span>
                        <span>Rs{cartTotal.toFixed(2)}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default OrderSummary;
