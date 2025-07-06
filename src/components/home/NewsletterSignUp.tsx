"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const NewsletterSignUp = () => {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Subscribed!",
            description: "Thank you for subscribing to our newsletter.",
        });
        const form = e.target as HTMLFormElement;
        form.reset();
    };

    return (
        <section className="container">
            <div className="bg-card border rounded-lg p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold font-headline">Join Our World</h2>
                <p className="text-muted-foreground mt-2 mb-6 max-w-2xl mx-auto">
                    Sign up for our newsletter to receive exclusive offers, early access to new collections, and style inspiration.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <Input type="email" placeholder="Enter your email" required className="text-base" />
                    <Button type="submit" size="lg" className="flex-shrink-0">Subscribe</Button>
                </form>
            </div>
        </section>
    );
}

export default NewsletterSignUp;
