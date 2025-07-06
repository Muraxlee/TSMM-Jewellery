import CartView from "@/components/cart/CartView";

export default function CartPage() {
    return (
        <div className="container py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">Shopping Cart</h1>
            </div>
            <CartView />
        </div>
    );
}
